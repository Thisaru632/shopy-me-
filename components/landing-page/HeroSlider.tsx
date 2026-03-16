"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "SMART WEARABLE.",
    subtitle: "Best Deal Online on smart watches",
    offer: "UP TO 80% OFF",
    bgColor: "bg-[#1D314E]",
    image: "/smartwatch.png"
  },
  {
    id: 2,
    title: "SAMSUNG GALAXY S23",
    subtitle: "Experience the ultimate flagship",
    offer: "STARTING FROM ₹67,999",
    bgColor: "bg-[#2B2B2B]",
    image: "/s22_ultra.png"
  },
  {
    id: 3,
    title: "FRESH ESSENTIALS",
    subtitle: "Quality groceries delivered fast",
    offer: "UP TO 50% OFF",
    bgColor: "bg-[#008ECC]",
    image: "/essentials.png"
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="container-custom py-4 md:py-6">
      <div className={`relative h-[240px] md:h-[300px] w-full rounded-2xl md:rounded-2xl overflow-hidden shadow-xl group transition-all duration-700 ${slides[currentSlide].bgColor}`}>
        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 transition-opacity duration-500 text-center md:text-left">
            {/* Left Side Content */}
            <div className={`text-white z-10 max-w-lg transition-all duration-500 transform ${isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}>
              <p className="text-[10px] md:text-sm font-light mb-1 md:mb-2 opacity-80 uppercase tracking-widest">
                {slides[currentSlide].subtitle}
              </p>
              <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight leading-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg md:text-2xl font-light opacity-90">
                {slides[currentSlide].offer}
              </p>
              
              {/* Slider Pagination */}
              <div className="flex justify-center md:justify-start gap-2 mt-4 md:mt-12">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1 md:h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentSlide ? "w-6 md:w-8 bg-white" : "w-1 md:w-1.5 bg-white/40 hover:bg-white/60"}`}
                    onClick={() => setCurrentSlide(i)}
                  />
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className={`relative h-32 md:h-full w-full md:w-[400px] transition-all duration-500 transform ${isAnimating ? "scale-90 opacity-0 md:rotate-6" : "scale-100 opacity-100 rotate-0"}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 md:w-[300px] md:h-[300px] relative">
                    <Image 
                      src={slides[currentSlide].image} 
                      alt={slides[currentSlide].title} 
                      fill 
                      className="object-contain drop-shadow-2xl"
                    />
                 </div>
              </div>
            </div>
        </div>

        {/* Arrows */}
        <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20 backdrop-blur-md border border-white/10"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20 backdrop-blur-md border border-white/10"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};
