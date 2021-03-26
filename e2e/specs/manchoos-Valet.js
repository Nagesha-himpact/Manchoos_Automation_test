const { browser } = require('protractor');
const valetPage = require('../pages/valetPage');

describe('Login Logout Test cases execution ', function () {

    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage =new pages.loginPage();
    var dashBoardPage=new pages.dashBoardPage();
    var valetPage=new pages.valetPage();
    var leftNavigationPage=new pages.leftNavigationPage();

    // it('Login-Logout', function () {
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord );
    //     dashBoardPage.logout();
    // });

    // Valet create flow
    it('Valet-section-create',function(){
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName,testData.credentials.passWord ); 
        leftNavigationPage.navigateToValet();
        valetPage.valetSection(testData.valet.sectionName,testData.valet.sectionCode,testData.valet.parkingSpots,testData.valet.accessiBility,testData.valet.reserved) 
        dashBoardPage.logout();
    })

    //Valet update flow
    // it('valet Section Update',function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord ); 
    //     leftNavigationPage.navigateToValet();
    //     valetPage.valetSectionUpdate(testData.valet.UpdateSectionName,testData.valet.UpdateSectionCode,testData.valet.updateParkingSpots,testData.valet.updateAccessiBility,testData.valet.updateReserved);
    //     dashBoardPage.logout();
    // })

    //Valet disable ,enable ,delete flow
    // it('Valet section disable ,enable and delete',function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord);
    //     leftNavigationPage.navigateToValet()
    //     valetPage.valetSectionDisable()
    //     valetPage.valetSectionEnable()  
    //     valetPage.valetSectionDelete()
    //     dashBoardPage.logout();
    // })

    //valet valet parking spots
    // it('valet parking spots validation',function(){
    //     loginPage.loginPage(testData.manchoos.baseUrl);
    //     loginPage.login(testData.credentials.userName,testData.credentials.passWord ); 
    //     leftNavigationPage.navigateToValet()
    //     valetPage.validationSpots(sidebarPrkingspots)
    //     dashBoardPage.logout();
    // })
}); 
