const { By } = require('selenium-webdriver');


class HomePage{

    constructor(driver){
        this.driver = driver;
        this.signInButton = driver.findElement(By.css(".login"))
        this.searchBox = driver.findElement(By.css('#search_query_top'));
        this.searchButton = driver.findElement(By.css("button[name='submit_search']"));
    }

}
module.exports = { HomePage}