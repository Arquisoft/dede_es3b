import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/login-the-pod.feature');

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

  test('Login with the pod', ({ given, when, then }) => {

    let username = "admin@admin.com";
    let password = "admin";

    given('The main page', () => {
      
    });

    when('Try to login with the pod', async () => {
      await page
      .goto("http://localhost:3000/login", {
        waitUntil: "networkidle0",
      })
      .catch(() => { });
      await expect(page).toClick('button', { text: 'Login admin' })
      await expect(page).toFill("[label:'Email']", username)
      await expect(page).toFill("[label:'Password']", password)
      await expect(page).toClick('button', { text: 'Login' })
      

    });

    then('The login works', async () => {
      await expect(page).not.toMatch("No eres admin")
    });
  })

  afterAll(async () => {
    browser.close()
  })

});

