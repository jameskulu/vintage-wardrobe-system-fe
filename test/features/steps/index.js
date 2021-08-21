const { expect } = require('chai');
const { Given, When, Then} = require('@cucumber/cucumber');
const axios = require('axios')
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/constant');

// Given('Test registration functionality',{timeout: 2 * 5000}, async () => {
//     let driver = await new Builder().forBrowser('chrome').build();
//    await driver.get('https://vintagewardrobe.herokuapp.com/signup');
//    await driver.findElement(By.name('firstName')).sendKeys('Rijan');
//    await driver.findElement(By.name('lastName')).sendKeys('Shrestha');
//    await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//    await driver.findElement(By.name('password')).sendKeys('Rijan123');
//    await driver.findElement(By.name('confirmPassword')).sendKeys('Rijan123');
//    await driver.findElement(By.id('checkbox')).click();  
//    await driver.findElement(By.className('registerbtn')).click();
//    await driver.sleep(delay);
//    await driver.quit();
// });

// Given('Test login functionality',{timeout: 2 * 5000}, async () => {
  
//    let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   const homepg = console.log('Now you are in homepage');
//   return homepg;
// });

// Given('Recover Password',{timeout: 2 * 5000}, async () => {
//    let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.id('login-link')).click();
//   await driver.findElement(By.id('forgot-password-email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.className('forgetbtn')).click();
//   const result = console.log('------>Reset link has been sent to your email');
//   return result;
// });

// Given('Search functionality', {timeout: 3 * 5000},async () => {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/s');
//   // await driver.findElement(By.className('fas')).click();
//   await driver.findElement(By.tagName('input')).sendKeys('pant');

//   // .sendKeys('pants', Key.RETURN)
// });

// Given('View Items', {timeout: 2 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
//   await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021
//   `);
//   await driver.findElement(By.className('add-cart')).click();
// });



// Given('Upload functionality', {timeout: 4 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/add');
//  await driver.findElement(By.id('itemName')).sendKeys('test-item');
//  await driver.findElement(By.id('itemDescription')).sendKeys('adding item for test');
//  await driver.findElement(By.id('itemPrice')).sendKeys('Rs 1000');
//  await driver.findElement(By.id('itemCategory')).sendKeys('Men');
//  await driver.sleep(1500);
//  await driver.findElement(By.id('itemSubcategory')).sendKeys('Jacket');
//  await driver.findElement(By.id('itemColor')).sendKeys('Black');
//  await driver.findElement(By.id('itemSize')).sendKeys('Medium');
//  await driver.findElement(By.id('btnAdd')).click();
 
// });

// Given('Edit functionality',{timeout: 4 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');
//  await driver.sleep(2000);
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/edit/c2945cf9-8f66-48fd-84f1-7ec6978bcefa');
//  await driver.sleep(2000);
//  await driver.findElement(By.id('etName')).clear();
//  await driver.findElement(By.id('etName')).sendKeys('short pants');
//  await driver.findElement(By.id('etDescription')).clear();
//  await driver.findElement(By.id('etDescription')).sendKeys('About short pants');
//  await driver.findElement(By.id('etPrice')).clear();
//  await driver.findElement(By.id('etPrice')).sendKeys('Rs 1000');
//  await driver.findElement(By.id('etColor')).sendKeys('Blue');
//  await driver.findElement(By.id('etSize')).sendKeys('Small');
//  await driver.findElement(By.id('btnUpdateItem')).click();
// });




// //viewing the items after renter upload 
// Given('View item functionality', {timeout: 2 * 5000},async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');

// });

// //checking the status of user order
// Given('Order status funtionality', {timeout: 2 * 5000},async () => {
  
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/orders');
// //  await driver.sleep(delay);
// //  await driver.quit();
//  const msg=console.log('You are in my orders page');
//  return msg;
 
// });

// //adding to cart
// Given('added cart funtionality', {timeout: 2 * 5000},async () => {

//  let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
//  await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`, Key.RETURN);
//  await driver.findElement(By.className('add-cart')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com');
//  await driver.findElement(By.className('fa-shopping-cart')).click();
// });

// //payment process
// Given('checkout funtionality', {timeout: 3 * 5000}, async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
//   await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021
//   `);
//   await driver.findElement(By.className('add-cart')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com');
//   await driver.findElement(By.className('fa-shopping-cart')).click();
//   await driver.findElement(By.className('btn-Checkout')).click();
//   await driver.findElement(By.id('inputAddress')).sendKeys('Gongabu');
//   await driver.findElement(By.id('inputCity')).sendKeys('Kathmandu');
//   await driver.findElement(By.tagName('select')).sendKeys('Nepal');
//   await driver.findElement(By.id('number')).sendKeys('1231231234');
//   await driver.findElement(By.className('btn-primary')).click();

// });


// // remove from cart
// Given('remove cart funtionality', {timeout: 4 * 5000}, async () => {
//  let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
//  await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`, Key.RETURN);
//  await driver.findElement(By.className('add-cart')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com');
//  await driver.findElement(By.className('fa-shopping-cart')).click();
//  await driver.sleep(delay);
//  await driver.findElement(By.className('fa-times')).click();
// });

// Given('adding to wishlist funtionality', {timeout: 2 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/items/86a66046-6f3a-44b7-b7e0-103c888d33c2');
//   await driver.findElement(By.className('fa-heart')).click();
// });
// Given('view and remove wishlist funtionality', {timeout: 2 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/wishlist');
//   await driver.sleep(delay);
//   await driver.findElement(By.className('fa-times')).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.className('swal-button--confirm')).click();
// });


// Given('filter funtionality', {timeout: 4 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com');
//   await driver.findElement(By.id('navbarDropdown3')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/category/Men');
//   await driver.sleep(delay);
//   await driver.findElement(By.id('sub-category-Tshirt')).click();
//   await driver.findElement(By.className('grid-color-2')).click();
// });

// // Given('review funtionality', {timeout: 4 * 5000},async () => {

// //   let driver = await new Builder().forBrowser('chrome').build();
// //   await driver.get('https://vintagewardrobe.herokuapp.com/login');
// //   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
// //   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
// //   await driver.findElement(By.className('loginbtn')).click();
// //   await driver.sleep(delay);
// //   await driver.get('https://vintagewardrobe.herokuapp.com/items/be923384-ff69-4bdd-b5e6-6e0e0b85ce33');
// //   await driver.sleep(delay);
// //   await driver.findElement(By.xpath("//div/span[@data-index='0']")).click();
// //   await driver.findElement(By.className('review-field')).sendKeys("nice");
// //   await driver.sleep(delay);
// //   await driver.findElement(By.className('btn-review')).click();
// // });

// Given('view profile funtionality', {timeout: 4 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com');
//   await driver.sleep(delay);
//   await driver.findElement(By.id('navbarDropdown2')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/myprofile');
// });

// Given('edit profile funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com');
//   await driver.sleep(delay);
//   await driver.findElement(By.id('navbarDropdown2')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/profile');
//   await driver.sleep(delay);
//   await driver.findElement(By.id('profilebtn')).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id('Lastname')).clear();
//   await driver.findElement(By.id('Lastname')).sendKeys('Gurung');
//   await driver.findElement(By.id('Country')).clear();
//   await driver.findElement(By.id('Country')).sendKeys('Kathmandu, Nepal');
//   await driver.findElement(By.id('updatebtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/profile');
// });


Given('add user funtionality', {timeout: 5 * 5000},async () => {

  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get('https://vintagewardrobe.herokuapp.com/login');
  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
  await driver.findElement(By.className('loginbtn')).click();
  await driver.sleep(delay);
  await driver.get('https://vintagewardrobe.herokuapp.com/admin');
  await driver.sleep(delay);
  await driver.get('https://vintagewardrobe.herokuapp.com/admin/users');
  await driver.sleep(1500);
  await driver.findElement(By.className('btn-success')).click();
  await driver.sleep(1500);
  await driver.findElement(By.id('fname')).sendKeys('Sandesh');
  await driver.findElement(By.id('lname')).sendKeys('Shrestha');
  await driver.findElement(By.id('email')).sendKeys('sandesh18shrestha@gmail.com');
  await driver.findElement(By.id('password')).sendKeys('Sandesh@23');
  await driver.findElement(By.id('gender')).sendKeys('Male');
  await driver.findElement(By.id('address')).sendKeys('Gorkha, Nepal');
  await driver.findElement(By.id('city')).sendKeys('Gorkha');
  await driver.findElement(By.id('country')).sendKeys('Nepal');
  await driver.findElement(By.id('user')).click();
  await driver.findElement(By.className('btn-block')).click();

  // await driver.sleep(delay);

});

// Given('add category funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/categories');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('btn-success')).click();
//   await driver.findElement(By.id('inpuTFirstname')).sendKeys('Aged');
//   await driver.sleep(delay);
//   await driver.findElement(By.className('btn-block')).click();
// });