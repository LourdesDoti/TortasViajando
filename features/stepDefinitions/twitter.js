const { Builder, By, Key, until } = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');
var webdriver = require('selenium-webdriver');
var driver;
require('chromedriver');
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);


Given('Abrimos la página de twitter', async function () {

    this.driver = await new webdriver.Builder().forBrowser('chrome').build();
    await this.driver.get('http://www.twitter.com');
    await this.driver.manage().window().maximize();
  });
  

  When('Inicio sesion', async function () {
    var Botoninicarsesion;
    Botoninicarsesion = await this.driver.findElement(By.xpath('//a [@class="StaticLoggedOutHomePage-input StaticLoggedOutHomePage-narrowLoginButton EdgeButton EdgeButton--secondary EdgeButton--small u-floatRight"]'));
    await Botoninicarsesion.click();
    var correo;
    var contraseña;
    correo = await this.driver.findElement(By.xpath('//input[@class="js-username-field email-input js-initial-focus"]'));
    await correo.sendKeys('lurilu95@hotmail.com');
    contraseña = await this.driver.findElement(By.xpath('//input[@class="js-password-field"]'));
    await contraseña.sendKeys('47811210l');
    var botonEntrar;
    botonEntrar = await this.driver.findElement(By.xpath('//button[@type="submit"]'));
    await botonEntrar.click();
  
  });

  When(/^Twitteamos "(.*)"$/, async function (textoAEscribir) {
    await this.driver.sleep(3000);
    var barraTwitteadora = await this.driver.findElement(By.xpath('//div[@class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'));
    await barraTwitteadora.click();
    await barraTwitteadora.sendKeys(textoAEscribir);
    await this.driver.sleep(3000);
    var twittear;
    twittear = await this.driver.findElement(By.xpath('//div[@data-testid="tweetButtonInline"]'));
    await twittear.click();
    await twittear.click();
  
  });
 
  When('And Le ponemos fav a todo', async function () { 
    
    for (var i = 2; i <= 3; i++) {
        await this.driver.sleep(1000);
        try {
          var favorito = await this.driver.findElement(By.xpath('//div[@aria-label="Cronología: Tu cronología de inicio"]/div/div/div['+i+']//div[@data-testid="like"]'));
          await favorito.click();
        } catch (error) {
          
        }

      }
    });
    
