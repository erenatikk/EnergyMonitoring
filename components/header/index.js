import React from "react";
import { Icon } from "@iconify/react";
import bellIcon from "@iconify/icons-mdi/bell";
import styles from "./header.module.css";
import Image from "next/image";
import logo from "../../public/images/united.png";
import profileLogo from "../../public/images/defaultProfileLogo.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} className={styles.logoImage} />
      <div className={styles.rightSection}>
        <div className={styles.notificationBox}>
          <Icon icon="mdi:bell-outline" />
        </div>

        <Image src={profileLogo} className={styles.profileIcon} />
        <button className={styles.logoutButton}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
