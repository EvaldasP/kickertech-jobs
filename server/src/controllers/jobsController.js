import jobsService from "../services/jobsService.js";

const getJobs = (req, res) => {
  const jobs = jobsService.getJobs();

  res.json(jobs);
};

export default { getJobs };
