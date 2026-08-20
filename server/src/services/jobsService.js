import puppeteer from "puppeteer";
import * as cheerio from "cheerio";

const scrapeJobs = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-blink-features=AutomationControlled"],
  });
  const page = await browser.newPage();

  try {
    await page.goto("https://kickertech.com/jobs/", {
      waitUntil: "networkidle2",
      timeout: 60000,
    });

    await page.waitForSelector("article", { timeout: 30000 });

    const html = await page.content();
    const $ = cheerio.load(html);

    const jobs = $("article.creativesplanet-ele-jobs")
      .map((_, el) => {
        const salaryText = $(el)
          .find(".cspt-jobs-salary")
          .clone()
          .children()
          .remove()
          .end()
          .text()
          .trim();

        const { minSalary, maxSalary } = parseSalary(salaryText);

        return {
          title: $(el).find(".pbmit-job-position a").text().trim(),
          detailsUrl: $(el).find(".pbmit-job-position a").attr("href"),
          team: $(el).find(".pbmit-company-name").text().trim(),
          location: $(el).find(".cspt-jobs-location").text().trim(),
          minSalary,
          maxSalary,
          type: $(el).find(".cspt-jobs-job-type").text().trim(),
          posted: $(el).find(".cspt-jobs-date time").text().trim(),
        };
      })
      .get();

    for (const job of jobs) {
      job.linkedIn = await scrapeLinkedIn(page, job.detailsUrl);
    }

    return jobs;
  } finally {
    await browser.close();
  }
};

const parseSalary = (salaryText) => {
  const numbers = salaryText.match(/\d+/g);

  if (!numbers || numbers.length < 2) {
    return { minSalary: null, maxSalary: null };
  }

  return { minSalary: parseInt(numbers[0]), maxSalary: parseInt(numbers[1]) };
};

const scrapeLinkedIn = async (page, url) => {
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  const html = await page.content();
  const $ = cheerio.load(html);
  const linkedIn =
    $(".application_details a[href*='linkedin.com']").first().attr("href") ||
    null;
  return linkedIn;
};

export default { scrapeJobs };
