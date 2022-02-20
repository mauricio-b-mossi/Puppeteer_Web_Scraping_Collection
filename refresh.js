const puppeteer = require('puppeteer');

async function refresh() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://medium.com/");
    
}

refresh()