const { expect } = require('chai');
const { Builder } = require('selenium-webdriver');
require('chromedriver')

  describe('first selenium test with mocha', function () {
      
      //disable timeout as where using async awaits, this simulates --no-timeouts option when running tests from CLI
      this.timeout(0)

      let driver;
      before( async function(){
            driver = await new Builder().forBrowser('chrome').build()
      })

      //End session
      after(async function(){
            await driver.close();
            await driver.quit();
        });

      it('first test', async function(){
            //open test website
            await driver.get('http://automationpractice.com/index.php');

            //get page title
            const pageTitle = await driver.getTitle()

            //assertion
            await expect(pageTitle).to.be.a('string');    
            

            
        });
      });