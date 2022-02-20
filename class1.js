const puppeteer = require('puppeteer');

async function scrapeTheWeb() {
    //TO RUN    IMPORTANT TO SET HEADLESS TO FALSE
    const browser = await puppeteer.launch({ headless: false })
    // TO OPEN PAGE
    const page = await browser.newPage()
    // TO GO TO A PAGE
    await page.goto("https://www.youtube.com/watch?v=HSjyTErtpQk");
    const title = await page.title()
    const url = await page.url()
    console.log(title, url);
    // TO CLOSE BROWSER
    await browser.close()
}

scrapeTheWeb()