import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/login-admin.feature');

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
            .catch(() => {
                //This is intentional
            });
    });

    test('Login as an admin', ({ given, when, then }) => {

        let username: string = "admin@admin.com";
        let password: string = "admin"; //NOSONAR

        given('The main page', () => {
            //This is intentional
        });

        when('Try to login as an admin', async () => {
            await page.setViewport({ width: 1200, height: 1300 });

            await expect(page).toMatch('Mi perfil')
            await expect(page).toClick('button', { text: 'Mi perfil' })
            await expect(page).toClick("a[href='/login']")
            await page.waitForNavigation()

            await expect(page).toClick('button', { text: 'Login Admin' })
            await expect(page).toFill('#email', username)
            await expect(page).toFill('#password', password)
            await expect(page).toMatch('Login')
            await expect(page).toClick('button', { text: 'Login' })

        });

        then('The login works', async () => {
            await expect(page).toMatch('Eres admin')
        });
    })

    afterAll(async () => {
        browser.close()
    })

});