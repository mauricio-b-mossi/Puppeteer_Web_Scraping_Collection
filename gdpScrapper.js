const puppeteer = require('puppeteer')

async function getGDP() {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(
      "https://en.wikipedia.org/wiki/List_of_Latin_American_and_Caribbean_countries_by_GDP_(nominal)"
    );

    const grabGDP = await page.evaluate(() => {
        const element = document.querySelectorAll('tbody > tr > td:nth-child(4)')
        let table = []
        element.forEach((ele) => {
            table.push(ele.innerHTML.replace('\n',''))
        })
        
        return table
    })

    await console.log(grabGDP);
    await browser.close()
}

getGDP()