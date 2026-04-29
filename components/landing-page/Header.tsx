"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, MapPin, ChevronDown, LayoutGrid, Zap, X, Menu } from "lucide-react";

export const Header = ({ cartCount = 0 }: { cartCount?: number }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col font-sans relative">
      {/* Top Header */}
      <div className="bg-[#F5F5F5] py-2 px-4 text-[10px] md:text-xs text-[#666666]">
        <div className="container-custom flex justify-center md:justify-between items-center">
          <div className="truncate">Welcome to worldwide evision!</div>
          <div className="hidden md:flex gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:text-black">
              <MapPin size={14} className="text-[#008ECC]" />
              <span>Deliver to <span className="font-semibold text-black">201301</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-3 md:py-4 px-4 border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container-custom flex flex-col md:flex-row items-center gap-3 md:gap-8">
          <div className="w-full flex justify-between items-center md:w-auto">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2 -ml-2 text-gray-600"
              >
                <Menu size={24} />
              </button>
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                <div className="bg-[#008ECC] p-1.5 md:p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <LayoutGrid className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-[#008ECC]">evision</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-3">
              <User size={22} className="text-[#008ECC] cursor-pointer" />
              <div className="relative cursor-pointer mr-1">
                <ShoppingCart size={22} className="text-[#008ECC]" />
                <span className="absolute -top-2 -right-2 bg-[#008ECC] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={`relative w-full md:flex-1 max-w-2xl bg-[#F3F9FB] rounded-xl flex items-center px-4 py-2 text-sm transition-all duration-300 ${isSearchFocused ? "ring-2 ring-[#008ECC] bg-white shadow-lg" : "border border-transparent"}`}>
            <Search className="text-[#008ECC] shrink-0" size={18} />
            <input 
              type="text" 
              placeholder="Search essentials..." 
              className="bg-transparent border-none outline-none flex-1 px-3 py-1.5 text-[#666666] w-full font-medium"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <X 
                size={16} 
                className="text-gray-400 cursor-pointer hover:text-red-500 shrink-0" 
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-2 hover:text-[#008ECC] transition-colors cursor-pointer group">
              <User size={20} className="text-[#008ECC] group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">Hello, Sign in</span>
                <span className="text-xs text-[#666666] font-bold">Account</span>
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group border-l border-gray-100 pl-6">
              <div className="relative group-hover:scale-110 transition-transform">
                <ShoppingCart size={20} className="text-[#008ECC]" />
                <span className="absolute -top-2 -right-2 bg-[#008ECC] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase leading-none">Your Cart</span>
                <span className="text-xs text-[#666666] font-bold">Subtotal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="hidden md:block bg-white py-3 px-4 shadow-sm relative z-40 border-b border-gray-50">
        <div className="container-custom flex items-center justify-start gap-8 text-sm font-bold text-[#666666]">
          <Link href="/products" className="bg-[#008ECC] text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
            All Products <ChevronDown size={16} />
          </Link>
          {[
            "Electronics & Gadgets", "Home & Kitchen", "Health & Beauty", "Fashion & Accessories", "Automotive & Outdoors"
          ].map((item) => (
            <Link key={item} href={`/products?category=${encodeURIComponent(item)}`} className="flex items-center gap-1 cursor-pointer hover:text-[#008ECC] transition-all whitespace-nowrap group relative">
              {item} <ChevronDown size={14} className="text-[#008ECC] group-hover:rotate-180 transition-transform duration-300" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] transition-all animate-in fade-in">
          <div className="absolute top-0 left-0 w-[280px] h-full bg-white shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-[#F3F9FB]">
              <span className="font-bold text-[#008ECC] text-lg">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-70px)]">
              <div className="space-y-1">
                {["Electronics & Gadgets", "Home & Kitchen", "Health & Beauty", "Fashion & Accessories", "Automotive & Outdoors"].map(item => (
                  <Link href={`/products?category=${encodeURIComponent(item)}`} key={item} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-[#F3F9FB] hover:text-[#008ECC] rounded-xl transition-colors cursor-pointer flex justify-between items-center block">
                    {item} <ChevronDown size={16} className="-rotate-90 text-gray-300" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 space-y-4 px-4">
                 <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <Zap size={18} className="text-[#008ECC]" /> Track Order
                 </div>
                 <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <User size={18} className="text-[#008ECC]" /> My Account
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
