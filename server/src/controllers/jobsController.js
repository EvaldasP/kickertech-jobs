import jobsService from "../services/jobsService.js";

const getJobs = async (req, res) => {
  const jobs = await jobsService.scrapeJobs();
  res.json(jobs);
};

export default { getJobs };
