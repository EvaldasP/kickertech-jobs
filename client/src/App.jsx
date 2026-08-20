import { useState } from "react";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadJobs = () => {
    setLoading(true);
    setError(null);
    fetch("/jobs")
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error);
          });
        }

        return res.json();
      })
      .then((data) => setJobs(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
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
        {error && <div className="alert alert-error">{error}</div>}
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
