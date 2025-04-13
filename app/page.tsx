"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg"; // Ensure this image exists or update the path

export default function SpotnxtLanding() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) return;
    try {
      const res = await fetch("https://sheetdb.io/api/v1/xe4qcd22yg7sm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [{ Email: email }] }),
      });
      

      if (res.ok) {
        alert("You're on the list! 🎉");
        setEmail("");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error occurred. Try again later.");
    }
  };

  return (
    


    <main className="min-h-screen bg-gradient-to-b from-green-500 via-blue-500 to-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gradient-to-b from-green-500 via-blue-500 to-black rounded-b-[4rem]">
        <div className="flex items-center gap-4 mb-6">
          <Image src={logo} alt="Spotnxt Logo" width={48} height={48} className="rounded-full bg-white p-1" />
          <h1 className="text-5xl font-extrabold drop-shadow-lg">Spotnxt</h1>
        </div>
        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-3xl max-w-2xl w-full">
          <h2 className="text-3xl font-bold mb-3 text-white">
            AI That Grows Your Business — While You Sleep
          </h2>
          <p className="text-white/80 mb-6">
            Your smart AI agent that plans, designs, runs, and optimizes ads across platforms like Meta and Google — no marketing skills needed.
          </p>
          <div className="flex w-full gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 text-black rounded-full px-4 py-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-6 py-2"
              onClick={handleSubmit}
            >
              Get Early Access
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 text-center bg-black rounded-t-[4rem]">
        <h2 className="text-4xl font-semibold mb-12 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {["🔍 Product & Market Research", "🎨 Ad Design & Copy", "📈 Smart Ad Strategy", "⚡ Launch & Optimize"].map((title, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p className="text-white/90">
                {[
                  "Spotnxt studies your product and market trends to understand what works.",
                  "It creates scroll-stopping visuals and high-converting ad copy using AI.",
                  "Builds optimized campaigns with targeting, budgeting, and scheduling.",
                  "Launches ads, tracks results, and continuously improves your ROI."
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Spotnxt */}
      <section className="py-24 px-6 bg-gradient-to-r from-black via-blue-900 to-black text-center rounded-b-[4rem]">
        <h2 className="text-4xl font-semibold mb-12 text-white">Why Spotnxt?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {["No Marketing Experts Needed", "Saves Time & Ad Spend", "Data-Driven Decision Making", "Works 24/7"].map((benefit, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:scale-105 transition transform duration-300"
            >
              <p className="text-lg font-medium text-white">✅ {benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6 bg-black text-center rounded-t-[4rem]">
        <h2 className="text-3xl font-semibold mb-8 text-white">Perfect For</h2>
        <p className="text-white/80 text-lg max-w-3xl mx-auto">
          → Small Business Owners &nbsp; → Solopreneurs &nbsp; → E-commerce Brands &nbsp; → Startups
        </p>
      </section>

      {/* Join Waitlist */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-black text-center rounded-b-[4rem]">
        <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
        <p className="text-lg mb-6">
          Be the first to try Spotnxt. Get priority access, updates, and beta testing perks.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="text-black bg-white/90 rounded-full px-4 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-black text-white hover:bg-gray-800 font-semibold rounded-full px-6 py-2"
            onClick={handleSubmit}
          >
            Join Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm bg-black text-gray-500">
        © 2025 Spotnxt | Built with love by product experts.
      </footer>
    </main>

  );
}
