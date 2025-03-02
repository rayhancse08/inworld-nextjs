import { useEffect, useState } from "react";
import styles from "./UniversityList.module.css";

export default function UniversityList() {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://inworldstudentcampus.com/api/countries/") // Replace with your API URL
            .then((response) => response.json())
            .then((data) => {
                setUniversities(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching universities:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loader}>Loading universities...</div>;
    }

    return (
        <div className={styles.container}>
            {universities.map((country, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.header}>
                        <img src={country.flag} alt={country.name} className={styles.flag} />
                        <h2 className={styles.title}>{country.name}</h2>
                    </div>
                    <table className={styles.table}>
                        {/*<thead>*/}
                        {/*<tr>*/}
                        {/*    <th>University</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        <tbody>
                        {country.universities.map((university, i) => (
                            <tr key={i}>
                                <td>
                                    <div className={styles.universityRow}> {/* ✅ Row layout */}
                                        <img
                                            src={university.logo}
                                            alt={university.name}
                                            className={styles.logo}
                                        />
                                        <span className={styles.universityName} onClick={() => window.location.href = `/universities/${university.slug}`}>{university.name}</span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}
