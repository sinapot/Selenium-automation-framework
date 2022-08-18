const { expect } = require('chai');
const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver')
const { MyAccountPage } = require('../pageObjects/myAccountPage');
const { SignInPage } = require('../pageObjects/signInPage');
const { HomePage } =  require('../pageObjects/homePage');

describe('E2E', function () {

    let driver;
    before(async function () {
        //Start the session
        driver = await new Builder().forBrowser('chrome').build()
        await driver.get('http://automationpractice.com/index.php');
        
        //await driver.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    })

    //End session
    after(async function () {
        await driver.quit();
    });

    it.only('E2E - Sign In', async () => {

        //this took me two days to know the importance of synchronization in Selenium
        await driver.manage().setTimeouts({ implicit: 60000 });
                
        const homePage = new HomePage(driver);
        await homePage.signInButton.click();
                
        const signInPage = new SignInPage(driver);
        await signInPage.email.sendKeys('alon@sharklasers.com');
        await signInPage.password.sendKeys('alonalon')
        await signInPage.signInButton.click();


        const myAccountPage = new MyAccountPage(driver);
        const myaccountPageValue = await myAccountPage.myaccount.getText();
        await console.log(myaccountPageValue);

    });
});