const { browser } = require('protractor');

module.exports=function(){
'use strict'

//import required actions and create object
var objRepo = require('../resources/objectRepository.json');
var objLocator=new utils.objectLocator();
var buttonActions=new commons.buttonActions();
var waitActions=new commons.waitActions();
var inputBoxActions=new commons.inputBoxActions();

//Event Locators 
var eventAddBtn=objLocator.findLocator(objRepo.tmgsCalndarEventPage.eventAddBtn)
var eventName=objLocator.findLocator(objRepo.tmgsCalndarEventPage.eventName)
var saveBtn=objLocator.findLocator(objRepo.tmgsCalndarEventPage.saveBtn)
var cancelBtn=objLocator.findLocator(objRepo.tmgsCalndarEventPage.cancelBtn)
var restauRantEventName=objLocator.findLocator(objRepo.tmgsCalndarEventPage.restauRantEventName)
var deleteBtn=objLocator.findLocator(objRepo.tmgsCalndarEventPage.deleteBtn)
var enableDisbleBtn=objLocator.findLocator(objRepo.tmgsCalndarEventPage.enableDisbleBtn)

this.timingsClndarEventPage=function(path){
    if(typeof path === 'undefined'){
        path ='';
    }
    browser.get(path)
    return this;
}
    this.clickOnEventAddBtn=function(){
        buttonActions.click(eventAddBtn)
        return this;
    }
    this.enterEventName=function(value){
        inputBoxActions.type(eventName,value)
        return this;
    }

    this.enterEventFromDate=function(){
        browser.executeScript("document.getElementsByName('anewv_date_frmtime')[0].value='05/30/2021'")
        return this;
    }
    this.enterEventToDate=function(){
        browser.executeScript("document.getElementsByName('anewv_date_totime')[0].value='05/31/2021'")
        return this;
    }
    this.enterFromTime=function(){
        browser.executeScript("document.getElementsByName('anewv_starttime')[0].value='18:30'")
        return this;
    }
    this.enterToTime=function(){
        browser.executeScript("document.getElementsByName('anewv_totime')[0].value='20:00'")
        return this;
    }
    this.clickOnSaveBtn=function(){
        buttonActions.click(saveBtn)
        return this;
    }
    this.clickOnCancelBtn=function(){
        buttonActions.click(cancelBtn)
        return this;
    }
    this.clickOnRestauRantEventName=function(){
        buttonActions.click(restauRantEventName)
        return this;
    }
    this.clickOnDeleteBtn=function(){
        buttonActions.click(deleteBtn)
        return this;
    }
    this.clickOnEnableDisbleBtn=function(){
        buttonActions.click(enableDisbleBtn)
        return this;
    }

//function call(action method)
this.createEvent=function(eventName){
    waitActions.wait()
    this.clickOnEventAddBtn()
    waitActions.wait()
    this.enterEventName(eventName)
    waitActions.wait()
    this.enterEventFromDate()
    waitActions.wait()
    this.enterEventToDate()
    waitActions.wait()
    this.enterFromTime()
    waitActions.wait()
    this.enterToTime()
    waitActions.wait()
    this.clickOnSaveBtn()
    waitActions.wait()
    waitActions.wait()
    this.clickOnRestauRantEventName()
    waitActions.wait()
    this.clickOnEnableDisbleBtn()
    waitActions.wait()
    this.clickOnEnableDisbleBtn()
    waitActions.wait()
    waitActions.wait()
    waitActions.wait()
    this.clickOnDeleteBtn()
    browser.sleep(7000) //signout button is not visible so given delay
}
}
