"use client";

import React from "react";
import { LayoutGrid, Phone, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#008ECC] text-white pt-12 md:pt-16 pb-8 px-4 md:px-0 mt-8 relative overflow-hidden">
        {/* Abstract Background Circles */}
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full translate-y-1/3 translate-x-1/4" />

        <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 relative z-10">
            {/* Logo & Contact */}
            <div className="space-y-6 md:space-y-8">
                <div className="flex items-center gap-2">
                    <div className="bg-white p-2 rounded-lg">
                        <LayoutGrid className="text-[#008ECC] w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <span className="text-2xl md:text-3xl font-bold">evision</span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <MessageCircle className="text-white/80 group-hover:text-white w-4 h-4 md:w-5 md:h-5" />
                        <div className="flex flex-col">
                            <span className="text-[10px] md:text-xs text-white/60 font-medium">Whats App</span>
                            <span className="text-xs md:text-sm font-bold">+1 202-918-2132</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <Phone className="text-white/80 group-hover:text-white w-4 h-4 md:w-5 md:h-5" />
                        <div className="flex flex-col">
                            <span className="text-[10px] md:text-xs text-white/60 font-medium">Call Us</span>
                            <span className="text-xs md:text-sm font-bold">+1 202-918-2132</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Download App</h3>
                    <div className="flex flex-wrap gap-3">
                        <div className="bg-black p-2 rounded-xl border border-white/20 w-28 md:w-32 cursor-pointer hover:bg-zinc-900 transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl"></span>
                                <div className="flex flex-col">
                                    <span className="text-[5px] md:text-[6px] uppercase text-white/60">Download on the</span>
                                    <span className="text-[10px] md:text-xs font-bold whitespace-nowrap">App Store</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-black p-2 rounded-xl border border-white/20 w-28 md:w-32 cursor-pointer hover:bg-zinc-900 transition-colors">
                            <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl text-green-500">▶</span>
                                <div className="flex flex-col">
                                    <span className="text-[5px] md:text-[6px] uppercase text-white/60">GET IT ON</span>
                                    <span className="text-[10px] md:text-xs font-bold whitespace-nowrap">Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Most Popular Categories */}
            <div className="sm:col-span-1">
                <h3 className="text-lg font-bold mb-4 md:mb-6 pb-2 border-b-2 border-white/20 w-fit">Most Popular Categories</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3 text-xs md:text-sm text-white/80">
                    {["Staples", "Beverages", "Personal Care", "Home Care", "Baby Care", "Vegetables & Fruits", "Snacks & Foods", "Dairy & Bakery"].map(item => (
                        <li key={item} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                           <span className="w-1 h-1 bg-white/40 rounded-full" /> {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Customer Services */}
            <div className="sm:col-span-1">
                <h3 className="text-lg font-bold mb-4 md:mb-6 pb-2 border-b-2 border-white/20 w-fit">Customer Services</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3 text-xs md:text-sm text-white/80">
                    {["About Us", "Terms & Conditions", "FAQ", "Privacy Policy", "E-waste Policy", "Cancellation & Return Policy"].map(item => (
                        <li key={item} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                           <span className="w-1 h-1 bg-white/40 rounded-full" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="container-custom mt-12 md:mt-16 pt-8 border-t border-white/10 text-center text-[10px] md:text-xs text-white/60">
            © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
    </footer>
  );
};
