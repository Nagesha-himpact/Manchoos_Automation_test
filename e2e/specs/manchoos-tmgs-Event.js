describe('timings & calendar holiday flow ',function(){
    
    'use strict';

    var testData = require('../resources/testData.json');
    var loginPage=new pages.loginPage();
    var dashBoardPage=new pages.dashBoardPage()
    var leftNavigationPage=new pages.leftNavigationPage()
    var timingsCalendarPage=new pages.timingsCalendarPage()
    var timingsClndrEventPage=new pages.timingsClndrEventPage()

    it("timings and Calender Create Event flow",function(){
        loginPage.loginPage(testData.manchoos.baseUrl)
        loginPage.login(testData.credentials.userName,testData.credentials.passWord)
        leftNavigationPage.navigateToRestaurantProfile()
        timingsCalendarPage.clickOnTimingsCalendar()
        timingsCalendarPage.clicOnEventHeader()
        timingsClndrEventPage.createEvent(testData.timingsCalendar.eventName)
        dashBoardPage.logout()
    })


})