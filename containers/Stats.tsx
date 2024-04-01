import styles from '@/app/index';

const Stats = () => {
    return (
        <div className={styles.statsSection}>
            <div className={styles.statsContent}>
                <div className={styles.statsStat}>
                    <div>
                        1200
                    </div>
                    <div className={styles.statsPlus}>
                        +
                    </div>
                </div>
                <div>
                    Participants
                </div>
            </div>
            <div className={styles.statsContent}>
                <div className={styles.statsStat}>
                    <div>
                        20
                    </div>
                    <div className={styles.statsPlus}>
                        +
                    </div>
                </div>
                <div>
                    Workshops
                </div>
            </div>
            <div className={styles.statsContent}>
                <div className={styles.statsStat}>
                    <div>
                        20
                    </div>
                    <div className={styles.statsPlus}>
                        +
                    </div>
                </div>
                <div>
                    Sponsors
                </div>
            </div>
            <div className={styles.statsContent}>
                <div className={styles.statsStat}>
                    <div>
                        50
                    </div>
                    <div className={styles.statsPlus}>
                        +
                    </div>
                </div>
                <div>
                    Speakers
                </div>
            </div>
        </div>
    );
};

export default Stats;
