import styles from "./UniversityRanking.module.css";
import { useEffect, useState } from "react";

export default function UniversityRanking() {
    const [universities, setUniversities] = useState([]);
    const [initialLoading, setInitialLoading] = useState(true); // Only show loading on first fetch
    const [loading, setLoading] = useState(false); // No loading on filter clicks
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const pageSize = 100; // Display 10 universities per page

    // Filter States
    const [country, setCountry] = useState("");
    const [course, setCourse] = useState("");
    const [scholarship, setScholarship] = useState("");

    // Country & Course Autocomplete
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);

    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [showCourseDropdown, setShowCourseDropdown] = useState(false);

    // Fetch country & course lists
    useEffect(() => {
        const fetchData = async () => {
            try {
                const countryResponse = await fetch("https://inworldstudentcampus.com/api/countries");
                const countryData = await countryResponse.json();
                setCountries(countryData.map((country) => country.name).sort());

                const courseResponse = await fetch("https://inworldstudentcampus.com/api/courses");
                const courseData = await courseResponse.json();
                setCourses(courseData.map((course) => course.name).sort());
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Fetch universities
    const fetchUniversities = async (isInitialLoad = false) => {
        try {
            if (isInitialLoad) setInitialLoading(true);
            else setLoading(true);

            let apiUrl = `https://inworldstudentcampus.com/api/universities/?page=${currentPage}&page_size=${pageSize}`;
            if (country) apiUrl += `&country=${encodeURIComponent(country)}`;
            if (course) apiUrl += `&course=${encodeURIComponent(course)}`;
            if (scholarship) apiUrl += `&scholarship_availability=${scholarship}`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            setUniversities(data.results || []);
            setTotalPages(Math.ceil(data.count / pageSize));

            if (isInitialLoad) setInitialLoading(false);
            else setLoading(false);
        } catch (error) {
            console.error("Error fetching universities:", error);
            setUniversities([]);
            setLoading(false);
        }
    };

    // Initial Load
    useEffect(() => {
        fetchUniversities(true);
    }, []);

    // Fetch universities when page changes
    useEffect(() => {
        fetchUniversities();
    }, [currentPage]);

    // Handle filter button click
    const handleFilter = () => {
        setCurrentPage(1);
        fetchUniversities();
    };

    // Autocomplete handlers for country & course
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setShowCountryDropdown(true);
        setFilteredCountries(
            e.target.value.length > 0
                ? countries.filter((c) => c.toLowerCase().startsWith(e.target.value.toLowerCase()))
                : []
        );
    };

    const selectCountry = (selected) => {
        setCountry(selected);
        setShowCountryDropdown(false);
        setFilteredCountries([]);
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
        setShowCourseDropdown(true);
        setFilteredCourses(
            e.target.value.length > 0
                ? courses.filter((c) => c.toLowerCase().startsWith(e.target.value.toLowerCase()))
                : []
        );
    };

    const selectCourse = (selected) => {
        setCourse(selected);
        setShowCourseDropdown(false);
        setFilteredCourses([]);
    };

    if (initialLoading) {
        return <div className={styles.loader}>Loading universities...</div>;
    }

    return (
        <div className={styles.container}>
            {/* Filter Section */}
            <div className={styles.filterSection}>
                <label className={styles.label}>
                    Country
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Enter country"
                        value={country}
                        onChange={handleCountryChange}
                        onFocus={() => setShowCountryDropdown(true)}
                    />
                    {showCountryDropdown && filteredCountries.length > 0 && (
                        <ul className={styles.dropdown}>
                            {filteredCountries.map((c, index) => (
                                <li key={index} onClick={() => selectCountry(c)}>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    )}
                </label>

                <label className={styles.label}>
                    Course
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Enter course"
                        value={course}
                        onChange={handleCourseChange}
                        onFocus={() => setShowCourseDropdown(true)}
                    />
                    {showCourseDropdown && filteredCourses.length > 0 && (
                        <ul className={styles.dropdown}>
                            {filteredCourses.map((c, index) => (
                                <li key={index} onClick={() => selectCourse(c)}>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    )}
                </label>

                <div className={styles.scholarshipSection}>
                    <span>Scholarship Availability</span>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="scholarship"
                            value="True"
                            checked={scholarship === "True"}
                            onChange={(e) => setScholarship(e.target.value)}
                        /> Yes
                    </label>
                    <label className={styles.radioLabel}>
                        <input
                            type="radio"
                            name="scholarship"
                            value="False"
                            checked={scholarship === "False"}
                            onChange={(e) => setScholarship(e.target.value)}
                        /> No
                    </label>
                </div>

                <button className={styles.filterButton} onClick={handleFilter}>🔍 Filter</button>
            </div>

            {/* University Ranking Table */}
            <div className={styles.tableContainer}>
                <h2 className={styles.heading}>🌍 World University Ranking List</h2>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Ranking</th>
                        <th>University Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5" className={styles.loadingRow}>Fetching data...</td>
                        </tr>
                    ) : universities.length > 0 ? (
                        universities.map((uni, index) => (
                            <tr key={uni.slug} className={styles.tableRow}>
                                <td>{(currentPage - 1) * pageSize + index + 1}</td>
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
                                <td>{uni.country}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className={styles.noData}>No universities found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            {/* Pagination (Always Stays at Bottom) */}
            <div className={styles.pagination}>
                <button
                    className={styles.paginationButton}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                ⬅️ Previous
                </button>
                <span className={styles.pageInfo}>Page {currentPage} of {totalPages}</span>
                <button
                    className={styles.paginationButton}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next ➡️
                </button>
            </div>
        </div>
    );
}
