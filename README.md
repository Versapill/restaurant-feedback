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
| `feedbackEmail` | Email address that receives 1–3 star answers. |

> ⚠️ Until `feedbackEmail` is set, 1–3 star answers are not sent anywhere.

## Getting answers by email

Answers are sent through [FormSubmit](https://formsubmit.co) (free, no account).

1. Put your address in `feedbackEmail` and publish the page.
2. Send one test answer. FormSubmit emails you an **activation link**. Click it. (That first test answer isn't delivered.)
3. From then on, every 1–3 star answer arrives as an email with the stars and the text. Check your spam folder the first time.

Optional: the activation email also gives you a random alias. Use it in `feedbackEmail` instead of your address to keep the address out of the page source.
