const { browser } = require('protractor');
const { buildDriverProvider } = require('protractor/built/driverProviders');

module.exports = function () {
    'use strict'

    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var inputBoxActions = new commons.inputBoxActions();
    var waitActions = new commons.waitActions();

    var headerAddOns = objLocator.findLocator(objRepo.addOns.headerAddOns)
    var addplusIcon = objLocator.findLocator(objRepo.addOns.addplusIcon)
    var addOnsSelectAll = objLocator.findLocator(objRepo.addOns.addOnsSelectAll)
    var saveBtn = objLocator.findLocator(objRepo.addOns.saveBtn)
    var cancelBtn = objLocator.findLocator(objRepo.addOns.cancelBtn)
    var editIcon = objLocator.findLocator(objRepo.addOns.editIcon)
    var updateBtn = objLocator.findLocator(objRepo.addOns.updateBtn)
    var notInTheList = objLocator.findLocator(objRepo.addOns.notInTheList)
    var customAddonsName = objLocator.findLocator(objRepo.addOns.customAddonsName)
    var addOptionBtn=objLocator.findLocator(objRepo.addOns.addOptionBtn)
    var optionName = objLocator.findLocator(objRepo.addOns.optionName)
    var price = objLocator.findLocator(objRepo.addOns.price)
    var customSave = objLocator.findLocator(objRepo.addOns.customSave)
    var customCheckBox = objLocator.findLocator(objRepo.addOns.customCheckBox)
    var editBtn = objLocator.findLocator(objRepo.addOns.editBtn)
    var deleteBtn = objLocator.findLocator(objRepo.addOns.deleteBtn)
    var updateCustomBtn=objLocator.findLocator(objRepo.addOns.updateCustomBtn)

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
        buttonActions.click(addplusIcon)
        return this;
    }
    this.selectAllAddOns=function(){
        buttonActions.click(addOnsSelectAll)
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
    this.clickonEditBtn=function(){
        buttonActions.click(editIcon)
        return this;
    }
    this.clickOnUpdateBtn=function(){
        buttonActions.click(updateBtn)
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
       buttonActions.click(addOptionBtn)
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
        buttonActions.click(editBtn)
        return this;
    }
    this.clickOnCustomUpdateBtn=function(){
        buttonActions.click(updateCustomBtn)
        return this;
    }
    this.clickOnDeleteBtn=function(){
        buttonActions.click(deleteBtn)
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
