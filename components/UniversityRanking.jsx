import styles from "./UniversityRanking.module.css";
import { useEffect, useState } from "react";

export default function UniversityRanking() {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 100; // Adjust the number of items per page

    useEffect(() => {
        fetch(`https://inworldstudentcampus.com/api/universities/?page=${currentPage}&page_size=${pageSize}`)
            .then((response) => response.json())
            .then((data) => {
                setUniversities(data.results);
                setTotalPages(Math.ceil(data.count / pageSize)); // Calculate total pages
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching universities:", error);
                setLoading(false);
            });
    }, [currentPage]); // Re-fetch data when currentPage changes

    if (loading) {
        return <div className={styles.loader}>Loading universities...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.filterSection}>
                <label className={styles.label}>
                    Country
                    <input type="text" className={styles.input} placeholder="Enter country" />
                </label>
                <label className={styles.label}>
                    Course
                    <input type="text" className={styles.input} placeholder="Enter course" />
                </label>
                <div className={styles.scholarshipSection}>
                    <span>Scholarship Availability</span>
                    <label className={styles.radioLabel}>
                        <input type="radio" name="scholarship" /> Yes
                    </label>
                    <label className={styles.radioLabel}>
                        <input type="radio" name="scholarship" /> No
                    </label>
                </div>
                <button className={styles.filterButton}>🔍 Filter</button>
            </div>

            <div className={styles.tableContainer}>
                <h2 className={styles.heading}>🌍 World University Ranking List</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ranking</th>
                        <th>University Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {universities.map((uni, index) => (
                        <tr key={uni.slug} className={styles.tableRow}>
                            <td>{(currentPage - 1) * pageSize + index + 1}</td>
                            {/* Global sequence number */}
                            <td>
                                <span className={styles.badgeWorld}>🌍 World: {uni.world_ranking}</span>{" "}
                                <span className={styles.badgeCountry}>🏛️ Country: {uni.country_ranking}</span>
                            </td>
                            <td
                                className={styles.universityName}
                                onClick={() => window.location.href = `/universities/${uni.slug}`}
                            >
                                {uni.name}
                            </td>
                            <td>{uni.city}</td>
                            <td>{uni.country}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className={styles.pagination}>
                <button
                    className={styles.paginationButton}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    ⬅️ Previous
                </button>
                <span className={styles.pageInfo}>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className={styles.paginationButton}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next ➡️
                </button>
            </div>
        </div>
    );
}
