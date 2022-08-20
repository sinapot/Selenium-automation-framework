//This E2E test case covers interaction with below elements and uses Page Object Model:
//checkboxes, text fields, buttons, links, and iFrames

const { expect } = require('chai');
const { By, Builder, until } = require('selenium-webdriver');
require('chromedriver')
const { MyAccountPage } = require('../pageObjects/myAccountPage');
const { SignInPage } = require('../pageObjects/signInPage');
const { HomePage } =  require('../pageObjects/homePage');
const { IFrame } = require('../pageObjects/iFrame');

describe('E2E', function () {
    let driver;
        before(async function () {
            //Start the session
            driver = await new Builder().forBrowser('chrome').build()
            await driver.manage().setTimeouts({ implicit: 65000 });
            await driver.get('http://automationpractice.com/index.php');
        })
    
        //End session
        after(async function () {
            await driver.quit();
        });
        
        it('E2E - Sign In', async function(){
        
        const homePage = new HomePage(driver);
        //this took me two days to know the importance of synchronization in Selenium
        await homePage.signInButton.click();
        
        const signInPage = new SignInPage(driver);
        await signInPage.email.sendKeys('alon@sharklasers.com');
        await signInPage.password.sendKeys('alonalon')
        await signInPage.signInButton.click();
        
        //verify My account page is displayed
        const myAccountPage = new MyAccountPage(driver);
        const myaccountPageValue = await myAccountPage.myaccount.getText();
        await expect(myaccountPageValue).to.equal('My account')
        await myAccountPage.homeButton.click()

        //this POM pattern takes longer to execute
        const homePage1 = new HomePage(driver);
        await homePage1.blouse.click();

        //switch to iFRAME
        const iframe1 = new IFrame(driver);
        await driver.switchTo().frame(iframe1.iframe);
        // await iframe1.addtocart.click();
        // await iframe1.close.click();

        //click iFrame Add to Cart
        const addToCart = await driver.findElement(By.css("button[name='Submit'] span"));
        await addToCart.click();
        //close iFrame modal
        const closeButton = await driver.findElement(By.css("span[title='Close window']"));
        await closeButton.click()

        //click Cart
        const cart = await driver.findElement(By.css("a[title='View my shopping cart']"));
        await cart.click()
        
        //assert user is in Shopping Cart page
        const shoppingCart = await driver.findElement(By.css(".navigation_page"))
        const shoppingCartText = await shoppingCart.getText();
        await expect(shoppingCartText).to.equal('Your shopping cart')

        //click proceed to check out
        const proceedButtonCart = await driver.findElement(By.css('.cart_navigation .btn'));
        await proceedButtonCart.click()

        //validate user is in address page
        const address = await driver.findElement(By.css(".navigation_page"))
        const addressText = await address.getText();
        await expect(addressText ).to.equal('Addresses')

        //add comment on the order
        const textBox = await driver.findElement(By.css("textarea[name='message']"));
        await textBox.sendKeys("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")

        //click proceed to check out
        const proceedCheckout1 = await driver.findElement(By.css("button[name='processAddress']"));
        await proceedCheckout1.click()

        //click agree terms
        const tickBox = await driver.findElement(By.css('#uniform-cgv'));
        await tickBox.click()

        const proceedCheckout2 = await driver.findElement(By.css("button[name='processCarrier'] span"));
        await proceedCheckout2.click();

        //payment page, click Pay by Bank
        const payBank = await driver.findElement(By.css("a[title='Pay by bank wire']"));
        await payBank.click()

        //validate user is in Bank wire Payment
        const payment = await driver.findElement(By.css(".navigation_page"))
        const paymentText = await payment.getText();
        await expect(paymentText ).to.equal('Bank-wire payment.')

        //click I confirm my order
        const confirmButton = await driver.findElement(By.css("button[type='submit'] i[class='icon-chevron-right right']"));
        await confirmButton.click()

        //validate Order Confirmation
        const orderConfirmation = await driver.findElement(By.css(".navigation_page"))
        const orderConfirmationText = await orderConfirmation.getText();
        await expect(orderConfirmationText ).to.equal('Order confirmation')

        //click Lgout
        const logOut = await driver.findElement(By.css("a[title='Log me out']"));
        await logOut.click()

    });
});