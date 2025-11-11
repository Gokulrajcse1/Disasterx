"use client";
import React, { useState } from "react";
import Landing from "./Landing_page/page";
import Home from "./Home/page";

export default function Page() {
  const [showHome, setShowHome] = useState(false);

  return (
    <>
      {!showHome ? (
        <Landing onEnterHome={() => setShowHome(true)} />
      ) : (
        <Home />
      )}
    </>
  );
}
