import { useState } from "react";
import styles from "./Faq.module.css";
const faqData = [
    {
        category: "General Questions",
        questions: [
            {
                question: "Why should I study abroad?",
                answer:
                    "Studying abroad offers a chance to experience new cultures, gain international perspectives, improve language skills, and enhance your resume.",
            },
            {
                question: "What are the benefits of studying abroad?",
                answer:
                    "Benefits include personal growth, improved career prospects, global networking opportunities, and exposure to different teaching styles and educational systems.",
            },
            {
                question: "How do I choose the right country and university?",
                answer:
                    "Consider factors such as the quality of education, language of instruction, cost of living, cultural preferences, and career opportunities. Research university rankings and specific programs.",
            },
            {
                question: "What are the best universities for my field of study?",
                answer:
                    "Look at global rankings such as QS World University Rankings, THE, and subject-specific rankings. Consult academic advisors and alumni for recommendations.",
            },
        ],
    },
    {
        category: "Application Process",
        questions: [
            {
                question: "What are the admission requirements?",
                answer:
                    "Requirements vary but generally include academic transcripts, language proficiency scores, standardized test scores (if applicable), letters of recommendation, and a statement of purpose.",
            },
            {
                question: "When are the application deadlines?",
                answer:
                    "Deadlines vary by institution and program. Typically, applications for fall semester are due between November and January, while spring semester deadlines can range from June to October.",
            },
        ],
    },
    {
        category: "Financial Aspects",
        questions: [
            {
                question: "How much does it cost to study abroad?",
                answer:
                    "Costs vary widely but include tuition fees, accommodation, living expenses, health insurance, and travel. Research specific universities and cities for detailed budgets.",
            },
            {
                question: "Are there scholarships or financial aid available?",
                answer:
                    "Yes, many universities, governments, and private organizations offer scholarships, grants, and financial aid for international students. Research and apply early.",
            },
        ],
    },
    {
        category: "Visa and Immigration",
        questions: [
            {
                question: "What type of visa do I need?",
                answer:
                    "You will need a student visa specific to the country you are studying in. Check the embassy or consulate website for detailed information.",
            },
            {
                question: "How do I apply for a student visa?",
                answer:
                    "Collect required documents such as an admission letter, proof of financial resources, and health insurance. Complete the application form and attend a visa interview if required.",
            },
        ],
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.faqTitle}>Common Questions and Answers About Studying Abroad</h2>

            <div>
                {faqData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={styles.faqSection}>
                        <h3>{section.category}</h3>
                        <ul className={styles.faqList}>
                            {section.questions.map((item, index) => {
                                const isOpen = openIndex === `${sectionIndex}-${index}`;
                                return (
                                    <li key={index} className={styles.faqItem}>
                                        <button
                                            className={styles.faqButton}
                                            onClick={() => toggleAnswer(`${sectionIndex}-${index}`)}
                                        >
                                            {item.question}
                                            <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                        {isOpen ? "▲" : "▼"}
                      </span>
                                        </button>
                                        {isOpen && <div className={styles.faqAnswer}>{item.answer}</div>}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
