import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./UniversityList.module.css";

export default function UniversityList({ universities = [] }) {
    const router = useRouter();

    if (!universities.length) {
        return <p>No universities available.</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                {universities.map((country, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.header}>
                            <Image
                                src={country?.flag || "/default-flag.png"}
                                alt={country?.name + " Flag"}
                                className={styles.flag}
                                width={30}
                                height={30}
                                priority
                                quality={50}
                            />
                            <h2 className={styles.title}>{country?.name || "Unknown Country"}</h2>
                        </div>
                        <hr />
                        <table className={styles.table}>
                            <tbody>
                            {(country?.universities || []).map((university, i) => (
                                <tr
                                    key={i}
                                    className={styles.universityRow}
                                    onClick={() =>
                                        router.push(`/universities/${university?.slug}`)
                                    }
                                >
                                    <td>
                                        <Image
                                            src={university?.logo || "/default-logo.png"}
                                            alt={university?.name || "University Logo"}
                                            className={styles.logo}
                                            width={30}
                                            height={30}
                                            quality={50}
                                            priority={index < 2}
                                        />
                                        <span className={styles.universityName}>
                                                {university?.name || "Unknown University"}
                                            </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const response = await fetch("https://inworldstudentcampus.com/api/countries/");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        console.log("Data is ",data)

        return {
            props: {
                universities: Array.isArray(data) ? data : [],
            },
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                universities: [],
            },
        };
    }
}
