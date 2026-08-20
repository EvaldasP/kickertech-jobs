# kickertech-jobs

A web scraper that fetches available job listings from [Kickertech](https://kickertech.com/jobs/) and displays them in a React UI.

## Requirements

- Node.js

## Setup

Install all dependencies:

```bash
npm run setup
```

## Run

```bash
npm start
```

This starts both the backend (port 3000) and frontend (port 5173).

Open [http://localhost:5173](http://localhost:5173) and click **Scrape Jobs**.

## Notes

- Puppeteer runs in non-headless mode to bypass Cloudflare protection — a browser window will open briefly during scraping
- Scraping may take up to 30 seconds
