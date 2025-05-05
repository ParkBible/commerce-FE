"use client";

import Tags from "./components/Tags";
import HeroBanner from "./components/HeroBanner";
import CategoryGrid from "./components/CategoryGrid";
import CoffeeLetter from "./components/PromotionalContent";
import Products from "./components/product/Products";

export default function TempMainPage() {
  return (
    <main className="flex flex-col bg-white">
      <Tags />
      <div className="flex flex-col mx-auto w-full max-w-[1240px]">
        <HeroBanner />
        <CategoryGrid />
        <CoffeeLetter />
        <Products />
      </div>
     </main>
  );
} 