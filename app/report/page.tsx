"use client";

import { useState } from "react";

export default function Report() {
  const [report, setReport] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Report submitted: ${report}`);
    setReport("");
  };

  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">📝 Report an Incident</h1>
      <p className="text-gray-700 mb-6">Help us by reporting any local disaster events.</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-xl mx-auto rounded-xl shadow p-6 space-y-4"
      >
        <textarea
          value={report}
          onChange={(e) => setReport(e.target.value)}
          placeholder="Describe the incident..."
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </section>
  );
}
