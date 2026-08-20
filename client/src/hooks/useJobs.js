import { useState } from "react";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/jobs");
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error);
      }
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { jobs, loading, error, loadJobs };
};

export default useJobs;
