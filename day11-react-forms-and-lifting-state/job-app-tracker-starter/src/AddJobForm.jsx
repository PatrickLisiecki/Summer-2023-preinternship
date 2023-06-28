import React from "react";

export default function AddJobForm({ onAddJob }) {
    // ...
    const handleAddJobSubmit = (e) => {
        e.preventDefault();
        onAddJob(jobFormState);
        setJobFormState({
            title: "",
            company: "",
            location: "",
            minSalary: 0,
            maxSalary: 0,
            postDate: "",
            jobPostURL: "",
        });
    };
}
