const { browser } = require('protractor');
const { PageLoadStrategy } = require('selenium-webdriver/lib/capabilities');

describe('Combo Menu item add flow',function(){
    'use strict';

    var testData=require('../resources/testData.json')
    var loginPage=new pages.loginPage();
    var dashBoardPage=new pages.dashBoardPage();
    var leftNavigationPage=new pages.leftNavigationPage()
    var menuDashBoardPage=new pages.menuDashBoardPage()
    var menuItemPage=new pages.menuItemPage()
    var comboMenuPage=new pages.comboMenuPage()

    it('Combo Menu create flow',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnMenuItems()
        menuItemPage.clickOnComboMenuHedaer()
        comboMenuPage.comboMebuaddItemFlow(testData.comboMenu.enterComboMenuName)
        comboMenuPage.comboMenuItemAddFlow(testData.comboMenu.modPrice,testData.comboMenu.modDisc,
            testData.comboMenu.modServing,testData.comboMenu.subMdfrDiscnt,testData.comboMenu.subMdfrPrice)
        comboMenuPage.commboAddOnsFlow(testData.comboMenu.addOnsDiscnt,testData.comboMenu.addOnsPrice)
        dashBoardPage.logout()
    })
})