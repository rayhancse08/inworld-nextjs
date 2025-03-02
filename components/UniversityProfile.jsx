"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./UniversityProfile.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaStar } from "react-icons/fa";
import DOMPurify from "isomorphic-dompurify"; // Ensure safe HTML rendering

export default function UniversityProfile({ university }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [activeTab, setActiveTab] = useState("Tuition Fees");
    const universityId = university?.id
    console.log(isFavorite)

    useEffect(() => {
        checkFavoriteStatus(); // Check favorite status on mount
    }, [universityId]);

    // ✅ Check if university is already in favorites
    const checkFavoriteStatus = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const response = await fetch(`https://inworldstudentcampus.com/api/university/${universityId}/is-favorite/`, {
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setIsFavorite(data.is_favorite);
            }
        } catch (error) {
            console.error("Error checking favorite status:", error);
        }
    };

    // ✅ Handle favorite toggle
    const handleFavorite = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please log in to favorite this university.");
            return;
        }

        try {
            const response = await fetch(`https://inworldstudentcampus.com/api/university/${university.id}/toggle-favorite/`, {
                method: "POST",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setIsFavorite(data.is_favorite);
            } else {
                console.error("Failed to toggle favorite");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Tab content mapping
    const tabContent = {
        "Tuition Fees": university?.tuition_fee_and_cost,
        "Language Requirements": university?.language_requirements,
        "Application": university?.application,
        "Courses & Specialties": university?.course_speciality,
        "Research": university?.research,
        "Programs": university?.programs,
        "Scholarship Info": university?.scholarship_information,
        "Student Help": university?.international_student_help,
        "Job Opportunities": university?.job_information,
        "Top Professors": university?.top_professor,
        "Nobel Prize Winners": university?.nobel_prize,
        "About": university?.about,
        "Why It's Famous": university?.why_famous,
    };

    return (
        <div className={styles.profileContainer}>
            {/* Header Section */}
            <div className={styles.header}>
                <div className={styles.universityInfo}>
                    <Image
                        src={university?.logo || "https://via.placeholder.com/80"}
                        alt={university?.name}
                        width={60}
                        height={60}
                        className={styles.universityLogo}
                        unoptimized
                    />
                    <h1 className={styles.universityName}>{university?.name}</h1>
                </div>
                <button className={styles.favoriteButton} onClick={handleFavorite}>
                    <FaStar className={isFavorite ? styles.favActive : styles.favInactive} />
                </button>
            </div>

            {/* Contact Info */}
            <div className={styles.infoBox}>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(university?.contact_information || "") }} />

                {/* Social Media Links */}
                <div className={styles.socialIcons}>
                    {university?.social_links?.facebook && (
                        <a href={university.social_links.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className={styles.icon} />
                        </a>
                    )}
                    {university?.social_links?.twitter && (
                        <a href={university.social_links.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className={styles.icon} />
                        </a>
                    )}
                    {university?.social_links?.instagram && (
                        <a href={university.social_links.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={styles.icon} />
                        </a>
                    )}
                    {university?.social_links?.linkedin && (
                        <a href={university.social_links.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icon} />
                        </a>
                    )}
                    {university?.social_links?.youtube && (
                        <a href={university.social_links.youtube} target="_blank" rel="noopener noreferrer">
                            <FaYoutube className={styles.icon} />
                        </a>
                    )}
                </div>
            </div>

            {/* Tabs Navigation (Row-wise Layout) */}
            <div className={styles.tabsContainer}>
                {Object.keys(tabContent).map((tab) => (
                    <button
                        key={tab}
                        className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className={styles.contentWrapper}>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(tabContent[activeTab] || "No information available.") }} />
            </div>
        </div>
    );
}
