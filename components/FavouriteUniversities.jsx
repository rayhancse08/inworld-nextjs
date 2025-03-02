import { useEffect, useState } from "react";
import styles from "./FavouriteUniversities.module.css"; // Import CSS module

export default function FavouriteUniversities() {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUniversities = async () => {
            const token = localStorage.getItem("token"); // Get DRF auth token

            if (!token) {
                setError("Authentication token is missing. Please log in.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch("https://inworldstudentcampus.com/api/profile/", {
                    headers: {
                        "Authorization": `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data. Check your authentication.");
                }

                const data = await response.json();
                console.log(data);
                setUniversities(data?.universities);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.header}>Favourite Universities</h2>
                <div className={styles["table-container"]}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>No</th>
                            {/*<th>Ranking</th>*/}
                            <th>University Name</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {universities.map((university, index) => (
                            <tr key={university.id}>
                                <td>{index + 1}</td>
                                {/*<td>*/}
                                {/*        <span className={`${styles.badge} ${styles["badge-green"]}`}>*/}
                                {/*            World: {university.world_ranking}*/}
                                {/*        </span>*/}
                                {/*    <span className={`${styles.badge} ${styles["badge-blue"]} ml-2`}>*/}
                                {/*            Country: {university.country_ranking}*/}
                                {/*        </span>*/}
                                {/*</td>*/}
                                <td className={styles["university-name"]}>
                                    {university.logo && (
                                        <img src={university.logo} alt="University" className={styles["university-logo"]} />
                                    )}
                                    <a href={`/university/${university.slug}`} className={styles.link}>
                                        {university.name}
                                    </a>
                                </td>
                                <td>{university.city}</td>
                                <td>{university.country}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
