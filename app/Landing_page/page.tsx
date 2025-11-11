"use client";
import React from "react";

interface LandingProps {
  onEnterHome?: () => void;
}

export default function Landing({ onEnterHome }: LandingProps) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0070f3, #00c6ff)",
        color: "white",
      }}
    >
      <h1>Welcome to DisasterX</h1>
      <p>AI-powered disaster management system</p>
      <button
        onClick={onEnterHome}
        style={{
          padding: "12px 24px",
          marginTop: "20px",
          background: "white",
          color: "#0070f3",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        GET STARTED
      </button>
    </div>
  );
}
