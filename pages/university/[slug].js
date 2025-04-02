import Sidebar from "@/components/SideBar";
import Header from "@/components/Header";
import UniversityProfile from '@/components/UniversityProfile'
import styles from "@/components/Home.module.css";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function University() {
    const router = useRouter();
    const { slug } = router.query;

    const [university, setUniversity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return; // Prevent fetching until slug is available

        fetch(`https://inworldstudentcampus.com/api/universities/${slug}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("University not found");
                }
                return response.json();
            })
            .then((data) => {
                setUniversity(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [slug]);

    console.log(university)
    return (

                <UniversityProfile university={university}></UniversityProfile>

    );
}
