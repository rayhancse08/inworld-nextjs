import styles from "./Guide.module.css";

const steps = [
    {
        title: "Self-Assessment and Goal Setting",
        points: [
            "Identify your objectives: Determine why you want to study abroad (e.g., quality education, cultural experience, career prospects).",
            "Choose your field of study: Decide on the course or program you want to pursue.",
            "Research countries and institutions: Investigate countries that offer the best programs in your field, considering factors like language, culture, and living costs.",
        ],
    },
    {
        title: "Research and Shortlist Institutions",
        points: [
            "Search for university: Use online resources, university rankings, and academic advisors to find institutions that match your criteria.",
            "Check eligibility criteria: Review admission requirements for each university, including academic qualifications, language proficiency, and standardized tests.",
        ],
    },
    {
        title: "Prepare for Tests and Certifications",
        points: [
            "Standardized tests: Depending on your chosen destination, you might need to take tests like the TOEFL, IELTS, GRE, GMAT, etc.",
            "Language proficiency: Ensure you meet the language requirements of the institution and country (e.g., English, German, French).",
        ],
    },
    {
        title: "Financial Planning",
        points: [
            "Estimate costs: Calculate tuition fees, accommodation, living expenses, health insurance, travel costs, and other expenses.",
            "Look for scholarships and financial aid: Research scholarships, grants, and financial aid offered by university, governments, and private organizations.",
            "Budgeting: Plan your finances and consider options like part-time work, if permitted.",
        ],
    },
    {
        title: "Application Process",
        points: [
            "Prepare application documents: Gather necessary documents like transcripts, letters of recommendation, SOP, resume/CV, and application forms.",
            "Apply to university: Submit applications before the deadlines. Ensure all documents are correctly filled out and submitted.",
        ],
    },
    {
        title: "Admission and Acceptance",
        points: [
            "Wait for offers: Universities will review your application and send offer letters if you are accepted.",
            "Decision-making: Compare offers and decide which university to attend.",
            "Confirm admission: Accept the offer and pay any necessary deposits.",
        ],
    },
    {
        title: "Visa and Immigration",
        points: [
            "Apply for a student visa: Check the visa requirements for the country you will be studying in and apply for a student visa.",
            "Prepare for the visa interview: Gather required documents, such as your admission letter, financial proof, and other relevant paperwork.",
            "Attend visa interview: Prepare well for the visa interview, if required.",
        ],
    },
    {
        title: "Accommodation and Travel Arrangements",
        points: [
            "Arrange accommodation: Look for on-campus or off-campus housing and make necessary arrangements.",
            "Book flights: Once your visa is approved, book your flight tickets.",
            "Pack essentials: Make a checklist of essential items to pack, including important documents, clothing, and personal items.",
        ],
    },
    {
        title: "Pre-Departure Preparations",
        points: [
            "Attend orientation: Many university offer pre-departure orientation sessions.",
            "Health and insurance: Ensure you have adequate health insurance coverage.",
            "Understand the culture: Familiarize yourself with the cultural norms and practices of the host country.",
        ],
    },
    {
        title: "Arrival and Settling In",
        points: [
            "Airport transfer: Arrange transportation from the airport to your accommodation.",
            "University registration: Complete the registration process at your university.",
            "Explore: Familiarize yourself with the campus, city, and local services.",
        ],
    },
    {
        title: "Ongoing",
        points: [
            "Stay connected: Keep in touch with family and friends.",
            "Seek support: Utilize university resources like counseling, academic support, and career services.",
            "Engage: Participate in campus activities and explore your new environment.",
        ],
    },
];

const Guide = () => {
    return (
        <div className={styles.guideContainer}>
            <h2 className={styles.guideTitle}>Comprehensive Guide to Studying Abroad: A Step-by-Step Approach</h2>
            <hr />
            {steps.map((step, index) => (
                <div key={index} className={styles.step}>
                    <h3>{step.title}</h3>
                    <ul>
                        {step.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
            <p className={styles.finalNote}>
                By following these steps, you can effectively plan and execute your study abroad experience, ensuring a smooth
                transition and a successful academic journey.
            </p>
        </div>
    );
};

export default Guide;
