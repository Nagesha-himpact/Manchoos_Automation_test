const { PageLoadStrategy } = require("selenium-webdriver/lib/capabilities")

describe("Add mofiers and submodifiers",function(){
    'use strict'
    var testData = require('../resources/testData.json');
    var loginPage=new pages.loginPage()
    var leftNavigationPage=new pages.leftNavigationPage();
    var dashBoardPage=new pages.dashBoardPage();
    var reMenuModifiersPage=new pages.reMenuModifiersPage();
    var menuDashBoardPage=new pages.menuDashBoardPage();
    var waitActions=new commons.waitActions();

    it ('add modifiers ',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.createModifiers()
        dashBoardPage.logout()
    })

    it('create custom Modifiers',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.createCustomModifiers(testData.modifiers.addCustomModifiersName,testData.modifiers.optionName)
        dashBoardPage.logout()
    })
    it('Update custom Modifiers',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.editCustomModifiers(testData.modifiers.editCustomModifiers,testData.modifiers.editOptionName)
        dashBoardPage.logout()
    })
    it('Create Sub-modifers flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.createSubModifiers()
        dashBoardPage.logout()
    })
    it('Create Custom Sub-modifers flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.createCustomSubModifiers(testData.subModifiers.addCustomSubModifiersName,testData.subModifiers.SubModifieroptionName)
        dashBoardPage.logout()
    })
    it('Update custom Sub-modifers flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.editCustomSubModifiers(testData.subModifiers.editCustomSubModifiers,testData.subModifiers.editSubModifierOptionName)
        dashBoardPage.logout()
    })    
})