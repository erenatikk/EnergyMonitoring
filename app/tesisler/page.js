"use client";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/location';
import emailIcon from '@iconify/icons-mdi/email';
import phoneIcon from '@iconify/icons-mdi/phone';
import styles from './tesisler.module.css';

function Page() {
  const [facilities, setFacilities] = useState([
    {
      name: "Tesis 1",
      capacity: "100",
      sector: "Enerji",
      manager: "admin",
      address: "Adres 1",
      email: "email1@example.com",
      phone: "555-1234"
    },
  ]);

  const [newFacility, setNewFacility] = useState({
    name: "",
    capacity: "",
    sector: "",
    manager: "",
    address: "",
    email: "",
    phone: ""
  });

  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({ email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFacility({ ...newFacility, [name]: value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const addFacility = () => {
    let valid = true;
    const newErrors = { email: "" };

    if (!validateEmail(newFacility.email)) {
      newErrors.email = "Geçersiz e-posta adresi. Lütfen '@example.com' formatında giriniz.";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      const updatedFacilities = facilities.map((facility, index) =>
        index === editIndex ? newFacility : facility
      );
      setFacilities(updatedFacilities);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setFacilities([...facilities, newFacility]);
    }
    setNewFacility({
      name: "",
      capacity: "",
      sector: "",
      manager: "",
      address: "",
      email: "",
      phone: ""
    });
    setErrors({ email: "" });
    setShowForm(false);
  };

  const deleteFacility = (index) => {
    const updatedFacilities = facilities.filter((_, i) => i !== index);
    setFacilities(updatedFacilities);
  };

  const editFacility = (index) => {
    setNewFacility(facilities[index]);
    setShowForm(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className={styles.pageContainer}>
      <button className={styles.tesisButton} onClick={() => setShowForm(true)}>
        Tesis Ekle
      </button>

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.form}>
            <input
              name="name"
              placeholder="Tesis Adı"
              value={newFacility.name}
              onChange={handleInputChange}
            />
            <input
              name="capacity"
              placeholder="Kapasite"
              value={newFacility.capacity}
              onChange={handleInputChange}
            />
            <input
              name="sector"
              placeholder="Sektör"
              value={newFacility.sector}
              onChange={handleInputChange}
            />
            <input
              name="manager"
              placeholder="Yönetici"
              value={newFacility.manager}
              onChange={handleInputChange}
            />
            <input
              name="address"
              placeholder="Adres"
              value={newFacility.address}
              onChange={handleInputChange}
            />
            <input
              name="email"
              placeholder="E-posta"
              value={newFacility.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
            <input
              name="phone"
              placeholder="Telefon"
              value={newFacility.phone}
              onChange={handleInputChange}
            />
            <div className={styles.buttonContainer}>
              <button className={styles.addButton} onClick={addFacility}>
                {isEditing ? "Güncelle" : "Ekle"}
              </button>
              <button className={styles.cancelButton} onClick={() => setShowForm(false)}>
                Vazgeç
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.facilitiesContainer}>
        {facilities.map((facility, index) => (
          <div key={index} className={styles.chartContainer}>
            <div className={styles.facilityInfo}>
              <div className={styles.facilityNameContainer}>
                <a href="/Sayac" className={styles.facilityLink}>
                  <h3>{facility.name}</h3>
                </a>
              </div>
              <p><Icon icon={locationIcon} className={styles.icon} />Adres: {facility.address}</p>
              <p><Icon icon={emailIcon} className={styles.icon} />Email: {facility.email}</p>
              <p><Icon icon={phoneIcon} className={styles.icon} />İletişim: {facility.phone}</p>
            </div>
            <div className={styles.buttonContainer}>
              <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => deleteFacility(index)}>
                Sil
              </button>
              <button className={styles.button} onClick={() => editFacility(index)}>
                Düzenle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
