const { By } = require('selenium-webdriver');


class MyAccountPage{

    constructor(driver){
        this.driver = driver;
        this.myaccount = driver.findElement(By.css(".navigation_page"))
        this.homeButton = driver.findElement(By.css("a[title='Return to Home']"))
       
    }

}
module.exports = { MyAccountPage}