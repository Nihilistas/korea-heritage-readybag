# Korea heritage stamps · Nov 2026 ready bag

Static copy of the 6–18 Nov 2026 tourist stamp plan (ready bag at 20 stamps). Clocked public-transport chains from Jongno. No API keys in this repo.

Open `index.html` in a browser, or host the folder on GitHub Pages.

This copy is ready to push from the **Nihilistas** GitHub account. There is no `origin` remote yet. You do not need the `gh` CLI.

## GitHub Pages (Nihilistas)

1. While logged in as Nihilistas, create an empty public repo named `korea-heritage-readybag` at https://github.com/new (no README, no .gitignore, no license).
2. From this folder:

```bash
git remote add origin git@github.com:Nihilistas/korea-heritage-readybag.git
git push -u origin main
```

If SSH is not set up for that account, use HTTPS instead:

```bash
git remote add origin https://github.com/Nihilistas/korea-heritage-readybag.git
git push -u origin main
```

3. On the repo: **Settings → Pages → Build and deployment → GitHub Actions**. The workflow in `.github/workflows/pages.yml` publishes on every push to `main`.

The site URL will be:

https://nihilistas.github.io/korea-heritage-readybag/

If you rename the repo, relative asset paths still work.

## Local preview

Double-click `index.html`, or:

```bash
python3 -m http.server 8080
```

Then open http://127.0.0.1:8080/

The day sequencer remembers `?day=` in the URL so you can send a deep link (for example `?day=pocheon`).
