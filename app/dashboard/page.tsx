"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Cloud, Map, LogOut, Menu } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 240 : 70 }}
        className="bg-blue-900 text-white p-4 flex flex-col transition-all"
      >
        <button
          onClick={toggleSidebar}
          className="mb-6 focus:outline-none flex items-center space-x-2"
        >
          <Menu size={24} />
          {sidebarOpen && <span className="font-bold text-lg">DisasterX</span>}
        </button>

        <nav className="flex flex-col space-y-4">
          <Link
            href="#alerts"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <Bell size={20} />
            {sidebarOpen && <span>Alerts</span>}
          </Link>
          <Link
            href="#weather"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <Cloud size={20} />
            {sidebarOpen && <span>Weather</span>}
          </Link>
          <Link
            href="#map"
            className="flex items-center space-x-3 hover:text-blue-300"
          >
            <Map size={20} />
            {sidebarOpen && <span>Map View</span>}
          </Link>
          <Link
            href="/"
            className="flex items-center space-x-3 hover:text-blue-300 mt-auto"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </Link>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Dashboard</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Alert Section */}
          <motion.div
            id="alerts"
            className="bg-white rounded-2xl shadow p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              🚨 Live Alerts
            </h2>
            <p className="text-gray-600">
              No active disasters currently detected. System monitoring enabled.
            </p>
          </motion.div>

          {/* Weather Section */}
          <motion.div
            id="weather"
            className="bg-white rounded-2xl shadow p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              ☁️ Weather Overview
            </h2>
            <p className="text-gray-600">Temperature: 27°C | Humidity: 68%</p>
            <p className="text-gray-600">Conditions: Partly Cloudy</p>
          </motion.div>

          {/* Map Section */}
          <motion.div
            id="map"
            className="bg-white rounded-2xl shadow p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              🗺️ Map Overview
            </h2>
            <p className="text-gray-600">Drone Surveillance Map Placeholder.</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
