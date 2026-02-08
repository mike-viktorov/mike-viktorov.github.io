/**
 * Prerendering script for SEO optimization
 * This script generates static HTML from the built SPA
 * 
 * To use this script, install puppeteer:
 * npm install --save-dev puppeteer
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function prerender() {
  try {
    // Try to dynamically import puppeteer
    const puppeteerModule = await import('puppeteer').catch(() => null);
    
    if (!puppeteerModule) {
      console.warn('⚠️  Puppeteer not found. Skipping prerendering.');
      console.warn('   To enable prerendering, run: npm install --save-dev puppeteer');
      console.warn('   Then run: npm run build:prerender');
      return;
    }
    
    // Handle both default and named exports
    const puppeteer = puppeteerModule.default || puppeteerModule;
    
    const distPath = path.resolve(__dirname, '../dist');
    const indexPath = path.join(distPath, 'index.html');
    
    if (!fs.existsSync(indexPath)) {
      console.error('Error: dist/index.html not found. Please run "npm run build" first.');
      process.exit(1);
    }
    
    console.log('Starting prerendering...');
    
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Load the built index.html
    const fileUrl = `file://${indexPath}`;
    await page.goto(fileUrl, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for React to render
    await page.waitForSelector('#root', { timeout: 10000 });
    
    // Wait a bit more for any lazy-loaded content
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Get the rendered HTML from the root element
    const rootContent = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root ? root.innerHTML : '';
    });
    
    // Read the original HTML
    const originalHtml = fs.readFileSync(indexPath, 'utf-8');
    
    // Replace the empty root div with prerendered content
    const updatedHtml = originalHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${rootContent}</div>`
    );
    
    // Write the prerendered HTML
    fs.writeFileSync(indexPath, updatedHtml);
    
    await browser.close();
    
    console.log('✅ Prerendering completed successfully!');
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND' || error.message?.includes('Cannot find module')) {
      console.warn('⚠️  Puppeteer not found. Skipping prerendering.');
      console.warn('   To enable prerendering, run: npm install --save-dev puppeteer');
      console.warn('   Then run: npm run build:prerender');
    } else {
      console.error('Error during prerendering:', error);
      process.exit(1);
    }
  }
}

prerender();
