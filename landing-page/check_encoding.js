const fs = require('fs');
const path = require('path');

function checkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.next' || file === '.git') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            checkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.json') || fullPath.endsWith('.js') || fullPath.endsWith('.mjs')) {
            const buffer = fs.readFileSync(fullPath);
            if (buffer.length >= 2) {
                if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
                    console.log(`UTF-16LE: ${fullPath}`);
                } else if (buffer[0] === 0xFE && buffer[1] === 0xFF) {
                    console.log(`UTF-16BE: ${fullPath}`);
                }
            }
        }
    }
}

checkDir('.');
console.log('Done checking.');
