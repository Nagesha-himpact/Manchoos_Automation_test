describe('timings & calendar holiday flow ',function(){
    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage=new pages.loginPage();
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var timingsCalendarHolidayPage=new pages.timingsCalendarHolidayPage()
    var timingsCalendarPage=new pages.timingsCalendarPage()
    it ('select the calendar Holidays',function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToRestaurantProfile()
        timingsCalendarPage.clickOnTimingsCalendar()
        timingsCalendarPage.clickOnHolidayHeader()
        timingsCalendarHolidayPage.createHoliday()
        dashBoardPage.logout()
    })
    it('Create other holiday flow ', function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToRestaurantProfile()
        timingsCalendarPage.clickOnHolidayHeader()
        timingsCalendarPage.createOtherHolidayFlow()
        dashBoardPage.logout()
    })
})