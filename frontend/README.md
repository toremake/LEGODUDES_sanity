# LEGODUDES_sanity
Dette er forelesningsprosjektet hvor vi kobler LEGOGDUDES-nettbutikken laget med React i tidligere forelesninger med datalagringsløsningen [Sanity](https://sanity.io).

## Installasjon
Forutsetninger: Hvis du ønsker å hente dette prosjektet, må du ha et Sanity-prosjekt på din egen Sanity-bruker. Dette kan du sette opp ved å gå til [Sanity.io/manage](https://sanity.io/manage). Lag et tomt prosjekt kalt `legodudes`, og merk deg prosjekt-IDen dette får.

1. Last ned .zip av dette repositoriet
2. Pakk opp .zip-filen
3. Kopier filene til en lokal mappe eller et eget GitHub-repository
4. Åpne prosjektmappen fra punkt 3 i Visual Studio Code
5. Finn filen /frontent/sanity/client.js. Endre `projectId` til prosjekt-IDen fra ditt eget sanity-prosjekt.
6. Finn filen /sanity/sanity.config.js. Endre `title` til `legodudes` (eller navnet på ditt Sanity-prosjekt) og `projektId` til prosjekt-IDen på ditt Sanity-prosjekt.
7. Åpne en terminal
8. Skriv `cd sanity`, deretter `npm install`. Når installasjonen er ferdig, skriv `npm run dev`.
9. I løpet av steg 8 vil du enten få en feilmelding om at du ikke er logget inn med riktig bruker, eller få beskjed om å logge på. Hvis det kreves (les i terminalen, installasjonen vil avbrytes og be om pålogging), skriv kommandoen `sanity login` i terminalen og gjennomfør innloggingen før du kjører kommandoene `npm install` og `npm run dev` på nytt.
10. Åpne en ny terminal
11. Skriv `cd frontend`, deretter `npm install`. Når installasjonen er fullført, skriv `npm run dev`.
12. Åpne `localhost:5173` og `localhost:3333` for å sjekke at React-applikasjonen og Sanity Studio kjører som forventet.
13. Hvis dette er første gangen du kjører opp Sanity-prosjektet, er dette klart for å ta imot innhold (ref. /sanity/schemaTypes/categories.js og /sanity/schemaTypes/products.js. [Les mer om Sanity Schema](https://www.sanity.io/docs/schema-types)). Da må du legge inn et par kategorier og produkter.