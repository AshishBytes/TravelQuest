const fs = require('fs');
const path = require('path');

// List of folders to ignore
const ignoreFolders = ['.git', 'node_modules']; // Only folder names

function generateTree(dir, depth = 0) {
    const prefix = '│   '.repeat(depth);
    const files = fs.readdirSync(dir);

    files.forEach((file, index) => {
        const currentPath = path.join(dir, file);
        const isDirectory = fs.statSync(currentPath).isDirectory();

        // Check if the current folder should be ignored based on its full relative path
        const relativePath = path.relative('./', currentPath);
        if (ignoreFolders.some(folder => relativePath.includes(folder))) {
            return; // Skip ignored folders
        }

        const isLast = index === files.length - 1;
        console.log(`${prefix}${isLast ? '└── ' : '├── '}${file}`);

        if (isDirectory) generateTree(currentPath, depth + 1);
    });
}

generateTree('./'); // Start scanning from the TravelQuest root folder
