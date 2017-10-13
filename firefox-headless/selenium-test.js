var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var firefox = require('selenium-webdriver/firefox');

var binary = new firefox.Binary('C:\\Users\\julianm\\Downloads\\MozillaFirefox\\firefox.exe');
binary.addArguments("-headless");

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(new firefox.Options().setBinary(binary))
    .build();

driver.get('https://listado.mercadolibre.com.co/iphone');
driver.sleep(4000);

driver.findElements(By.css('span.main-title'))
.then(function(titleElements){
    titleElements.forEach(function(element){
        element.getText().then(function(text){
            console.log(text);
        })
    })
});


driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    }
);

driver.quit();
