"use client";

import { useState } from "react";
import styles from "./Signup.module.css";
import {useRouter} from "next/router";

export default function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("https://inworldstudentcampus.com/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Signup successful! You can now log in.");
                router.push("/");
                setFormData({ name: "", email: "", password: "" });
            } else {
                setMessage(data.error || "Signup failed. Please try again.");
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    return (
        <section className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.heading}>Sign Up</h2>
                {message && <p className={styles.message}>{message}</p>}

                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Name Field */}
                    <div className={styles.formGroup}>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className={styles.formGroup}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className={styles.formGroup}>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Signup Button */}
                    <button type="submit" className={styles.signupButton} disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </section>
    );
}
