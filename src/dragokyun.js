// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
// spy goes brr brr 
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin());

// Main Program
async function translate(text, source_language, translation_language) {
  let launchOptions = { headless: true /*,executablePath: '/snap/bin/chromium' */ };
  const browser = await puppeteer.launch(launchOptions);
  console.log("Please wait comrade uwu)/...")
  const page = await browser.newPage();
  await page.goto(`https://translate.google.com/?sl=${source_language}&tl=${translation_language}&text=${text}%0A&op=translate`);
  await page.waitForSelector('.VIiyi');
  let result = await page.evaluate(() => {
    return document.querySelector('.VIiyi').firstElementChild.innerText
  });
  await browser.close()
  return {"translation": result, "sourceLanguage": source_language, "translatedTo": translation_language}
}

exports.translate = translate;