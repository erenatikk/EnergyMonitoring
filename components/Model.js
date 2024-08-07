// components/Modal.js
import { useState } from 'react';
import styles from './Modal.module.css'; // Import the CSS module for styling

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Contact Form</h2>
        {/* Add your form or content here */}
        <p>Here you can place your contact form or any content you want.</p>
      </div>
    </div>
  );
}
