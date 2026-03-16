"use client";

import React, { useState, useMemo } from "react";
import { Header } from "@/components/landing-page/Header";
import { Footer } from "@/components/landing-page/Footer";
import { ProductCard } from "@/components/landing-page/ProductCard";
import { ChevronDown, Filter, LayoutGrid, List, SlidersHorizontal, X, Search } from "lucide-react";

import { allProducts } from "@/lib/data";

export default function ProductsPage() {
    const [cartCount, setCartCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [priceRange, setPriceRange] = useState<number>(100000);
    const [sortBy, setSortBy] = useState<string>("Popularity");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [isListView, setIsListView] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const categories = ["All", "Mobile", "Cosmetics", "Furniture", "Watches", "Decor Accessories"];

    const filteredProducts = useMemo(() => {
        let result = allProducts.filter(p => 
            (selectedCategory === "All" || p.category === selectedCategory) &&
            parseInt(p.price) <= priceRange &&
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (sortBy === "Price: Low to High") {
            result.sort((a, b) => parseInt(a.price) - parseInt(b.price));
        } else if (sortBy === "Price: High to Low") {
            result.sort((a, b) => parseInt(b.price) - parseInt(a.price));
        }

        return result;
    }, [selectedCategory, priceRange, sortBy, searchQuery]);

    return (
        <div className="min-h-screen bg-[#FDFDFD]">
            <Header cartCount={cartCount} />
            
            {/* Breadcrumb & Title */}
            <div className="bg-[#F3F9FB] py-8 md:py-12">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <div className="text-xs text-[#666666] mb-2">Home / Search / <span className="text-[#008ECC] hover:underline cursor-pointer">All Products</span></div>
                            <h1 className="text-2xl md:text-4xl font-bold text-[#333333]">Shop the <span className="text-[#008ECC]">Collections</span></h1>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="bg-white rounded-full flex items-center px-4 py-2 border border-gray-100 shadow-sm flex-1 md:w-64">
                                <Search size={18} className="text-[#008ECC]" />
                                <input 
                                    type="text" 
                                    placeholder="Search products..." 
                                    className="bg-transparent border-none outline-none px-3 text-sm w-full"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button 
                                onClick={() => setIsMobileFiltersOpen(true)}
                                className="md:hidden p-3 bg-white border border-gray-100 rounded-full shadow-sm text-[#008ECC]"
                            >
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container-custom py-8 md:py-12">
                <div className="flex gap-8">
                    {/* Sidebar Filters (Desktop) */}
                    <aside className="hidden md:block w-64 shrink-0 space-y-8 sticky top-28 self-start">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-6">
                            {/* Categories */}
                            <div>
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <LayoutGrid size={18} className="text-[#008ECC]" /> Categories
                                </h3>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <div 
                                            key={cat} 
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`text-sm py-2 px-3 rounded-xl cursor-pointer transition-all flex justify-between items-center ${selectedCategory === cat ? "bg-[#F3F9FB] text-[#008ECC] font-bold" : "text-[#666666] hover:bg-gray-50"}`}
                                        >
                                            {cat}
                                            {selectedCategory === cat && <div className="w-1.5 h-1.5 bg-[#008ECC] rounded-full" />}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <SlidersHorizontal size={18} className="text-[#008ECC]" /> Price Range
                                </h3>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100000" 
                                    step="1000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#008ECC]"
                                />
                                <div className="flex justify-between text-xs font-bold mt-4 text-[#666666]">
                                    <span>₹0</span>
                                    <span>₹{priceRange.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        {/* Promo Banner in Sidebar */}
                        <div className="bg-[#2B2B2B] rounded-2xl p-6 text-white relative overflow-hidden group border border-black shadow-xl">
                            <div className="relative z-10">
                                <p className="text-[#008ECC] font-bold uppercase text-[10px] tracking-widest mb-2">Exclusive Offer</p>
                                <h4 className="text-xl font-bold mb-4 leading-tight">Upgrade Your <br/> Lifestyle Today</h4>
                                <button className="bg-[#008ECC] text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform">
                                    Explore Deals
                                </button>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#008ECC] rounded-full blur-3xl opacity-20" />
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Top Controls */}
                        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="text-sm font-medium text-[#666666]">
                                Showing <span className="text-[#008ECC] font-bold">{filteredProducts.length}</span> Products
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-sm text-[#666666]">
                                    <span>Sort by:</span>
                                    <div className="relative group">
                                        <button className="flex items-center gap-2 font-bold text-[#333333] hover:text-[#008ECC] transition-colors">
                                            {sortBy} <ChevronDown size={14} />
                                        </button>
                                        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-100 shadow-2xl rounded-xl p-2 min-w-[180px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                            {["Popularity", "Price: Low to High", "Price: High to Low"].map(opt => (
                                                <div 
                                                    key={opt}
                                                    onClick={() => setSortBy(opt)}
                                                    className={`p-3 text-xs rounded-lg cursor-pointer hover:bg-[#F3F9FB] transition-colors ${sortBy === opt ? "bg-[#F3F9FB] text-[#008ECC] font-bold" : "text-[#666666]"}`}
                                                >
                                                    {opt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-1 bg-gray-50 rounded-lg border border-gray-100">
                                    <button className="p-1.5 bg-white text-[#008ECC] shadow-sm rounded-md"><LayoutGrid size={16} /></button>
                                    <button className="p-1.5 text-gray-400 hover:text-gray-600"><List size={16} /></button>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        onAddToCart={() => setCartCount(prev => prev + 1)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl p-12 text-center border border-dashed border-gray-200 mt-12">
                                <div className="bg-[#F3F9FB] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search size={32} className="text-[#008ECC]" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">No Products Found</h3>
                                <p className="text-[#666666] mb-8">Try adjusting your filters or search query to find what you're looking for.</p>
                                <button 
                                    onClick={() => {
                                        setSelectedCategory("All");
                                        setPriceRange(100000);
                                        setSearchQuery("");
                                    }}
                                    className="bg-[#008ECC] text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Mobile Filters Drawer */}
            {isMobileFiltersOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex justify-end">
                    <div className="w-[85%] max-w-sm bg-white h-full shadow-2xl animate-in slide-in-from-right duration-300">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F3F9FB]">
                            <h3 className="font-bold text-lg flex items-center gap-2"><Filter size={20} className="text-[#008ECC]" /> Filters</h3>
                            <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 hover:bg-white rounded-full transition-colors"><X size={24} /></button>
                        </div>
                        <div className="p-6 space-y-8 overflow-y-auto h-[calc(100%-80px)]">
                            <div>
                                <h4 className="font-bold mb-4 text-[#333333]">Categories</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {categories.map(cat => (
                                        <div 
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`py-3 px-4 rounded-xl text-xs font-bold text-center border transition-all ${selectedCategory === cat ? "bg-[#008ECC] text-white border-[#008ECC]" : "bg-white text-[#666666] border-gray-100"}`}
                                        >
                                            {cat}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-bold mb-4 text-[#333333]">Price Range</h4>
                                <input 
                                    type="range" 
                                    min="0" 
                                    max="100000" 
                                    step="1000"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#008ECC]"
                                />
                                <div className="flex justify-between text-sm font-bold mt-4 text-[#008ECC]">
                                    <span>₹0</span>
                                    <span>₹{priceRange.toLocaleString()}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setIsMobileFiltersOpen(false)}
                                className="w-full bg-[#008ECC] text-white py-4 rounded-2xl font-bold shadow-lg mt-8"
                            >
                                Apply Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
