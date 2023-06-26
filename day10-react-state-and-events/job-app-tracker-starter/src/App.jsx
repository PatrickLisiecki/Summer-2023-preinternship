import JobCard from "./JobCard";
import jobs from "./jobs";
import "./App.css";
import { useState } from "react";

const statuses = {
    1: "Bookmarked",
    2: "Applying",
    3: "Applied",
    4: "Interviewing",
    5: "Negotiating",
    6: "Accepted",
};

function App() {
    const [selectedStatus, setSelectedStatus] = useState(1);

    const jobCards = jobs.map((job, i) => {
        return <JobCard job={job} key={i} />;
    });

    const statusButtons = Object.keys(statuses).map((statusId, i) => {
        return (
            <button
                key={i}
                children
                className={
                    selectedStatus === parseInt(statusId)
                        ? "bg-blue-500"
                        : "bg-blue-400"
                }
                onClick={() => setSelectedStatus(parseInt(statusId))}
            >
                {statuses[statusId]}
            </button>
        );
    });

    return (
        <div className="mx-auto max-w-4xl">
            <h1 className="my-4">Job Application Tracker</h1>
            <div className="grid grid-cols-6 gap-2 my-4">{statusButtons}</div>
            {jobCards}
        </div>
    );
}

export default App;
