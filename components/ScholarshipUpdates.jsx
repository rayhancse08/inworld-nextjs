import styles from "./ScholarshipUpdates.module.css";
import { useEffect, useState } from "react";

const ScholarshipUpdates = () => {
    const [scholarshipNotices, setScholarshipNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://inworldstudentcampus.com/api/notices/")
            .then((response) => response.json())
            .then((data) => {
                setScholarshipNotices(data.results || []); // Fix potential undefined issue
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching scholarship updates:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loader}>Loading scholarship updates...</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>🎓 Scholarship Updates</h2>
            {scholarshipNotices.length > 0 ? (
                scholarshipNotices.map((notice, index) => (
                    <div key={index} className={styles.noticeCard}>
                        <div className={styles.noticeHeader}>
                            <strong>{notice.title}</strong>
                        </div>
                        <div className={styles.noticeContent}>
                            <p dangerouslySetInnerHTML={{ __html: notice.content }}></p>
                        </div>
                    </div>
                ))
            ) : (
                <p className={styles.loader}>No scholarship updates available.</p>
            )}
        </div>
    );
};

export default ScholarshipUpdates;
