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

import { extendedProducts } from "@/lib/products_data";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  const newArrivals = extendedProducts.slice(0, 5);
  const trendingProducts = extendedProducts.slice(5, 10);
  const featuredProducts = extendedProducts.slice(10, 15);
  const bestSellers = extendedProducts.slice(15, 20);
  const specialOffers = extendedProducts.slice(20, 25);

  const electronicsBrands = [
    { id: 1, name: "IPHONE", discount: "UP TO 80% OFF", bgColor: "bg-[#2B2B2B]", logo: "", image: "/iphone_promo.png" },
    { id: 2, name: "REALME", discount: "UP TO 80% OFF", bgColor: "bg-[#FFF9E6]", logo: "realme", textColor: "text-amber-900", image: "/realme_promo.png" },
    { id: 3, name: "XIAOMI", discount: "UP TO 80% OFF", bgColor: "bg-[#FFF2EB]", logo: "MI", textColor: "text-orange-900", image: "/xiaomi_promo.png" },
  ];

  const categories = [
    { id: 1, name: "Kitchen", image: "/products/SF 400 Kitchen Scale/IMG-20250821-WA0065.jpg" },
    { id: 2, name: "Beauty", image: "/products/13 Piece Makeup Brush/IMG-20250821-WA0180.jpg" },
    { id: 3, name: "Tech", image: "/products/2 IN 1 Smart Wifi Camera/wifiCamera.jpg" },
    { id: 4, name: "Furniture", image: "/products/C Shaped Side Table/C shaped table.jpg" },
    { id: 5, name: "Watches", image: "/products/Viokai Golden Mens Watch/WhatsApp Image 2025-08-21 at 19.38.33_6234f9a0.jpg" },
    { id: 6, name: "Home", image: "/products/85cm Sink Dish Drying Rack/DryingRack.jpg" },
    { id: 7, name: "Accessories", image: "/products/Animal Slap Bracelet - Stitch Doll/AnimalSlapBracelet.jpg" },
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} />
      <main>
        <HeroSlider />
        <ProductGrid 
          title="Explore our" 
          subtitle="New Arrivals" 
          products={newArrivals} 
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
           title="Check out our" 
           subtitle="Trending Products" 
           products={trendingProducts} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />
        
        <ProductGrid 
           title="Discover our" 
           subtitle="Featured Selection" 
           products={featuredProducts} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />
        
        <ProductGrid 
           title="Our" 
           subtitle="Best Sellers" 
           products={bestSellers} 
           onAddToCart={() => setCartCount(prev => prev + 1)}
        />

        <ProductGrid 
           title="Great deals in" 
           subtitle="Special Offers" 
           products={specialOffers} 
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
