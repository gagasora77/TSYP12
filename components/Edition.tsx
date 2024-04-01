import styles from '@/app/index';

const Edition = () => {
    return (
        <div className={styles.editionContent}>
            <div className={styles.editionLogo}>
                Edition Logo
            </div>
            <div className={styles.editionName}>
                Edition Name
            </div>
            <div className={styles.editionStats}>
                Edition Stats
            </div>
        </div>
    );
};

export default Edition;
