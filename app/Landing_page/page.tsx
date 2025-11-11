"use client";
import React, { useEffect } from "react";

interface LandingProps {
  onEnterHome?: () => void;
}

export default function Landing({ onEnterHome }: LandingProps) {
  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (hasVisited && onEnterHome) {
      // If visited before, automatically redirect
      onEnterHome();
    } else {
      // Set flag for first visit
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, [onEnterHome]);

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
