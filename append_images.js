const fs = require('fs');
const path = require('path');

const publicNewImageDir = path.join(__dirname, 'public', 'new image');
const productsDataFile = path.join(__dirname, 'lib', 'products_data.ts');

function findImages(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            findImages(filePath, fileList);
        } else if (filePath.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const images = findImages(publicNewImageDir);

let content = fs.readFileSync(productsDataFile, 'utf8');

// Find max id
let maxId = 0;
const idMatches = content.match(/"id":\s*(\d+)/g);
if (idMatches) {
    idMatches.forEach(match => {
        const id = parseInt(match.split(':')[1].trim());
        if (id > maxId) maxId = id;
    });
}

// Generate new entries
let newProducts = [];
let nextId = maxId + 1;

for (const image of images) {
    const relativePath = image.replace(path.join(__dirname, 'public'), '').replace(/\\/g, '/');
    const filename = path.basename(image, path.extname(image));
    
    // Default product values
    const product = `    {
        "id": ${nextId++},
        "category": "New Collection",
        "name": "${filename}",
        "price": "1999",
        "originalPrice": "3999",
        "discount": "50%",
        "saveDetail": "Variable",
        "image": "${relativePath}",
        "description": "High-quality ${filename} for your everyday needs."
    }`;
    newProducts.push(product);
}

const appendString = ',\n' + newProducts.join(',\n') + '\n];\n';

// Replace the closing bracket
if (content.endsWith('];\n')) {
    content = content.replace(/\];\n$/, appendString);
} else if (content.endsWith(']')) {
    content = content.replace(/\]$/, appendString);
} else {
    // try to find the last ]
    const lastBracket = content.lastIndexOf(']');
    content = content.substring(0, lastBracket) + appendString;
}

fs.writeFileSync(productsDataFile, content);
console.log(`Added ${newProducts.length} new products to products_data.ts`);
