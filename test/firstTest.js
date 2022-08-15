const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
require('chromedriver')

  describe('first selenium test with mocha', function () {

      let driver;
      before( async function(){
            driver = await new Builder().forBrowser('chrome').build()
      })

      //End session
      after(() => driver.quit);

      it('first test', async function(){
            //open test website
            await driver.get('http://automationpractice.com/index.php');

            //get page title
            const pageTitle = await driver.getTitle()

            //assertion
            await expect(pageTitle).to.be.a('string');            
        });
      });