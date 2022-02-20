const puppeteer = require("puppeteer");

async function scrapeWeb(params) {
    // headless true bot runs in the background
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://quotes.toscrape.com/')

    // Wait for elements to load before
    await page.waitForSelector(".col-md-4");
    // SELECT WHAT TO CLICK
    await page.click('.col-md-4 a');
    // WAIT
    await page.waitForSelector("#username");
    await page.waitForSelector("#password");
    // ELEMENT && INPUT {delay: 100}(can add delay)
    await page.type('#username', 'MyUsername');
    await page.type('#password', 'Mypassword');
    // JOINED CLASSED GO TOGETHER
    await page.waitForSelector(".btn.btn-primary");
    await page.click(".btn.btn-primary");
}

scrapeWeb()