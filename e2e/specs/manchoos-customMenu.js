const { browser } = require('protractor');
describe("Restaurant Custom Item add flow ",function(){

    'use strict';
    var testData=require('../resources/testData.json')
    var loginPage=new pages.loginPage()
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var menuDashBoardPage=new pages.menuDashBoardPage()
    var menuItemPage=new pages.menuItemPage()
    var customMenuPage=new pages.customMenuPage()

    it('Restaurant Custom Item add flow', function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName, testData.credentials.passWord);
        leftNavigationPage.navigateToMenu()
        menuDashBoardPage.clickOnMenuItems()
        menuItemPage.clickOnCustomMenuHeader()
        customMenuPage.addCustomMenuFlow(testData.customMenu.enterRestaurantSpecial)
        customMenuPage.updateCustomMenuflow(testData.customMenu.editRestaurantSpecial)
        customMenuPage.enableDisableCustomMenu()
        customMenuPage.deleteCustomMenu()
        dashBoardPage.logout();
    })

    // it('update Custom Menu Item ',function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName, testData.credentials.passWord);
    //     leftNavigationPage.navigateToMenu()
    //     menuDashBoardPage.clickOnMenuItems()
    //     menuItemPage.clickOnCustomMenuHeader()
       
    //     dashBoardPage.logout()
    // })
    
    // it('disable enable custom menu ' ,function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl)
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord)
    //     leftNavigationPage.navigateToMenu()
    //     menuDashBoardPage.clickOnMenuItems()
    //     menuItemPage.clickOnCustomMenuHeader()
        
    //     dashBoardPage.logout()
    // })

    // it('delete Restaurant custom Menu ', function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl)
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord)
    //     leftNavigationPage.navigateToMenu()
    //     menuDashBoardPage.clickOnMenuItems()
    //     menuItemPage.clickOnCustomMenuHeader()
       
    //     dashBoardPage.logout()
    //  })

})