import { useState } from "react";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadJobs = () => {
    setLoading(true);
    fetch("/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Kickertech Jobs Scraper</h1>
        <button
          className="btn btn-primary mb-8"
          onClick={loadJobs}
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner" />
          ) : (
            "Scrape Jobs"
          )}
        </button>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <JobCard key={job.detailsUrl} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
