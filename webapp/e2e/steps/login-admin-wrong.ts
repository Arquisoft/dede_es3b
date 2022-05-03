import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/login-admin-wrong.feature');

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
            .goto("http://localhost:3000", {
                waitUntil: "networkidle0",
            })
            .catch(() => { });
    });

    test('Login with a no admin account', ({ given, when, then }) => {

        let username = "admin@admin";
        let password = "password"; //NOSONAR

        given('The main page', () => {

        });

        when('Try to login as an admin', async () => {
            await page.setViewport({ width: 1200, height: 1300 });

            await expect(page).toMatch('Mi perfil')
            await expect(page).toClick('button', { text: 'Mi perfil' })
            await expect(page).toClick("a[href='/login']")
            await page.waitForNavigation()

            await expect(page).toClick('button', { text: 'Login Admin' })
            await expect(page).toFill("[label:'Email']", username)
            await expect(page).toFill("[label:'Password']", password)
            await expect(page).toMatch('Login')
            await expect(page).toClick('button', { text: 'Login' })

        });

        then('The login does not work', async () => {
            await expect(page).toMatch('No eres admin')
        });
    })

    afterAll(async () => {
        browser.close()
    })

});