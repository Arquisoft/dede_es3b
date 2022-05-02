import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/filter-products.feature');

let page: puppeteer.Page;
let page2: puppeteer.Page;
let browser: puppeteer.Browser;

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
            .goto("http://localhost:3000/raquets", {
                waitUntil: "networkidle0",
            })
            .catch(() => { });
    });

    test('Filter products by Raquetas', ({ given, when, then }) => {

        given('The main page', () => {

        });

        when('Select filter by "Raquetas" in the menu', async () => {
            await expect(page).toMatch('Productos')
            await expect(page).toMatch('Mi perfil')

        });

        then('Balls shouldn´t appear in the catalogue', async () => {
            await expect(page2).toMatch('Ascis')
            await expect(page2).not.toMatch('Mundial')
        });
    })

    test('Filter products by Pelotas', ({ given, when, then }) => {

        given('The main page', () => {

        });

        when('Select filter by "Pelotas" in the menu', async () => {
            await expect(page).toMatch('Productos')
            await expect(page).toMatch('Mi perfil')

            //await expect(page).toClick('button', { text: 'Productos' })
            await expect(page).toContain('#productos')
            await expect(page).toClick('a[href="/balls"]')
        });

        then('Rackets shouldn´t appear in the catalogue', async () => {
            await expect(page).toMatch('Mundial')
            await expect(page).not.toMatch('Ascis')
        });
    })

    afterAll(async () => {
        browser.close()
    })

});