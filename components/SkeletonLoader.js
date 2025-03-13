// SkeletonLoader.js
import styles from "./SkeletonLoader.module.css";

export default function SkeletonLoader({ count = 2 }) {
    return (
        <div className={styles.skeletonLoaderContainer}>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className={styles.skeletonCard} />
            ))}
        </div>
    );
}
