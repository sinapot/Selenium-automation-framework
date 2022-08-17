const { By } = require('selenium-webdriver');


class MyAccountPage{

    constructor(driver){
        this.driver = driver;
        this.myaccount = driver.findElement(By.css(".navigation_page"))
       
    }

}
module.exports = { MyAccountPage}