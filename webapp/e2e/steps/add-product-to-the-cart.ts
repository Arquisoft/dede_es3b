import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/add-product-to-the-cart.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {

  beforeAll(async () => { //befaoreAll como un who
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      //: await puppeteer.launch({ headless: true });
      : await puppeteer.launch({ headless: false, slowMo: 50 });  //Para verlo en cámara lenta
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => { });
  });

  test('Add a product to the cart', ({ given, when, then }) => {

    given('An registered user', () => {
      
    });

    when('Select a product from the catalogue', async () => {
      
    });

    then('The product should appear in the cart menu', async () => {
      
    });
  })

  afterAll(async () => {
    browser.close()
  })

});