import { ExpandCircleDownTwoTone } from '@mui/icons-material';
import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/add-product-to-the-cart.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  jest.setTimeout(30000);
  beforeAll(async () => { //befaoreAll como un who
    browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      //: await puppeteer.launch({ headless: true });
      : await puppeteer.launch({ headless: false, slowMo: 50 });  //Para verlo en cámara lenta
    page = await browser.newPage();

    await page
      .goto("http://localhost:3000/", {
        waitUntil: "networkidle0",
      })
      .catch(() => {
        //This is intentional
      });
  });

  test('Add a product to the cart', ({ given, when, then }) => {

    given('A registered user', () => {
      //This is intentional
    });

    when('Select a product from the catalogue', async () => {
      await page.setViewport({ width: 1200, height: 1300 });

      await expect(page).toMatch('Productos')
      await expect(page).toMatch('Mi perfil')

      await expect(page).toClick('button', { text: 'Add to Cart' })

      await expect(page).toClick('button[aria-label="Ver carrito"]')
    });

    then('The product should appear in the cart menu', async () => {
      await expect(page).toMatch('Carrito de la compra')
      await expect(page).toMatch('Ascis')
    });
  })

  afterAll(async () => {
    browser.close()
  })

});