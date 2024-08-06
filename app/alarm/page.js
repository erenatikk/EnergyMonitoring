"use client";
import React from "react";
import AlarmSistemi from "@/components/AlarmSistemi";

function Page() {
    return (
      <div style={{ display: "flex"}}>
        <div style={{ marginLeft: "10px", padding: "10px", width: "100%"}}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px", width: "100%" }}>
              
            
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px", width: "100%" }}>
 
              
            </div>
            <AlarmSistemi />
            <div>
            <button className="button1">Button1</button>
            <button className="button2">Button2</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Page;
  
                          
