"use client";
import React from "react";
import defaultProfileLogo from "../../public/images/defaultProfileLogo.jpg";
import Image from "next/image";
import styles from "./users.module.css";

function Page() {
  return (
    <div className="flex-container">
      <div className="margin-left-padding">
        <div className="column-center">
          <div className="row-center">
            <div className="chart-container">
              <Image src={defaultProfileLogo} width={50} height={50} style={styles.profileIcon} placeholder="blur"/>
              
              <div className="facility-info">
                <h3>admin admin</h3>
                <p className="bold-text">Pozisyon: admin</p>
                <p className="bold-text">Şirket: Çayyolu Ofisi</p>
                <p className="bold-text">Adres: admin</p>
                <button className="edit">Düzenle</button>
                <button className="delete">Sil</button>
              </div>
            </div>
            <div className="chart-container">
              <img src={defaultProfileLogo} alt="Facility" />
              <div className="facility-info">
                <h3>admin admin</h3>
                <p className="bold-text">Pozisyon: admin</p>
                <p className="bold-text">Şirket: Çayyolu Ofisi</p>
                <p className="bold-text">Adres: admin</p>
                <button className="edit">Düzenle</button>
                <button className="delete">Sil</button>
              </div>
            </div>
            <div className="chart-container">
              <img src="/path/to/image3.png" alt="Facility" />
              <div className="facility-info">
                <h3>admin admin</h3>
                <p className="bold-text">Pozisyon: admin</p>
                <p className="bold-text">Şirket: Çayyolu Ofisi</p>
                <p className="bold-text">Adres: admin</p>
                <button className="edit">Düzenle</button>
                <button className="delete">Sil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
