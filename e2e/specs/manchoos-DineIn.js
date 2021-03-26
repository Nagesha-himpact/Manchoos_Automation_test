const { browser } = require('protractor');
describe("Dine in section & table create flow",function(){
    
    'use strict';
    
    var testData = require('../resources/testData.json');
    var loginPage=new pages.loginPage();
    var leftNavigationPage= new pages.leftNavigationPage();
    var dashBoardPage=new pages.dashBoardPage();
    var dineInPage=new pages.dineInPage();
 
    it("Dine-In section & Table create",function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord); 
        leftNavigationPage.navigateToDineIn();
        dineInPage.dineInCreate(testData.dineIn.sectionName,testData.dineIn.sectionCode,testData.dineIn.addNoTable);
        dashBoardPage.logout();
    });

    // it("Dine in update flow",function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord); 
    //     leftNavigationPage.navigateToDineIn();
    //     dineInPage.upDateDineInsection(testData.dineIn.updateSectionName,testData.dineIn.updateSectionCode,testData.dineIn.updateAddNoTable)
    //     dashBoardPage.logout();
    // })

    // it("dine In disable-enable-delete",function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord); 
    //     leftNavigationPage.navigateToDineIn();
    //     dineInPage.disableEnableDeleteSection()
    //     dashBoardPage.logout();
    // })
    // it("dine in feature and seater filter",function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl)
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord)
    //     leftNavigationPage.navigateToDineIn();
    //     dineInPage.featureAndSeaterFilter();
    //     dashBoardPage.logout();
    // })
    // it("dine in Seater disable-enable delete flow",function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl)
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord)
    //     leftNavigationPage.navigateToDineIn();
    //     dineInPage.dineInTableValidation()
    //     dashBoardPage.logout();
    // })
});
