"use client";

import React, { useState, useEffect } from "react";
import defaultProfileLogo from "../../public/images/defaultProfileLogo.jpg";
import Image from "next/image";
import { fetchUsers, updateUser, deleteUser } from "../../services/api.js";

function Page() {
  const [showUsers, setShowUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    position: "",
    company: "",
    address: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showUsers) {
      // Kullanıcıları backend'den çekme
      fetchUsers()
        .then((data) => setUsers(data))
        .catch((error) => setError(error.message));
    }
  }, [showUsers]);

  const handleToggleUsers = () => {
    setShowUsers(!showUsers);
  };

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setEditedUser({
      id: user.id,
      name: user.username, 
      position: user.position,
      company: user.company,
      address: user.address,
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id)
      .then(() => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => setError(error.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveUser = () => {
    updateUser(editedUser.id, {
      username: editedUser.name, // Eğer backend'de isim `username` olarak geçiyorsa
      position: editedUser.position,
      company: editedUser.company,
      address: editedUser.address,
    })
      .then((updatedUser) => {
        const updatedUsers = users.map((user) =>
          user.id === editedUser.id ? updatedUser : user
        );
        setUsers(updatedUsers);
        setEditingUser(null);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex-container">
      <div className="top-right">
        <button className="show-users-button" onClick={handleToggleUsers}>
          Kullanıcıları Göster
        </button>
      </div>
      {showUsers && (
        <div className="margin-left-padding">
          <div className="column-center">
            <div className="row-center">
              {users.map((user) => (
                <div className="chart-container" key={user.id}>
                  <div className="profile-section">
                    <Image
                      src={defaultProfileLogo}
                      width={50}
                      height={50}
                      className="profileIcon"
                      placeholder="blur"
                    />
                  </div>
                  <div className="facility-info">
                    <h3 className="bold-text">{user.username}</h3>
                    <div>
                      <span className="bold-text">Pozisyon:</span>
                      <span className="thin-text">{user.position}</span>
                    </div>
                    <div>
                      <span className="bold-text">Şirket:</span>
                      <span className="thin-text">{user.company}</span>
                    </div>
                    <div>
                      <span className="bold-text">Adres:</span>
                      <span className="thin-text">{user.address}</span>
                    </div>
                    <div className="button-group">
                      <button
                        className="edit"
                        onClick={() => handleEditUser(user)}
                      >
                        Düzenle
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {editingUser !== null && (
        <div className="edit-modal">
          <div className="modal-content">
            <h3>Kullanıcıyı Düzenle</h3>
            <form>
              <label>
                İsim:
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Pozisyon:
                <input
                  type="text"
                  name="position"
                  value={editedUser.position}
                  onChange={handleChange}
                />
              </label>
              <label>
                Şirket:
                <input
                  type="text"
                  name="company"
                  value={editedUser.company}
                  onChange={handleChange}
                />
              </label>
              <label>
                Adres:
                <input
                  type="text"
                  name="address"
                  value={editedUser.address}
                  onChange={handleChange}
                />
              </label>
            </form>
            <button className="save" onClick={handleSaveUser}>
              Kaydet
            </button>
            <button className="cancel" onClick={() => setEditingUser(null)}>
              İptal
            </button>
          </div>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Page;
