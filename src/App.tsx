/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Location from "./components/Location";
import Utilities from "./components/Utilities";
import Products from "./components/Products";
import Policy from "./components/Policy";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Location />
        <Utilities />
        <Products />
        <Policy />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
