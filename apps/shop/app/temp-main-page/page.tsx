"use client";

import { useState } from "react";
import InputDesign from "./components/InputDesign";
import Tags from "./components/Tags";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import CoffeeLetter from "./components/PromotionalContent";
import Products from "./components/product/Products";
import Footer from "./components/Footer";

export default function TempMainPage() {
  return (
    <main className="flex flex-col bg-white">
      <InputDesign />
      <Tags />
      <div className="flex flex-col mx-auto w-full max-w-[1240px]">
        <HeroBanner />
        <CategoryGrid />
        <CoffeeLetter />
        <Products />
      </div>
      <Footer />
    </main>
  );
} 