const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
require('chromedriver')
const { HomePage } = require('../pageObjects/homePage')
const { SignInPage } = require('../pageObjects/signInPage')
const { MyAccountPage } =  require('../pageObjects/myAccountPage')

describe('SignIn', function () {

    let driver;
    before(async function () {
        //Start the session
        driver = await new Builder().forBrowser('chrome').build()
        //await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        await driver.get('http://automationpractice.com/index.php');
    })

    //End session
    after(async function () {
        await driver.quit();
    });

    it('login with Page Object', async () => {

        const homePage = new HomePage(driver);
        const signInPage = new SignInPage(driver)
        //const myAccountPage = new MyAccountPage(driver);
        
        //click sign in button from home page
        await homePage.signInButton.click();
        
        //type email, password then click sign in button
        await signInPage.email.sendKeys('alon@sharklasers.com');
        await signInPage.password.sendKeys('alonalon')
        await signInPage.signInButton.click();
        
        //get page title
        //const pageTitle = await driver.getTitle()
        //await expect(pageTitle).to.equal('My account - My Store');  


    });
});