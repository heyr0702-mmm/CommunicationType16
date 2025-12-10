
const fs = require('fs');
const path = 'src/data/contents.ts';
try {
    const content = fs.readFileSync(path, 'utf8');
    const regex = /([A-Z]{4}):\s*\{/g;
    let match;
    const keys = [];
    while ((match = regex.exec(content)) !== null) {
        keys.push(match[1]);
    }
    console.log('Found keys:', keys);
    console.log('Total keys:', keys.length);
} catch (err) {
    console.error(err);
}
