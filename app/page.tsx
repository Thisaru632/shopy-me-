"use client";

import React, { useRef, useState } from "react";
import { Header } from "@/components/landing-page/Header";
import { HeroSlider } from "@/components/landing-page/HeroSlider";
import { ProductGrid } from "@/components/landing-page/ProductGrid";
import { CategoryGrid } from "@/components/landing-page/CategoryGrid";
import { BrandRow } from "@/components/landing-page/BrandGrid";
import { Footer } from "@/components/landing-page/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { allProducts } from "@/lib/data";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const smartphoneProducts = allProducts.filter(p => p.category === "Mobile").slice(0, 5);
  const cosmeticProducts = allProducts.filter(p => p.category === "Cosmetics").slice(0, 5);
  const furnitureProducts = allProducts.filter(p => p.category === "Furniture").slice(0, 5);
  const watchProducts = allProducts.filter(p => p.category === "Watches").slice(0, 5);
  const decorProducts = allProducts.filter(p => p.category === "Decor Accessories").slice(0, 5);

  const electronicsBrands = [
    { id: 1, name: "IPHONE", discount: "UP TO 80% OFF", bgColor: "bg-[#2B2B2B]", logo: "", image: "/iphone_promo.png" },
    { id: 2, name: "REALME", discount: "UP TO 80% OFF", bgColor: "bg-[#FFF9E6]", logo: "realme", textColor: "text-amber-900", image: "/realme_promo.png" },
    { id: 3, name: "XIAOMI", discount: "UP TO 80% OFF", bgColor: "bg-[#FFF2EB]", logo: "MI", textColor: "text-orange-900", image: "/xiaomi_promo.png" },
  ];

  const categories = [
    { id: 1, name: "Mobile", image: "/s22_ultra.png" },
    { id: 2, name: "Cosmetics", image: "/cosmetics.png" },
    { id: 3, name: "Electronics", image: "/electronics.png" },
    { id: 4, name: "Furniture", image: "/furniture.png" },
    { id: 5, name: "Watches", image: "/smartwatch.png" },
    { id: 6, name: "Decor", image: "/essentials.png" },
    { id: 7, name: "Accessories", image: "/cosmetics.png" },
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} />
      <main>
        <HeroSlider />
        <ProductGrid 
          title="Grab the best deal on" 
          subtitle="Smartphones" 
          products={smartphoneProducts} 
          onAddToCart={() => setCartCount(prev => prev + 1)}
        />
        <CategoryGrid categories={categories} />
        
        <BrandRow 
           title="Top" 
           subtitle="Electronics Brands" 
           brands={electronicsBrands} 
           variant="banner"
        />
        
        <ProductGrid 
           title="Grab the best deal on" 
           subtitle="Cosmetics" 
           products={cosmeticProducts} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />
        
        <ProductGrid 
           title="Grab the best deal on" 
           subtitle="Furniture" 
           products={furnitureProducts} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />
        
        <ProductGrid 
           title="Grab the best deal on" 
           subtitle="Watches" 
           products={watchProducts} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />

        <ProductGrid 
           title="Grab the best deal on" 
           subtitle="Decor Accessories" 
           products={decorProducts} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />

        <div className="flex justify-center py-8 md:py-12">
            <Link href="/products">
                <button className="bg-[#008ECC] text-white px-10 py-4 rounded-full font-bold hover:bg-[#007ba8] transition-all shadow-xl hover:scale-105 active:scale-95 text-lg">
                    View All Products
                </button>
            </Link>
        </div>

        {/* Newsletter Section */}
        <section className="bg-[#F3F9FB] py-12 md:py-16 mt-8 md:mt-12 px-4 md:px-0">
          <div className="container-custom text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Stay updated with MegaMart</h2>
            <p className="text-sm md:text-base text-[#666666] mb-6 md:mb-8">Subscribe to our newsletter and never miss out on any amazing deals or updates.</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-3 rounded-full border border-gray-200 outline-none focus:border-[#008ECC] transition-colors text-sm"
              />
              <button className="bg-[#008ECC] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
