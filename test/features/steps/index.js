const { expect } = require('chai');
const { Given, When, Then} = require('@cucumber/cucumber');
const axios = require('axios')
const { Builder, By, Key, until, sleep } = require('selenium-webdriver');
const { delay } = require('../utils/constant');

Given('Test registration functionality',{timeout: 4 * 5000}, async () => {
    let driver = await new Builder().forBrowser('chrome').build();
   await driver.get('https://vintagewardrobe.herokuapp.com/signup');
   await driver.findElement(By.name('firstName')).sendKeys('Rijan');
   await driver.findElement(By.name('lastName')).sendKeys('Shrestha');
   await driver.findElement(By.name('email')).sendKeys('rijanxrestha@gmail.com');
   await driver.findElement(By.name('password')).sendKeys('Rijan123');
   await driver.findElement(By.name('confirmPassword')).sendKeys('Rijan123');
   await driver.findElement(By.id('checkbox')).click();  
   await driver.findElement(By.className('registerbtn')).click();
   await driver.sleep(delay);
   await driver.quit();
});

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

// Given('Search functionality', {timeout: 5 * 5000},async () => {
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

// Given('View Items', {timeout: 5 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.className('single-latest-released')).click();
//   // await driver.get('https://vintagewardrobe.herokuapp.com/items/895d1bdc-3798-4316-97a6-182a11ccf301');
//   // await driver.sleep(delay);
//   // await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`, Key.RETURN);
//   // await driver.findElement(By.className('add-cart')).click();
// });



// Given('Upload functionality', {timeout: 7 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(8000);
//  await driver.findElement(By.className('fa-bars')).click();
//  await driver.findElement(By.id('navbarDropdown4')).click();
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/add');
//  await driver.findElement(By.id('itemName')).sendKeys('Short Pant');
//  await driver.findElement(By.id('itemDescription')).sendKeys('adding item for test');
//  await driver.findElement(By.id('itemPrice')).sendKeys('Rs 1000');
//  await driver.findElement(By.id('itemCategory')).sendKeys('Men');
//  await driver.sleep(1500);
//  await driver.findElement(By.id('itemSubcategory')).sendKeys('Jacket');
//  await driver.findElement(By.id('itemColor')).sendKeys('Black');
//  await driver.findElement(By.id('itemSize')).sendKeys('Medium');
//  await driver.findElement(By.xpath("//div/input[@type='file']")).sendKeys(`C:/Users/USER/OneDrive/Desktop/pants.jpg`);
//  await driver.sleep(1500);
//  await driver.findElement(By.id('btnAdd')).click();
 
// });

// Given('Edit functionality',{timeout: 7 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(8000);
//  await driver.findElement(By.className('fa-bars')).click();
//  await driver.findElement(By.id('navbarDropdown4')).click();
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');
//  await driver.sleep(2000);
//  await driver.findElement(By.className('fa-edit')).click();
// //  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items/edit/c2945cf9-8f66-48fd-84f1-7ec6978bcefa');
//  await driver.sleep(2000);
// //  await driver.findElement(By.id('etName')).clear();
// //  await driver.findElement(By.id('etName')).sendKeys('short pants');
//  await driver.findElement(By.id('etDescription')).clear();
//  await driver.findElement(By.id('etDescription')).sendKeys('edit test');
//  await driver.findElement(By.id('etPrice')).clear();
//  await driver.findElement(By.id('etPrice')).sendKeys('Rs 500');
//  await driver.findElement(By.id('etColor')).sendKeys('Blue');
//  await driver.findElement(By.id('etSize')).sendKeys('Small');
//  await driver.sleep(2000);
//  await driver.findElement(By.id('btnUpdateItem')).click();
// });

// Given('delete item functionality',{timeout: 7 * 5000}, async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(8000);
//  await driver.findElement(By.className('fa-bars')).click();
//  await driver.findElement(By.id('navbarDropdown4')).click();
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');
//  await driver.sleep(2000);
//  await driver.findElement(By.className('fa-trash-alt')).click();
//  await driver.findElement(By.className('swal-button--confirm')).click();
// });




//viewing the items after renter upload 
// Given('View item functionality', {timeout: 7 * 5000},async () => {  //viewItems and displaying the details
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(8000);
//  await driver.findElement(By.className('fa-bars')).click();
//  await driver.findElement(By.id('navbarDropdown4')).click();
//  await driver.get('https://vintagewardrobe.herokuapp.com/renter/items');

// });



// //adding to cart and view items added to cart
// Given('added cart funtionality', {timeout: 7 * 5000},async () => {

//  let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan18shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/items/a49c9cc2-2727-49aa-b9d6-3da5ec531101');
//  await driver.sleep(delay);
//  await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`, Key.RETURN);
//  await driver.findElement(By.className('add-cart')).click();
// });

// // remove from cart
// Given('remove cart funtionality', {timeout: 7 * 5000}, async () => {
//  let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan18shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/items/bfda6356-24f2-48f9-93ac-5cded061d960');
//  await driver.sleep(delay);
//  await driver.findElement(By.tagName('input')).sendKeys(`22/08/2021 - 24/08/2021`, Key.RETURN);
//  await driver.findElement(By.className('add-cart')).click();
//  await driver.sleep(delay);
//  await driver.findElement(By.className('add-cart')).click();
// });

// //payment process
// Given('checkout funtionality', {timeout: 8 * 5000}, async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan18shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/items/bfda6356-24f2-48f9-93ac-5cded061d960');
//   await driver.sleep(delay);
//   await driver.findElement(By.tagName('input')).sendKeys(`30/07/2021 - 30/07/2021`,Key.RETURN);
//   await driver.findElement(By.className('add-cart')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.findElement(By.className('fa-shopping-cart')).click();
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.findElement(By.className('btn-Checkout')).click();
//   await driver.findElement(By.id('inputAddress')).sendKeys('Gongabu');
//   await driver.findElement(By.id('inputCity')).sendKeys('Kathmandu');
//   await driver.findElement(By.tagName('select')).sendKeys('Nepal');
//   await driver.findElement(By.id('number')).sendKeys('1231231234');
//   await driver.sleep(8000);
//   await driver.findElement(By.className('btn-primary')).click();
// });

// //checking the status of user order
// Given('Order status funtionality', {timeout: 8 * 5000},async () => {
  
//   let driver = await new Builder().forBrowser('chrome').build();
//  await driver.get('https://vintagewardrobe.herokuapp.com/login');
//  await driver.findElement(By.name('email')).sendKeys('rijan18shrestha@gmail.com');
//  await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//  await driver.findElement(By.className('loginbtn')).click();
//  await driver.sleep(8000);
//  await driver.findElement(By.className('fa-bars')).click();
//  await driver.findElement(By.id('navbarDropdown2')).click();
//   await driver.sleep(delay);
//  await driver.get('https://vintagewardrobe.herokuapp.com/orders');
// //  await driver.sleep(delay);
// //  await driver.quit();
//  const msg=console.log('You are in my orders page');
//  return msg;
 
// });



// Given('adding to wishlist funtionality', {timeout: 8 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('single-latest-released')).click();
//   await driver.sleep(6000);
//   // await driver.get('https://vintagewardrobe.herokuapp.com/items/bfda6356-24f2-48f9-93ac-5cded061d960');
//   await driver.findElement(By.className('hearts')).click();
// });

// Given('view and remove wishlist funtionality', {timeout: 2 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
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
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id('navbarDropdown3')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/category/Men');
//   await driver.sleep(delay);
//   await driver.findElement(By.id('sub-category-Pant')).click();
//   await driver.findElement(By.className('grid-color-7')).click();
// });

// Given('review funtionality', {timeout: 4 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/items/a71164af-c9ef-47a3-90ba-2b714441a38c');
//   await driver.sleep(delay);
//   await driver.findElement(By.xpath("//div/span[@data-index='0']")).click();
//   await driver.findElement(By.className('review-field')).sendKeys("nice");
//   await driver.sleep(delay);
//   await driver.findElement(By.className('btn-review')).click();
// });

// Given('view profile funtionality', {timeout: 4 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id('navbarDropdown2')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/profile');
// });

// Given('edit profile funtionality', {timeout: 7 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
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

//-----------------------admin functionality test---------------------------------------

// Given('add user funtionality', {timeout: 8 * 5000},async () => {
//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/users');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('btn-success')).click();
//   await driver.findElement(By.className('fname')).sendKeys('Sandesh');
//   await driver.findElement(By.className('lname')).sendKeys('Shrestha');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('email')).sendKeys('sandesh18shrestha@gmail.com');
//   await driver.findElement(By.className('password')).sendKeys('Sandesh@23');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('gender')).sendKeys('Male');
//   await driver.findElement(By.id('address')).sendKeys('Gorkha, Nepal');
//   await driver.findElement(By.id('city')).sendKeys('Gorkha');
//   await driver.findElement(By.id('country')).sendKeys('Nepal');
//   await driver.sleep(1500);
//   await driver.findElement(By.xpath("//div/input[@type='file']")).sendKeys(`C:/Users/USER/OneDrive/Desktop/ribesh.JPG`);
//   await driver.findElement(By.id('user')).click();
//   await driver.sleep(1500);
//   await driver.findElement(By.className('btn-block')).click();
// });

// Given('add category funtionality', {timeout: 7 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
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

// Given('add subcategory funtionality', {timeout: 7 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/sub-categories');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('btn-success')).click();
//   await driver.findElement(By.id('inpuTFirstname')).sendKeys('slipppersss');
//   await driver.findElement(By.xpath("//div/select[@id='itemCategory']")).click();
//   await driver.sleep(1500);
//   await driver.findElement(By.xpath("//div/select/option[@value='a0ac4495-eae2-4be9-9899-ee68d5b8df9f']")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.className('btn-block')).click();
// });

// Given('add item funtionality', {timeout: 7 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/item');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('btn-success')).click();
//   await driver.findElement(By.className('name')).sendKeys('Shorts');
//   await driver.findElement(By.className('description')).sendKeys('about shorts');
//   await driver.findElement(By.className('price')).sendKeys('100');
//   await driver.findElement(By.id('itemCategory')).sendKeys('Men');
  
//   await driver.findElement(By.xpath("//div/select[@id='itemSubcategory']")).click();
//   await driver.sleep(1500);
//   await driver.findElement(By.xpath("//div/select/option[@value='34bb5308-e11b-4d44-a874-e09cf1182f07']")).click();

//   await driver.findElement(By.xpath("//div/select[@id='itemColor']")).click();
//   await driver.sleep(1500);
//   await driver.findElement(By.xpath("//div/select/option[@value='Blue']")).click();
  
//   await driver.findElement(By.id('itemSize')).sendKeys('Small');
//   await driver.findElement(By.xpath("//div/input[@type='file']")).sendKeys(`C:/Users/USER/OneDrive/Desktop/shorts.jpg`);
//   await driver.sleep(delay);
//   await driver.findElement(By.className('btn-block')).click();
// });

// Given('edit user funtionality', {timeout: 7 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/users');
//   await driver.sleep(1500);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/users/edit/a339f691-d70f-4ddb-bcd3-de45adc032b9');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('city')).clear();
//   await driver.findElement(By.className('city')).sendKeys('Kathmandu');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('country')).clear();
//   await driver.findElement(By.className('country')).sendKeys('Nepal');
//   await driver.sleep(1500);
//   await driver.findElement(By.xpath("//div/input[@type='file']")).sendKeys(`C:/Users/USER/OneDrive/Desktop/ribesh.JPG`);
//   await driver.sleep(3000);
//   await driver.findElement(By.className('btn-block')).click();
// });

// Given('edit category funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/categories');
//   await driver.sleep(1500);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/categories/edit/ec9b4d54-ffe8-4fef-a761-6a9600e07788');
//   await driver.sleep(1500);
//   await driver.findElement(By.id('inpuTFirstname')).clear();
//   await driver.findElement(By.id('inpuTFirstname')).sendKeys('OnlyForBDDTest');
//   await driver.sleep(delay);
//   await driver.findElement(By.className('btn-block')).click();
// });

// Given('edit subcategory funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/sub-categories');
//   await driver.sleep(2000);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/sub-categories/edit/3910d520-3a18-47fa-83f6-b055f07be754');
//   await driver.sleep(1500);
//   await driver.findElement(By.id('inpuTFirstname')).clear();
//   await driver.findElement(By.id('inpuTFirstname')).sendKeys('Tshirts');
//   await driver.sleep(delay);
//   await driver.findElement(By.className('btn-block')).click();
// });



// Given('delete user funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/users');
//   await driver.sleep(delay);
//   await driver.findElement(By.className(`text-danger`)).click();
//   await driver.sleep(delay);
//   await driver.switchTo().alert().accept();
// });



// Given('delete subcategory funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/sub-categories');
//   await driver.sleep(2000);
//   await driver.findElement(By.className(`text-danger`)).click();
//   await driver.sleep(delay);
//   await driver.switchTo().alert().accept();
// });

// Given('edit admin item funtionality', {timeout: 7 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/item');
//   await driver.sleep(3000);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/items/edit/a71164af-c9ef-47a3-90ba-2b714441a38c');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('description')).clear();
//   await driver.findElement(By.className('description')).sendKeys('i am changed');
//   await driver.sleep(2000);
//   await driver.findElement(By.className('price')).clear();
//   await driver.findElement(By.className('price')).sendKeys('100');
//   await driver.sleep(1500);
//   await driver.findElement(By.className('btn-block')).click();
// });


// Given('delete item admin funtionality', {timeout: 5 * 5000},async () => {

//   let driver = await new Builder().forBrowser('chrome').build();
//   await driver.get('https://vintagewardrobe.herokuapp.com/login');
//   await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//   await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//   await driver.findElement(By.className('loginbtn')).click();
//   await driver.sleep(8000);
//   await driver.findElement(By.className('fa-bars')).click();
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin');
//   await driver.sleep(delay);
//   await driver.get('https://vintagewardrobe.herokuapp.com/admin/item');
//   await driver.sleep(1500);
//   await driver.findElement(By.className(`text-danger`)).click();
//   await driver.sleep(delay);
//   await driver.switchTo().alert().accept();
// });


// Given('change password funtionality', {timeout: 5 * 5000}, async()=>{
//     let driver = await new Builder().forBrowser('chrome').build();
//     await driver.get('https://vintagewardrobe.herokuapp.com/login')
//     await driver.findElement(By.name('email')).sendKeys('rijan22shrestha@gmail.com');
//     await driver.findElement(By.name('password')).sendKeys('Rijan@23');
//     await driver.findElement(By.className('loginbtn')).click();
//     await driver.sleep(8000);
//     await driver.findElement(By.className('fa-bars')).click();
//     await driver.findElement(By.id('navbarDropdown2')).click();
//     await driver.sleep(delay);
//     await driver.get('https://vintagewardrobe.herokuapp.com/profile')
//     await driver.sleep(5000);
//     await driver.findElement(By.id('pswrdbtn')).click();
//     await driver.sleep(5000);
//     await driver.findElement(By.id('oldPassword')).sendKeys('Rijan@23');
//     await driver.findElement(By.id('newPassword')).sendKeys('Rijan@12');
//     await driver.findElement(By.id('confirmPassword')).sendKeys('Rijan@12');
//     await driver.sleep(delay);
//     await driver.findElement(By.className('password-btn')).click();
// })