const { Builder, By, Key, until } = require('selenium-webdriver');
const { Given, When, Then } = require('cucumber');
var webdriver = require('selenium-webdriver');
var driver;
require('chromedriver');
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const { assert } = require('chai');

Given('Abrir Sapling', async function () {

    this.driver = await new webdriver.Builder().forBrowser('chrome').build();
    await this.driver.get('https://int.saplinglearning.me/ibiscms/login/');
    await this.driver.manage().window().maximize();
});


When('Ingresar usuario y contraseña en sapling', async function () {
    var emailAddress;
    var password;
    emailAddress = await this.driver.findElement(By.xpath('//*[@id="username"]'));
    await emailAddress.sendKeys('raptoradmin');
    password = await this.driver.findElement(By.xpath('//*[@id="password"]'));
    await password.sendKeys('fasterthansixmill');
    var LogIn;
    LogIn = await this.driver.findElement(By.xpath('//*[@id="submitButton"]'));
    await LogIn.click();

});

When('Cambio la url', async function () {
    await this.driver.get('https://int.saplinglearning.me/ams');
    await this.driver.sleep(5000);

});

//When('Recorro la tabla hasta la fila 5 y verifico que el Author Mode sea igual a Raptor', async function () {
//  for (var i = 1; i <= 15; i++) {

//     await this.driver.wait(until.elementLocated(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[2]')));
//     var authorMode;
//     var authorMode = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[2]'));
//     var textoDelAuthorMode;
//     textoDelAuthorMode = await authorMode.getText();
//    var content123 = await authorMode.getAttribute('contentEditable');
//   console.log('El atributo contentEditable tiene como valor'+ content123);
//   await assert(textoDelAuthorMode === 'Raptor', 'Valor actual: ' + textoDelAuthorMode + ' Valor esperado: Raptor');
//   }
// });
When('Recorro la tabla hasta la fila 5 y verifico que el Author Mode sea igual a Raptor', async function () {
    await this.driver.wait(until.elementLocated(By.xpath('//*[@id="item-panel"]/table/tbody')));

    var  bodyDeLaTabla = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody'));
    var cantidadFilas = await bodyDeLaTabla.getAttribute('childElementCount');
    await this.driver.sleep(5000);
   
    for (var i = 1; i <= cantidadFilas; i++) {

        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[2]')));
        var authorMode;
        var authorMode = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[2]'));
        var textoDelAuthorMode;
        textoDelAuthorMode = await authorMode.getText();
        var content123 = await authorMode.getAttribute('contentEditable');
        await console.log('El atributo contentEditable tiene como valor' + content123);
        await assert(textoDelAuthorMode === 'Raptor', 'Valor actual: ' + textoDelAuthorMode + ' Valor esperado: Raptor');
    }
});

Then('cerrar el navegador', async function () {
    await this.driver.quit();
});

When ('Recorro la tabla y en el campo Acces y verifico que diga "public" o "private"',async function () { 
    
    var  bodyDeLaTabla = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody'));
    var cantidadFilas = await bodyDeLaTabla.getAttribute('childElementCount');
    await this.driver.sleep(5000);
   
    for (var i = 1; i <= cantidadFilas; i++) {

        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[13]')));
        var access;
        access = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[13]'));
        var TextoDeAccess;
        TextoDeAccess = await access.getText();
        await assert (TextoDeAccess === 'public' || TextoDeAccess === 'private' , "El valor actual es" + TextoDeAccess);



    }
});

When('Recorro la tabla y verifico que en el campo Description diga "Item Description" y en el campo Item Type diga "performance"', async function(){
    var  bodyDeLaTabla = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody'));
    var cantidadFilas = await bodyDeLaTabla.getAttribute('childElementCount');
    await this.driver.sleep(5000);
    for (var i = 1; i <= cantidadFilas; i++) {

        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[4]')));
        var description;
        description = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[4]'));
        var TextoDeDescription;
        TextoDeDescription = await description.getText();
        await this.driver.wait(until.elementLocated(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[12]')));
        var itemType;
        itemType = await this.driver.findElement(By.xpath('//*[@id="item-panel"]/table/tbody/tr[' + i + ']/td[12]'));
        var TextoDeItemType;
        TextoDeitemType = await itemType.getText();
        await assert (TextoDeitemType === 'performance' && TextoDeDescription === "item Description" , "Numero de fila: "+ i+ ". El valor actual de Description es" + TextoDeDescription+". El valor actual de Item Type es" + TextoDeItemType);

}
});

