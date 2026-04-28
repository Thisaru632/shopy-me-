"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export interface Product {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    saveDetail: string;
    image: string;
}

interface ProductCardProps {
    product: Product;
    onAddToCart?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-all cursor-pointer relative group h-full flex flex-col overflow-hidden">
            <Link href={`/products/${product.id}`} className="flex-1 flex flex-col">
                {/* Product Image */}
                <div className="h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden relative group-hover:bg-gray-100 transition-colors shrink-0">
                    
                    {product.image ? (
                        <Image src={product.image} alt={product.name} fill className="object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                        <div className="w-32 h-40 bg-gray-200 rounded-lg shadow-sm" />
                    )}
                </div>

                {/* Product Details */}
                <div className="space-y-1 flex-1">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-[#008ECC] transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-2">
                        <span className="font-bold">Rs {product.price}</span>
                    </div>
                </div>
            </Link>
            
            {/* Quick Add Button */}
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onAddToCart?.();
                }}
                className="absolute bottom-4 right-4 w-10 h-10 bg-[#008ECC] text-white rounded-xl flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-lg hover:bg-[#007ba8] hover:scale-105 active:scale-90 z-20"
            >
                <ShoppingCart size={18} />
            </button>
        </div>
    );
};
