const { browser } = require('protractor');
const { buildDriverProvider } = require('protractor/built/driverProviders');

module.exports = function () {
    'use strict'

     //import required actions and create object
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var inputBoxActions = new commons.inputBoxActions();
    var waitActions = new commons.waitActions();

    //Add-ons page objects locators
    var headerAddOns = objLocator.findLocator(objRepo.addOns.headerAddOns)
    var addOnsAddPlusIcon = objLocator.findLocator(objRepo.addOns.addOnsAddPlusIcon)
    var addOnsSelectAll = objLocator.findLocator(objRepo.addOns.addOnsSelectAll)
    var saveButton = objLocator.findLocator(objRepo.addOns.saveButton)
    var cancelButton = objLocator.findLocator(objRepo.addOns.cancelButton)
    var editIcon = objLocator.findLocator(objRepo.addOns.editIcon)
    var updateButton = objLocator.findLocator(objRepo.addOns.updateButton)
    var notInTheList = objLocator.findLocator(objRepo.addOns.notInTheList)
    var customAddonsName = objLocator.findLocator(objRepo.addOns.customAddonsName)
    var addOptionButton=objLocator.findLocator(objRepo.addOns.addOptionButton)
    var optionName = objLocator.findLocator(objRepo.addOns.optionName)
    var price = objLocator.findLocator(objRepo.addOns.price)
    var customSave = objLocator.findLocator(objRepo.addOns.customSave)
    var customCheckBox = objLocator.findLocator(objRepo.addOns.customCheckBox)
    var editButton = objLocator.findLocator(objRepo.addOns.editButton)
    var deleteButton = objLocator.findLocator(objRepo.addOns.deleteButton)
    var updateCustomButton=objLocator.findLocator(objRepo.addOns.updateCustomButton)

    this.addOnsPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }
    
    

    this.clickOnHeaderAddOns=function(){
        buttonActions.click(headerAddOns)
        return this;
    }
    this.clickOnAddOnsPlusIcon=function(){
        buttonActions.click(addOnsAddPlusIcon)
        return this;
    }
    this.selectAllAddOns=function(){
        buttonActions.click(addOnsSelectAll)
        return this;
    }
    this.clickOnSaveBtn=function(){
        buttonActions.click(saveButton)
        return this;
    }
    this.clickOnCancelBtn=function(){
        buttonActions.click(cancelButton)
        return this;
    }
    this.clickonEditBtn=function(){
        buttonActions.click(editIcon)
        return this;
    }
    this.clickOnUpdateBtn=function(){
        buttonActions.click(updateButton)
        return this;
    }
    this.clickOnNotInTheList=function(){
        buttonActions.click(notInTheList)
        return this;
    }
    this.enterCustomAddOnsName=function(value){
        inputBoxActions.type(customAddonsName,value)
        return this;
    }
    this.clickOnAddOptionBtn=function(){
       buttonActions.click(addOptionButton)
        return this;
    }
    this.enterCustomOptionName=function(value){
        inputBoxActions.type(optionName,value)
        return this;
    }
    this.enterCustomPrice=function(value){
        inputBoxActions.type(price,value)
        return this;
    }
    this.clickOnCustomSaveBtn=function(){
        buttonActions.click(customSave)
        return this;
    }
    this.selectCheckBox=function(){
        buttonActions.click(customCheckBox)
        return this;
    }
    this.clickOnCustomEditBtn=function(){
        buttonActions.click(editButton)
        return this;
    }
    this.clickOnCustomUpdateBtn=function(){
        buttonActions.click(updateCustomButton)
        return this;
    }
    this.clickOnDeleteBtn=function(){
        buttonActions.click(deleteButton)
        return this;
    }
    

//Add-Ons create flow (function call back)
this.createAddOnsflow=function(){
    waitActions.wait()
    this.clickOnHeaderAddOns()
    waitActions.wait()
    this.clickOnAddOnsPlusIcon()
    waitActions.wait()
    this.selectAllAddOns()
    waitActions.wait()
    this.clickOnSaveBtn()
    waitActions.wait()
    waitActions.wait()
    //this.clickOnCancelBtn()
}

this.UpdateAddOnsflow=function(){
    waitActions.wait()
    this.clickOnHeaderAddOns()
    waitActions.wait()
    this.clickonEditBtn()
    this.selectAllAddOns()
    waitActions.wait()
    this.clickOnUpdateBtn()
    waitActions.wait()
    waitActions.wait()
}
this.createCustomAddons=function(customAddonsName,optionName,price,editCustomAddonsName,editOptionName,editPrice){
    waitActions.wait()
    this.clickOnHeaderAddOns()
    waitActions.wait()
    this.clickOnAddOnsPlusIcon()
    waitActions.wait()
    this.clickOnNotInTheList()
    waitActions.wait()
    this.enterCustomAddOnsName(customAddonsName)
    waitActions.wait()
    this.clickOnAddOptionBtn()
    waitActions.wait()
    this.enterCustomOptionName(optionName)
    waitActions.wait()
    this.enterCustomPrice(price)
    waitActions.wait()
    this.clickOnCustomSaveBtn()
    waitActions.wait()
    this.selectCheckBox()
    waitActions.wait()
    this.clickOnCustomEditBtn()
    waitActions.wait()
    this.enterCustomAddOnsName(editCustomAddonsName)
    waitActions.wait()
    this.enterCustomOptionName(editOptionName)
    waitActions.wait()
    this.enterCustomPrice(editPrice)
    waitActions.wait()
    this.clickOnCustomUpdateBtn()
    waitActions.wait()
    this.selectCheckBox()
    waitActions.wait()
    this.clickOnDeleteBtn()
    waitActions.wait()
    waitActions.wait()
}

}
