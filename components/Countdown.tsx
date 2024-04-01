"use client";
import styles from '@/app/index';
import { useState, useEffect } from "react";

const Countdown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    useEffect(() => {
        const target = new Date('2024-12-16T08:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setDays(days);
            setHours(hours);
            setMinutes(minutes);
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className={styles.heroCountdownSection}>
            <div className={styles.heroCountdownItem}>
                <div className={styles.heroCountdownContent}>
                    <div>
                        {days}
                    </div>
                    <div>
                        Days
                    </div>
                </div>
            </div>
            <div className={styles.heroCountdownItem}>
                <div className={styles.heroCountdownContent}>
                    <div>
                        {hours}
                    </div>
                    <div>
                        Hours
                    </div>
                </div>
            </div>
            <div className={styles.heroCountdownItem}>
                <div className={styles.heroCountdownContent}>
                    <div>
                        {minutes}
                    </div>
                    <div>
                        Minutes
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
