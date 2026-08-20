import useJobs from "../hooks/useJobs";
import JobCard from "../components/JobCard";

const JobsPage = () => {
  const { jobs, loading, error, loadJobs } = useJobs();

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
            <>
              <span className="loading loading-spinner" /> Scraping in progress,
              this may take a while...
            </>
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
};

export default JobsPage;
