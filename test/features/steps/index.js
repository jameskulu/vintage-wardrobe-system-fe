const { expect } = require('chai');
const { Given, When, Then} = require('@cucumber/cucumber');
const axios = require('axios')
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/constant');



// Given('Test registration functionality', async () => {
//     let driver = await new Builder().forBrowser('chrome').build();
//    await driver.get('https://vintagewardrobe.herokuapp.com/signup');
//    await driver.findElement(By.name('firstName')).sendKeys('Rijan');
//    await driver.findElement(By.name('lastName')).sendKeys('Shrestha');
//    await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//    await driver.findElement(By.name('password')).sendKeys('Rijan123');
//    await driver.findElement(By.name('confirmPassword')).sendKeys('Rijan123');
//    await driver.findElement(By.id('checkbox')).click();  
//    await driver.findElement(By.className('registerbtn')).click();
//   //  await driver.quit();

// });
    
Given('Test login functionality', async () => {
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  
});

Given('Recover Password', async () => {
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.id('login-link')).click();
  
  await driver.findElement(By.id('forgot-password-email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.className('forgetbtn')).click();
  const result = console.log('------>Reset link has been sent to your email');
//   await driver.quit();
  return result;
  

});


Given('Search functionality', async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/s');
  // await driver.findElement(By.className('fas')).click();
  await driver.findElement(By.tagName('input')).sendKeys('pant');

  // .sendKeys('pants', Key.RETURN)
});

// Given('View Items', async () => {
//    let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.tagName('a')).click();
//   // await driver.findElement(By.className('latest-released')).click();
  
// });


