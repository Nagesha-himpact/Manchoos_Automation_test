const { browser } = require('protractor');
const { TestObject } = require('protractor/built/driverProviders');

describe('Add addons items & update ,create custom add-ons options',function(){
    
    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage=new pages.loginPage();
    var leftNavigationPage= new pages.leftNavigationPage();
    var dashBoardPage=new pages.dashBoardPage();
    var rmProfileAdminiStrativePage=new pages.rmProfileAdminiStrativePage()

    it("RM profile Enter Administrative details",function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToRestaurantProfile()
        rmProfileAdminiStrativePage.enterAdminiStrativeDetails(testData.adminisratativeDetails.phoneNumber
            ,testData.adminisratativeDetails.emailId,testData.adminisratativeDetails.gstNumber,
            testData.adminisratativeDetails.vatNumber,testData.adminisratativeDetails.panNumber,
            testData.adminisratativeDetails.fssaiNumber,testData.adminisratativeDetails.uploadCertificateofGst,
            testData.adminisratativeDetails.uploadCertificateOfFssai,)
            dashBoardPage.logout()
    })

    it("Rm profile Administrative details edit flow" ,function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToRestaurantProfile()
        rmProfileAdminiStrativePage.editAdministrativeFlow(testData.adminisratativeDetails.secondaryPhoneNumber,
            testData.adminisratativeDetails.secondaryEmailid,
            testData.adminisratativeDetails.gstCertficateEdit,
            testData.adminisratativeDetails.fssaiEditedCertificate)
        dashBoardPage.logout()
    })

})