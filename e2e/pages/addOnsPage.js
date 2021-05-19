const { duration } = require('moment');
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
    var dallCurrySaveBtn=objLocator.findLocator(objRepo.addOns.dallCurrySaveBtn)
   
    //Add-ons Menu item dependency
    var chooseAddOnsDallCurry=objLocator.findLocator(objRepo.addOns.chooseAddOnsDallCurry)
    var addOnsDalCurry=objLocator.findLocator(objRepo.addOns.addOnsDalCurry)
    var selectAllToggelSwitch=objLocator.findLocator(objRepo.addOns.selectAllToggelSwitch)

    
    
    //add-ons validation
    var choosAddonsValidation=objLocator.findLocator(objRepo.addOns.choosAddonsValidation)
    var addOnsNameInDashbordValidation=objLocator.findLocator(objRepo.addOns.addOnsNameInDashbordValidation)

    //custom add-ons validaiton
    var customAddonsNameValidation=objLocator.findLocator(objRepo.addOns.customAddonsNameValidation)
    var customUpdateaddOnsNameValidation=objLocator.findLocator(objRepo.addOns.customUpdateaddOnsNameValidation)

    
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

    //Menu item dependency addOns
    this.clickOnChsAddOnsDalCurry=function(){
        buttonActions.click(chooseAddOnsDallCurry)
        return this;
    }
    this.clickOnAddOnsDalCurry=function(){
        buttonActions.click(addOnsDalCurry)
        return this;
    }
    this.clickOnSelectAllToggelSwitch=function(){
        buttonActions.click(selectAllToggelSwitch)
        return this;
    }
    this.clickOnDalCurrySaveBtn=function(){
        buttonActions.click(dallCurrySaveBtn)
        return this;
    }
    
//Add-ons validation
this.choosAddonsOptionValidation=function(){
    choosAddonsValidation.getText().then(function(addonsName){
        console.log("add-ons name validation : ",addonsName)
        expect(addonsName).toEqual("Spice")
    })
}

this.dashBoardAddonsName=function(){
    addOnsNameInDashbordValidation.getText().then(function(dashBoardaddOnsName){
            console.log("dashboard add-ons name validation : ", dashBoardaddOnsName)
            expect(dashBoardaddOnsName).toEqual("Spice")
    })
}

//custom add-ons create validation
this.customAddonsValidation=function(){
    customAddonsNameValidation.getText().then(function(customName){
        console.log("custom add-ons name validation : " ,customName)
        expect(customName).toEqual("Fonta")
        expect(customAddonsNameValidation.isPresent()).toBeTruthy()
    })

// custom add-ons delete validation
this.deleteCustomValidation=function(){
    customUpdateaddOnsNameValidation.getText().then(function(customAddOnsUpdatedName){
        console.log(" deleted successfully : " ,customAddOnsUpdatedName)
        expect(customUpdateaddOnsNameValidation.isPresent()).toBeTruthy()
    })
}
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
    this.choosAddonsOptionValidation()
    waitActions.wait()
    this.clickOnSaveBtn()
    waitActions.wait()
}

this.UpdateAddOnsflow=function(){
    this.clickonEditBtn()
    waitActions.wait()
    this.selectAllAddOns()
    waitActions.wait()
    this.clickOnUpdateBtn()
    waitActions.wait()
    waitActions.wait()
}

//Menu Item Add-ons Dependency 
this.addOnsMenuItem=function(){
    waitActions.wait()
    this.clickOnAddOnsPlusIcon()
    waitActions.wait()
    this.clickOnChsAddOnsDalCurry()
    this.clickOnSaveBtn()
    waitActions.wait()
    this.clickOnAddOnsDalCurry()
    waitActions.wait()
    this.clickOnSelectAllToggelSwitch()
    waitActions.wait()
    waitActions.wait()
    this.clickOnDalCurrySaveBtn()
    browser.sleep(7000) //signout button is not visible so given delay
}
this.createCustomAddons=function(customAddonsName,optionName,price,editCustomAddonsName,editOptionName,editPrice){
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
    this.customAddonsValidation() //custom add-ons Name validation
    waitActions.wait()
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
    this.deleteCustomValidation()
    waitActions.wait()
    this.clickOnDeleteBtn()
    waitActions.wait()
    waitActions.wait()
}

//add-ons validation
this.addOnsValidation=function(){
    waitActions.wait()
    this.dashBoardAddonsName()
    waitActions.wait()
}

}
