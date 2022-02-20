const puppeteer = require('puppeteer')

async function webScrapping() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();
    await page.goto("https://www.youtube.com/");
    // ALLOWS TO TOGGLE THE HTML OF THE PAGE
    const grabElement = await page.evaluate(() => {
        // fetch for common html class id or elemet
        const element =  document.querySelectorAll("#video-title");
        // ARRAY TO STORE INFO (NOT NECESARY ACCESING SINGLE ELE JUST RETURN ELE.INNERHTML)
        const titles = [];
        element.forEach((ele) => {
            titles.push(ele.innerHTML)
        })
        return titles
    })

    // what is returned
    await console.log(grabElement);
    await browser.close()
}

webScrapping()