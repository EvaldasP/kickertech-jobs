import { useState } from "react";
import JobCard from "./components/JobCard";

function App() {
  const [jobs, setJobs] = useState([]);

  const loadJobs = () => {
    fetch("/jobs")
      .then((res) => res.json())
      .then(setJobs);
  };

  return (
    <div>
      <button onClick={loadJobs}>Load Jobs</button>
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
