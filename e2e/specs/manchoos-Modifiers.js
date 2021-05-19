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
        reMenuModifiersPage.createCustomModifiers(testData.modifiers.addCustomModifiersName,testData.modifiers.optionName)
        reMenuModifiersPage.customModifiersValidation();
        reMenuModifiersPage.editCustomModifiers(testData.modifiers.editCustomModifiers,testData.modifiers.editOptionName)
        reMenuModifiersPage.modifiersMenuItem()
        dashBoardPage.logout()
    })
    
    it('Create Sub-modifers flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnControlPanel()
        reMenuModifiersPage.createSubModifiers()
        reMenuModifiersPage.createCustomSubModifiers(testData.subModifiers.addCustomSubModifiersName,testData.subModifiers.SubModifieroptionName)
        reMenuModifiersPage.validationcustomSubModifiers()
        reMenuModifiersPage.editCustomSubModifiers(testData.subModifiers.editCustomSubModifiers,testData.subModifiers.editSubModifierOptionName)
        reMenuModifiersPage.subModifiersComboMenu()
        dashBoardPage.logout()
    })
      
})