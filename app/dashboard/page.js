"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import TüketimlerChart from "@/components/TüketimlerChart";
import ReaktifChart from "@/components/ReaktifChart";
import GunlukTuketimTablosu from "@/components/GunlukTuketimTablosu";
import Header from "@/components/header";

function Page() {
  return (
    <div style={{ display: "flex"}}>
      <div style={{ marginLeft: "10px", padding: "10px", width: "100%"}}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "50px", width: "100%" }}>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "45%",
              }}
            >
              Aylık Tüketim Tablosu
              <TüketimlerChart />
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "45%",
              }}
            >
              Reaktif Oranlar
              <ReaktifChart />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "50px", width: "100%" }}>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "45%",
              }}
            >
              Aylık Tüketim Tablosu
              <TüketimlerChart />
            </div>
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                width: "45%",
              }}
            >
              Reaktif Oranlar
              <ReaktifChart />
            </div>
          </div>
          <GunlukTuketimTablosu />
        </div>
      </div>
    </div>
  );
}

export default Page;
