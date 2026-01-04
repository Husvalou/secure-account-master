import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, '..', 'dist');
const indexHtml = join(distDir, 'index.html');
const notFoundHtml = join(distDir, '404.html');

try {
  copyFileSync(indexHtml, notFoundHtml);
  console.log('✓ Copied index.html to 404.html');
} catch (error) {
  console.error('Error copying file:', error);
  process.exit(1);
}

