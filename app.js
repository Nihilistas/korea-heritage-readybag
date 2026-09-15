(function () {
  const { DATA, STAMPS, SITE_TOUR, DAY_PACE, PLUS_BOOTHS, NOV2026, LUNCH_MIN } =
    window.PLAN;
  const groups = DATA.groups;

  function krw(n) {
    return `₩${n.toLocaleString("en-US")}`;
  }

  function mins(n) {
    const h = Math.floor(n / 60);
    const m = n % 60;
    if (h === 0) return `${m} min`;
    return m === 0 ? `${h}h` : `${h}h ${m}m`;
  }

  function hhmm(minFromMidnight) {
    const n = ((minFromMidnight % (24 * 60)) + 24 * 60) % (24 * 60);
    const h = Math.floor(n / 60);
    const m = n % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  function isWalkLeg(raw) {
    return (
      /^Walk /i.test(raw) ||
      raw.startsWith("WALKING") ||
      raw.includes("도보로 이동") ||
      (raw.includes("WALKING") && raw.includes("환승"))
    );
  }

  function vehicleLabel(raw) {
    const left = raw.includes(" · ") ? raw.split(" · ")[0] : raw;
    const cut = left.search(/\s*\([^)]*>/);
    return (cut >= 0 ? left.slice(0, cut) : left).trim();
  }

  function extractStops(raw) {
    let best = "";
    for (let i = 0; i < raw.length; i++) {
      if (raw[i] !== "(") continue;
      let depth = 0;
      for (let j = i; j < raw.length; j++) {
        if (raw[j] === "(") depth += 1;
        else if (raw[j] === ")") {
          depth -= 1;
          if (depth === 0) {
            const inner = raw.slice(i + 1, j);
            if (inner.includes(" > ")) best = inner;
            i = j;
            break;
          }
        }
      }
    }
    return best;
  }

  function prettyVehicle(label) {
    const first = label.split(",")[0].trim();
    const when = /평일/.test(label)
      ? " (weekday)"
      : /휴일|주말/.test(label)
        ? " (weekend)"
        : "";
    if (/김포골드/.test(first)) return `Gimpo Goldline${when}`;
    if (/공항철도/.test(first)) return `AREX (공항철도)${when}`;
    if (/고속버스/.test(first)) return `Express coach (고속버스)${when}`;
    if (/시외버스/.test(first)) return `Intercity bus (시외)${when}`;
    if (/^KTX$/.test(first)) return `KTX${when}`;
    if (/호선|경의중앙|수인|수도권/.test(first)) {
      return (
        first
          .replace(/^수도권\s+/, "")
          .replace(/\s+(일반|급행)$/g, "")
          .trim() + when
      );
    }
    const num = first
      .replace(/\s*(간선|지선|일반|마을|직행|광역|시외|농어촌|좌석)$/g, "")
      .replace(/\(평일\)|\(휴일\)|\(주말\)/g, "")
      .trim();
    const kind = /시외/.test(first)
      ? `Intercity bus ${num}`
      : /광역/.test(first)
        ? `Wide-area bus ${num}`
        : /농어촌/.test(first)
          ? `Rural bus ${num}`
          : /마을/.test(first)
            ? `Village bus ${num}`
            : /직행/.test(first)
              ? `Express bus ${num}`
              : `Bus ${num}`;
    return kind + when;
  }

  function formatLeg(raw) {
    const s = raw.trim();
    if (isWalkLeg(s)) {
      if (/^Walk /i.test(s)) return s.replace(/\s+\(\d+\s*m\)/i, "");
      const min = s.match(/(\d+)\s*min/);
      if (!min || Number(min[1]) <= 2) return "";
      const exit = s.match(/(\d+번 출구)/);
      return `Walk ${min[1]} min${exit ? ` (${exit[1]})` : ""}`;
    }
    if (
      /KTX|고속버스|시외버스|Metro |City bus|Bus\/metro|Gongju city|Gangneung bus|Buyeo bus|Buses \d|Bus back/.test(
        s
      )
    ) {
      return s.replace(/\. Kakao.*$/i, "").replace(/\s+/g, " ").trim();
    }
    const vehicle = prettyVehicle(vehicleLabel(s));
    const stops = extractStops(s);
    const min = s.match(/\((\d+)\s*min\)/);
    return [vehicle, stops ? `(${stops})` : "", min ? `${min[1]} min` : ""]
      .filter(Boolean)
      .join(" ");
  }

  function rideTake(h) {
    return h.legs.map(formatLeg).filter(Boolean).join(" → ");
  }

  function extraTransit(g) {
    return g.hops
      .filter((h) => h.role === "extra")
      .reduce((s, h) => s + h.min, 0);
  }

  function dayBudget(g) {
    const pace = DAY_PACE[g.id] ?? { leave: 8 * 60, wait: 0, waitWhy: "" };
    const onsite = g.ordered.reduce(
      (s, o) => s + (SITE_TOUR[o.id]?.min ?? 40),
      0
    );
    const onsiteCore = g.ordered
      .filter((o) => o.role !== "extra")
      .reduce((s, o) => s + (SITE_TOUR[o.id]?.min ?? 40), 0);
    const lunch = LUNCH_MIN;
    const transit = g.visitMin;
    const wait = pace.wait;
    const extraMove = extraTransit(g);
    const doorCore = transit - extraMove + onsiteCore + lunch + wait;
    return {
      ...pace,
      onsiteCore,
      lunch,
      transit,
      extraMove,
      wait,
      doorCore,
      homeCore: pace.leave + doorCore,
    };
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function table(headers, rows, { align = [], tones = [], sticky = false } = {}) {
    const head = headers
      .map(
        (h, i) =>
          `<th class="${align[i] === "right" ? "right" : ""}">${esc(h)}</th>`
      )
      .join("");
    const body = rows
      .map((row, r) => {
        const tone = tones[r] && tones[r] !== "neutral" ? ` tone-${tones[r]}` : "";
        const cells = row
          .map(
            (c, i) =>
              `<td class="${align[i] === "right" ? "right" : ""}">${esc(c)}</td>`
          )
          .join("");
        return `<tr class="${tone.trim()}">${cells}</tr>`;
      })
      .join("");
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  function callout(tone, title, body) {
    return `<aside class="callout ${tone}"><strong>${esc(title)}</strong><p>${esc(
      body
    )}</p></aside>`;
  }

  function barChart(rows, { stacked = false, prefix = "", suffix = "" } = {}) {
    const max = Math.max(
      ...rows.map((r) =>
        stacked ? r.segs.reduce((s, x) => s + x.value, 0) : r.segs[0].value
      ),
      0.1
    );
    const legendMap = new Map();
    const html = rows
      .map((r) => {
        const total = r.segs.reduce((s, x) => s + x.value, 0);
        const segs = r.segs
          .map((seg) => {
            legendMap.set(seg.name, seg.tone);
            const w = stacked
              ? (seg.value / max) * 100
              : (seg.value / max) * 100;
            return `<span class="bar-seg ${seg.tone}" style="width:${w}%" title="${esc(
              seg.name
            )}"></span>`;
          })
          .join("");
        const label = stacked
          ? `${total.toFixed(1)}${suffix}`
          : `${prefix}${typeof r.display === "number" ? r.display.toLocaleString("en-US") : r.display}${suffix}`;
        return `<div class="bar-row"><div class="bar-label">${esc(
          r.label
        )}</div><div class="bar-track">${segs}</div><div class="bar-value">${esc(
          label
        )}</div></div>`;
      })
      .join("");
    const legend = [...legendMap]
      .map(
        ([name, tone]) =>
          `<span><i class="bar-seg ${tone}"></i>${esc(name)}</span>`
      )
      .join("");
    return `<div class="chart">${html}<div class="legend">${legend}</div></div>`;
  }

  const grand = groups.reduce((s, x) => s + x.total, 0);
  const transitMin = groups.reduce((s, x) => s + x.visitMin, 0);
  const budgets = groups.map((g) => ({ g, b: dayBudget(g) }));
  const byDoor = [...budgets].sort((a, c) => c.b.doorCore - a.b.doorCore);
  const byFare = [...groups].sort((a, b) => a.total - b.total);

  document.getElementById("calendar").innerHTML = table(
    ["Date", "Do", "Why"],
    NOV2026.map((d) => [`${d.date} ${d.dow}`, d.plan, d.why]),
    { tones: NOV2026.map((d) => d.tone), sticky: true }
  );

  document.getElementById("stats").innerHTML = [
    ["21", "Stamps this trip"],
    ["20", "Needed for the bag"],
    ["2", "Buyeo extras if daylight"],
    [krw(grand), "Fares to finish this plan"],
  ]
    .map(
      ([v, l]) =>
        `<div class="stat"><span class="value">${esc(v)}</span><span class="label">${esc(
          l
        )}</span></div>`
    )
    .join("");

  document.getElementById("fare-chart").innerHTML = barChart(
    byFare.map((x) => ({
      label: x.title,
      display: x.total,
      segs: [
        {
          name: "Round trip from Jongno including extras (KRW)",
          value: x.total,
          tone: "info",
        },
      ],
    })),
    { prefix: "₩" }
  );

  document.getElementById("length-chart").innerHTML = barChart(
    byDoor.map((x) => ({
      label: x.g.title,
      segs: [
        {
          name: "Transit (h)",
          value: Number(((x.b.transit - x.b.extraMove) / 60).toFixed(1)),
          tone: "info",
        },
        {
          name: "On site (h)",
          value: Number((x.b.onsiteCore / 60).toFixed(1)),
          tone: "success",
        },
        { name: "Lunch (h)", value: 1, tone: "warning" },
        {
          name: "Wait for open (h)",
          value: Number((x.b.wait / 60).toFixed(1)),
          tone: "neutral",
        },
      ],
    })),
    { stacked: true, suffix: " h" }
  );

  document.getElementById("plus-table").innerHTML = table(
    ["Site", "Book section", "Booth", "Lat, lon", "Hours / note"],
    PLUS_BOOTHS.map((p) => [
      p.name,
      p.pages,
      p.booth,
      `${p.lat.toFixed(6)}, ${p.lon.toFixed(6)}`,
      [p.hours, p.note].filter(Boolean).join(" · "),
    ])
  );

  document.getElementById("all-lede").textContent =
    `Door-to-door uses tour time at each core site plus a 1 h lunch. About ${mins(
      transitMin
    )} on vehicles and ${krw(
      grand
    )} in fares if each cluster is a separate outing from Jongno.`;

  document.getElementById("all-table").innerHTML = table(
    ["Day", "Leave", "Back", "Door to door", "Moving", "On site", "Lunch"],
    budgets.map(({ g, b }) => [
      g.title,
      hhmm(b.leave),
      hhmm(b.homeCore),
      mins(b.doorCore),
      mins(b.transit - b.extraMove),
      mins(b.onsiteCore),
      "1 h",
    ]),
    {
      align: ["left", "right", "right", "right", "right", "right", "right"],
      tones: budgets.map(({ b }) =>
        b.doorCore >= 600 ? "warning" : b.doorCore >= 480 ? "info" : "success"
      ),
    }
  );

  document.getElementById("all-source").textContent =
    `${DATA.quotaNote} ${DATA.source}. Keys were used locally and are not stored in this page.`;

  const select = document.getElementById("day-select");
  groups.forEach((g) => {
    const opt = document.createElement("option");
    opt.value = g.id;
    opt.textContent = `${g.title} · ${mins(dayBudget(g).doorCore)} door to door`;
    select.appendChild(opt);
  });

  function renderDay(id) {
    const g = groups.find((x) => x.id === id) ?? groups[0];
    const b = dayBudget(g);
    document.getElementById("day-stats").innerHTML = [
      [hhmm(b.leave), "Leave Jongno", ""],
      [hhmm(b.homeCore), "Back (tour + lunch)", ""],
      [mins(b.doorCore), "Door to door", ""],
      [mins(b.onsiteCore), "Time inside sites", ""],
      ["1 h", "Lunch", ""],
      [mins(b.transit - b.extraMove), "On vehicles", "info"],
    ]
      .map(
        ([v, l, tone]) =>
          `<div class="stat ${tone}"><span class="value">${esc(v)}</span><span class="label">${esc(
            l
          )}</span></div>`
      )
      .join("");

    const notes = [];
    if (g.nExtra > 0) {
      notes.push(
        callout(
          "warning",
          "Buyeo extras do not fit a November tour day",
          `Magoksa ${mins(SITE_TOUR[17].min)} + Gongsanseong ${mins(
            SITE_TOUR[16].min
          )} + lunch + KTX already puts you back around ${hhmm(
            b.homeCore
          )}. 부여왕릉원 is ${mins(SITE_TOUR[19].min)} and 부소산성 is officially ${mins(
            SITE_TOUR[20].min
          )}; winter close is 17:00. Keep the extras as stamp-only only if Gongsanseong is done by early afternoon, or drop them.`
        )
      );
    }
    if (b.wait > 0) {
      notes.push(
        callout(
          "info",
          `Opens after you arrive (${mins(b.wait)} wait)`,
          `${b.waitWhy}. Leave Jongno at ${hhmm(b.leave)}.`
        )
      );
    }
    if (g.id === "pocheon") {
      notes.push(
        callout(
          "warning",
          "Pocheon is the long Saturday",
          `Four sites plus lunch is ${mins(b.doorCore)}. Leave at ${hhmm(
            b.leave
          )} to still hit Hwajeokyeon before the 16:00 안내소 close. Stamp there first, then walk. Cut Art Valley if the buses run late.`
        )
      );
    }
    if (g.note) {
      notes.push(
        callout(
          g.longDay || b.doorCore >= 600 ? "warning" : "neutral",
          g.longDay || b.doorCore >= 600 ? "Long day" : "Routing note",
          g.note
        )
      );
    }
    document.getElementById("day-notes").innerHTML = notes.join("");

    document.getElementById("visit-table").innerHTML = table(
      ["Stop", "Site", "Tour", "What that time covers", "Booth"],
      g.ordered.map((s) => {
        const st = STAMPS[s.id];
        const t = SITE_TOUR[s.id];
        return [
          String(s.stop),
          s.role === "extra" ? `${s.name} (extra)` : s.name,
          t ? mins(t.min) : "—",
          [t?.what, t?.skip].filter(Boolean).join(" · "),
          st?.booth ?? "",
        ];
      }),
      {
        align: ["right", "left", "right", "left", "left"],
        tones: g.ordered.map((s) => (s.role === "extra" ? "warning" : "neutral")),
      }
    );

    document.getElementById("hop-table").innerHTML = table(
      [
        "Hop",
        "Chain (each vehicle’s own stops)",
        "Leave",
        "Arrive",
        "Door-to-door",
        "Fare",
      ],
      g.hops.map((h) => {
        const tag = h.closing ? "Return" : h.role === "extra" ? "Extra" : "Stamp";
        return [
          `${tag}: ${h.fromName} → ${h.toName}`,
          rideTake(h),
          h.clockLeave != null ? hhmm(h.clockLeave) : "—",
          h.clockArrive != null ? hhmm(h.clockArrive) : "—",
          mins(h.min),
          krw(h.fare),
        ];
      }),
      {
        align: ["left", "left", "right", "right", "right", "right"],
        tones: g.hops.map((h) => (h.rare ? "warning" : "neutral")),
        sticky: true,
      }
    );

    document.getElementById("day-caption").textContent =
      `Moving ${mins(b.transit - b.extraMove)} plus ${mins(
        b.onsiteCore
      )} inside sites plus 1 h lunch${
        b.wait ? ` plus ${mins(b.wait)} waiting for opening` : ""
      }. Back around ${hhmm(b.homeCore)} if you leave at ${hhmm(
        b.leave
      )}. Fare ${krw(
        g.total
      )}. Yellow hops have a long interval. The chain is start to finish; each vehicle lists only the stops it actually serves. Door-to-door is the sum, including walks and wait.`;
  }

  const params = new URLSearchParams(location.search);
  const initial = params.get("day") || groups[0].id;
  select.value = groups.some((g) => g.id === initial) ? initial : groups[0].id;
  renderDay(select.value);
  select.addEventListener("change", () => {
    const url = new URL(location.href);
    url.searchParams.set("day", select.value);
    history.replaceState(null, "", url);
    renderDay(select.value);
  });
})();
