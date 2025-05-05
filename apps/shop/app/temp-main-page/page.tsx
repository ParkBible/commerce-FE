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
    <div className="flex flex-col mx-auto w-[1440px] bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-8 max-w-full">
        <InputDesign />
        <Tags />
        <HeroBanner />
        <CategoryGrid />
        <CoffeeLetter />
        <Products />
        <Footer />
    </div>
  );
} 