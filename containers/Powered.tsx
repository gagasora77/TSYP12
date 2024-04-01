import styles from '@/app/index';
import Image from 'next/image';
import Ieee from '@/public/IEEE.png';
import Section from '@/public/Section.png';
import Sb from '@/public/SB.png';
import Region from '@/public/Region.png';

const Powered = () => {
    return (
        <div className={styles.poweredSection}>
            <Image src={Ieee} alt="IEEE" className={styles.poweredLogo} />
            <Image src={Region} alt="Region" className={styles.poweredLogo} />
            <Image src={Section} alt="Section" className={styles.poweredLogo} />
            <Image src={Sb} alt="SB" className={styles.poweredLogo} />
            <Image src={Sb} alt="SB" className={styles.poweredLogo} />
            <Image src={Sb} alt="SB" className={styles.poweredLogo} />
        </div>
    );
};

export default Powered;
