# Guest Feedback Page

A rating page for Αρκατένα Ελένης: `index.html` plus the logo (`logo.jpg`). No build step; keep both files together when hosting. Host it anywhere static (GitHub Pages, Netlify, etc.) and point a table QR code at it.

## How it works

- **4–5 stars:** the guest is redirected to the public review page immediately.
- **1–3 stars:** a private feedback form asking "How can we improve your experience?".

## Setup

Edit the `CONFIG` block near the bottom of `index.html`:

| Setting | What it does |
| --- | --- |
| `reviewUrl` | Where happy guests are sent. |
| `feedbackEndpoint` | URL that receives low-rating feedback as a JSON POST (e.g. a free [Formspree](https://formspree.io) form URL). |
| `feedbackEmail` | Used only when there's no endpoint: opens the guest's email app addressed to you. |

> ⚠️ Set `feedbackEndpoint` or `feedbackEmail`, or low-rating feedback won't be delivered anywhere.
