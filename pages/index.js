import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../components/UniversityList.module.css";

export default function UniversityList({ universities = [] }) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.gridContainer}>
                {universities.map((country, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.header}>
                            <Image
                                src={country?.flag || "/default-flag.png"}
                                alt='Flag'
                                className={styles.flag}
                                width={30}
                                height={30}
                                loading={"lazy"}

                            />
                            <h2 className={styles.title}>{country?.name || "Unknown Country"}</h2>
                        </div>
                        <hr />
                        <div className={styles.universityList}>
                            {(country?.universities || []).map((university, i) => (
                                <div
                                    key={i}
                                    className={styles.universityRow}
                                    onClick={() => router.push(`/university/${university?.slug}`)}
                                >
                                    <Image
                                        src={university?.logo || "/default-logo.png"}
                                        alt="University Logo"
                                        className={styles.logo}
                                        width={30}
                                        height={30}
                                        loading={"lazy"}

                                    />
                                    <span className={styles.universityName}>
                    {university?.name || "Unknown University"}
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Fetch Data for Static Props (without ISR)
export async function getStaticProps() {
    try {
        const res = await fetch("https://inworldstudentcampus.com/api/countries/");
        const data = await res.json();

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
