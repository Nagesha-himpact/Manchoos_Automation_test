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
    var selectAllDaysOfWeek=objLocator.findLocator(objRepo.timingsCalendarPage.selectAllDaysOfWeek);
    var selectMonDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectMonDay);
    var selectTueDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectTueDay);
    var selectWedDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectWedDay);
    var selectThuDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectThuDay);
    var selectFriDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectFriDay);
    var selectSatDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectSatDay);
    var selectSunDay=objLocator.findLocator(objRepo.timingsCalendarPage.selectSunDay);
    var saveButton=objLocator.findLocator(objRepo.timingsCalendarPage.saveButton);
    var fromTime=objLocator.findLocator(objRepo.timingsCalendarPage.fromTime);
    var selectFromHours=objLocator.findLocator(objRepo.timingsCalendarPage.selectFromHours);
    var selectFromMunits=objLocator.findLocator(objRepo.timingsCalendarPage.selectFromMunits);
    var selectPM=objLocator.findLocator(objRepo.timingsCalendarPage.selectPM);
    var selectAM=objLocator.findLocator(objRepo.timingsCalendarPage.selectAM);
    var selectDone=objLocator.findLocator(objRepo.timingsCalendarPage.selectDone);
    var toTime=objLocator.findLocator(objRepo.timingsCalendarPage.toTime);
    var selectToHours=objLocator.findLocator(objRepo.timingsCalendarPage.selectToHours);
    var selectToMunits=objLocator.findLocator(objRepo.timingsCalendarPage.selectToMunits);
    var selectToPM=objLocator.findLocator(objRepo.timingsCalendarPage.selectToPM);
    var selectToDone=objLocator.findLocator(objRepo.timingsCalendarPage.selectToDone);
    var holiday=objLocator.findLocator(objRepo.timingsCalendarPage.holiday);

    
    this.timingsCalendarPage=function(path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }

   // var  minDate = moment().format('YYYY');
   // var  maxDate = moment().add(3, 'y').format('YYYY');
   // To set current date as today
   // var  myDate = moment().toDate();
   // console.log(" :min date :" +minDate +": max date : "+ maxDate +  " :mydate setting :" ,myDate)
   
// moment().format('MMMM Do YYYY, h:mm:ss a');
//   var hour=moment().format('h');
//   var Minits=moment().format('mm');
//   var sec=moment().format('ss');
//   var alm=moment().format('a');

  //console.log(hour+": today hour "+Minits+" :today minits " +sec+" :Today seconds :"+alm+" :AM or PM  :")

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
    this.clickToggoleButton=function(){
        buttonActions.click(selectAllDaysOfWeek)
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
        browser.executeScript("document.getElementsByName('anewv_starttime').setAttribute('name','1:00')")
        //document.getElementsByName('message-to-send')[0].setAttribute('type', 'text')
        //browser.executeScript("document.getElementsByName('anewv_starttime')[0].value='20 00'");
        return this;
    }
    this.chooseHours=function(){
       browser.sleep(2000)
       browser.executeScript("arguments[0].click()",selectFromHours)   
       return this;
    }
     
    
    this.chooseMunits=function(){
        //var Minits=moment().format('mm');
        browser.executeScript("arguments[0].click()",selectFromMunits)
            return this;
        
    }
    this.choosePM=function(){
        buttonActions.click(selectPM)
        return this;
    }
    this.chooseAM=function(){
        buttonActions.click(selectAM)
        return this;
    }
    this.chooseDone=function(){
        buttonActions.click(selectDone)
        return this;
    }
    this.chooseToTime=function(){
        buttonActions.click(toTime)
        return this;
    }
    this.chooseToHours=function(){
        buttonActions.click(selectToHours)
        return this;
    }
    this.chooseToMunits=function(){
        buttonActions.click(selectToMunits)
        return this;
    }
    this.chooseToPm=function(){
        buttonActions.click(selectToPM)
        return this;
    }
    this.chooseToDone=function(){
        buttonActions.click(selectToDone)
        return this;
    }
    
    
    // Create Availability 
    this.createTimgsCalendar=function(EnterSectionName){
        waitActions.wait()
        this.clickOnTimingsCalendar()
        waitActions.wait()
        // this.clickOnAvailability()
        // waitActions.wait()
        this.clickOnAddAvailibility()
        waitActions.waitForElementIsDisplayed()
        // this.enterSeactionName(EnterSectionName)
        // waitActions.waitForElementIsDisplayed
        // this.clickOnRadioButton()
        // waitActions.waitForElementIsDisplayed()
        waitActions.wait()
        this.clickOnFromTime()
        waitActions.wait()
        //this.chooseHours()
       // waitActions.wait()
       // this.chooseMunits()
        waitActions.wait()
       // this.choosePM()
       // waitActions.wait()
        //this.chooseAM()
        //waitActions.wait()
        //this.chooseDone()
       // waitActions.wait()
        // this.chooseToTime()
        // waitActions.wait()
        // this.chooseToHours()
        // waitActions.wait()
        // this.chooseToMunits()
        // waitActions.wait()
        // this.chooseToPm()
        // waitActions.wait()
        // this.chooseToDone()
        // waitActions.wait()
        // this.clickToggoleButton()
        // waitActions.wait()
        // this.clickToggoleButton()
        // waitActions.wait()
        // this.selectOnMon()
        // waitActions.wait()
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
        waitActions.wait()
        this.clickOnSave()
        waitActions.wait()
    }

    
}

 // var hour = moment().format("HH"); // note the extra Y in YYYY
        // console.log("Seconds : ",hour);
        // if(hour === selectFromHours){
        //     browser.executeScript("arguments[0].click();", selectFromHours);
        // }else if(hour <=selectFromHours){
        //     browser.actions().mouseUp(selectFromHours.getWebElement()).perform()
        // }
        // else if(hour >=selectFromHours) {
        //     browser.actions().mouseDown(selectFromHours.getWebElement()).perform()
        // }
        //     browser.executeScript("arguments[0].scrollIntoView();", selectFromMunits.getWebElement());
        //     browser.sleep(2000)
        //     browser.executeScript("arguments[0].click();", selectFromMunits);