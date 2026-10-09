# vrijstroom-v1

Website voor Vrijstroom: off-grid energiesystemen op maat voor campers, vans en bedrijfswagens. Gebouwd door Wizarts met [Astro](https://astro.build), statisch en zonder zware frameworks.

## Lokaal draaien

```bash
npm install
npm run dev       # ontwikkelserver op http://localhost:4321
npm run build     # bouwt de site naar dist/
npm run preview   # bekijk de gebouwde site lokaal
```

## Deployen

`npm run build` maakt een statische site in `dist/`. Die map kan op elke gewone hosting (Netlify, Vercel, Cloudflare Pages of eigen hosting via FTP).

## Waar staat wat

| Wat | Waar |
|---|---|
| Instellingen: contactgegevens, WhatsApp-nummer, agenda-link, formulier-endpoint, analytics, seizoensbalk aan/uit | `src/config/site.json` |
| Teksten per pagina | `src/content/*.json` |
| Doelgroeppagina's (één bestand = één pagina) | `src/content/doelgroepen/` |
| Alle veelgestelde vragen (pagina's verwijzen ernaar via id) | `src/content/faq.json` |
| Rekentool: toestellen en verbruik | `src/content/calculator.json` |
| Foto's (wisselen = bestand vervangen, zelfde naam) | `src/assets/photos/` |
| Logo's en fonts | `public/brand/`, `public/fonts/` |
| Kleuren, typografie, knoppen | `src/styles/global.css` |

Een blok dat afhangt van ontbrekende info (prijzen, pakketten, garantie, contactgegevens) blijft verborgen tot het ingevuld is, of tot je `enabled` op `true` zet.

### Nieuwe doelgroeppagina

Kopieer `src/content/doelgroepen/campers-en-vans.json` naar bijvoorbeeld `food-trucks.json` en pas de teksten aan. De pagina verschijnt op `/food-trucks`.

## Pagina's

- `/` home, `/diensten`, `/campers-en-vans`, `/bedrijfswagens`, `/over`, `/contact`
- `/ontwerpen`: archief van de twee designrichtingen uit fase 1 (niet geïndexeerd)

## Hulpscripts

```bash
node scripts/screenshots.mjs screenshots/map / /diensten   # screenshots (vereist npm run preview + Google Chrome)
node scripts/check-interactions.mjs                         # test rekentool en formulier
```

## Foto's

De huidige foto's zijn stockbeelden en voorbeeldbeelden. Ze worden vervangen door eigen foto's van de klant.

Website door [Wizarts](https://wizarts.be).
