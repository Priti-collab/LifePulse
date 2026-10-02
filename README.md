# LifePulse – Every Drop Matters
Frontend-only blood donation demo (HTML5, CSS3, vanilla JS, Bootstrap 5 via CDN).
**Run:** open `index.html`. **Demo data:** `js/data.js`. **Images:** add files to `assets/images/` (camp cards use CSS placeholders now).
**Chatbot:** `js/chatbot.js` injects Blood Buddy on every page; edit the `QA` array; chat saved in localStorage key `bb_chat`.
**New:** rotating 3D drop (CSS 3D), card tilt, flip prize cards, Lifeline Impact Calculator with demo prize code (`js/rewards.js`).
**3D illustrations:** PNG art in `assets/images/` (drop, heart, bag, plus); camp1-6.jpg are camp photos; avatar1-3.jpg are donor portraits placed by `js/deco.js`; replace with your own images any time.
**Google Map:** `js/map.js` embeds Google Maps without an API key (city picker, Use My Location, per-bank directions). Needs internet.
**Not built yet:** about, login, register, dashboard, full blood-banks and camps pages (search and camps are on the home page).

## Google Maps API (optional)
By default the map is a keyless embed. For custom markers, info windows and "nearest blood bank": create a key in Google Cloud Console (enable *Maps JavaScript API*, restrict it to your website), then paste it into `js/config.js` as `GOOGLE_MAPS_KEY`. Banks' `lat`/`lng` are in `js/data.js`.
