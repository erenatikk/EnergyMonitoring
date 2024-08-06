"use client";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/location';
import emailIcon from '@iconify/icons-mdi/email';
import phoneIcon from '@iconify/icons-mdi/phone';
import styles from './tesisler.module.css';

function Page() {
  const [facilities, setFacilities] = useState([]);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFacility({ ...newFacility, [name]: value });
  };

  const addFacility = () => {
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
    <div className={styles.flexContainer}>
      <div className={styles.marginLeftPadding}>
        <button className={styles.tesisButton} onClick={() => setShowForm(true)}>Tesis Ekle</button>
        {showForm && (
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
              placeholder="Mail"
              value={newFacility.email}
              onChange={handleInputChange}
            />
            <input
              name="phone"
              placeholder="Telefon Numarası"
              value={newFacility.phone}
              onChange={handleInputChange}
            />
            <div className={styles.buttonContainer}>
              <button className={styles.addButton} onClick={addFacility}>{isEditing ? "Güncelle" : "Ekle"}</button>
              <button className={styles.cancelButton} onClick={() => setShowForm(false)}>Vazgeç</button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.facilitiesContainer}>
        {facilities.map((facility, index) => (
          <div key={index} className={styles.chartContainer}>
            <div className={styles.facilityInfo}>
              <h3>{facility.name}</h3>
              <p><Icon icon="mdi:people-add" className={styles.icon} /> Kapasite: {facility.capacity}</p>
              <p><Icon icon="mdi:company" className={styles.icon} /> Sektör: {facility.sector}</p>
              <p><Icon icon="ic:baseline-person" className={styles.icon} /> Yönetici: {facility.manager}</p>
              <p><Icon icon={locationIcon} className={styles.icon} /> Adres: {facility.address}</p>
              <p><Icon icon={emailIcon} className={styles.icon} /> Mail: {facility.email}</p>
              <p><Icon icon={phoneIcon} className={styles.icon} /> Telefon Numarası: {facility.phone}</p>
              <div className={styles.buttonContainer}>
                <button className={`${styles.button} ${styles.deleteButton}`} onClick={() => deleteFacility(index)}>Sil</button>
                <button className={styles.button} onClick={() => editFacility(index)}>Düzenle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
