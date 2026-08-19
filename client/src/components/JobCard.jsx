const JobCard = ({ title, company, location }) => (
  <div>
    <h3>{title}</h3>
    <p>{company} — {location}</p>
  </div>
);

export default JobCard;
