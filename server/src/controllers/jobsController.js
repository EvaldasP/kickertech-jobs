import jobsService from "../services/jobsService.js";

const getJobs = async (req, res) => {
  try {
    const jobs = await jobsService.scrapeJobs();
    res.json(jobs);
  } catch (err) {
    console.error("Scraping failed:", err.message);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};

export default { getJobs };
