"use client";
import React from 'react';
import styles from './ayarlar.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';

function Page() {
  return (
    <div className={styles.container}>

      <Link href='/users'>
        <div className={styles.box}>
          Kullanıcılar
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
          </div>
        </div>
      </Link>

      <Link href='alarm'>
      <div className={styles.box}>
        Alarm
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>

      <Link href='tesisler'>
      <div className={styles.box}>
        Tesisler
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>

      <Link href='Sayac'>
      <div className={styles.box}>
        Sayaçlar
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>

      <Link href='Sayac'>
      <div className={styles.box}>
        Sayaçlar
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>
      
    </div>
  );
}

export default Page;
