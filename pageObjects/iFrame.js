const { By } = require('selenium-webdriver');

class IFrame{
    constructor(driver){
        this.driver = driver;
        this.iframe = driver.findElement(By.css('.fancybox-iframe'));
        this.addtocart = driver.findElement(By.css("button[name='Submit'] span"));
        this.close = driver.findElement(By.css("span[title='Close window']"));
    }
}
module.exports = {IFrame}