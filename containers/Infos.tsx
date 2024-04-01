import styles from '@/app/index';
import Image from 'next/image';
import Section from '@/public/Section.png';
import AboutTSYP from '@/public/AboutTSYP.jpg';

const Infos = () => {
    return (
        <div className={styles.infosSection}>
            <div className={styles.infosContent}>
                <div className="w-[50%]">
                    <div className={styles.infosTitle}>
                        IEEE TSYP 12 Congress
                    </div>
                    <div className={styles.infosDescription}>
                        The Tunisian Students and Young Professionals (TSYP) Congress is an annual gathering of IEEE members in Tunisia. Organized by IEEE ENETCOM Student Branch and IEEE Tunisia Section, the 12th edition provides a unique opportunity to delve into current and future challenges in science and engineering, connect with the national and international IEEE network, and share experiences, under the theme Tunisia 2056.
                    </div>
                    <div>
                        <button className={styles.infosButton}>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className={styles.infosRectangleRight} />
                    <Image src={AboutTSYP} alt="TSYP" className={styles.infosImageRight} />
                </div>
            </div>
            <div className={styles.infosContent}>
                <div className="w-[50%]">
                    <div className={styles.infosRectangleLeft} />
                    <Image src={Section} alt="Section" className={styles.infosImageLeft} />
                </div>
                <div className="w-[50%]">
                    <div className={styles.infosTitle}>
                        IEEE Tunisia Section
                    </div>
                    <div className={styles.infosDescription}>
                        Founded in 2008, the IEEE Tunisia Section is dedicated to spreading IEEE initiatives throughout Tunisia. This is achieved through educational and technical programs, networking opportunities, and the advancement of technology and its applications to address humanitarian challenges.
                        <br />
                        The section actively supports chapters, special interest groups, student activities, and student awards. IEEE has firmly established its presence in the Tunisian engineering community, with over 43 Student Branches located across various engineering schools, faculties, and universities.
                    </div>
                    <div>
                        <button className={styles.infosButton}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${styles.infosStoryContent} story-bg story-img`}>
                <div className="w-[50%] z-20">
                    <div className={`${styles.infosStoryRectangle}`} />
                    <div className="">
                        <Image src={AboutTSYP} alt="TSYP" className={styles.infosImageOne} />
                        <Image src={AboutTSYP} alt="TSYP" className={styles.infosImageTwo} />
                        <Image src={AboutTSYP} alt="TSYP" className={styles.infosImageThree} />
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className={styles.infosStory}>
                        Our Story
                    </div>
                    <div className={styles.infosTitle}>
                        IEEE ENET’Com Student Branch
                    </div>
                    <div className={styles.infosDescription}>
                        IEEE ENET’Com Student Branch was founded on November 11th, 2013. it is home to more than 300 members, making it the largest Student Branch in Sfax, and 2th in Tunisia Section.
                        <br />
                        It encompasses 6 Technical Chapters:  CS, EMBS, IAS, PES, CAS,RAS, and 1 Affinity Group:  WIE. We have had the honor of receiving more than ... worldwide IEEE Awards across all fields through the dedication and commitment of each of our members.
                    </div>
                    <div>
                        <button className={styles.infosButton}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Infos;
