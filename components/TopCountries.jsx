import styles from "./TopCountries.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function TopCountries() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://inworldstudentcampus.com/api/countries/")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching countries:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className={styles.loader}>Loading countries...</div>;
    }

    return (
        <div className={styles.container}>
            {/* Table Section */}
            <div className={styles.tableContainer}>
                <h2 className={styles.heading}>🌍 Top Countries with the Best Universities</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries.map((country, index) => (
                        <tr key={index} className={styles.row}>
                            <td>
                                <span className={styles.rankBadge}>#{index + 1}</span>
                            </td>
                            <td className={styles.countryName}>
                                <img
                                    src={country.flag}
                                    alt={country.name}
                                    className={styles.flag}
                                />
                                <Link href={`/countries/${country.slug}`} className={styles.countryLink}>
                                    {country.name}
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
