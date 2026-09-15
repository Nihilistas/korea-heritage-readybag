# Korea heritage stamps · Nov 2026 ready bag

Static copy of the 6–18 Nov 2026 tourist stamp plan (ready bag at 20 stamps). Clocked public-transport chains from Jongno. No API keys in this repo.

Open `index.html` in a browser, or host the folder on GitHub Pages.

## GitHub Pages

From this folder:

```bash
git add -A && git commit -m "Add static stamp plan"
gh repo create korea-heritage-readybag --public --source=. --remote=origin --push
```

Then on the GitHub repo: **Settings → Pages → Build and deployment → GitHub Actions**. The workflow in `.github/workflows/pages.yml` publishes on every push to `main`.

The site URL will be:

`https://<your-user>.github.io/korea-heritage-readybag/`

If you rename the repo, relative asset paths still work.

## Local preview

Double-click `index.html`, or:

```bash
python3 -m http.server 8080
```

Then open http://127.0.0.1:8080/

The day sequencer remembers `?day=` in the URL so you can send a deep link (for example `?day=pocheon`).
