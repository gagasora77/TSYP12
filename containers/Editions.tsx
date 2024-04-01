import styles from '@/app/index';
import { Edition } from '@/components';

const Editions = () => {
    return (
        <div className={styles.editionsSection}>
            <Edition />
            <Edition />
            <Edition />
            <Edition />
            <Edition />
        </div>
    );
};

export default Editions;
