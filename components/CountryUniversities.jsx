import { useEffect, useState } from "react";
import styles from "./CountryUniversities.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CountryUniversities({ countrySlug }) {
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchCountryData = async () => {
            try {
                const response = await fetch(`https://inworldstudentcampus.com/api/countries/${countrySlug}`);
                const data = await response.json();
                setCountry(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching country data:", error);
                setLoading(false);
            }
        };

        fetchCountryData();
    }, [countrySlug]);

    if (loading) {
        return <div className={styles.loader}>Loading universities...</div>;
    }

    if (!country) {
        return <div className={styles.error}>Country data not found.</div>;
    }

    return (
        <div className={styles.container}>
            {/* Country Header with Flag */}
            {/*<div className={styles.header}>*/}
            {/*    {country.flag && (*/}
            {/*        <Image src={country.flag} alt={`${country.name} Flag`} width={60} height={40}*/}
            {/*               className={styles.flag} unoptimized />*/}
            {/*    )}*/}
            {/*    <h2>{country.name} Universities</h2>*/}
            {/*</div>*/}

            {/* Universities Table */}
            <div className={styles.tableContainer}>
                <h2 className={styles.heading}>
                    {country.flag && (
                        <Image src={country.flag} alt={`${country.name} Flag`} width={30} height={30}
                               className={styles.flag} unoptimized/>
                    )}
                    {country.name} Universities
                </h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ranking</th>
                        <th>University Name</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    {country?.universities?.length > 0 ? (
                        country?.universities?.map((uni, index) => (
                            <tr key={uni.slug} className={styles.tableRow}>
                                <td>{index + 1}</td>
                                <td>
                                    <span className={styles.badgeWorld}>🌍 {uni.world_ranking}</span>{" "}
                                    <span className={styles.badgeCountry}>🏛️ {uni.country_ranking}</span>
                                </td>
                                <td>
                                    <div className={styles.universityContainer}>
                                        {uni.logo && (
                                            <img src={uni.logo} alt="University Logo"
                                                 className={styles.universityLogo}/>
                                        )}
                                        <a href={`/university/${uni.slug}`} className={styles.universityName}>
                                            {uni.name}
                                        </a>
                                    </div>
                                </td>

                                <td>{uni.city}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className={styles.noData}>No universities found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
