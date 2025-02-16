import styles from "./TopCountries.module.css";

const countries = [
    { rank: 1, name: "United States", flag: "🇺🇸" },
    { rank: 2, name: "United Kingdom", flag: "🇬🇧" },
    { rank: 3, name: "Canada", flag: "🇨🇦" },
    { rank: 4, name: "Australia", flag: "🇦🇺" },
    { rank: 5, name: "Germany", flag: "🇩🇪" },
    { rank: 6, name: "France", flag: "🇫🇷" },
    { rank: 7, name: "Japan", flag: "🇯🇵" },
];

export default function TopCountries() {
    return (
        <div className={styles.container}>
            {/* Filter Section */}
            <div className={styles.filterSection}>
                <label className={styles.label}>
                    Country
                    <input type="text" className={styles.input} placeholder="Enter country" />
                </label>
                <button className={styles.filterButton}>🔍 Filter</button>
            </div>

            {/* Table Section */}
            <div className={styles.tableContainer}>
                <h2 className={styles.heading}>🌍 World Top Country Universities</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Flag</th>
                        <th>Country Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries.map((country) => (
                        <tr key={country.rank} className={styles.row}>
                            <td><span className={styles.rankBadge}>#{country.rank}</span></td>
                            <td className={styles.flag}>{country.flag}</td>
                            <td className={styles.countryName}>{country.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
