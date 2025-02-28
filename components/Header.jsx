import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    const [query, setQuery] = useState(""); // Stores user input
    const [universities, setUniversities] = useState([]); // Stores API results
    const [loading, setLoading] = useState(false); // Loading state

    // Fetch universities when query changes
    useEffect(() => {
        if (query.trim().length < 2) {
            setUniversities([]); // Clear results if input is too short
            return;
        }

        const fetchUniversities = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://inworldstudentcampus.com/api/universities?name=${query}`);
                const data = await response.json();
                setUniversities(data?.results);
            } catch (error) {
                console.error("Error fetching universities:", error);
            }
            setLoading(false);
        };

        const debounceTimer = setTimeout(() => {
            fetchUniversities();
        }, 500); // Debounce API calls to avoid excessive requests

        return () => clearTimeout(debounceTimer);
    }, [query]);

    return (
        <header className={styles.header}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Search for universities worldwide" />
            <title>In World Student Campus</title>

            <div className={styles.logo}>In World Student Campus</div>

            {/* Search Bar */}
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search University"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <FaSearch className={styles.searchIcon} />
            </div>

            {/* Display search results */}
            {query.trim() && (
                <div className={styles.searchResults}>
                    {loading ? (
                        <p className={styles.loadingText}>Loading...</p>
                    ) : universities.length > 0 ? (
                        universities.map((uni, index) => (
                            <div key={index} className={styles.resultItem}>

                                <Link href={`/universities/${uni.slug}`} passHref target="_blank" rel="noopener noreferrer" className={styles.blinkingLink}>
                                    {uni.name}
                                </Link>

                            </div>
                        ))
                        ) : (
                        <p className={styles.noResults}>No universities found</p>
                    )}
                </div>
            )}

            {/* Authentication Buttons */}
            <div className={styles.authButtons}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Signup</button>
            </div>
        </header>
    );
}


