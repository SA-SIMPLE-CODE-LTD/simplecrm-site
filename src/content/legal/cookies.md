---
title: Cookie Policy
updated: 2026-10-08
---

> **Draft.** Check this list against the cookies the production app actually sets before publishing, and update it whenever that changes.

This Cookie Policy explains which cookies {{legalName}} ("**we**") uses on our website at {{url}} (the "**Site**") and in {{name}} at {{appUrl}} (the "**Service**"). It is part of our [Privacy Policy](/legal/privacy).

## 1. What are cookies?

Cookies are small text files that a website stores in your browser. The site can read them on later visits. Some last only until you close your browser ("**session cookies**"), and others last for a set time ("**persistent cookies**"). Cookies set by the site you are visiting are "**first-party**", and cookies set by another domain are "**third-party**".

## 2. How we use cookies

We keep cookies to a minimum. We use two kinds:

- **Strictly necessary.** Without them, you could not sign in or use the Service securely. They cannot be switched off.
- **Functional.** They remember display choices you made, so the Service looks the same the next time you open it.

We do **not** use performance, analytics, advertising or marketing cookies, and we do not allow third parties to set cookies through the Site or Service.

## 3. The cookies we set

**On the Site ({{url}}):** none. The Site is a set of static pages and does not set any cookies.

**In the Service ({{appUrl}}):**

| Cookie        | Type               | Purpose                                                                       | Lasts                                                                   |
| ------------- | ------------------ | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `crm_session` | Strictly necessary | Keeps you signed in. It holds a random token; we store only a hash of it.     | 30 days, renewed while you use the Service, and never more than 90 days |
| `g_state`     | Strictly necessary | Protects "Continue with Google" sign-in against forged requests.              | 10 minutes                                                              |
| `g_verifier`  | Strictly necessary | Part of the secure "Continue with Google" sign-in exchange (PKCE).            | 10 minutes                                                              |
| `g_redirect`  | Strictly necessary | Remembers which page to take you back to after you sign in with Google.       | 10 minutes                                                              |
| `crm_theme`   | Functional         | Remembers your light or dark theme, so pages load in it without flickering.   | 1 year                                                                  |
| `crm_product` | Functional         | Remembers which product look you use, so pages load in it without flickering. | 1 year                                                                  |

All these cookies are first-party. The sign-in cookies are `HttpOnly` (scripts cannot read them), `Secure` (sent only over HTTPS) and `SameSite=Lax`.

**Other browser storage.** The Service also keeps some interface preferences in your browser's local storage, such as collapsed groups and column widths. This data stays on your device and is not sent to us.

**Google sign-in.** When you choose "Continue with Google", you are sent to Google's own pages. Google may set its own cookies there, under [Google's Privacy Policy](https://policies.google.com/privacy).

## 4. How to control cookies

Because we use only strictly necessary and functional cookies, we do not show a cookie banner. You can still block or delete cookies in your browser settings. If you block the strictly necessary ones, you will not be able to sign in. If you delete the functional ones, the Service will use the default theme until you choose again.

Each browser explains how to do this: [Chrome](https://support.google.com/chrome/answer/95647), [Firefox](https://support.mozilla.org/kb/clear-cookies-and-site-data-firefox), [Safari](https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac) and [Edge](https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09).

## 5. "Do Not Track" and Global Privacy Control

We do not track you across websites, and we do not sell or share personal data for targeted advertising. That means Do Not Track and Global Privacy Control signals do not change anything we do. If that ever changes, we will honor them.

## 6. Changes

If we start using a new type of cookie, we will update this page first. If the new cookie needs your consent, we will ask for it before setting it.

## 7. Contact

Questions about cookies: [{{privacyEmail}}](mailto:{{privacyEmail}}).
