"use client";
import React from 'react';
import styles from './ayarlar.module.css';
import Link from 'next/link';
import { Icon } from '@iconify/react';

function Page() {
  return (
    <div className={styles.container}>

      <Link href='#'>
        <div className={styles.box}>
          #
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
          </div>
        </div>
      </Link>

      <Link href='#'>
      <div className={styles.box}>
        #
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>

      <Link href='#'>
      <div className={styles.box}>
        #
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>

      <Link href='#'>
      <div className={styles.box}>
        #
        <div className={styles.buttonContainer}>
        <button className={styles.button}>
            <Icon icon="icomoon-free:menu" className={styles.icon} />
            </button>
        </div>
      </div>
      </Link>

      <Link href='#'>
      <div className={styles.box}>
        #
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
