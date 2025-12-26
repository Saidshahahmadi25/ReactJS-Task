import { useState } from "react";

function JobFilters() {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("all");

  const jobs = [
    { id: 1, title: "Frontend Developer", type: "full-time", company: "Google" },
    { id: 2, title: "Backend Developer", type: "part-time", company: "Amazon" },
    { id: 3, title: "React Developer", type: "remote", company: "Netflix" },
    { id: 4, title: "UI/UX Designer", type: "full-time", company: "Meta" },
    { id: 5, title: "Junior Web Developer", type: "remote", company: "Startup Inc" },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      jobType === "all" || job.type === jobType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          💼 Job Listings
        </h2>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Jobs</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        {/* Job List */}
        <div className="space-y-3">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow transition"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {job.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {job.company}
                  </p>
                </div>

                <span
                  className={`px-3 py-1 text-sm rounded-full font-semibold
                    ${job.type === "full-time"
                      ? "bg-green-100 text-green-700"
                      : job.type === "part-time"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  `}
                >
                  {job.type}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No jobs found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobFilters;
