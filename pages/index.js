// import UniversityList from "../components/UniversityList";
//
// export default function Home() {
//     return <UniversityList />;
// }


// pages/universities.js
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
                                alt={country?.name + " Flag"}
                                className={styles.flag}
                                width={30}
                                height={30}
                                priority
                                quality={50}
                            />
                            <h2 className={styles.title}>{country?.name || "Unknown Country"}</h2>
                        </div>
                        <hr/>
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

export async function getStaticProps() {
    try {
        const res = await fetch("https://inworldstudentcampus.com/api/countries/");
        const data = await res.json();

        return {
            props: {
                universities: Array.isArray(data) ? data : [],
            },
        }; // No revalidate for static HTML export
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                universities: [],
            },
        };
    }
}
