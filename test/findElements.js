const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
require('chromedriver')

  describe('finding Elemetns using CSS Selector', function () {

      it('first test', async()=> {
            //Start the session
            let driver = await new Builder().forBrowser('chrome').build()

            //Take action on browser
            await driver.get('http://automationpractice.com/index.php');

            //Request browser information
            const pageTitle = await driver.getTitle()

            //Establish Waiting Strategy
            await driver.manage().setTimeouts({ implicit: 5000 });

            //Find an element 
            //let searchBox = await driver.findElement(By.name('text'));
            //let searchButton = await driver.findElement(By.id('submitbtn'));

            //Take action on element
            //await searchBox.sendKeys('Selenium');
            //await searchButton.click();

            //Request element information
            //let value = await searchBox.getText();

            //assertion
            await expect(pageTitle).to.be.a('string');

            //end session
            //after(() => driver.quit)
            await driver.quit()
        });
      });