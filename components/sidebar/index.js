// components/sidebar/index.js
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>

      </div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link href="/dashboard" className={styles.link}>
              Panel
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/tesisler" className={styles.link}>
              Tesisler
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/ayarlar" className={styles.link}>
              Ayarlar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
