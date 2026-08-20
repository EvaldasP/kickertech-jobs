import { Users, MapPin, Briefcase, Calendar, Euro } from "lucide-react";

const JobCard = ({
  title,
  detailsUrl,
  team,
  location,
  minSalary,
  maxSalary,
  type,
  posted,
  linkedIn,
}) => (
  <div className="card bg-base-100 shadow">
    <div className="card-body">
      <h2 className="card-title">
        <a
          href={detailsUrl}
          target="_blank"
          rel="noreferrer"
          className="link link-primary"
        >
          {title}
        </a>
      </h2>
      <div className="flex flex-wrap gap-3 text-sm text-base-content/70">
        {team && (
          <span className="flex items-center gap-1">
            <Users size={14} /> {team}
          </span>
        )}
        {location && (
          <span className="flex items-center gap-1">
            <MapPin size={14} /> {location}
          </span>
        )}
        {type && (
          <span className="flex items-center gap-1">
            <Briefcase size={14} /> {type}
          </span>
        )}
        {posted && (
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {posted}
          </span>
        )}
      </div>
      {(minSalary || maxSalary) && (
        <p className="flex items-center gap-1 text-success font-semibold">
          <Euro size={14} /> {minSalary} – {maxSalary}
        </p>
      )}
      {linkedIn && (
        <div className="card-actions justify-end">
          <a
            href={linkedIn}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-outline"
          >
            Apply on LinkedIn
          </a>
        </div>
      )}
    </div>
  </div>
);

export default JobCard;
