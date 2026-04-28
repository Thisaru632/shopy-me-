const fs = require('fs');
const content = fs.readFileSync('lib/products_data.ts', 'utf8');
const names = [...content.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);
console.log(names.join(', '));
