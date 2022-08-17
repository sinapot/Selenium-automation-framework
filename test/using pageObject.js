const { expect } = require('chai');
const { By, Builder } = require('selenium-webdriver');
require('chromedriver')
const { HomePage } = require('../pageObjects/homePage')

describe('using Page Object Model', function () {

    let driver;
    before(async function () {
        //Start the session
        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://automationpractice.com/index.php');
    })

    //End session
    after(async function () {
        await driver.quit();
    });

    it('using Home Page Object', async () => {

        const homePage = new HomePage(driver);

        //search blouse and click to go to next page
        await homePage.searchBox.sendKeys('Blouse');
        await homePage.searchButton.click();

        //asssert on page result
        const navPage = await driver.findElement(By.css('.navigation_page'));
        const navPageValue = await navPage.getText()
        await console.log(navPageValue)

        await expect(navPageValue).to.equal('Search')

    });
});