export default function JobCard({ job }) {
    // pull data from argument
    const {
        image: { src, alt },
        company,
        title,
        salary,
        location,
        postDate,
    } = job;

    return (
        <div className="flex items-start content-start gap-4 my-6">
            <img src={src} alt={alt} />
            <div>
                <h2 className="text-xl font-bold relative -top-1.5">{title}</h2>
                <p className="mb-2 text-gray-400 italic">{company}</p>
                <ul className="text-sm">
                    <li>{location}</li>
                    <li>{salary}</li>
                    <li>{postDate}</li>
                </ul>
            </div>
        </div>
    );
}
