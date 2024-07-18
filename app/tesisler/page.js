"use client";
import React from "react";

function Page() {
  return (
    <div className="flex-container">
      <div className="margin-left-padding">
        <button className="tesisButton">Tesis Ekle</button>
        <div className="column-center">
          <div className="row-center">
            <div className="chart-container">
              <div className="facility-info">
                <h3>Çayyolu Ofisi</h3>
                <p>Kapasite: 60</p>
                <p>Sektör: Mesol</p>
                <p>Yönetici: admin admin</p>
                <p>Adres: Çayyolu/Ankara</p>
                <p>Mail: mesol@mesol</p>
                <p>Telefon Numarası: 1234567890</p>
                <button className="button">Düzenle</button>
                <button className="button">Sil</button>
              </div>
            </div>
            <div className="chart-container">
              <div className="facility-info">
                <h3>Kızılay Ofisi</h3>
                <p>Kapasite: 80</p>
                <p>Sektör: Tech</p>
                <p>Yönetici: John Doe</p>
                <p>Adres: Kızılay/Ankara</p>
                <p>Mail: john@tech.com</p>
                <p>Telefon Numarası: 0987654321</p>
                <button className="button">Düzenle</button>
                <button className="button">Sil</button>
              </div>
            </div>
            <div className="chart-container">
              <div className="facility-info">
                <h3>Başkent Ofisi</h3>
                <p>Kapasite: 100</p>
                <p>Sektör: Finance</p>
                <p>Yönetici: Jane Smith</p>
                <p>Adres: Başkent/Ankara</p>
                <p>Mail: jane@finance.com</p>
                <p>Telefon Numarası: 1122334455</p>
                <button className="button">Düzenle</button>
                <button className="button">Sil</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
