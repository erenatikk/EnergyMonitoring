"use client";
import React, { useState } from "react";
import Image from "next/image";
import defaultProfileLogo from "../../public/images/defaultProfileLogo.jpg";
import styles from "./admin.module.css";

function Page() {
  const initialUsers = [
    // Uncomment and add initial user data if needed
    // {
    //   name: "İsim ",
    //   position: "Pozisyon ",
    //   company: "Şirket",
    //   address: "Adres ",
    // },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({
    name: "",
    position: "",
    company: "",
    address: "",
  });
  const [newUser, setNewUser] = useState({
    name: "",
    position: "",
    company: "",
    address: "",
  });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
  };

  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = editedUser;
    setUsers(updatedUsers);
    setEditingIndex(null);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: "", position: "", company: "", address: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (editingIndex !== null) {
      setEditedUser({ ...editedUser, [name]: value });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.marginLeftPadding}>
        <div className={styles.rowCenter}>
          {users.map((user, index) => (
            <div key={index} className={styles.chartContainer}>
              {editingIndex === index ? (
                <div className={styles.facilityInfo}>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                      placeholder="İsim"
                      className={styles.input}
                    />
                    <input
                      type="text"
                      name="position"
                      value={editedUser.position}
                      onChange={handleChange}
                      placeholder="Pozisyon"
                      className={styles.input}
                    />
                    <input
                      type="text"
                      name="company"
                      value={editedUser.company}
                      onChange={handleChange}
                      placeholder="Şirket"
                      className={styles.input}
                    />
                    <input
                      type="text"
                      name="address"
                      value={editedUser.address}
                      onChange={handleChange}
                      placeholder="Adres"
                      className={styles.input}
                    />
                  </div>
                  <button
                    className={`${styles.button} ${styles.saveButton}`}
                    onClick={handleSaveEdit}
                  >
                    Kaydet
                  </button>
                  <button
                    className={`${styles.button} ${styles.cancelButton}`}
                    onClick={handleCancelEdit}
                  >
                    İptal
                  </button>
                </div>
              ) : (
                <div className={styles.facilityInfo}>
                  <Image
                    src={defaultProfileLogo}
                    width={50}
                    height={50}
                    className={styles.profileIcon}
                    placeholder="blur"
                    alt="Profile Icon"
                  />
                  <h3>{user.name}</h3>
                  <p className={styles.boldText}>Pozisyon: {user.position}</p>
                  <p className={styles.boldText}>Şirket: {user.company}</p>
                  <p className={styles.boldText}>Adres: {user.address}</p>
                  <div>
                    <button
                      className={`${styles.button} ${styles.edit}`}
                      onClick={() => handleEdit(index)}
                    >
                      Düzenle
                    </button>
                    <button
                      className={`${styles.button} ${styles.delete}`}
                      onClick={() => handleDelete(index)}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className={styles.chartContainer}>
            <div className={styles.facilityInfo}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  placeholder="İsim"
                  className={styles.input}
                />
                <input
                  type="text"
                  name="position"
                  value={newUser.position}
                  onChange={handleChange}
                  placeholder="Pozisyon"
                  className={styles.input}
                />
                <input
                  type="text"
                  name="company"
                  value={newUser.company}
                  onChange={handleChange}
                  placeholder="Şirket"
                  className={styles.input}
                />
                <input
                  type="text"
                  name="address"
                  value={newUser.address}
                  onChange={handleChange}
                  placeholder="Adres"
                  className={styles.input}
                />
              </div>
              <button
                className={`${styles.button} ${styles.add}`}
                onClick={handleAddUser}
              >
                Kullanıcı Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
