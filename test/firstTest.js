const { should } = require('chai');
const { Builder } = require('selenium-webdriver');
require('chromedriver')

  describe('first selenium test with mocha', function () {
      it('first test', async()=> {
            //wait for browser to build and launch
            let driver = await new Builder().forBrowser('chrome').build()

            //open test website
            await driver.get('http://automationpractice.com/index.php');

            //get page title
            const pageTitle = await driver.getTitle()

            //log page Title
            console.log(pageTitle);

            //assertion
            pageTitle.should.be.a.string();
        });
      });