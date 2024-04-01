import styles from '@/app/index';
import { Countdown } from '@/components';

const Header = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroTitle}>
                    12th IEEE Tunisian Students & <br/> Young Professionals Congress
                </div>
                <div className={styles.heroSubtitle}>
                    18 - 20 December 2024 | Medina Congress Center, Yasmine Hammamet
                </div>
                <div className={styles.heroQuote}>
                    Quote of the day
                </div>
            </div>
            <Countdown />
        </div>
    );
};

export default Header;
