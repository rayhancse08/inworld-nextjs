import styles from "./ScholarshipUpdates.module.css";
import {useEffect, useState} from "react";

// const scholarshipNotices = [
//     {
//         title: "Full Ride Scholarship 2024",
//         content: "Apply now for the prestigious Full Ride Scholarship covering tuition, accommodation, and living expenses.",
//     },
//     {
//         title: "Merit-Based Scholarships Available",
//         content: "Students with outstanding academic records can apply for merit-based scholarships at top universities.",
//     },
//     {
//         title: "International Students Aid",
//         content: "Financial aid programs are now open for international students pursuing higher education abroad.",
//     },
// ];

const ScholarshipUpdates = () => {
    const [scholarshipNotices, setScholarshipNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://inworldstudentcampus.com/api/notices/")
            .then((response) => response.json())
            .then((data) => {
                setScholarshipNotices(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching universities:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loader}>Loading countries...</div>;
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Scholarship Update</h2>
            {scholarshipNotices.results?.map((notice, index) => (
                <div key={index} className={styles.noticeCard}>
                    <div className={styles.noticeHeader}>
                        <strong>{notice.title}</strong>
                    </div>
                    <div className={styles.noticeContent}>
                        <p dangerouslySetInnerHTML={{ __html: notice.content }}></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScholarshipUpdates;
