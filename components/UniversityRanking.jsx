import styles from "./UniversityRanking.module.css";
import Link from "next/link";

const universities = [
    { id: 1, worldRank: 1, countryRank: 1, name: "Massachusetts Institute of Technology", city: "Cambridge", country: "United States" },
    { id: 2, worldRank: 2, countryRank: 2, name: "Harvard University", city: "Cambridge", country: "United States" },
    { id: 3, worldRank: 3, countryRank: 1, name: "University of Oxford", city: "Oxford", country: "United Kingdom" },
    { id: 4, worldRank: 5, countryRank: 2, name: "University of Cambridge", city: "Cambridge", country: "United Kingdom" },
    { id: 5, worldRank: 6, countryRank: 3, name: "Imperial College London", city: "London", country: "United Kingdom" }
];

export default function UniversityRanking() {
    return (
        <div className={styles.container}>
            {/*<ul className={styles.menu}>*/}
            {/*    <li className={styles.menuItem} onClick={() => window.location.href = '/ranking'}>*/}
            {/*        <span className={styles.icon}>🏆</span>*/}
            {/*        <strong className={styles.menuText}>World University Ranking List</strong>*/}
            {/*    </li>*/}
            {/*</ul>*/}
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
                    {universities.map((uni) => (
                        <tr key={uni.id} className={styles.tableRow}>
                            <td>{uni.id}</td>
                            <td>
                                <span className={styles.badgeWorld}>🌍 World: {uni.worldRank}</span>{" "}
                                <span className={styles.badgeCountry}>🏛️ Country: {uni.countryRank}</span>
                            </td>
                            <td className={styles.universityName}>{uni.name}</td>
                            <td>{uni.city}</td>
                            <td>{uni.country}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
