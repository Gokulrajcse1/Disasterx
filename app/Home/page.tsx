"use client";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <h1>DisasterX Home</h1>
      <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#0070f3",
            color: "white",
            cursor: "pointer",
          }}
        >
          Dashboard
        </button>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#0070f3",
            color: "white",
            cursor: "pointer",
          }}
        >
          Profile
        </button>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#0070f3",
            color: "white",
            cursor: "pointer",
          }}
        >
          Help
        </button>
      </div>
    </div>
  );
}
