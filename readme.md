# emalls laptop scraper project

## project structure

### scraper folder

contains the `scraper.js` script which will scrape 19 pages of the emalls laptops and store their details in `db.json`

### web folder

contains a simple frontend for the scraped content written with next.js

## Instructions

1. `cd scraper`
2. `npx json-server --port 3001 --watch db.json`
3. `cd ../web`
4. `npm run dev`
5. open `http://localhost:3000` in your browser and enjoy!
