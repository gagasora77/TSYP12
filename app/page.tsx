import styles from '@/app/index';
import { Header, Powered, Infos, Stats, Benefits, TunChallenge, VirtualTeaser, Editions, Memories } from "../containers";
export default function Home() {
  return (
    <div className="bg-primary-white dark:bg-secondary-black">
      <Header />
      <Powered />
      <Infos />
      <Stats />
      <div className={styles.homeTitle}>Event Benefits</div>
      <Benefits />
      <Editions />
      <Memories />
    </div>
  );
}