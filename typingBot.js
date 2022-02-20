const puppeteer = require("puppeteer");

async function typeBot() {
    // headless true bot runs in the background
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto("https://typing-speed-test.aoeu.eu/");
    await page.waitForSelector(".currentword")
    await page.waitForSelector(".nextword")

    const wordBot = await page.evaluate(() => {
        const words = document.querySelectorAll('.nextword')
        const wordList = [`${document.querySelector('.currentword').innerText}`]
        words.forEach((word) => {
            wordList.push(`${word.innerText}`)
        })
        return wordList
    })

    


    await page.click('#input')
    // THERE IS A SPECIAL KEY BIND FOR SPACEEE
    for (let index = 0; index < wordBot.length; index++) {
        await page.type('#input', wordBot[index])
        // REALLY IMPORTANT!!!
        await page.keyboard.press(String.fromCharCode(32))
        
    }

    // await page.type('#input', wordBot, {delay: 100})
    // console.log(wordBot);
    
}

typeBot()