"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CategoryGridProps {
  categories: Category[];
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
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
          Shop From <span className="text-[#008ECC]">Top Categories</span>
        </h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-[#666666] text-xs md:text-sm cursor-pointer hover:text-black">
            View All <ChevronRight size={16} />
          </div>
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
        className="flex gap-6 md:gap-10 overflow-x-auto pb-6 scrollbar-hide snap-x px-4 md:px-0"
      >
        {categories.map((category) => (
          <Link 
            href={`/products?category=${encodeURIComponent(category.name)}`} 
            key={category.id} 
            className="flex flex-col items-center gap-2 md:gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer group snap-start"
          >
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#F3F9FB] border-2 border-transparent group-hover:border-[#008ECC] flex items-center justify-center p-3 md:p-4 transition-all group-hover:scale-110 shadow-sm relative overflow-hidden">
                {category.image ? (
                  <Image src={category.image} alt={category.name} fill className="object-contain p-3 md:p-4 group-hover:rotate-6 transition-transform duration-500" />
                ) : (
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gray-200 rounded-lg" />
                )}
            </div>
            <span className="text-[10px] md:text-sm font-medium text-[#666666] group-hover:text-[#008ECC] transition-colors text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
