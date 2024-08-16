"use client";
import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTesislerExpanded, setIsTesislerExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTesisler = () => {
    setIsTesislerExpanded(!isTesislerExpanded);
  };

  return (
    <>
      {/* Sidebar container */}
      {!isOpen && (
        <button className={styles.menuFloating} onClick={toggleSidebar}>
          <Icon icon="basil:play-outline" />
        </button>
      )}

      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logo}>
          {/* Add your logo here */}
        </div>

        <nav className={styles.nav}>
          <ul>
            <li className={styles.navItem}>
              <Link href="/dashboard" className={styles.link}>
                <Icon icon="uil:panel-add" width="1.3em" height="1.3em" />
                <span className={styles.linkText}>Panel</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/tesisler" className={styles.link}>
              <Icon icon="carbon:location-company" width="1.2em" height="1.2em" />
                <span className={styles.linkText}>Tesisler</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/Sayac" className={styles.link}>
                <Icon icon="material-symbols-light:electric-meter-outline" width="1.3em" height="1.3em" />
                <span className={styles.linkText}>Sayaç</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/sayac-ekle" className={styles.link}>
                <Icon icon="material-symbols:gas-meter-outline" width="1.2em" height="1.2em" />
                <span className={styles.linkText}>Sayaç Ekle</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/users" className={styles.link}>
                <Icon icon="ph:user-light" width="1.3em" height="1.3em" />
                <span className={styles.linkText}>Kullanıcı</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/admin" className={styles.link}>
                <Icon icon="lets-icons:user-add-alt" width="1.3em" height="1.3em" />
                <span className={styles.linkText}>Kullanıcı Ekle</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/alarm" className={styles.link}>
                <Icon icon="streamline:notification-alarm-2" width="1.3em" height="1.3em" />
                <span className={styles.linkText}>Alarm</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/ayarlar" className={styles.link}>
                <Icon icon="uil:setting" width="1.3em" height="1.3em" />
                <span className={styles.linkText}>Ayarlar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu button inside the sidebar */}
      {isOpen && (
        <button className={styles.menu} onClick={toggleSidebar}>
          <Icon
            icon="mynaui:play"
            width="60px"
            height="40px"
            style={{ transform: 'rotate(180deg)', display: 'inline-block' }}
          />
        </button>
      )}
    </>
  );
};

export default Sidebar;
