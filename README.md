# links_tracker

A tiny self-hosted Linktree-style page for [@unpibedecompu](https://www.instagram.com/unpibedecompu/), with real per-link click analytics (which Linktree's free plan doesn't give you).

Plain HTML/CSS/JS, no build step, hosted free on GitHub Pages. Analytics via [Umami](https://umami.is) (open source, privacy-friendly).

## Editing links

Open `links.js` and edit the `LINKS` array — each entry is `{ id, label, url, icon }`.

- `id` is used as the analytics event name (`click-<id>`). Keep it stable once live — renaming it later splits that link's click history into two separate events in Umami.
- `icon` can be any emoji or short string.

No other file needs to change to add/remove/reorder links.

## Enabling click analytics (one-time, ~2 minutes)

This repo ships ready to track clicks the moment analytics is wired up — you just need an Umami account, since that's a third-party signup only you should do:

1. Go to [cloud.umami.is](https://cloud.umami.is) and sign up for the free **Hobby** plan (100k events/month, no card required).
2. Add a website (name it anything, e.g. "unpibedecompu links").
3. Umami gives you a `<script>` tag with your website ID. Copy it.
4. Open `index.html`, find the commented-out `<script>` line near the top (search for `UMAMI ANALYTICS`), and uncomment it with your real script tag in place.
5. Commit and push — GitHub Pages redeploys automatically.

From then on, the Umami dashboard shows total visits plus a per-event breakdown (`click-newsletter`, `click-podcast`, `click-youtube`, etc.) — exactly which links people click and how often.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deployment

This repo is deployed via GitHub Pages from the `main` branch root. Any push to `main` goes live automatically at the Pages URL configured in the repo settings.
