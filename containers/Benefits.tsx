import styles from '@/app/index';
import Image from 'next/image';
import Learn from '@/public/Learn.png';
import Network from '@/public/Network.png';
import Plan from '@/public/Plan.png';

const Benefits = () => {
    return (
        <div className={styles.benefitsSection}>
            <div className={styles.benefitsContent}>
                <div className={styles.benefitsIcon}>
                    <Image src={Learn} alt="Learn" />
                </div>
                <div className={`${styles.benefitsTitle} text-blue`}>
                    Learn
                </div>
                <div className={styles.benefitsDescription}>
                    Provide an opportunity for delegates to gain information and training skills.
                </div>
            </div>
            <div className={styles.benefitsContent}>
                <div className={styles.benefitsIcon}>
                    <Image src={Network} alt="Network" />
                </div>
                <div className={`${styles.benefitsTitle} text-red`}>
                    Network
                </div>
                <div className={styles.benefitsDescription}>
                    Network and build relationships with other volunteers within IEEE.
                </div>
            </div>
            <div className={styles.benefitsContent}>
                <div className={styles.benefitsIcon}>
                    <Image src={Plan} alt="Plan" />
                </div>
                <div className={`${styles.benefitsTitle} text-blue`}>
                    Plan
                </div>
                <div className={styles.benefitsDescription}>
                    Collectively shape the future and goals of the IEEE.
                </div>
            </div>
        </div>
    );
};

export default Benefits;
