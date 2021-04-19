const { browser } = require('protractor');

describe('Add addons items & update ,create custom add-ons options',function(){
    
    'use strict';

    var testData=require('../resources/testData.json')
    var loginPage=new pages.loginPage()
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var menuDashBoardPage=new pages.menuDashBoardPage()
    var addOnsPage=new pages.addOnsPage()

    //
    it ('Add Add 0ns options list',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        addOnsPage.createAddOnsflow()
        dashBoardPage.logout()
    })
    it('update Add-ons options list',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        addOnsPage.UpdateAddOnsflow()
        dashBoardPage.logout()
    })
    it('create custom Add-ons flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        addOnsPage.createCustomAddons(testData.addOns.customAddonsName,testData.addOns.optionName,testData.addOns.price,
        testData.addOns.editCustomAddonsName,testData.addOns.editOptionName,testData.addOns.editPrice)
        dashBoardPage.logout()
    })

})
    
