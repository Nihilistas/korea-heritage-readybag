(function () {
  const { DATA, STAMPS, SITE_TOUR, DAY_PACE, PLUS_BOOTHS, NOV2026, LUNCH_MIN } =
    window.PLAN;
  const groups = DATA.groups;

  const ADMISSION = [
    {
      site: "Incheon Airport T1 홍보관",
      won: 0,
      guide: "No ticket. Walk in.",
      note: "Passport + three missions + H-zone stamp. Last Wednesday closed (25 Nov, not this trip).",
      tone: "success",
    },
    {
      site: "Gimpo Jangneung",
      won: 1000,
      guide: "Walk in. Free 해설 if a volunteer is on duty — same ₩1,000.",
      note: "궁능 royal tomb. Hanbok = free. Last Wednesday of the month also free.",
      tone: "neutral",
    },
    {
      site: "Jongmyo Shrine",
      won: 1000,
      guide: "Weekday: you must join a timed 해설 group (~1 h). Sunday/holiday: walk in. Price is the same.",
      note: "English slots 10:00 / 12:00 / 14:00 / 16:00. Under 10 people: buy at the booth, no reservation. This is access, not a dearer ticket.",
      tone: "warning",
    },
    {
      site: "Changdeokgung Palace (grounds)",
      won: 3000,
      guide: "Walk in. Optional free 정규해설 (~50 min) at set times. Same ₩3,000.",
      note: "Skip 후원 this trip. 후원 is a separate ₩5,000 timed tour (~90 min), reservation, not the stamp pad.",
      tone: "neutral",
    },
    {
      site: "Gyeongbokgung Palace",
      won: 3000,
      guide: "Walk in. Optional free 정규해설 (EN 11:00 / 13:30 / 15:30). Same ₩3,000.",
      note: "Pad is 동궐마루 사랑 inside. 경회루 special tour is extra, Korean-only, and not in November 2026.",
      tone: "neutral",
    },
    {
      site: "Namhansanseong 행궁",
      won: 2000,
      guide: "Walk in. Walls and trails are free. 행궁 is the paid building.",
      note: "Stamp is at the 행궁 visitor center. Gyeonggi residents / hanbok can be free.",
      tone: "neutral",
    },
    {
      site: "Suwon Hwaseong Museum",
      won: 2000,
      guide: "Walk in. Fortress wall is free (open). 행궁 is a separate ₩2,000 if you add it.",
      note: "Stamp is the museum desk, not the gates. Wall walk is not required.",
      tone: "neutral",
    },
    {
      site: "Yungneung and Geolleung",
      won: 1000,
      guide: "Walk in. Same ₩1,000 with or without a volunteer 해설.",
      note: "궁능. Two tombs, one ticket. Monday closed.",
      tone: "neutral",
    },
    {
      site: "Jeondeungsa Temple",
      won: 0,
      guide: "Walk in. Temple 해설 if offered is not a second ticket.",
      note: "Cultural-zone fee dropped 4 May 2023. Car park is ₩3,000 if you drive.",
      tone: "success",
    },
    {
      site: "Ganghwa Dolmen Site",
      won: 0,
      guide: "Outdoor site is free walk-in. Optional 해설 at the 안내소 10:00–17:00, no extra fee.",
      note: "History museum next door is Plus and a separate ₩3,000 combo ticket. Not needed for the stamp.",
      tone: "success",
    },
    {
      site: "Bidulginang Falls",
      won: 0,
      guide: "Walk in. Trail from the parking 안내소.",
      note: "Stamp at the entrance booth, then the waterfall walk.",
      tone: "success",
    },
    {
      site: "Hantangang Geopark Center",
      won: 5000,
      guide: "Pay to enter the exhibitions. Not a guided-vs-unguided price split.",
      note: "Pad is at the info desk inside. Pocheon residents / 65+ free. Gift-certificate rebate is local-only.",
      tone: "info",
    },
    {
      site: "Hwajeokyeon",
      won: 0,
      guide: "Walk in.",
      note: "Stamp the 안내소 first (11:00–16:00 weekends). Camping is extra; the rock is not.",
      tone: "success",
    },
    {
      site: "Pocheon Art Valley",
      won: 6000,
      guide: "Gate ticket. Optional monorail is extra (~₩5,800 adult round-trip).",
      note: "Stamp at the ticket booth. Cut the site if the day runs late.",
      tone: "info",
    },
    {
      site: "Jeongok-ri archaeological site",
      won: 0,
      guide: "Walk in. Visitor center and prehistoric museum are free.",
      note: "Optional paid craft village is not the stamp.",
      tone: "success",
    },
    {
      site: "Horogoru Embankment",
      won: 0,
      guide: "Walk in. 홍보관 is free.",
      note: "Winter 홍보관 10:00–17:00.",
      tone: "success",
    },
    {
      site: "Magoksa Temple",
      won: 0,
      guide: "Walk in.",
      note: "Gongju tourism list: free. Stamp both passport pages at the pagoda pad.",
      tone: "success",
    },
    {
      site: "Gongsanseong Fortress",
      won: 3000,
      guide: "Walk in. City 해설사 available; same ticket.",
      note: "Winter last entry 16:30. Gongju residents discounted.",
      tone: "neutral",
    },
    {
      site: "Buyeo Royal Tombs (Naseong extra)",
      won: 1000,
      guide: "Walk in. Group 해설 from 10 people, 10:00–17:00, not a dearer ticket.",
      note: "Naseong stamp is this ticket booth. Lunch 12:00–13:00 is free entry on the county tariff.",
      tone: "warning",
    },
    {
      site: "Busosanseong Fortress (extra)",
      won: 2000,
      guide: "Walk in. Includes Nakhwaam / Goransa on the same ticket.",
      note: "Does not fit after Magoksa + Gongsanseong + lunch in November.",
      tone: "warning",
    },
  ];
  const ADMISSION_CORE = ADMISSION.filter((a) => !/extra/i.test(a.site)).reduce(
    (s, a) => s + a.won,
    0
  );

  const EN_DAYS = [
    {
      day: "Sat 7 Nov · Airport + Jangneung",
      english:
        "No posted English clock. T1 is missions. Jangneung 해설 is Korean.",
      ifChase:
        "Does not move the day. Optional Korean 13:30 tomb loop (~40 min) overruns the 13:52 leave by ~20 min; AREX after that is frequent.",
      tone: "success",
    },
    {
      day: "Sun 15 Nov · Seoul palaces",
      english: "Yes — the only day with three posted English clocks.",
      ifChase:
        "Keep today’s order and you wait: Jongmyo 10:00 → Changdeok 13:15 → Gyeongbok 15:30, home ~17:30. Reverse the order (Changdeok 10:15 → Jongmyo 12:00 → Gyeongbok 13:30) and it fits the same afternoon. 후원 English would still blow the day; skip it.",
      tone: "info",
    },
    {
      day: "Wed 11 Nov · Namhansanseong",
      english:
        "Call 031-746-2845. Winter EN 10:00–17:00, up to 2 h. Korean 행궁 11:00 / 14:00.",
      ifChase:
        "Stretches 1–2 h. Bus 9 is every 20 min, so the 11:17 return is optional, not a cliff. Stamps still work.",
      tone: "info",
    },
    {
      day: "Tue 10 Nov · Suwon + Yungneung",
      english:
        "Museum EN not guaranteed. Fortress EN is the wall, not the stamp. Yungneung EN by phone 031-223-8364.",
      ifChase:
        "Museum 10:00 해설 risks the 1551 (every 50 min). Fortress / 행궁 English is a 2–3 h wall walk and drops Yungneung. Tomb English at 14:00 only stretches the return (Line 1 is frequent).",
      tone: "warning",
    },
    {
      day: "Sun 8 Nov · Ganghwa",
      english:
        "Jeondeungsa posted 해설 is Korean; English staff is homepage reservation. Dolmen 해설사 on request.",
      ifChase:
        "Breaks the chain. You arrive 10:17; 10:00 already left; 11:00 collides with the 70 at 11:25. Miss that and 21 (every 60 min) plus 20 (every 80 min) slip.",
      tone: "warning",
    },
    {
      day: "Sat 14 Nov · Pocheon",
      english:
        "Geopark: Korean 10:00–16:00; English is a pamphlet or a group booking (2 weeks). Art Valley 해설 is reservation.",
      ifChase:
        "Breaks the day. A 10:00 geopark 해설 collides with bus 10 at 10:49 (every 160 min) and then 89 (every 180 min). Extra time at Art Valley risks the 17:11 시외 (every 135 min).",
      tone: "warning",
    },
    {
      day: "Thu 12 Nov · Yeoncheon",
      english:
        "Jeongok 안내소 lists no English. Horogoru is a walk-in 홍보관.",
      ifChase:
        "Any wait at Jeongok misses 83 at 10:24. Next outbound is ~1 h; the return 83 at 14:09 is every 190 min. Do not add a tour here.",
      tone: "warning",
    },
    {
      day: "Mon 9 Nov · Gongju",
      english:
        "Clocked Magoksa / Gongsanseong 해설 is Korean. Gongju’s English desk is at the Muryeong tomb TIC, not these two pads.",
      ifChase:
        "Magoksa 10:00 + the 25 min walk misses 770 at 11:18 (hourly). Gongsanseong 13:00 (~1 h) still makes KTX 15:58; 14:00 does not. Do both 해설 and you miss the train. Buyeo extras already do not fit.",
      tone: "warning",
    },
  ];

  const EN_SITES = [
    {
      day: "7 Nov",
      site: "T1 홍보관",
      window: "10:00–10:50",
      offered: "No 해설. Three missions.",
      hit: "Fits as written.",
      tone: "success",
    },
    {
      day: "7 Nov",
      site: "Gimpo Jangneung",
      window: "12:02–13:52",
      offered:
        "Korean 10:30 / 13:30 / 15:00 · ~40 min at 정자각. No posted English.",
      hit: "13:30 Korean ends ~14:10. ~20 min late; trains are frequent.",
      tone: "success",
    },
    {
      day: "15 Nov",
      site: "Jongmyo",
      window: "09:17–10:17 (plan)",
      offered:
        "Sunday is walk-in, but English still 10:00 / 12:00 / 14:00 / 16:00 · ~1 h. No Saturday English.",
      hit: "Wait until 10:00 in the current order, or hit 12:00 after Changdeok.",
      tone: "info",
    },
    {
      day: "15 Nov",
      site: "Changdeokgung grounds",
      window: "10:40–11:55 (plan)",
      offered:
        "English 10:15 / 13:15 · ~50 min, 돈화문 map. Free, no reservation under 10.",
      hit: "Current arrival misses 10:15. Reverse the morning, or wait until 13:15.",
      tone: "info",
    },
    {
      day: "15 Nov",
      site: "Gyeongbokgung",
      window: "12:14–14:44 (plan)",
      offered:
        "English 11:00 / 13:30 / 15:30 · 60–90 min, 흥례문 안내실. Last entry 16:00.",
      hit: "12:14 misses 11:00. Reordered day catches 13:30. Current order waits for 15:30 (tight if the tour runs 90 min).",
      tone: "info",
    },
    {
      day: "11 Nov",
      site: "Namhansanseong 행궁",
      window: "10:09–11:13",
      offered:
        "English by phone, ≤2 h. Winter Korean 11:00 / 14:00 · ~1 h, 5+ people.",
      hit: "11:00 Korean misses the 11:17 bus 9. Next 9 is ~20 min. Book English on arrival.",
      tone: "info",
    },
    {
      day: "10 Nov",
      site: "Suwon Hwaseong Museum",
      window: "09:30–10:20",
      offered:
        "정규해설 10:00 / 11:00 / 12:00… English “may be unavailable.”",
      hit: "10:00 해설 overruns the 10:23 bus 11 and can drop the 10:52 1551 (every 50 min).",
      tone: "warning",
    },
    {
      day: "10 Nov",
      site: "Hwaseong wall / 행궁 (not the pad)",
      window: "same morning",
      offered:
        "Culture-guide slots 10:00 / 11:00 / 13:30 / 14:30 / 15:30 from 행궁 안내소.",
      hit: "This is the 2.5–3 h wall already skipped. It drops Yungneung.",
      tone: "warning",
    },
    {
      day: "10 Nov",
      site: "Yungneung / Geolleung",
      window: "11:11–13:21",
      offered:
        "Korean 10:00 / 14:00 · ~1 h. English possible via 031-223-8364.",
      hit: "10:00 already gone. 14:00 stretches the afternoon; 35-1 and Line 1 are frequent.",
      tone: "info",
    },
    {
      day: "8 Nov",
      site: "Jeondeungsa",
      window: "10:17–11:07",
      offered:
        "Korean 10:00 / 11:00 / 13:00 / 14:00 / 15:00 / 16:00 at 대웅보전. English staff = homepage reservation.",
      hit: "10:00 already started. 11:00 collides with the 70 at 11:25. Skip 해설 here.",
      tone: "warning",
    },
    {
      day: "8 Nov",
      site: "Ganghwa dolmen",
      window: "12:52–14:22",
      offered:
        "해설사 on site 10:00–17:00, request. Language not posted as English.",
      hit: "A short request talk can fit. A long wait misses 20 (every 80 min).",
      tone: "warning",
    },
    {
      day: "14 Nov",
      site: "Bidulginang Falls",
      window: "08:50–09:40",
      offered: "Trail from the parking 안내소. No clocked tour.",
      hit: "Fits as written.",
      tone: "success",
    },
    {
      day: "14 Nov",
      site: "Hantangang Geopark Center",
      window: "09:58–10:43",
      offered:
        "Korean 지질 해설 10:00–16:00. English pamphlet; groups book 2 weeks out.",
      hit: "Any 10:00 해설 misses bus 10 at 10:49 (every 160 min).",
      tone: "warning",
    },
    {
      day: "14 Nov",
      site: "Hwajeokyeon",
      window: "12:05–13:35",
      offered: "Stamp the weekend 안내소. No English tour.",
      hit: "Fits as written. Leave on time for 89.",
      tone: "success",
    },
    {
      day: "14 Nov",
      site: "Pocheon Art Valley",
      window: "15:29–16:44",
      offered:
        "City 해설사 by reservation. Gate ticket is not a guided slot.",
      hit: "Skip a long tour. 시외 17:11 is every 135 min.",
      tone: "warning",
    },
    {
      day: "12 Nov",
      site: "Jeongok-ri",
      window: "09:21–10:11",
      offered: "Visitor center / museum free. 안내소: no English.",
      hit: "Walk yourself. A wait misses 83 at 10:24.",
      tone: "warning",
    },
    {
      day: "12 Nov",
      site: "Horogoru",
      window: "12:08–13:53",
      offered: "Free 홍보관. No posted English.",
      hit: "Stamp and look. Linger and you miss 83 at 14:09 (every 190 min).",
      tone: "warning",
    },
    {
      day: "9 Nov",
      site: "Magoksa",
      window: "09:43–10:53",
      offered:
        "Winter Korean 10:00 / 11:00 / 13:00 / 14:00 / 15:00. English desk is at Muryeong tomb, not here.",
      hit: "10:00 해설 plus 25 min walk misses 770 at 11:18 (hourly).",
      tone: "warning",
    },
    {
      day: "9 Nov",
      site: "Gongsanseong",
      window: "12:45–15:00",
      offered:
        "Same winter Korean clocks. TIC staff listed as JP/CN; EN is at the tomb TIC.",
      hit: "13:00 (~1 h) still makes 201 → KTX 15:58. 14:00 does not. Two 해설 in one day miss the train.",
      tone: "warning",
    },
  ];

  const SITE_ABOUT = [
    {
      site: "Incheon Airport T1 홍보관",
      about:
        "The heritage-campaign desk in the airport transport center (T1 B1, H-zone). It is a stamp booth with short missions, not a museum.",
      thisTrip:
        "Pick up the passport, do media art, chroma-key, and the 3D drone, then stamp at the H-zone table. Three stamps in one stop.",
      tone: "success",
    },
    {
      site: "Gimpo Jangneung",
      about:
        "UNESCO Joseon royal tomb of King Wonjong and Queen Inheon (Injo’s parents). Twin mounds in one enclosure, 정자각, pine woods. Quieter than the Seoul palaces.",
      thisTrip:
        "₩1,000 at the gate, stamp at the 수표실 beside it, then the official ~40 min tomb loop. Not a long hike.",
      tone: "neutral",
    },
    {
      site: "Jeondeungsa Temple",
      about:
        "Ganghwa’s main Buddhist temple, inside Jeongjoksanseong fortress. Joseon halls (Daeungjeon with carved eaves); one of the island’s oldest working temples.",
      thisTrip:
        "Stamp at the 남문 or 동문 pad, walk the courtyard. Free since 4 May 2023. Do not wait for the 11:00 해설 — it collides with the 70 bus.",
      tone: "success",
    },
    {
      site: "Ganghwa Dolmen Site",
      about:
        "UNESCO Bronze Age cemetery: huge capstones on supporting rocks. Korea has the world’s densest dolmen landscape; this is the showpiece cluster.",
      thisTrip:
        "Stamp at the 안내소 in front of the stones (~30 min). The history museum next door is Plus and a separate ticket.",
      tone: "success",
    },
    {
      site: "Magoksa Temple",
      about:
        "Sansa UNESCO mountain temple in Gongju (Baekje foundation). Riverside 경내 and a five-storey stone pagoda in the hills west of the city.",
      thisTrip:
        "Press the same pad onto 백제고도의 길 and 산사의 길 (two stamps). Walk the 경내. Be on the 770 at 11:18.",
      tone: "neutral",
    },
    {
      site: "Gongsanseong Fortress",
      about:
        "Baekje’s Ungjin-period capital fortress on a bend of the Geumgang. Palace site, walls, view over Gongju.",
      thisTrip:
        "Inner fortress and ticket-booth stamp, not the 1.5–2 h full wall. Leave in time for 201 → KTX 공주 15:58.",
      tone: "neutral",
    },
    {
      site: "Buyeo Royal Tombs (Naseong extra)",
      about:
        "Baekje royal burial mounds from the Sabi capital. The Naseong (outer city wall) stamp is not on the wall — it is this ticket booth.",
      thisTrip:
        "Optional ~40 min. Only if Gongsanseong is done early; winter close 17:00.",
      tone: "warning",
    },
    {
      site: "Busosanseong Fortress (extra)",
      about:
        "Last Baekje capital fortress. Nakhwaam cliff (the 660 court-lady legend), Goransa, the river.",
      thisTrip:
        "Official ~2 h including Nakhwaam / Goransa. Does not fit after Magoksa + Gongsanseong + lunch in November.",
      tone: "warning",
    },
    {
      site: "Suwon Hwaseong Museum",
      about:
        "Museum on King Jeongjo’s late-18th-century fortress city: how Hwaseong was built, the 1795 royal procession, wall models.",
      thisTrip:
        "The stamp is the museum desk, not the fortress gates. The 5.7 km wall is free but 2.5–3 h — skip it before Yungneung.",
      tone: "neutral",
    },
    {
      site: "Yungneung and Geolleung",
      about:
        "UNESCO tombs of Crown Prince Sado (later King Jangjo) and King Jeongjo, plus their queens, in a pine forest. Jeongjo moved his father’s grave here and is buried next door.",
      thisTrip:
        "One ₩1,000 ticket for both mounds. Stamp behind the ticket booth. November last entry 16:30.",
      tone: "neutral",
    },
    {
      site: "Namhansanseong Fortress",
      about:
        "UNESCO mountain fortress (1624–26), the refuge capital during the 1636 Qing invasion. Ridge walls and a 행궁 (emergency palace) in the basin.",
      thisTrip:
        "Bus 9 to the 행궁, stamp at the visitor center, look through the 행궁. Not the multi-hour wall circuit.",
      tone: "neutral",
    },
    {
      site: "Jeongok-ri archaeological site",
      about:
        "Paleolithic site where Acheulean-type hand axes were found in 1978, which rewrote East Asian stone-tool history. Outdoor excavation ground plus free museums.",
      thisTrip:
        "Stamp at the visitor center, walk the outdoor site. Skip the paid craft village. Do not linger past the 10:24 bus 83.",
      tone: "success",
    },
    {
      site: "Horogoru Embankment",
      about:
        "Goguryeo earthen fortress on a bluff over the Imjin, looking toward the border. Fifth–sixth-century military post.",
      thisTrip:
        "Free 홍보관 and a look at the east wall. Be back for 83 at 14:09 (every 190 min).",
      tone: "success",
    },
    {
      site: "Bidulginang Falls",
      about:
        "Hantangang UNESCO Global Geopark: a basalt-gorge waterfall named for pigeons that nested in the caves. Volcanic columns and a boardwalk down to the fall.",
      thisTrip:
        "Stamp at the parking 안내소 first, then 30–40 min down and back. The pad is not at the water.",
      tone: "success",
    },
    {
      site: "Hantangang Geopark Center",
      about:
        "Indoor museum for the same volcanic river: lava, basalt gorges, ecology, optional 4D riding theater.",
      thisTrip:
        "₩5,000, stamp at the info desk inside, see the exhibitions next to Bidulginang. Closed Tuesday. Skip a 10:00 해설 — it misses bus 10.",
      tone: "info",
    },
    {
      site: "Hwajeokyeon",
      about:
        "A Hantangang pool with stacked basalt like firewood (화적). Classic geopark viewpoint; camping nearby is separate.",
      thisTrip:
        "Weekend 안내소 11:00–16:00: stamp first, then a short trail. Leave on time for bus 89.",
      tone: "success",
    },
    {
      site: "Pocheon Art Valley",
      about:
        "A closed granite quarry turned into a sculpture park around a turquoise lake, with a sky bridge and an optional monorail.",
      thisTrip:
        "₩6,000 gate ticket, stamp at the booth, lake and a short look. Skip the monorail if the 17:11 시외 is tight.",
      tone: "info",
    },
    {
      site: "Jongmyo Shrine",
      about:
        "UNESCO Confucian royal shrine that housed the spirit tablets of Joseon kings. Long courtyards and 정전 — solemn, not a palace garden.",
      thisTrip:
        "Sunday 15 Nov is walk-in (English 해설 still runs at 10:00 / 12:00 / 14:00 / 16:00). Stamp at the 수표소 inside after the 종로 ticket office.",
      tone: "warning",
    },
    {
      site: "Changdeokgung Palace",
      about:
        "UNESCO palace, the best-preserved Joseon royal compound: Injeongjeon throne hall, living quarters, and the Secret Garden (후원) behind.",
      thisTrip:
        "Grounds only (~75 min). Stamp at 돈화문 / café Sarang. Skip 후원 (separate timed ₩5,000, ~90 min).",
      tone: "neutral",
    },
    {
      site: "Gyeongbokgung Palace",
      about:
        "The main Joseon palace under Bugaksan. Gwanghwamun, Geunjeongjeon, Gyeonghoeru pond pavilion.",
      thisTrip:
        "Walk the main halls to 동궐마루 사랑 — the pad is inside, not at the gate. Optional free English 해설. 경회루 special tour is Korean-only and not in November 2026.",
      tone: "neutral",
    },
  ];

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
    [krw(ADMISSION_CORE), "Site tickets this 21 (no extras)"],
  ]
    .map(
      ([v, l]) =>
        `<div class="stat"><span class="value">${esc(v)}</span><span class="label">${esc(
          l
        )}</span></div>`
    )
    .join("");

  document.getElementById("admission-table").innerHTML = table(
    ["Site", "Ticket", "Guide?", "Notes"],
    ADMISSION.map((a) => [
      a.site,
      a.won === 0 ? "Free" : krw(a.won),
      a.guide,
      a.note,
    ]),
    {
      align: ["left", "right", "left", "left"],
      tones: ADMISSION.map((a) => a.tone),
      sticky: true,
    }
  );
  document.getElementById("admission-source").textContent =
    `Core tickets ${krw(ADMISSION_CORE)}. 4 palaces + Jongmyo 통합관람권 is ₩6,000 (6 months, 후원 excluded) versus ₩7,000 if you buy Jongmyo + Changdeokgung + Gyeongbokgung separately. Hanbok (jeogori + skirt or pants) is free at 궁능 palaces and tombs. Sources: royal.khs.go.kr fees + Jongmyo/Gyeongbokgung 해설 · jeondeungsa.org · gongju.go.kr · buyeo.go.kr (Jul 2026) · geoparkcenter.kr · artvalley.pcfac.or.kr · suwon.go.kr 화성박물관 어른 ₩2,000 · gg.go.kr 남한산성행궁.`;

  document.getElementById("en-day-table").innerHTML = table(
    ["Day", "Posted English?", "If you chase a guide"],
    EN_DAYS.map((d) => [d.day, d.english, d.ifChase]),
    { tones: EN_DAYS.map((d) => d.tone), sticky: true }
  );
  document.getElementById("en-site-table").innerHTML = table(
    ["Day", "Site", "You are there", "What is actually offered", "Collision"],
    EN_SITES.map((s) => [s.day, s.site, s.window, s.offered, s.hit]),
    { tones: EN_SITES.map((s) => s.tone), sticky: true }
  );
  document.getElementById("en-source").textContent =
    "Hop windows are the clocked ODsay leaves/arrives already on this page. Sources: royal.khs.go.kr 경복궁/종묘/조선왕릉 해설 · cha.go.kr 창덕궁 전각 English 10:15 / 13:15 · gg.go.kr 남한산성 foreign-language reservation · smuseum.suwon.go.kr 전시해설 · swcf.or.kr 화성 문화관광해설 · jeondeungsa.org 대웅보전 해설 · ganghwa.go.kr 해설사 배치 · gongju.go.kr 동절기 정시 해설 · geoparkcenter.kr / pocheon.go.kr 지질 해설 · 전곡리 안내소 English = no.";

  document.getElementById("about-table").innerHTML = table(
    ["Site", "What it is", "What you do this trip"],
    SITE_ABOUT.map((s) => [s.site, s.about, s.thisTrip]),
    { tones: SITE_ABOUT.map((s) => s.tone), sticky: true }
  );
  document.getElementById("about-source").textContent =
    "UNESCO listings and on-site notes from 궁능유적본부, kh.or.kr booth text, Ganghwa / Gongju / Buyeo / Pocheon / Yeoncheon tourism pages. Times are the on-site windows already on this page, not a full-day visit.";

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
