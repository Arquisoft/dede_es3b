import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/login-admin.feature');

let page: puppeteer.Page;
let page2: puppeteer.Page;
let browser: puppeteer.Browser;
const apiEndPoint = process.env.REACT_APP_URI || 'http://localhost:3000/'

defineFeature(feature, test => {
    jest.setTimeout(30000);
    beforeAll(async () => { //befaoreAll como un who
        browser = process.env.GITHUB_ACTIONS
            ? await puppeteer.launch()
            //: await puppeteer.launch({ headless: true });
            : await puppeteer.launch({ headless: false, slowMo: 50 });  //Para verlo en cámara lenta
        page = await browser.newPage();
        page2 = await browser.newPage();

        await page
            .goto("http://localhost:3000/", {
                waitUntil: "networkidle0",
            })
            .catch(() => { });
        await page2
            .goto(apiEndPoint + "login", {
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
            await expect(page2).toClick('button', { text: 'Login Admin' })
            await expect(page2).toFill("[label:'Email']", username)
            await expect(page2).toFill("[label:'Password']", password)
            await expect(page2).toClick('button', { text: 'Login' })


        });

        then('The login works', async () => {
            await expect(page2).not.toMatch("No eres admin")
        });
    })

    afterAll(async () => {
        browser.close()
    })

});