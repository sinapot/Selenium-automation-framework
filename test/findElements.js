const { expect, should } = require('chai');
const { By, Builder } = require('selenium-webdriver');
require('chromedriver')

describe('finding Elemetns using CSS Selector', function () {

    let driver;
    before(async function () {
        //Start the session
        driver = await new Builder().forBrowser('chrome').build()
    })

    //End session
    after(() => driver.quit());

    it.only('first test', async () => {

        //Take action on browser
        await driver.get('http://automationpractice.com/index.php');

        //Request browser information
        const pageTitle = await driver.getTitle()

        //Establish Waiting Strategy
        await driver.manage().setTimeouts({ implicit: 5000 });

        //assertion
        await expect(pageTitle).to.be.a('string');
        await console.log(pageTitle)
        //Find an element 
        let searchBox = await driver.findElement(By.css('#search_query_top'))
        let searchButton = await driver.findElement(By.css("button[name='submit_search']"))
        
        //Take action on element
        await searchBox.sendKeys('Blouse');
        await searchButton.click();
        
        //Establish Waiting Strategy
        //await driver.manage().setTimeouts({ implicit: 5000 });
        
        
        //asssert
        const navPage = await driver.findElement(By.css('.navigation_page'));
        const navPageValue = await navPage.getText()
        await console.log(navPageValue)

        await expect(navPageValue).to.equal('Search')

    });
});