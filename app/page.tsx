"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

export default function SpotnxtLanding() {
  const [email, setEmail] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
     {/* Floating Header */}
     <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0"}`}
      >
        <nav className="bg-black/70 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full shadow-xl flex gap-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#product" className="hover:underline">Product</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#about" className="hover:underline">About Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4 bg-gradient-to-b from-green-500 via-blue-500 to-black text-center rounded-b-[4rem]">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="Spotnxt Logo" width={64} height={64} className="rounded-full bg-white p-1 mb-4" />
          <h1 className="text-5xl font-extrabold drop-shadow-lg mb-4">Spotnxt</h1>
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-3xl max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-3 text-white">AI That Grows Your Business — While You Sleep</h2>
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
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-24 px-6 bg-black text-center rounded-t-[4rem]">
        <h2 className="text-4xl font-semibold mb-10 text-white">About the Product</h2>
        <p className="text-white/80 text-lg max-w-4xl mx-auto mb-10">
          Spotnxt is your AI growth partner. Designed for business owners and marketers, it automates your entire ad journey — from market research to optimization — with real results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-white">Target Audience</h3>
            <p className="text-white/90">Solopreneurs, small business owners, startups, and e-commerce brands looking to grow fast with minimal effort.</p>
          </div>
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-white">Smart Automation</h3>
            <p className="text-white/90">Automate ad design, copywriting, targeting, scheduling, and performance analysis — all with AI.</p>
          </div>
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-white">Time & Cost Saving</h3>
            <p className="text-white/90">Eliminates the need for a marketing team, saving hours of work and significant budget.</p>
          </div>
          <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/10">
            <h3 className="text-xl font-bold mb-2 text-white">Business Transformation</h3>
            <p className="text-white/90">Brings consistent ad results that scale your growth while you sleep.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-r from-blue-900 to-black text-center text-white rounded-b-[4rem]">
        <h2 className="text-4xl font-bold mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Free Trial</h3>
            <p className="text-white/80 mb-4">Free audit for your Meta Ads account</p>
            <span className="block text-3xl font-bold mb-4">₹0</span>
            <button className="bg-white text-black rounded-full px-6 py-2 font-semibold">Get Started</button>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-blue-500 text-black border border-white/20 rounded-3xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Grow Plan</h3>
            <p className="mb-4">Manage, analyze, audit, recommend, and optimize Meta Ads</p>
            <span className="block text-3xl font-bold mb-4">₹1599/month</span>
            <button className="bg-black text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-800">Choose Plan</button>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Scale Plan</h3>
            <p className="text-white/80 mb-4">Complete branding support with a dedicated expert</p>
            <button className="bg-white text-black rounded-full px-6 py-2 font-semibold" onClick={() => window.location.href = "mailto:support@ybonesolutions.com"}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Join Waitlist */}
      <section className="py-24 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-black text-center rounded-b-[4rem]">
        <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
        <p className="text-lg mb-6">Be the first to try Spotnxt. Get priority access, updates, and beta testing perks.</p>
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



       {/* About Us */}
       <section id="about" className="py-24 px-6 bg-gradient-to-r from-black via-blue-900 to-black text-white text-center rounded-b-[4rem]">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-white/80 text-lg max-w-3xl mx-auto">
          Spotnxt is your intelligent advertising partner — we automate and optimize everything for you so you can focus on building your business.
        </p>
        <p className="mt-6 text-white/60 text-lg">
          This website is owned and managed by <strong>YBOne Strategic Solutions Private Limited</strong>.
          <br />
          For support, contact us at: <a href="mailto:support@ybonesolutions.com" className="underline">support@ybonesolutions.com</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm bg-black text-gray-500 space-y-2">
        <p>© 2025 Spotnxt | Built with love by product experts.</p>
        <div className="flex justify-center gap-4">
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/refund" className="hover:underline">Refund Policy</a>
        </div>
      </footer>


    </main>
  );
}
