const { browser } = require('protractor');

module.exports=function(){
'use strict'

var objRepo = require('../resources/objectRepository.json');
var objLocator=new utils.objectLocator();
var buttonActions=new commons.buttonActions();
var waitActions=new commons.waitActions();
var inputBoxActions=new commons.inputBoxActions();

//create Calendr holiday flow elements
var clickAddHolidayBtn=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.clickAddHolidayBtn)
var pongal=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.pongal)
var republicDay=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.republicDay)
var independenceDay=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.independenceDay)
var mahaShavarathri=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.mahaShavarathri)
var ganeshChaturthi=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.ganeshChaturthi)
var dusera=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.dusera)
var narakaChturdasi=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.narakaChturdasi)
var otherHolidayToggleSwitch=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.otherHolidayToggleSwitch)
var fromDate=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.fromDate)
var toDate=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.toDate)
var holidayMessage=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.holidayMessage)
var cancelBtn=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.cancelBtn)
var saveBtn=objLocator.findLocator(objRepo.tmgsCalndarHolidayPage.saveBtn)

this.timingsCalendarHolidayPage=function(path){
    if(typeof path === 'undefined'){
        path ='';
    }
    browser.get(path)
    return this;
}
this.clickOnHolidayAddBtn=function(){
    buttonActions.click(clickAddHolidayBtn)
    return this;
}
this.selectCheckBoxPongal=function(){
    buttonActions.click(pongal)
    return this;
}
this.selectCheckBoxRepublicDay=function(){
    buttonActions.click(republicDay)
    return this;
}
this.selelctCheckBoxIndependenceDay=function(){
    buttonActions.click(independenceDay)
    return this;
}
this.selectCheckBoxShivarathri=function(){
    buttonActions.click(mahaShavarathri)
    return this;
}
this.selectCheckBoxGaneshaFest=function(){
buttonActions.click(ganeshChaturthi)
    return this;
}
this.selectCheckBoxDusera=function(){
    buttonActions.click(dusera)
    return this;
}
this.selectCheckBoxNarakaChturdasi=function(){
    buttonActions.click(narakaChturdasi)
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