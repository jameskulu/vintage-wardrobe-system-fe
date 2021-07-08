const { expect } = require('chai');
const { Given} = require('@cucumber/cucumber');
const axios = require('axios')
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');



Given('Test registration functionality', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
   await driver.get('https://vintagewardrobe.herokuapp.com/signup');
//    await driver.findElement(By.id('email')).sendKeys('rijan@yahoo.com');
//    await driver.findElement(By.id('pass')).sendKeys('rijan', Key.RETURN);
   
   await driver.findElement(By.name('firstName')).sendKeys('Rijan');
   await driver.findElement(By.name('lastName')).sendKeys('Shrestha');
   await driver.findElement(By.name('email')).sendKeys('rijan@gmail.com');
   await driver.findElement(By.name('password')).sendKeys('Rijan123');
   await driver.findElement(By.name('confirmPassword')).sendKeys('Rijan123');
   await driver.findElement(By.id('checkbox')).click();
   await driver.findElement(By.className('registerbtn')).click();
   

   
//    await axios.get('http://www.facebook.com');
//   expect('rijan').to.be.equal('rijann')
});
    