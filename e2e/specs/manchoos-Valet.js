const { browser } = require('protractor');
const valetPage = require('../pages/valetPage');

describe('Valet section create-update-disable-delete flow ', function () {

    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage = new pages.loginPage();
    var dashBoardPage = new pages.dashBoardPage();
    var valetPage = new pages.valetPage();
    var leftNavigationPage = new pages.leftNavigationPage();


    //Valet create flow
    it('Create New Valet section-by adding Parking spots,Accessibility and reserved spots', function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName, testData.credentials.passWord);
        leftNavigationPage.navigateToValet();
        valetPage.valetSection(testData.valet.sectionName, testData.valet.sectionCode, testData.valet.parkingSpots, testData.valet.accessiBility, testData.valet.reserved)
        dashBoardPage.logout();
    })

    //Valet disable ,enable ,delete flow
    it('Valet section disable', function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName, testData.credentials.passWord);
        leftNavigationPage.navigateToValet()
        valetPage.valetSectionDisable()
        valetPage.valetSectionEnable()
        dashBoardPage.logout();
    })

    //Valet update flow
    it('Update Valet section-by add or remove the Parking spots,Accessibility and reserved spots', function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName, testData.credentials.passWord);
        leftNavigationPage.navigateToValet();
        valetPage.valetSectionUpdate(testData.valet.UpdateSectionName,testData.valet.UpdateSectionCode,testData.valet.updateParkingSpots, testData.valet.updateAccessiBility, testData.valet.updateReserved);
        dashBoardPage.logout();
    })

    //valet valet parking spots
    it('valet parking spots validation', function () {
        loginPage.loginPage(testData.manchoos.baseUrl);
        loginPage.login(testData.credentials.userName, testData.credentials.passWord);
        leftNavigationPage.navigateToValet()
        valetPage.ValetParkingSpotsValidation()
        valetPage.valetSectionDelete()
        dashBoardPage.logout();
    })    
});
 