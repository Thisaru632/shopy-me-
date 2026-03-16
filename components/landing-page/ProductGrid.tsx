"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProductCard, Product as ProductType } from "./ProductCard";

interface Product extends ProductType {}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onAddToCart?: () => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ title, subtitle, products, onAddToCart }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="container-custom py-6 md:py-8">
      <div className="flex justify-between items-center mb-6 pb-2 border-b-2 border-[#008ECC] flex-wrap gap-4 px-2 md:px-0">
        <h2 className="text-lg md:text-xl font-bold text-[#666666]">
          {title} <span className="text-[#008ECC]">{subtitle}</span>
        </h2>
        <div className="flex items-center gap-4">
          <Link href="/products" className="flex items-center gap-1 text-[#666666] text-xs md:text-sm cursor-pointer hover:text-[#008ECC] transition-colors">
            View All <ChevronRight size={16} />
          </Link>
          <div className="hidden md:flex gap-2">
            <button 
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#008ECC] hover:text-white transition-all shadow-sm"
            >
                <ChevronRight size={18} className="rotate-180" />
            </button>
            <button 
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#008ECC] hover:text-white transition-all shadow-sm"
            >
                <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[240px] snap-start h-full">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};
