const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib', 'products_data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Parse the content carefully using regex replacements
// First, let's categorize keywords to target category strings
const categoriesMap = {
    "Electronics & Gadgets": [
        "Camera", "Air Pod", "Earbuds", "Speaker", "Monitor", "Power Bank", "Charger", 
        "Cable", "Laptop", "Scale", "Led Ring Light", "Headlamp", "Flashlight", "Clock", "JBL"
    ],
    "Health & Beauty": [
        "Trimmer", "Massager", "Massage", "Derma Roller", "Makeup", "Styler", "Straightner", "Yoga"
    ],
    "Automotive & Outdoors": [
        "Car Polisher", "Motor Bike Cover", "Bike Phone Holder", "Skate Board", "Dog Chaser", 
        "Air Pump", "Umbrella"
    ],
    "Fashion & Accessories": [
        "Watch", "Backpack", "Bag", "Sunglasses", "Vest", "Glove", "Bracelet", "Jewelry Box"
    ],
    "Home & Kitchen": [
        "Fan", "Pot", "Pan", "Strainer", "Knife", "Mixer", "Grinder", "Juicer", "Soap Holder", 
        "Soap Rack", "Dispenser", "Towel", "Bath", "Organizer", "Mop", "Brush", "Rack", "Shelf",
        "Cleaning Cloth", "Tissue Holder", "Table", "Dust", "Wrench", "Tool Kit", "Basket",
        "Sticker", "Board", "Plates", "Container", "Feeder Baby", "Thermometer", "Cactus"
    ]
};

// We will find all products objects
let matchCount = 0;
const regex = /(\{\s*"id":\s*\d+,\s*"category":\s*")([^"]+)((?:\s*[^}]+)+)/g;

let updatedContent = content.replace(regex, (match, p1, oldCategory, remainingFields) => {
    matchCount++;
    
    // Extract the name from the remaining fields to check keywords
    let nameMatch = remainingFields.match(/"name":\s*"([^"]+)"/);
    let name = nameMatch ? nameMatch[1] : "";
    
    let newCategory = "Home & Kitchen"; // Default fallback
    
    // Check keywords (case insensitive)
    for (const [catName, keywords] of Object.entries(categoriesMap)) {
        for (const kw of keywords) {
            if (name.toLowerCase().includes(kw.toLowerCase())) {
                newCategory = catName;
                break;
            }
        }
        if (newCategory !== "Home & Kitchen" || name.toLowerCase().includes("home")) {
            // Already found a match (or explicit home), break Outer
            // Actually break explicitly if found
            if (newCategory !== "Home & Kitchen" && newCategory !== catName) continue; 
            if (newCategory === catName) break;
        }
    }
    
    return p1 + newCategory + remainingFields;
});

fs.writeFileSync(filePath, updatedContent);
console.log(`Successfully converted ${matchCount} products to the new categories.`);
