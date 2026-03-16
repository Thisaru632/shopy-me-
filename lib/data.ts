export interface Product {
    id: number;
    category: string;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    saveDetail: string;
    image: string;
    description?: string;
}

export const allProducts: Product[] = [
    { 
        id: 1, 
        category: "Mobile", 
        name: "Galaxy S22 Ultra", 
        price: "32999", 
        originalPrice: "74000", 
        discount: "50%", 
        saveDetail: "31000", 
        image: "/s22_ultra.png",
        description: "Experience the ultimate power with the Galaxy S22 Ultra. Featuring a massive display, professional-grade camera system, and integrated S-Pen, it's designed for productivity and creativity."
    },
    { id: 2, category: "Mobile", name: "Galaxy M13 (4GB | 64 GB)", price: "10499", originalPrice: "14000", discount: "50%", saveDetail: "3501", image: "/s22_ultra.png", description: "Efficient and reliable, the Galaxy M13 offers great performance for everyday tasks with a long-lasting battery." },
    { id: 3, category: "Mobile", name: "Galaxy M33 5G (6GB | 128 GB)", price: "16999", originalPrice: "24999", discount: "50%", saveDetail: "8000", image: "/s22_ultra.png", description: "Next-gen 5G connectivity meets premium features in the Galaxy M33. Perfect for streaming and gaming." },
    { id: 4, category: "Mobile", name: "Galaxy M13 5G (6GB | 128 GB)", price: "13999", originalPrice: "16999", discount: "50%", saveDetail: "3000", image: "/s22_ultra.png", description: "Stay connected at high speeds with the Galaxy M13 5G, built for reliability and speed." },
    { id: 5, category: "Mobile", name: "Galaxy S23 Ultra", price: "67999", originalPrice: "85000", discount: "50%", saveDetail: "17001", image: "/s22_ultra.png", description: "The pinnacle of mobile technology. The Galaxy S23 Ultra features an incredible 200MP camera and the fastest chip ever in a Galaxy." },
    
    { id: 6, category: "Cosmetics", name: "L'Oreal Paris Hair Serum", price: "499", originalPrice: "999", discount: "50%", saveDetail: "500", image: "/cosmetics.png", description: "Repair and shine your hair with L'Oreal Paris Hair Serum. Professional care at home." },
    { id: 7, category: "Cosmetics", name: "Lakme Sun Expert Spf 50", price: "249", originalPrice: "498", discount: "50%", saveDetail: "249", image: "/cosmetics.png", description: "Advance sun protection with Lakme Sun Expert. Non-greasy and effective SPF 50." },
    { id: 8, category: "Cosmetics", name: "Maybelline New York Mascara", price: "399", originalPrice: "798", discount: "50%", saveDetail: "399", image: "/cosmetics.png", description: "Define your lashes with Maybelline New York Mascara for a bold, smudge-free look." },
    { id: 9, category: "Cosmetics", name: "Nykaa Skin Potion Oil", price: "599", originalPrice: "1198", discount: "50%", saveDetail: "599", image: "/cosmetics.png", description: "Hydrate and glow with Nykaa Skin Potion Oil, enriched with natural essential oils." },
    { id: 10, category: "Cosmetics", name: "Biotique Bio Saffron Dew", price: "150", originalPrice: "300", discount: "50%", saveDetail: "150", image: "/cosmetics.png", description: "Keep your skin soft and fair with Biotique Bio Saffron Dew, a 100% natural Ayurvedic recipe." },

    { id: 11, category: "Furniture", name: "Urban Ladder Ergonomic Chair", price: "4500", originalPrice: "9000", discount: "50%", saveDetail: "4500", image: "/furniture.png", description: "Work comfortably with the Urban Ladder Ergonomic Chair, designed for long hours of posture support." },
    { id: 12, category: "Furniture", name: "Nilkamal Plastic Stool", price: "499", originalPrice: "998", discount: "50%", saveDetail: "499", image: "/furniture.png", description: "Durable and lightweight, the Nilkamal Plastic Stool is a versatile addition to any home." },
    { id: 13, category: "Furniture", name: "IKEA Side Table White", price: "1200", originalPrice: "2400", discount: "50%", saveDetail: "1200", image: "/furniture.png", description: "Clean lines and simple design. The IKEA Side Table fits perfectly in any modern living space." },
    { id: 14, category: "Furniture", name: "Home Centre Study Lamp", price: "899", originalPrice: "1798", discount: "50%", saveDetail: "899", image: "/furniture.png", description: "Illuminate your workspace with the elegant Home Centre Study Lamp. Adjustable and bright." },
    { id: 15, category: "Furniture", name: "Pepperfry Bean Bag XXL", price: "1500", originalPrice: "3000", discount: "50%", saveDetail: "1500", image: "/furniture.png", description: "Relax in style with the Pepperfry XXL Bean Bag. High-quality fabric and ultimate comfort." },

    { id: 16, category: "Watches", name: "Noise Colorfit Pulse Go", price: "1499", originalPrice: "2998", discount: "50%", saveDetail: "1499", image: "/smartwatch.png", description: "Track your fitness and stay connected with the Noise Colorfit Pulse Go smartwatch." },
    { id: 17, category: "Watches", name: "Apple Watch Series 8", price: "32999", originalPrice: "65998", discount: "50%", saveDetail: "32999", image: "/smartwatch.png", description: "A healthy leap forward. The Apple Watch Series 8 features advanced health sensors and apps." },
    { id: 18, category: "Watches", name: "Fossil Machine Analog", price: "5999", originalPrice: "11998", discount: "50%", saveDetail: "5999", image: "/smartwatch.png", description: "Classic industrial design meets modern craftsmanship in the Fossil Machine Analog watch." },
    { id: 19, category: "Watches", name: "Fastrack Reflex Beat+", price: "1299", originalPrice: "2598", discount: "50%", saveDetail: "1299", image: "/smartwatch.png", description: "Active trackers for active lifestyles. Fastrack Reflex Beat+ keeps you on your toes." },
    { id: 20, category: "Watches", name: "Titan Neo Classic Blue", price: "3499", originalPrice: "6998", discount: "50%", saveDetail: "3499", image: "/smartwatch.png", description: "Timeless elegance for the modern man. The Titan Neo Classic Blue features a premium leather strap." },

    { id: 21, category: "Decor Accessories", name: "Decorative Wall Mirror", price: "799", originalPrice: "1598", discount: "50%", saveDetail: "799", image: "/essentials.png", description: "Enhance your room's aesthetic with this beautifully crafted Decorative Wall Mirror." },
    { id: 22, category: "Decor Accessories", name: "Ceramic Flower Vase", price: "399", originalPrice: "798", discount: "50%", saveDetail: "399", image: "/essentials.png", description: "Add a touch of elegance to your home decor with our premium Ceramic Flower Vase." },
    { id: 23, category: "Decor Accessories", name: "Floating Wall Shelves", price: "599", originalPrice: "1198", discount: "50%", saveDetail: "599", image: "/essentials.png", description: "Organize your items stylishly with these modern Floating Wall Shelves." },
    { id: 24, category: "Decor Accessories", name: "Table Top Waterfall", price: "999", originalPrice: "1998", discount: "50%", saveDetail: "999", image: "/essentials.png", description: "Create a soothing environment with the Table Top Waterfall, perfect for office or home." },
    { id: 25, category: "Decor Accessories", name: "Abstract Canvas Painting", price: "1299", originalPrice: "2598", discount: "50%", saveDetail: "1299", image: "/essentials.png", description: "Bring art into your living space with this vibrant and modern Abstract Canvas Painting." },
];
