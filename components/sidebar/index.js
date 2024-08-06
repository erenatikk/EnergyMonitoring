"use client"; // This directive tells Next.js that this is a client component
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
                <Icon icon="uil:panel-add" />
                <span className={styles.linkText}>Panel</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <div onClick={toggleTesisler} className={styles.link} style={{ cursor: 'pointer' }}>
                <Icon icon="carbon:location-company" />
                <span className={styles.linkText}>Tesisler</span>
              </div>
              {isTesislerExpanded && (
                <div className={`${styles.expanded} ${isTesislerExpanded ? styles.open : ''}`}>
                  <Link href="/tesisler" className={styles.expandedLink}>
                    Modül 1
                  </Link>
                  <Link href="/tesisler" className={styles.expandedLink}>
                    Modül 2
                  </Link>
                  <Link href="/tesisler" className={styles.expandedLink}>
                    Modül 3
                  </Link>
                </div>
              )}
            </li>
            <li className={styles.navItem}>
              <Link href="/Sayac" className={styles.link}>
                <Icon icon="dashicons:chart-pie" />
                <span className={styles.linkText}>Sayaç</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/users" className={styles.link}>
                <Icon icon="dashicons:chart-pie" />
                <span className={styles.linkText}>kullanıcı</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/alarm" className={styles.link}>
                <Icon icon="streamline:notification-alarm-2" />
                <span className={styles.linkText}>Alarm</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/ayarlar" className={styles.link}>
                <Icon icon="uil:setting" />
                <span className={styles.linkText}>Ayarlar</span>
              </Link>
            </li>
           <li className={styles.navItem}>
              <Link href="/user" className={styles.link}>
                <Icon icon="uil:setting" />
                <span className={styles.linkText}>kullanıcı</span>
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
