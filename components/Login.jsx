import { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://inworldstudentcampus.com/api/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.token); // Store token for authentication
                router.push("/"); // Redirect to the dashboard
            } else {
                setError(data.error || "Invalid login credentials");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleLogin} className={styles.form}>
                <label>Email</label>
                <input
                    type="email"
                    className={styles.inputField}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password</label>
                <input
                    type="password"
                    className={styles.inputField}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit" disabled={loading} className={styles.buttonSubmit}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
}
