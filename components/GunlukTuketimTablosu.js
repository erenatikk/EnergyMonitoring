import React from "react";
import styles from "./GunlukTuketimTablosu.module.css";

const GunlukTuketimTablosu = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "95%",
        marginTop: "20px",
      }}
    >
      <h2>Günlük Tüketilen Enerji</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
              SAYAÇ SERİ NO
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
              SAAT
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
              TARİH
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
              AKTİF ENERJİ FARKI
            </th>
            <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
              MAKSIMUM DEMAND
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>45239896</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>10:00:00</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>2024-07-12</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0.000</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>21132948</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>10:00:00</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>2024-07-12</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0.000</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>45239896</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>09:00:00</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>2024-07-12</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0.000</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>21132948</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>09:00:00</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>2024-07-12</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0.000</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0</td>
          </tr>
          <tr>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>45239896</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>08:00:00</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>2024-07-12</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0.000</td>
            <td style={{ padding: "8px", textAlign: "center", verticalAlign: "middle" }}>0</td>
          </tr>
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <button className={styles.button}

        >
          Hepsini Gör
        </button>
      </div>
    </div>
  );
};

export default GunlukTuketimTablosu;
