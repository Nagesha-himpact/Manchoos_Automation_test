const { browser } = require('protractor');

describe('Menu Item add to Restaurant : ',function(){
    'use strict';
    
    var testData=require('../resources/testData.json')
    var loginPage=new pages.loginPage()
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var menuDashBoardPage=new pages.menuDashBoardPage()
    var menuItemPage=new pages.menuItemPage()
    var menuCustomItemPage=new pages.menuCustomItemPage()

    it('Menu item ,cusine ,food ,sub food type & item add to restaurant ',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnMenuItems()
        menuItemPage.menuItemAddflow()
        menuItemPage.cuisineAdd()
        menuItemPage.foodMenuAdd()
        menuItemPage.subFoodType()
        menuItemPage.menuItemSelectFlow()
        menuCustomItemPage.enterMenuItemDeatils(testData.menuCustomItem.customItemUniqeCode,testData.menuCustomItem.customItemPrice,testData.menuCustomItem.customItemDiscount)
        dashBoardPage.logout()
    })



})