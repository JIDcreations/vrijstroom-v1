# Opdracht: website Vrijstroom

Je bouwt de website voor Vrijstroom, een nieuwe klant van Wizarts (AI-native creatief bureau, Lochristi). Lees deze hele briefing voor je begint. Werk in het Nederlands (Vlaams), in de je-vorm.

## Skills en werkwijze

- Je hebt toegang tot alle geïnstalleerde skills en mag er zoveel gebruiken als je nuttig vindt. Bekijk bij de start welke skills beschikbaar zijn (frontend/design, SEO, toegankelijkheid, copywriting, performance, testing, …) en zet ze actief in. Je hoeft niet te vragen of je een skill mag gebruiken.
- Werk in fasen en toon na elke fase het resultaat (lokale preview + korte samenvatting). Stop na fase 1 voor een keuze.
- Vraag niets wat je kan beslissen met deze briefing. Vraag wel als een keuze moeilijk terug te draaien is.

## Wat er in deze map zit

- `brand/logo/` — alle logovarianten als SVG (horizontaal, gestapeld, positief/negatief, één kleur, woordmerk, icoon, de losse V-vorm).
- `brand/logo/icoon-animatie-referentie.html` — de logobeweging uit de logopresentatie (zeven V's die openwaaieren, daarna een heel trage draai). Neem enkel de beweging over.
- Deze prompt.

Belangrijk: de logopresentatie van Wizarts is zelf als webpagina gebouwd. Baseer de opbouw, secties of layout van de website daar **niet** op. Gebruik alleen de merkelementen (kleuren, typografie, logo, beweging, beeldtaal) en de inhoud hieronder.

## Over Vrijstroom

Vrijstroom ontwerpt en bouwt off-grid energiesystemen op maat voor campers, vans en bedrijfswagens. De ondernemer is een ervaren elektricien: wat thuis vanzelfsprekend is (juiste kabeldiktes, goede beveiliging, nette afwerking) brengt hij naar de camper, de bus en de bedrijfswagen.

Bevestigde merkinhoud (mag je letterlijk gebruiken):

- Tagline: **Vrijheid begint bij goede stroom.**
- Afsluiter: **Altijd stroom, overal vrij.**
- Missie: *Staan waar je wil, zonder walstroom.* Wij geven je de vrijheid om te staan waar je wil, met een energiesysteem op maat van hoe jij reist of werkt, gebouwd met de zorg van een ervaren elektricien en zo uitgelegd dat je er zelf mee overweg kan.
- Visie: *Veilig zoals thuis, vrij zoals onderweg.* Elke off-grid installatie onderweg moet even veilig en doordacht zijn als een goede installatie thuis.
- Pitch: *Niet te klein. Niet te groot. Precies de stroom die jij nodig hebt.* Te klein en je valt halverwege zonder stroom. Te groot en je betaalt voor wat je nooit gebruikt. En vooral veilig, want een fout in een kleine ruimte heeft grote gevolgen.
- Sfeerzinnen: "Wakker worden waar je wil." · "Stroom die je niet hoort. Vrijheid die je wel voelt." · "Koffie aan het meer. Laptop in de bergen. Geen camping nodig." · "Elke zonnestraal telt." · "Je kantoor is overal."
- Aanbod: zelfgebouwde lithiumbatterijen op maat (EVE A+-cellen), lithium-upgrades, zonnepanelen, omvormers 230V, complete off-grid systemen, ventilatie, airco, fietsdragers, systemen voor bedrijfsbussen en food trucks. Werkt met Victron.
- Vier sterke punten: echte elektricien, op maat, uitleg in gewone taal, gebouwd om lang mee te gaan.
- Werkwijze in vier stappen: gesprek → offerte → inbouw → oplevering.

Doelgroepen:

- **Reizen**: particuliere camperaars met een bestaande camper of van, en zelfbouwers ("ik heb alles gekocht, maar durf het niet zelf aan te sluiten").
- **Werken**: bedrijven met servicebussen (gereedschap laden zonder aggregaat), food trucks (stroom op events), paardentrailers/-camions.

Vrijstroom is een volledig zelfstandig merk. Noem Cal-Tech nergens op de site en gebruik geen Cal-Tech-gegevens (telefoon, e-mail, partnerlogo's). De oude site cal-tech.eu is alleen achtergrond: zo weet je dat het om een ervaren elektricien gaat. Neem er geen opbouw, teksten of logo's van over.

### Wat nog niet bevestigd is (gebruik placeholders)

De klant heeft de website-vragenlijst nog niet ingevuld. De voorbeeldantwoorden die je eventueel ziet (15 jaar ervaring, 40+ voertuigen, vanaf-prijzen, pakketten Weekend/Rondreis/Off-grid, adres in Gent, 0470-nummer, Calendly-slots, quotes van "Sarah en Tom", "Pieter", "Lien", …) zijn **verzonnen voorbeelden**. Gebruik ze nooit als feit.

Zet overal waar een feit ontbreekt een duidelijk zichtbare placeholder, bv. `[TE BEVESTIGEN: levertijd batterijwissel]`, en houd ze bij in één lijst (zie oplevering). Dit geldt voor: cijfers en levertijden, prijzen en pakketinhoud, garantievoorwaarden, adres en openingsuren, telefoon/WhatsApp/e-mail, naam en foto van de ondernemer, cases, reviews, merklogo's en het Victron-certificaat. Je mag wel de *vorm* van zinnen voorbereiden ("Offerte binnen [X] werkdagen") zodat de klant enkel nog het cijfer moet invullen.

## Pakket dat Wizarts verkocht heeft (scope)

- Mobielvriendelijke website, **maximaal 6 pagina's** (privacy- en cookiepagina tellen niet mee).
- Keuze uit twee designs.
- Inhoud op basis van de vragenlijst, met AI-ondersteunde teksten.
- Technische uitvoering met een flexibel uitbreidbare structuur.
- Basis-SEO, Google-indexatie en tracking.
- Basis-GDPR-inrichting.
- Basiscontactformulier en analytics.
- Eerste jaar gratis tekst- en fotowijzigingen via Wizarts; structuurwijzigingen in regie.

Houd het een simpele, to-the-point basiswebsite. Geen extra's die buiten deze scope vallen. Omdat Wizarts het eerste jaar tekst- en fotowijzigingen doet, moeten teksten en beelden makkelijk aan te passen zijn zonder in layoutcode te duiken.

## Structuur en navigatie

De gewenste inhoud (home, dienst, doelgroep, pakketten, werkwijze, projecten, over, vragen, contact) past niet in 6 pagina's of in één nav. Gebruik deze sitemap:

| # | Pagina | Inhoud |
|---|---|---|
| 1 | Home | Gevoel van vrijheid, kort aanbod, voor wie, waarom Vrijstroom, de ondernemer, plaats voor reviews |
| 2 | Diensten | Alle diensten met technische uitleg, pakketten, prijstransparantie, werkwijze, garantie, rekentool |
| 3 | Campers & vans | Landingspagina doelgroep reizen (particulier + zelfbouwer) |
| 4 | Bedrijfswagens | Landingspagina doelgroep werken (servicebus, food truck, paardentrailer) |
| 5 | Over Vrijstroom | De ondernemer als persoon, aanpak, projecten/cases |
| 6 | Contact | Agenda, kort formulier, WhatsApp, adres, volledige FAQ |

- Hoofdnav (desktop): Diensten · Campers & vans · Bedrijfswagens · Over + de CTA-knop. Contact zit in de CTA en de footer.
- Mobiel: logo links, CTA + menuknop rechts, menu als volledig scherm, grote tikzones.
- FAQ: per pagina 3 à 4 relevante vragen op de plek waar de twijfel ontstaat, de volledige lijst op Contact. Gebruik FAQPage-schema.
- Bouw doelgroeppagina's als één herbruikbaar sjabloon, zodat Wizarts later extra landingspagina's (bv. aparte pagina voor food trucks) kan toevoegen zonder nieuw werk.

## Vaste regels per pagina

- Bovenaan een gevoel (beeld + korte zin over vrijheid), geen uitleg of schema. Technische uitleg hoort op Diensten, niet op Home.
- Net boven de footer op elke pagina een slotblok: **"Vrij staan begint bij goede stroom"** + de hoofdknop.
- Nooit twee foto's of fotoblokken na elkaar. Rust en witruimte gaan voor drukte.
- Probleem → oplossing: start doelgroepblokken met de zin die de klant zelf zegt (placeholder tot de vragenlijst binnen is).
- Neem twijfels weg waar ze ontstaan: bv. "Zelfgebouwd, is dat veilig?" naast de batterijdienst, "Wat met de garantie van mijn camper?" bij de werkwijze.
- Tonen boven beweren: cases als vertrekpunt → aanpak → resultaat. Zolang er geen echte cases zijn: één nette lege staat ("Binnenkort: projecten uit de werkplaats"), geen nepvoorbeelden.

## Conversie

- **Eén hoofdactie, overal dezelfde knop: "Plan je gratis kennismaking".** In Bright green, de enige plek waar die kleur als vlakke knop gebruikt wordt.
- Contactpagina: eerst een online agenda waarin de bezoeker zelf zijn moment kiest (embed configureerbaar, bv. Calendly; laad pas na klik of cookietoestemming), daaronder een kort formulier als alternatief: naam, telefoon of e-mail, type voertuig, wat je wil (keuzelijst), budgetkeuze (keuzelijst met ranges, bedragen als placeholder), optioneel een foto, bericht. Verplicht alleen naam + één contactgegeven.
- Zwevende WhatsApp-knop rechtsonder op elke pagina, met voorgevulde tekst "Hallo Vrijstroom, ik stuur je een foto van mijn installatie". Mag de CTA en mobiele duimzone niet overlappen.
- Seizoensbalk bovenaan ("Klaar voor het seizoen? Nu nog een plekje vrij in [maand]"), wegklikbaar en met één instelling aan/uit te zetten.
- Rekentool "Hoeveel stroom heb ik nodig?" op Diensten: bezoeker kiest toestellen en aantal dagen, krijgt een indicatieve capaciteit en de hoofdknop. Houd hem klein en eenvoudig; vermeld dat het een indicatie is en dat het gesprek het exacte systeem bepaalt.
- Prijstransparantie zonder prijslijst: een blok "Wat is gratis, wat kost wat, wat wordt verrekend" (kennismaking gratis, offerte gratis, vanaf-prijzen per dienst, verplaatsing). Alle bedragen als placeholder.
- Gebruik concrete cijfers zodra ze bevestigd zijn (doorlooptijd, offertetermijn, garantie). Tot dan placeholders.
- Een gratis checklist in ruil voor een e-mailadres bouwen we nu niet; voorzie enkel dat een blok daarvoor later toe te voegen is.

## Marketingtoon

- Je-vorm, gewone taal, korte zinnen. Geen jargon zonder uitleg: leg vakwoorden kort uit bij eerste gebruik (BMS = Battery Management System, MPPT, DC/DC-lader, Ah).
- USP's vanuit de klant: wat merkt hij, wat wint hij ("Een week vrij staan zonder camping" i.p.v. "300 Ah lithium").
- Zet de ondernemer als persoon in beeld, met plaats voor een citaat in de stijl van "ik gebruik het zelf elke dag" (placeholder tot bevestigd).
- Credibility: nooit verzonnen reviews, claims, cijfers, logo's of certificaten. Laat een plek vrij voor echte Google-reviews. Merklogo's (Victron e.a.) en certificaten alleen tonen na bevestiging: bouw het blok, standaard verborgen. Mockup- of stockfoto's nooit voorstellen als werk van de klant.

## Design

- Huisstijl strikt volgen:
  - Kleuren: Dark nature `#002E2B` (basis, tekst, donkere vlakken), Soft sand `#FFF9E7` (achtergrond, i.p.v. wit), Bright green `#D6F468` (accent en hoofdactie). Verhouding ongeveer 50% sand, 38% dark, 12% green.
  - Contrast: Dark nature op Soft sand, Bright green op Dark nature en Dark nature op Bright green zijn goed. **Bright green nooit als tekst op Soft sand.**
  - Typografie: Unbounded SemiBold (600) voor titels, Figtree Regular (400) voor lopende tekst, Figtree 600 voor labels en knoppen. Host de fonts lokaal (GDPR, geen Google Fonts-request).
- Logo als beeldelement: gebruik het icoon of de V-vorm groot en uitgesneden als decoratie, met de beweging uit de referentie (openwaaieren bij laden, heel trage draai). Decoratieve logo's zachter zetten (transparantie), zodat ze nooit met tekst concurreren. Respecteer `prefers-reduced-motion`.
- Beeldtaal: warm natuurlijk licht, echte plekken, ontspanning (ochtend aan zee, werken aan een meer, avond onder de lampjes). Ook werkbeelden stralen rust uit. Geen schema's als sfeerbeeld. Beelden met lucht en horizon, zodat tekst of icoon erover past. Gebruik voorlopig duidelijk gemarkeerde placeholderbeelden of rechtenvrije sfeerbeelden met een `data-placeholder`-label; de klant levert later eigen foto's (fotoshoot mogelijk).
- Mobiel eerst: menuknop, belangrijke knoppen binnen duimbereik, minimaal 44 px tikzones.
- Toegankelijkheid: WCAG 2.2 AA, zichtbare focus, semantische HTML, alt-teksten.
- Footer: logo, korte omschrijving, contact, regio, links naar alle pagina's + privacy en cookies, en klein onderaan "Website door Wizarts" met link naar wizarts.be.

## Techniek

- Statische multipagina-site met een component-gebaseerde generator (voorstel: Astro), zonder zware frameworks of UI-kits. Kies zelf als je een sterke reden hebt, en leg die in één zin uit.
- Alle teksten in aparte contentbestanden (Markdown/JSON) per pagina, alle instellingen (contactgegevens, WhatsApp-nummer, agenda-link, seizoensbalk aan/uit, analytics-ID, formulier-endpoint) in één configbestand.
- Contactformulier naar een configureerbaar endpoint (bv. Web3Forms/Formspree of PHP-mail op eigen hosting), met spambescherming (honeypot), validatie en een duidelijke bedankt-staat.
- SEO: unieke titles en meta descriptions, één H1 per pagina, Open Graph, sitemap.xml, robots.txt, canonical, schema.org (LocalBusiness/Electrician met placeholders, Service, FAQPage), nette URL's (`/diensten`, `/campers-en-vans`, `/bedrijfswagens`, `/over`, `/contact`). Favicon en app-icon uit het icoon.
- Tracking: GA4 (of Plausible als alternatief) en Google Search Console-verificatie voorbereid via config; analytics laadt pas na toestemming (Consent Mode v2).
- GDPR: eenvoudige cookiebanner (weigeren even makkelijk als aanvaarden), privacy- en cookiepagina als sjabloon met placeholders voor bedrijfsgegevens, geen externe requests vóór toestemming.
- Performance: Lighthouse ≥ 95 op mobiel voor performance, toegankelijkheid, best practices en SEO. Beelden als AVIF/WebP met vaste afmetingen, lazy loading onder de vouw.

## Fasen

1. **Twee designrichtingen** (pakket: keuze uit twee designs). Bouw enkel de homepage (mobiel + desktop) in twee duidelijk verschillende richtingen binnen dezelfde huisstijl, bv. A: rustig en ruim, veel Soft sand, icoon als subtiel beeldelement; B: krachtiger, meer Dark nature-vlakken, de V als groot uitgesneden kader rond beeld. Maak screenshots van beide en **stop hier** voor de keuze van Wizarts.
2. **Volledige site** in de gekozen richting: alle 6 pagina's, componenten, content met placeholders.
3. **Techniek**: formulier, agenda, WhatsApp, seizoensbalk, rekentool, cookiebanner, analytics, SEO-bestanden.
4. **Controle**: test op 375 px, 768 px en 1440 px; Lighthouse; toegankelijkheidscheck; alle links en het formulier; controleer dat geen enkel verzonnen feit of voorbeeldquote op de site staat en dat Cal-Tech nergens voorkomt.

## Oplevering

- De werkende site + korte README (lokaal draaien, builden, deployen, waar welke tekst en instelling staat).
- `TE-BEVESTIGEN.md`: alle placeholders gegroepeerd per pagina, als concrete vragen aan de klant (bv. "Hoeveel werkdagen tot de offerte?"), zodat Wizarts die in één keer kan doorsturen.
- Screenshots van elke pagina op mobiel en desktop.
