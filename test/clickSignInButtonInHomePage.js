const { Builder } = require('selenium-webdriver');
require('chromedriver')
const { HomePage } = require('../pageObjects/homePage')
const { SignInPage } = require('../pageObjects/signInPage')

describe('Click SignIn Button', function () {

    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://automationpractice.com/index.php');
    })

    after(async function () {
        await driver.quit();
    });

    it('login with Page Object', async () => {

        const homePage = new HomePage(driver);
        const signInPage = new SignInPage(driver)
        
        await homePage.signInButton.click();
        
        //type email, password then click sign in button
        await signInPage.email.sendKeys('alon@sharklasers.com');
        await signInPage.password.sendKeys('alonalon')
        await signInPage.signInButton.click();

    });
});