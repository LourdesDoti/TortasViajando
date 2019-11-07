const { Builder, By, Key, until } = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');
var webdriver = require('selenium-webdriver');
var driver;
require('chromedriver');
var { setDefaultTimeout } = require('cucumber');

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
    correo = await this.driver.findElement(By.xpath('//*[@id="page-container"]/div/div[1]/form/fieldset/div[1]/input'));
    await correo.sendKeys('lurilu95@hotmail.com');
    contraseña = await this.driver.findElement(By.xpath('//*[@id="page-container"]/div/div[1]/form/fieldset/div[2]/input'));
    await contraseña.sendKeys('47811210l');
    var botonEntrar;
    botonEntrar = await this.driver.findElement(By.xpath('//*[@id="page-container"]/div/div[1]/form/div[2]/button'));
    await botonEntrar.click();
  
  });