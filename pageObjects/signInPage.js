const { By } = require('selenium-webdriver');


class SignInPage{

    constructor(driver){
        this.driver = driver;
        this.email = driver.findElement(By.css("#email"))
        this.password = driver.findElement(By.css('#passwd'));
        this.signInButton = driver.findElement(By.css("button[id='SubmitLogin'] span"));
    }

}
module.exports = { SignInPage}