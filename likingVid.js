const puppeteer = require("puppeteer");

async function typeBot() {
  // headless true bot runs in the background
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/");
  await page.waitForSelector("#search");
  await page.click("#search");
  await page.type("#search", "Software Projects that I Have in My Resume");
  await page.click("#search-icon-legacy");
    // await page.waitForSelector(".style-scope.yt-img-shadow");
    await page.waitForSelector(".style-scope.ytd-toggle-button-renderer");
    await page.click(
      ".yt-simple-endpoint.inline-block.style-scope.ytd-thumbnail"
    );
    


//   const domManipulation = await page.evaluate(() => {
//       const Vids = document.querySelectorAll(".style-scope.yt-img-shadow");
//       const vidArray = []
//       Vids.forEach((video) => {
//           vidArray.push(video)
//       })
//       return vidArray[0];
//   })
    
//     await page.click(".style-scope.ytd-video-renderer", { delay: 100 });

  // await page.click(".style-scope.yt-img-shadow");
}

typeBot()