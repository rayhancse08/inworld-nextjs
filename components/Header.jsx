import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import AuthNavbar from "./AuthNavbar";

export default function Header() {
    const [query, setQuery] = useState(""); // Stores user input
    const [universities, setUniversities] = useState([]); // Stores API results
    const [loading, setLoading] = useState(false); // Loading state
    const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

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
                setUniversities(data?.results || []);
            } catch (error) {
                console.error("Error fetching universities:", error);
            }
            setLoading(false);
        };

        const debounceTimer = setTimeout(fetchUniversities, 500); // Debounce API calls

        return () => clearTimeout(debounceTimer);
    }, [query]);

    return (
        <header className={styles.header}>
            {/* Mobile Menu Toggle Button */}
            <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Logo */}
            <div className={styles.logo}>
                <Link href="/">In World Student Campus</Link>
            </div>

            {/* Navigation (Mobile + Desktop) */}
            {/*<nav className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>*/}
            {/*    <Link href="/ranking">🏆 Rankings</Link>*/}
            {/*    <Link href="/countries">🌍 Top Countries</Link>*/}
            {/*    <Link href="/faq">❓ FAQ</Link>*/}
            {/*    <Link href="/guide">📖 Guide</Link>*/}
            {/*</nav>*/}

            {/* Search Bar */}
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search University..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <FaSearch className={styles.searchIcon} />

                {/* Display search results */}
                {query.trim() && (
                    <div className={styles.searchResults}>
                        {loading ? (
                            <p className={styles.loadingText}>Loading...</p>
                        ) : universities.length > 0 ? (
                            universities.map((uni, index) => (
                                <div key={index} className={styles.resultItem}>
                                    <Link
                                        href={`/universities/${uni.slug}`}
                                        passHref
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.blinkingLink}
                                    >
                                        {uni.name}
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className={styles.noResults}>No universities found</p>
                        )}
                    </div>
                )}
            </div>

            {/* Auth Buttons (Login/Signup) */}
            <div className={styles.authButtons}>
                <AuthNavbar />
                {/*<button className={styles.login} onClick={() => window.location.href = '/login'}>Login</button>*/}
                {/*<button className={styles.signup} onClick={() => window.location.href = '/signup'}>Signup</button>*/}
            </div>
        </header>
    );
}
