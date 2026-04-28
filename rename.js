const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib', 'products_data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const folderMap = {
    "7.24.50 PM": {
        name: "Power Bank",
        adjectives: ["10000mAh", "20000mAh", "30000mAh", "Fast Charging", "PD+QC4.0", "Wireless", "Mini", "High Capacity", "Ultra Slim"]
    },
    "7.25.03 PM": {
        name: "Table Fan",
        adjectives: ["Portable", "Rechargeable", "Oscillating", "Mini", "High Speed", "Silent", "USB Powered"]
    },
    "7.25.21 PM": {
        name: "Monitor",
        adjectives: ["24-inch", "27-inch Curved", "Gaming 240Hz", "IPS", "FHD", "Ultra-wide", "HDR10"]
    },
    "7.25.28 PM": {
        name: "Wireless Earbuds",
        adjectives: ["Pro", "Active Noise Cancellation", "Gaming", "Open-Ear", "Hifi", "Deep Bass", "Long Battery", "Bluetooth 5.3", "True Wireless", "Sport", "Waterproof"]
    },
    "7.25.35 PM": {
        name: "Fast Charger",
        adjectives: ["20W PD", "25W Adapter", "Dual USB", "3-Port", "Super Fast", "Type-C", "QC 3.0", "18W QC", "Compact", "Universal"]
    }
};

const regex = /\{\s*"id":\s*(\d+),\s*"category":\s*"New Collection",\s*"name":\s*"WhatsApp Image [^"]+",\s*"price":\s*"[^"]+",\s*"originalPrice":\s*"[^"]+",\s*"discount":\s*"[^"]+",\s*"saveDetail":\s*"[^"]+",\s*"image":\s*"\/new image\/[^\/]+\/([^"]+)",\s*"description":\s*"High-quality WhatsApp Image [^"]+ for your everyday needs."\s*\}/g;

const prices = [1299, 1499, 1999, 2499, 2999, 3499, 4999];

let matchCount = 0;
let updatedContent = content.replace(regex, (match, id, imageName) => {
    matchCount++;
    
    // Determine folder from match
    let subCategory = "Gadget";
    let adjectivesList = ["Premium"];
    
    if (match.includes("7.24.50 PM")) {
        subCategory = "Power Bank";
        adjectivesList = folderMap["7.24.50 PM"].adjectives;
    } else if (match.includes("7.25.03 PM")) {
        subCategory = "Table Fan";
        adjectivesList = folderMap["7.25.03 PM"].adjectives;
    } else if (match.includes("7.25.21 PM")) {
        subCategory = "Monitor";
        adjectivesList = folderMap["7.25.21 PM"].adjectives;
    } else if (match.includes("7.25.28 PM")) {
        subCategory = "Wireless Earbuds";
        adjectivesList = folderMap["7.25.28 PM"].adjectives;
    } else if (match.includes("7.25.35 PM")) {
        subCategory = "Fast Charger";
        adjectivesList = folderMap["7.25.35 PM"].adjectives;
    }

    // Pick a random adj based on id
    const adj = adjectivesList[parseInt(id) % adjectivesList.length];
    
    const newName = `${adj} ${subCategory}`;
    const newDescription = `High-quality ${newName}. Experience premium performance and reliability.`;
    
    // Pick a price
    const price = prices[parseInt(id) % prices.length];
    const origPrice = price + 1000;
    
    // Need to reconstruct the object string properly to keep it formatted
    // Wait, the original parsing used split or JSON. Let's just reconstruct directly.
    return match
        .replace(/"name":\s*"WhatsApp Image [^"]+"/, `"name": "${newName}"`)
        .replace(/"price":\s*"[^"]+"/, `"price": "${price}"`)
        .replace(/"originalPrice":\s*"[^"]+"/, `"originalPrice": "${origPrice}"`)
        .replace(/"description":\s*"High-quality WhatsApp Image [^"]+ for your everyday needs."/, `"description": "${newDescription}"`);
});

fs.writeFileSync(filePath, updatedContent);
console.log(`Updated ${matchCount} products in products_data.ts`);
