const { browser } = require('protractor');

describe('create addons & update , custom add-ons flow',function(){
    'use strict';

    var testData=require('../resources/testData.json')
    var loginPage=new pages.loginPage()
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var menuDashBoardPage=new pages.menuDashBoardPage()
    var addOnsPage=new pages.addOnsPage()

    it ('create Add 0ns flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        addOnsPage.createAddOnsflow()
        dashBoardPage.logout()
    })
    it('update Add-ons flow',function(){
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
    
