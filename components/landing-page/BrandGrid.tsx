"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Brand {
    id: number;
    name: string;
    discount: string;
    bgColor: string;
    logo: string;
    image: string;
    textColor?: string;
}

interface BrandRowProps {
    title: string;
    subtitle: string;
    brands: Brand[];
    variant?: "banner" | "product";
}

export const BrandRow = ({ title, subtitle, brands, variant = "product" }: BrandRowProps) => {
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
                className="flex gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
            >
                {brands.map((brand) => (
                    variant === "banner" ? (
                        <div 
                            key={brand.id} 
                            className={`${brand.bgColor} min-w-[280px] md:min-w-[400px] rounded-2xl overflow-hidden relative flex p-5 md:p-6 min-h-[160px] md:min-h-[200px] cursor-pointer group hover:shadow-xl transition-all h-full snap-start`}
                        >
                            <div className="flex flex-col justify-center flex-1 z-10 w-1/2">
                                <div className="bg-black/10 backdrop-blur-md px-2 md:px-3 py-1 rounded-full w-fit mb-3 md:mb-4 text-[8px] md:text-[10px] text-white/80 font-bold uppercase tracking-wider">
                                    {brand.name}
                                </div>
                                <div className="text-xl md:text-2xl font-bold mb-1 md:mb-2 leading-tight">
                                    <span className={brand.textColor || "text-white"}>{brand.logo}</span>
                                </div>
                                <div className={`text-sm md:text-lg font-bold tracking-tight ${brand.textColor || "text-white"}`}>
                                    {brand.discount}
                                </div>
                            </div>

                            {/* Brand Promo Image */}
                            <div className="flex-1 relative flex items-center justify-end overflow-hidden -mr-4 md:-mr-6 -my-5 md:-my-6">
                                <div className="w-36 md:w-48 h-full relative group-hover:scale-105 transition-transform duration-500">
                                    <Image 
                                        src={brand.image} 
                                        alt={brand.name} 
                                        fill 
                                        className="object-contain object-right-bottom"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div 
                            key={brand.id} 
                            className="min-w-[200px] md:min-w-[240px] bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-all cursor-pointer relative group snap-start"
                        >
                            {/* Brand Image/Logo Container */}
                            <div className="h-32 md:h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden relative group-hover:bg-gray-100 transition-colors">
                                <div className="absolute top-0 right-0 bg-[#008ECC] text-white text-[9px] px-2 py-3 rounded-bl-xl font-bold flex flex-col items-center z-10 shadow-sm opacity-90">
                                    <span className="leading-none">{brand.discount.replace("UP TO ", "")}</span>
                                    <span className="text-[7px] leading-none mt-1 uppercase">Off</span>
                                </div>
                                <div className="w-24 h-24 md:w-32 md:h-32 relative group-hover:scale-110 transition-transform duration-500">
                                    <Image src={brand.image} alt={brand.name} fill className="object-contain p-2" />
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-sm text-[#333333] group-hover:text-[#008ECC] transition-colors">{brand.logo}</h3>
                                <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">{brand.name}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};
