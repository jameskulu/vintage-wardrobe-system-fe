const { expect } = require('chai');
const { Given, When, Then} = require('@cucumber/cucumber');
const axios = require('axios')
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/constant');

Given('Test registration functionality', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
   await driver.get('https://vintagewardrobe.herokuapp.com/signup');
   await driver.findElement(By.name('firstName')).sendKeys('Rijan');
   await driver.findElement(By.name('lastName')).sendKeys('Shrestha');
   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
   await driver.findElement(By.name('password')).sendKeys('Rijan123');
   await driver.findElement(By.name('confirmPassword')).sendKeys('Rijan123');
   await driver.findElement(By.id('checkbox')).click();  
   await driver.findElement(By.className('registerbtn')).click();
   await driver.sleep(delay);
   await driver.quit();
   await driver.sleep(delay);
});

Given('Test login functionality', async () => {
  
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  const homepg = console.log('Now you are in homepage');
  return homepg;
});

Given('Recover Password', async () => {
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.id('login-link')).click();
  await driver.findElement(By.id('forgot-password-email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.className('forgetbtn')).click();
  const result = console.log('------>Reset link has been sent to your email');
  return result;
});

Given('Search functionality', async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/s');
  // await driver.findElement(By.className('fas')).click();
  await driver.findElement(By.tagName('input')).sendKeys('pant');

  // .sendKeys('pants', Key.RETURN)
});

Given('View Items', async () => {  //viewItems and displaying the details
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  await driver.get('https://vintagewardrobe.herokuapp.com/items/7a146aa1-dabc-4364-bcec-b34a2624a09e');
  // await driver.findElement(By.className('add-cart')).click();
});

Given('Upload functionality', async () => {  //viewItems and displaying the details
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/add');
 await driver.findElement(By.id('formGroupExampleInput')).sendKeys('Arbin');
 await driver.findElement(By.id('exampleFormControlTextarea1')).sendKeys('About pants');
 await driver.findElement(By.id('formGroupExampleInput2')).sendKeys('Rs 1000');
 await driver.findElement(By.className('btn')).click();
 
});

Given('Edit functionality', async () => {  //viewItems and displaying the details
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');
//  await driver.findElement(By.className('fa-edit')).click();
await driver.sleep(5000);
await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/edit/ec343593-1638-4ac3-9524-a8d89b0f6f06');
 await driver.findElement(By.id('formGroupExampleInput')).sendKeys('Sandesh');
 await driver.sleep(2000);
 await driver.findElement(By.id('exampleFormControlTextarea1')).sendKeys('About pants');
 await driver.sleep(2000);
 await driver.findElement(By.id('formGroupExampleInput2')).sendKeys('Rs 2000');
 await driver.findElement(By.className('btn')).click();
});

Given('View item functionality', async () => {  //viewItems and displaying the details
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');

});


Given('Order status funtionality', async () => {
  
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.get('https://vintagewardrobe.herokuapp.com/orders');
//  await driver.sleep(delay);
//  await driver.quit();
 const msg=console.log('You are in my orders page');
 return msg;
 
});
Given('added cart funtionality', async () => {
  
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.get('https://vintagewardrobe.herokuapp.com');
 await driver.findElement(By.className('fa-shopping-cart')).click();
});
