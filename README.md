# links_tracker

A tiny self-hosted Linktree-style page for [@unpibedecompu](https://www.instagram.com/unpibedecompu/), with real per-link click analytics (which Linktree's free plan doesn't give you).

Plain HTML/CSS/JS, no build step, hosted free on GitHub Pages. Analytics via [Umami](https://umami.is) (open source, privacy-friendly).

## Editing links

Open `links.js` and edit the `LINKS` array — each entry is `{ id, label, url, icon, iconFit?, description? }`.

- `id` is used as the analytics event name (`click-<id>`). Keep it stable once live — renaming it later splits that link's click history into two separate events in Umami.
- `icon` is a path to an image (svg/png/jpg) shown in a rounded square.
- `iconFit` is `"contain"` (default, for logos) or `"cover"` (for photos/thumbnails).
- `description` is optional — a short muted line shown under the label.

No other file needs to change to add/remove/reorder links.

## Cache-busting

`index.html` loads `style.css`, `links.js`, and `script.js` with a `?v=N` query string. GitHub Pages caches these for a few minutes, so bump the number on each of those files whenever you edit them and want the change to show up immediately for visitors instead of waiting out the cache.

## Click analytics

Wired up via [Umami Cloud](https://cloud.umami.is) (free Hobby plan). The tracking script is already in `index.html`, and every link button carries a `data-umami-event` attribute, so the Umami dashboard shows total visits plus a per-event breakdown (`click-newsletter`, `click-podcast`, `click-youtube`, etc.) — exactly which links people click and how often.

To move analytics to a different Umami website later: sign into [cloud.umami.is](https://cloud.umami.is), add/select the website, copy its `data-website-id`, and swap it into the `<script>` tag near the top of `index.html`.

## Local preview

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deployment

This repo is deployed via GitHub Pages from the `main` branch root. Any push to `main` goes live automatically at the Pages URL configured in the repo settings.
