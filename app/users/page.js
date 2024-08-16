"use client";
import React, { useState } from "react";
import defaultProfileLogo from "../../public/images/defaultProfileLogo.jpg";
import Image from "next/image";

function Page() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "admin admin",
      position: "admin",
      company: "Çayyolu Ofisi",
      address: "admin",
    },
    {
      id: 2,
      name: "admin admin",
      position: "admin",
      company: "Çayyolu Ofisi",
      address: "admin",
    },
    {
      id: 3,
      name: "admin admin",
      position: "admin",
      company: "Çayyolu Ofisi",
      address: "admin",
    },

  ]);
  const [editingUser, setEditingUser] = useState(null);
  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    position: "",
    company: "",
    address: "",
  });

  const handleEditUser = (user) => {
    setEditingUser(user.id);
    setEditedUser(user);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSaveUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div className="flex-container">
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
                  <h3 className="bold-text">{user.name}</h3>
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
    </div>
  );
}

export default Page;
