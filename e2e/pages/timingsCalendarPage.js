const {browser} = require('protractor');
const moment= require('moment')

module.exports = function () {
    'use strict'

    //import required actions and create object
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var inputBoxActions = new commons.inputBoxActions();
    var waitActions = new commons.waitActions();
    var mouseActions=new commons.mouseActions();

    //create Resturant Availability of Menu items based on timings(Breakfast, lunch and dinner)
    var timingsCalendarButton = objLocator.findLocator(objRepo.timingsCalendarPage.timingsCalendarButton);
    var availability=objLocator.findLocator(objRepo.timingsCalendarPage.availability);
    var addAvailabilty=objLocator.findLocator(objRepo.timingsCalendarPage.addAvailabilty)
    var EnterSectionName=objLocator.findLocator(objRepo.timingsCalendarPage.EnterSectionName);
    var BreakFastradioBtnClick=objLocator.findLocator(objRepo.timingsCalendarPage.BreakFastradioBtnClick);
    var selectAllDaysOfWeekToggle=objLocator.findLocator(objRepo.timingsCalendarPage.selectAllDaysOfWeekToggle);
    var selectMonDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectMonDay);
    var selectTueDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectTueDay);
    var selectWedDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectWedDay);
    var selectThuDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectThuDay);
    var selectFriDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectFriDay);
    var selectSatDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectSatDay);
    var selectSunDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectSunDay);
    var saveButton=objLocator.findLocator(objRepo.timingsCalendarPage.saveButton);
    var holiday=objLocator.findLocator(objRepo.timingsCalendarPage.holiday);
    var event=objLocator.findLocator(objRepo.timingsCalendarPage.event);
    var dateToggleswitch=objLocator.findLocator(objRepo.timingsCalendarPage.dateToggleswitch)
    var availableBreakFast=objLocator.findLocator(objRepo.timingsCalendarPage.availableBreakFast)
    var sectionDeleteBtn=objLocator.findLocator(objRepo.timingsCalendarPage.sectionDeleteBtn)
    var sectionDisEnbleBtn=objLocator.findLocator(objRepo.timingsCalendarPage.sectionDisEnbleBtn)

    this.timingsCalendarPage=function(path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }

    //create Avaliability
    this.clickOnTimingsCalendar=function(){
        buttonActions.click(timingsCalendarButton)
        return this;
    }
    this.clickOnAvailability=function(){
        buttonActions.click(availability)
        return this;
    }
    this.clickOnHolidayHeader=function(){
        buttonActions.click(holiday)
        return this;
    }
    this.clicOnEventHeader=function(){
        buttonActions.click(event)
        return this;
    }
    this.clickOnAddAvailibility=function(){
        buttonActions.click(addAvailabilty)
        return this;
    }
    this.enterSeactionName=function(value){
        inputBoxActions.type(EnterSectionName,value)
        return this;
    }
    this.clickOnRadioButton=function(){
        buttonActions.click(BreakFastradioBtnClick)
        return this;
    }
    this.clickSelectAllToggoleButton=function(){
        buttonActions.click(selectAllDaysOfWeekToggle)
        return this;
    }
    this.selectOnMon=function(){
        buttonActions.click(selectMonDay)
        return this;
    }
    this.selectOnTue=function(){
        buttonActions.click(selectTueDay)
        return this;
    }
    this.selectOnwed=function(){
    buttonActions.click(selectWedDay)
        return this;
    }
    this.selectOnthu=function(){
        buttonActions.click(selectThuDay)
        return this;
    }
    this.selectOnFri=function(){
        buttonActions.click(selectFriDay)
        return this;
    }
    this.selectOnSat=function(){
        buttonActions.click(selectSatDay)
        return this;
    }
    this.selectOnSun=function(){
        buttonActions.click(selectSunDay)
        return this;
    }
    this.clickOnSave=function(){
        buttonActions.click(saveButton)
        return this;
    }
    this.clickOnFromTime=function(){
        browser.executeScript("document.getElementsByName('anewv_starttime')[0].value='7:30'");
        return this;
    }
    this.chooseToTime=function(){
        browser.executeScript("document.getElementsByName('anewv_totime')[0].value='10:30'");
        return this;
    }

    //available select from date and to date
    this.clickOnDateToggleswitch=function(){
        buttonActions.click(dateToggleswitch)
        return this;
    }
    this.enterFromTime=function(){
        browser.executeScript("document.getElementsByName('anewv_date_frmtime')[0].value='05/13/2021'");
        return this;
    }
    this.enterTodate=function(){
        browser.executeScript("document.getElementsByName('anewv_date_totime')[0].value='05/14/2021'");
        return this;
    }
    
    //available edit flow
    this.clickOnAvailableBreakFast=function(){
        buttonActions.click(availableBreakFast)
        return this;
    }
    this.clickOnSectionDeleteBtn=function(){
        buttonActions.click(sectionDeleteBtn)
        return this;
    }
    this.clickOnSectionDisEnbleBtn=function(){
        buttonActions.click(sectionDisEnbleBtn)
        return this;
    } 

    
    // Create Availability 
    this.createTimgsCalendar=function(EnterSectionName){
        waitActions.wait()
        this.clickOnTimingsCalendar()
        waitActions.wait()
        this.clickOnAddAvailibility()
        waitActions.waitForElementIsDisplayed()
        this.enterSeactionName(EnterSectionName)
        waitActions.waitForElementIsDisplayed()
        this.clickOnRadioButton()
        waitActions.waitForElementIsDisplayed()
        waitActions.wait()
        this.clickOnFromTime()
        waitActions.wait()
        this.chooseToTime()
        waitActions.wait()
        this.clickSelectAllToggoleButton()
         this.selectOnMon()
         waitActions.wait()
        // this.selectOnTue()
        // waitActions.wait()
        // this.selectOnwed()
        // waitActions.wait()
        // this.selectOnthu()
        // waitActions.wait()
        // this.selectOnFri()
        // waitActions.wait()
        // this.selectOnSat()
        // waitActions.wait()
        // this.selectOnSun()
        // this.clickOnDateToggleswitch()
        // waitActions.wait()
        // waitActions.wait()
        // this.enterFromTime()
        // waitActions.wait()
        // this.enterTodate()
        // waitActions.wait()
        // waitActions.wait()
        this.clickOnSave()
        waitActions.wait()
        waitActions.wait()
    }

    this.availabelEditFlow=function(){
        waitActions.wait()
        this.clickOnTimingsCalendar()
        waitActions.wait()
        this.clickOnAvailableBreakFast()
        waitActions.wait()
        waitActions.wait()
        this.clickOnSectionDisEnbleBtn()
        waitActions.wait()
        this.clickOnSectionDisEnbleBtn()
        waitActions.wait()
        waitActions.wait()
        waitActions.wait()
        this.clickOnSectionDeleteBtn()
        browser.sleep(7000) //signout button is not visible so given delay
    }
    
}
