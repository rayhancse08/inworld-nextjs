import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./AuthNavbar.module.css"; // Import CSS module

export default function AuthNavbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            fetchUserProfile(token);
        }
    }, []);

    // Fetch user profile (Modify API URL as needed)
    const fetchUserProfile = async (token) => {
        try {
            const response = await fetch("https://inworldstudentcampus.com/api/profile/", {
                headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                // console.log(data);
                setUsername(data.name);
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
            setIsAuthenticated(false);
        }
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUsername("");
        router.push("/login");
    };
    console.log(username)

    return (
        <div className={styles.container}>
            {isAuthenticated ? (
                <>
                    {/* Profile & Logout */}
                    <a href="/profile" className={styles.profile}>
                        <i className="fas fa-user-circle"></i> {username}
                    </a>
                    <button onClick={handleLogout} className={styles.logout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    {/* Login & Signup */}
                    <a href="/login" className={styles.authButton}>
                        Login
                    </a>
                    <a href="/signup" className={styles.authButton}>
                        Signup
                    </a>
                </>
            )}
        </div>
    );
}
