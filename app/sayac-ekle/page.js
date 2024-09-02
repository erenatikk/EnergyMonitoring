"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { createEnergyMeter } from "../../services/api";
import { useRouter } from "next/navigation"; // Import useRouter

const Page = () => {
  const router = useRouter(); // Initialize useRouter
  const [subscriptionType, setSubscriptionType] = useState("Orta Gerilim (OG)");
  const [formData, setFormData] = useState({
    serialNumber: "",
    module: 1,
    term: "",
    tariff: "",
    contractPower: "",
  });

  const handleSubscriptionChange = (e) => {
    setSubscriptionType(e.target.value);
    setFormData({
      ...formData,
      subscriptionType: e.target.value,
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEnergyMeter(formData);
      alert("Energy meter data saved successfully!");
    } catch (error) {
      console.error("Failed to save energy meter data:", error);
      alert("An error occurred while saving the data.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="subscription-buttons">
          <div className="subscription-button">
            <Icon
              icon="fluent:building-townhouse-32-filled"
              style={{ color: "black" }}
            />{" "}
            <span>Ticarethane</span>
          </div>
          <div className="subscription-button">
            <Icon icon="fa6-solid:industry" style={{ color: "black" }} />{" "}
            <span>Sanayi</span>
          </div>
          <div className="subscription-button">
            <Icon icon="f7:house-fill" /> <span>Mesken</span>
          </div>
          <div className="subscription-button">
            <Icon icon="healthicons:agriculture" style={{ color: "black" }} />{" "}
            <span>Tarım</span>
          </div>
        </div>

        <div className="form-group">
          <label>Abonelik Tanımı</label>
          <select
            value={subscriptionType}
            onChange={handleSubscriptionChange}
            name="subscriptionType"
          >
            <option value="AG">Alçak Gerilim (AG)</option>
            <option value="OG">Orta Gerilim (OG)</option>
          </select>
        </div>

        <div className="grid-container">
          <div className="form-group">
            <label>Sayaç Seri No</label>
            <input
              type="text"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Abone No</label>
            <input
              type="text"
              name="module"
              value={formData.module}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid-container">
          <div className="form-group">
            <label>Terim</label>
            <select
              name="term"
              value={formData.term}
              onChange={handleInputChange}
            >
              <option value="Tek Terim">Tek Terim</option>
              <option value="Çift Terim">Çift Terim</option>
            </select>
          </div>
          <div className="form-group">
            <label>Tarife</label>
            <select
              name="tariff"
              value={formData.tariff}
              onChange={handleInputChange}
            >
              <option value="Çok Zamanlı">Çok Zamanlı</option>
              <option value="Tek Zamanlı">Tek Zamanlı</option>
              <option value="Serbest Piyasa">Serbest Piyasa</option>
            </select>
          </div>
        </div>

        <div className="grid-container">
          <div className="form-group">
            <label>Oran</label>
            <input type="number"></input>
          </div>
        </div>

        {subscriptionType === "OG" && (
          <div className="grid-container">
            <div className="form-group">
              <label>Sözleşme Gücü</label>
              <input
                type="number"
                name="contractPower"
                value={formData.contractPower}
                onChange={handleInputChange}
                placeholder="kW"
              />
            </div>
          </div>
        )}

        <button type="submit" className="button">
          Fatura Hesapla
        </button>
      </form>

      {/* Back button to navigate to Sayaç page */}
      <button onClick={() => router.push("/Sayac")} className="button back-button">
        Sayaç
      </button>

    </div>
  );
};

export default Page;
