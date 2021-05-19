const { browser } = require('protractor');

describe('custom item create ,edit ,delete flow : ',function(){
    'use strict';

    var testData=require('../resources/testData.json')
    var loginPage=new pages.loginPage()
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var menuDashBoardPage=new pages.menuDashBoardPage()
    var menuItemPage=new pages.menuItemPage()
    var menuCustomItemPage=new pages.menuCustomItemPage()

    it("custom item create flow : ",function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnMenuItems()
        menuItemPage.clickOnMenuFoodIcon()
        menuItemPage.selectIndianCusine()
        menuItemPage.clickOnNorthIndian()
        menuCustomItemPage.customItemAddFlow(testData.menuCustomItem.customItemName,testData.menuCustomItem.customItemDescription,
        testData.menuCustomItem.customItemUniqeCode,testData.menuCustomItem.customItemPrice,testData.menuCustomItem.customItemDiscount)
        menuItemPage.clickOnNorthIndian()
        menuCustomItemPage.customMenuItemEditflow(testData.menuCustomItem.customItemNameEdit)
        menuItemPage.clickOnNorthIndian()
        menuCustomItemPage.modifiersAddOnsAdding()
        menuItemPage.clickOnNorthIndian()
        menuCustomItemPage.customItemValidation()
        dashBoardPage.logout()
    })
})
