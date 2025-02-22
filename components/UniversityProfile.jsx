import { useState } from "react";
import styles from "./UniversityProfile.module.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import DOMPurify from "isomorphic-dompurify"; // Ensure safe HTML rendering

export default function UniversityProfile({ university }) {
    const [activeTab, setActiveTab] = useState("Tuition Fees and Costs");

    // Define tab content
    const tabContent = {
        "Tuition Fees and Costs": university?.tuition_fee_and_cost,
        "Language Requirements": university?.language_requirements,
        "Application": university?.application,
        "Course Speciality": university?.course_speciality,
        "Research": university?.research,
        "Study Program": university?.programs,
        "Scholarship Information": university?.scholarship_information,
        "International Student Help": university?.international_student_help,
        "Job Information": university?.job_information,
        "Top Professor": university?.top_professor,
        "Nobel Prize": university?.nobel_prize,
        "About": university?.about,
        "Why Famous": university?.why_famous
    };

    return (
        <div className={styles.profileContainer}>
            {/* Header Section */}
            <div className={styles.header}>
                <img
                    src={university?.logo || "https://via.placeholder.com/80"}
                    alt={university?.name}
                    className={styles.universityLogo}
                />
                <h1 className={styles.universityName}>{university?.name}</h1>
                <button className={styles.favoriteButton}>❤️</button>
            </div>

            {/* Contact Information */}
            <div className={styles.infoBox}>
                <div
                    className={styles.contactInfo}
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(university?.contact_information)}}
                />

                {/* Social Media Links */}
                <div className={styles.socialIcons}>
                    {university?.social_links?.facebook && (
                        <a href={university.social_links.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className={styles.icon}/>
                        </a>
                    )}
                    {university?.social_links?.twitter && (
                        <a href={university.social_links.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className={styles.icon}/>
                        </a>
                    )}
                    {university?.social_links?.instagram && (
                        <a href={university.social_links.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={styles.icon}/>
                        </a>
                    )}
                    {university?.social_links?.linkedin && (
                        <a href={university.social_links.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={styles.icon}/>
                        </a>
                    )}
                    {university?.social_links?.youtube && (
                        <a href={university.social_links.youtube} target="_blank" rel="noopener noreferrer">
                            <FaYoutube className={styles.icon}/>
                        </a>
                    )}
                </div>
            </div>

            {/* Tab Navigation */}
            <div className={styles.navTabs}>
                {Object.keys(tabContent).map((tab) => (
                    <button
                        key={tab}
                        className={activeTab === tab ? styles.activeTab : styles.tabButton}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Dynamic Content Based on Selected Tab */}
            <div
                className={styles.contentWrapper}
                dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(tabContent[activeTab])}}
            />
        </div>
    );
}
