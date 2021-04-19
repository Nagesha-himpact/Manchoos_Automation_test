const { browser } = require('protractor');

module.exports=function(){
'use strict'

//import required actions and create object
var objRepo = require('../resources/objectRepository.json');
var objLocator=new utils.objectLocator();
var buttonActions=new commons.buttonActions();
var waitActions=new commons.waitActions();
var inputBoxActions=new commons.inputBoxActions();

//create Calendr holiday flow elements
var clickAddHolidayButton=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.clickAddHolidayButton)
var pongal=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.pongalCheckBox)
var republicDayCheckBox=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.republicDayCheckBox)
var independenceDayCheckBox=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.independenceDayCheckBox)
var mahaShavarathriCheckBox=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.mahaShavarathriCheckBox)
var ganeshChaturthiCheckBox=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.ganeshChaturthiCheckBox)
var duseraCheckBox=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.duseraCheckBox)
var narakaChturdasiCheckBox=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.narakaChturdasiCheckBox)
var otherHolidayToggleSwitch=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.otherHolidayToggleSwitch)
var fromDate=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.fromDate)
var toDate=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.toDate)
var holidayMessage=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.holidayMessage)
var cancelBtn=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.cancelBtn)
var saveBtn=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.saveBtn)



//Select Calendar Holiday flow
this.timingsCalendarHolidayPage=function(path){
    if(typeof path === 'undefined'){
        path ='';
    }
    browser.get(path)
    return this;
}
this.clickOnHolidayAddBtn=function(){
    buttonActions.click(clickAddHolidayButton)
    return this;
}
this.selectCheckBoxPongal=function(){
    buttonActions.click(pongalCheckBox)
    return this;
}
this.selectCheckBoxRepublicDay=function(){
    buttonActions.click(republicDayCheckBox)
    return this;
}
this.selelctCheckBoxIndependenceDay=function(){
    buttonActions.click(independenceDayCheckBox)
    return this;
}
this.selectCheckBoxShivarathri=function(){
    buttonActions.click(mahaShavarathriCheckBox)
    return this;
}
this.selectCheckBoxGaneshaFest=function(){
buttonActions.click(ganeshChaturthiCheckBox)
    return this;
}
this.selectCheckBoxDusera=function(){
    buttonActions.click(duseraCheckBox)
    return this;
}
this.selectCheckBoxNarakaChturdasi=function(){
    buttonActions.click(narakaChturdasiCheckBox)
    return this;
}
this.clickOnHolidayToggleSwitch=function(){
    buttonActions.click(otherHolidayToggleSwitch)
    return this;
}
this.clickOnFromDate=function(){
    buttonActions.click(fromDate)
   
    return this;
}
this.clickOnToDate=function(){
    buttonActions.click(toDate)
    return this;
}
this.enterHolidayMessage=function(){
    inputBoxActions.type(holidayMessage)
    return this;
}
this.clickOnSabeBtn=function(){
    buttonActions.click(saveBtn)
    return this;
}
this.clickOnCancelBtn=function(){
    buttonActions.click(cancelBtn)
    return this;
}

//create the Holidayflow
this.createHoliday=function(){
    waitActions.wait()
    this.clickOnHolidayAddBtn()
    waitActions.wait()
    this.selectCheckBoxPongal()
    waitActions.waitForElementIsDisplayed()
    this.selectCheckBoxRepublicDay()
    waitActions.waitForElementIsDisplayed()
    this.selelctCheckBoxIndependenceDay()
    waitActions.waitForElementIsDisplayed()
    this.selectCheckBoxShivarathri()
    waitActions.waitForElementIsDisplayed()
    this.selectCheckBoxGaneshaFest()
    waitActions.waitForElementIsDisplayed()
    this.selectCheckBoxDusera()
    waitActions.waitForElementIsDisplayed()
    this.selectCheckBoxNarakaChturdasi()
    waitActions.waitForElementIsDisplayed()
    this.clickOnSabeBtn()
    waitActions.wait()
}

//create other holiday flow
this.createOtherHolidayFlow=function(){
    waitActions.wait()
    this.clickOnHolidayToggleSwitch()
    waitActions.wait()
    this.clickOnFromDate()
    waitActions.wait()
    this.clickOnToDate()
    waitActions.wait()
    this.enterHolidayMessage()
    waitActions.wait()
}
}