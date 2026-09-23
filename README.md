# Guest Feedback Page

A single-file (`index.html`) rating page for a restaurant. No build step. Host it anywhere static (GitHub Pages, Netlify, etc.) and point a table QR code at it.

## How it works

- **4–5 stars:** a quick celebration, then an automatic redirect (3 s) to the public review page. There's also a button to go right away.
- **1–3 stars:** a private feedback form with quick-pick topics, a comment box and optional contact details.

## Setup

Edit the `CONFIG` block near the bottom of `index.html`:

| Setting | What it does |
| --- | --- |
| `reviewUrl` | Where happy guests are sent. |
| `redirectSeconds` | How long to wait before redirecting. |
| `feedbackEndpoint` | URL that receives low-rating feedback as a JSON POST (e.g. a free [Formspree](https://formspree.io) form URL). |
| `feedbackEmail` | Used only when there's no endpoint: opens the guest's email app addressed to you. |

> ⚠️ Set `feedbackEndpoint` or `feedbackEmail`, or low-rating feedback won't be delivered anywhere.
