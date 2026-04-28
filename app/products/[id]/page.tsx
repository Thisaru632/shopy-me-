"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/landing-page/Header";
import { Footer } from "@/components/landing-page/Footer";
import { extendedProducts } from "@/lib/products_data";
import Image from "next/image";
import { ShoppingCart, Star, ShieldCheck, Truck, RefreshCw, ChevronLeft, Zap } from "lucide-react";
import Link from "next/link";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [cartCount, setCartCount] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const product = useMemo(() => {
        return extendedProducts.find(p => p.id === parseInt(id as string));
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
                <Link href="/products" className="text-[#008ECC] hover:underline">Back to all products</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFDFD]">
            <Header cartCount={cartCount} />
            
            <main className="container-custom py-8 md:py-12">
                {/* Back Link */}
                <Link href="/products" className="flex items-center gap-2 text-[#666666] hover:text-[#008ECC] transition-colors mb-8 group w-fit">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold">Back to Products</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Image Section */}
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative group">
                        <div className="aspect-square relative w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-12">
                            {product.image ? (
                                <Image 
                                    src={product.image} 
                                    alt={product.name} 
                                    fill 
                                    className="object-contain hover:scale-105 transition-transform duration-700" 
                                />
                            ) : (
                                <div className="w-64 h-64 bg-gray-200 rounded-2xl" />
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-[#F3F9FB] text-[#008ECC] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
                                <div className="flex items-center gap-1 text-amber-400">
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} fill="currentColor" />
                                    <Star size={16} className="text-gray-300" />
                                    <span className="text-xs text-gray-500 font-bold ml-1">(4.0 Viewers)</span>
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-[#333333] mb-4 leading-tight">{product.name}</h1>
                            <p className="text-[#666666] leading-relaxed text-sm md:text-base max-w-xl">
                                {product.description || "Discover the perfect blend of style and performance. This product is crafted with premium materials to ensure durability and a superior user experience."}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-end gap-4">
                                <span className="text-4xl font-bold text-[#008ECC]">Rs {product.price}</span>
                            </div>
                            <div className="flex items-center gap-1 text-green-600 text-sm font-bold">
                                <ShieldCheck size={18} />
                                In Stock - Ready to Ship
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="space-y-4 pt-4">
                            <div className="flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex items-center border border-gray-200 rounded-2xl p-1 bg-gray-50 overflow-hidden shrink-0">
                                    <button 
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition-all font-bold text-gray-600 active:scale-90"
                                    >-</button>
                                    <span className="w-12 text-center font-bold text-[#333333]">{quantity}</span>
                                    <button 
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition-all font-bold text-gray-600 active:scale-90"
                                    >+</button>
                                </div>
                                <button 
                                    onClick={() => setCartCount(prev => prev + 1)}
                                    className="flex-1 bg-[#008ECC] text-white px-12 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#007ba8] hover:scale-[1.02] shadow-xl transition-all active:scale-95 w-full sm:w-auto"
                                >
                                    <ShoppingCart size={22} />
                                    Add to Cart
                                </button>
                            </div>
                            
                            <button 
                                onClick={() => {
                                    const text = encodeURIComponent(`Hello! I would like to place an order:\n\nProduct: ${product.name}\nQuantity: ${quantity}\nPrice: Rs ${product.price}`);
                                    window.open(`https://wa.me/94789312060?text=${text}`, '_blank');
                                }}
                                className="w-full bg-[#2B2B2B] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black hover:scale-[1.01] shadow-2xl transition-all active:scale-95 border border-black group"
                            >
                                <Zap size={20} className="text-amber-400 group-hover:scale-125 transition-transform" />
                                Place Order
                            </button>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-gray-100">
                            {[
                                { icon: Truck, text: "Fast & Free Delivery", sub: "Orders over Rs 500" },
                                { icon: RefreshCw, text: "7-Days Returns", sub: "Terms & Conditions apply" },
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#F3F9FB] border border-transparent hover:border-[#008ECC]/20 transition-all cursor-default group">
                                    <div className="bg-white p-2.5 rounded-xl text-[#008ECC] shadow-sm group-hover:scale-110 transition-transform">
                                        <feature.icon size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-[#333333]">{feature.text}</p>
                                        <p className="text-[10px] text-[#666666]">{feature.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Info Tabs (Mocked) */}
                <div className="mt-20">
                    <div className="flex gap-8 border-b border-gray-100 mb-8 overflow-x-auto scrollbar-hide">
                        {["Description", "Specifications", "Reviews (42)"].map((tab, i) => (
                            <button 
                                key={tab} 
                                className={`pb-4 text-sm font-bold whitespace-nowrap transition-all relative ${i === 0 ? "text-[#008ECC]" : "text-gray-400 hover:text-gray-600"}`}
                            >
                                {tab}
                                {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#008ECC] rounded-t-full" />}
                            </button>
                        ))}
                    </div>
                    <div className="prose max-w-none text-[#666666] text-sm md:text-base leading-relaxed">
                        <p>{product.description || "Detailed description for " + product.name + " is coming soon. Stay tuned for more information about the materials, battery life, and other key features."}</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
