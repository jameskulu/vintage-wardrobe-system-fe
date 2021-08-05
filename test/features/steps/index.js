const { expect } = require('chai');
const { Given, When, Then} = require('@cucumber/cucumber');
const axios = require('axios')
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/constant');

Given('Test registration functionality',{timeout: 2 * 5000}, async () => {
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
});

Given('Test login functionality',{timeout: 2 * 5000}, async () => {
  
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  const homepg = console.log('Now you are in homepage');
  return homepg;
});

Given('Recover Password',{timeout: 2 * 5000}, async () => {
   let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.id('login-link')).click();
  await driver.findElement(By.id('forgot-password-email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.className('forgetbtn')).click();
  const result = console.log('------>Reset link has been sent to your email');
  return result;
});

Given('Search functionality', {timeout: 2 * 5000},async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/s');
  // await driver.findElement(By.className('fas')).click();
  await driver.findElement(By.tagName('input')).sendKeys('pant');

  // .sendKeys('pants', Key.RETURN)
});

Given('View Items', {timeout: 2 * 5000}, async () => {  //viewItems and displaying the details
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
  await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021
  `);
  await driver.findElement(By.className('add-cart')).click();
});

// Given('Upload functionality', {timeout: 2 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/add');
//  await driver.findElement(By.id('formGroupExampleInput')).sendKeys('T-shirt');
//  await driver.findElement(By.id('exampleFormControlTextarea1')).sendKeys('tshirt');
//  await driver.findElement(By.id('formGroupExampleInput2')).sendKeys('Rs 1000');
//  await driver.findElement(By.id('exampleFormControlSelect1')).sendKeys('Men');
// //  await driver.findElement(By.id('exampleFormControlSelect1')).sendKeys('Tshirt');
//  await driver.findElement(By.className('btn')).click();
 
// });

// Given('Edit functionality',{timeout: 2 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');
// //  await driver.findElement(By.className('fa-edit')).click();
// await driver.sleep(5000);
// await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/edit/ec343593-1638-4ac3-9524-a8d89b0f6f06');
//  await driver.findElement(By.id('formGroupExampleInput')).sendKeys('Sandesh');
//  await driver.sleep(2000);
//  await driver.findElement(By.id('exampleFormControlTextarea1')).sendKeys('About pants');
//  await driver.sleep(2000);
//  await driver.findElement(By.id('formGroupExampleInput2')).sendKeys('Rs 2000');
//  await driver.findElement(By.className('btn')).click();
// });

//viewing the items after renter upload 
Given('View item functionality', {timeout: 2 * 5000},async () => {  //viewItems and displaying the details
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');

});

//checking the status of user order
Given('Order status funtionality', {timeout: 2 * 5000},async () => {
  
  let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/orders');
//  await driver.sleep(delay);
//  await driver.quit();
 const msg=console.log('You are in my orders page');
 return msg;
 
});

//adding to cart
Given('added cart funtionality', {timeout: 2 * 5000},async () => {

 let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
 await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`, Key.RETURN);
 await driver.findElement(By.className('add-cart')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com');
 await driver.findElement(By.className('fa-shopping-cart')).click();
});

//payment process
Given('checkout funtionality', {timeout: 3 * 5000}, async () => {

  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  await driver.sleep(delay);
  await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
  await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021
  `);
  await driver.findElement(By.className('add-cart')).click();
  await driver.sleep(delay);
  await driver.get('https://vintagewardrobe.herokuapp.com');
  await driver.findElement(By.className('fa-shopping-cart')).click();
  await driver.findElement(By.className('btn-Checkout')).click();
  await driver.findElement(By.id('inputAddress')).sendKeys('Gongabu');
  await driver.findElement(By.id('inputCity')).sendKeys('Kathmandu');
  await driver.findElement(By.tagName('select')).sendKeys('Nepal');
  await driver.findElement(By.id('number')).sendKeys('1231231234');
  await driver.findElement(By.className('btn-primary')).click();

});


// remove from cart
Given('remove cart funtionality', {timeout: 4 * 5000}, async () => {
 let driver = await new Builder().forBrowser('chrome').build();
 await driver.get('https://vintagewardrobe.herokuapp.com/login');
 await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
 await driver.findElement(By.name('password')).sendKeys('Rijan@23');
 await driver.findElement(By.className('loginbtn')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
 await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`, Key.RETURN);
 await driver.findElement(By.className('add-cart')).click();
 await driver.sleep(delay);
 await driver.get('https://vintagewardrobe.herokuapp.com');
 await driver.findElement(By.className('fa-shopping-cart')).click();
 await driver.sleep(delay);
 await driver.findElement(By.className('fa-times')).click();
});

Given('adding to wishlist funtionality', {timeout: 2 * 5000},async () => {

  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  await driver.sleep(delay);
  await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
  await driver.findElement(By.className('fa-heart')).click();
});
Given('view and remove wishlist funtionality', {timeout: 2 * 5000},async () => {

  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  await driver.sleep(delay);
  await driver.get('https://vintagewardrobe.herokuapp.com/wishlist');
  await driver.sleep(delay);
  await driver.findElement(By.className('fa-times')).click();
  await driver.sleep(delay);
  await driver.findElement(By.className('swal-button--confirm')).click();
});