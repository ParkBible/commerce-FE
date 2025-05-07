import Tags from "@/src/features/main/components/Tags";
import HeroBanner from "@/src/features/main/components/HeroBanner";
import CategoryGrid from "@/src/features/main/components/CategoryGrid";
import CoffeeLetter from "@/src/features/main/components/PromotionalContent";
import Products from "@/src/features/main/components/product/Products";

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