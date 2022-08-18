const { expect } = require('chai');
const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver')
const { HomePage } = require('../pageObjects/homePage');
const { SignInPage } = require('../pageObjects/signInPage');

describe('Sign In', function () {

    let driver;
    before(async function () {
        //Start the session
        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    })

    //End session
    after(async function () {
        await driver.quit();
    });

    it('Sign In', async () => {

        const signInPage = new SignInPage(driver);

        await signInPage.email.sendKeys('alon@sharklasers.com');
        await signInPage.password.sendKeys('alonalon')
        await signInPage.signInButton.click();

    });
});