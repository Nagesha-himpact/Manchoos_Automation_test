const { browser } = require('protractor');

module.exports = function () {
    'use strict'

    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var inputBoxActions = new commons.inputBoxActions();

    //modifiers page objects 
    var headerModifiers = objLocator.findLocator(objRepo.modifiers.headerModifiers)
    var addModifiers = objLocator.findLocator(objRepo.modifiers.addModifiers)
    var selectAll = objLocator.findLocator(objRepo.modifiers.selectAll)
    //var selectAllModifiers=objLocator.findLocator(objRepo.modifiers.selectAllModifiers) (more then one element need to get for code waiting)

    var saveBtn = objLocator.findLocator(objRepo.modifiers.saveBtn)
    var cancelBtn = objLocator.findLocator(objRepo.modifiers.cancelBtn)
    var editIcon=objLocator.findLocator(objRepo.modifiers.editIcon)
    var updateBtn=objLocator.findLocator(objRepo.modifiers.updateBtn)
    var modifiersNotIntheList = objLocator.findLocator(objRepo.modifiers.modifiersNotIntheList)
    var customModifiers = objLocator.findLocator(objRepo.modifiers.customModifiers)
    var addOption = objLocator.findLocator(objRepo.modifiers.addOption)
    var optionName = objLocator.findLocator(objRepo.modifiers.optionName)
    var customSaveBtn = objLocator.findLocator(objRepo.modifiers.customSaveBtn)
    var customModifiersList=objLocator.findLocator(objRepo.modifiers.customModifiersList)
    var editBtn=objLocator.findLocator(objRepo.modifiers.editBtn)
    var deleteBtn=objLocator.findLocator(objRepo.modifiers.deleteBtn)

    //Sub modifiers Elements path
    var addSubModifiers=objLocator.findLocator(objRepo.subModifiers.addSubModifiers)
    var sbmAddSubMdfrBtn=objLocator.findLocator(objRepo.subModifiers.sbmAddSubMdfrBtn)
   

    this.rmMenuModifiersPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }


    this.clickOnHedaerModifiers = function () {
        buttonActions.click(headerModifiers)
        return this;
    }
    this.clickOnAddModifiers = function () {
        buttonActions.click(addModifiers)
        return this;
    }
    this.clickOnSelectAll = function () {
        buttonActions.click(selectAll)
        return this;
    }
    this.selectAllModifiers = function () {
        buttonActions.click(selectAllModifiers)
        return this;
    }

    this.clickOnSaveBtn = function () {
        buttonActions.click(saveBtn)
        return this;
    }
    this.clickOnCancelBtn = function () {
        buttonActions.click(cancelBtn)
        return this;
    }
    this.clickOnEditIcon=function(){
        buttonActions.click(editIcon)
        return this;
    }
    this.clickOnUpdateBtn=function(){
        buttonActions.click(updateBtn)
        return this;
    }

    //Not in the list Elements
    this.clickOnNotIntheList = function () {
        buttonActions.click(modifiersNotIntheList)
        return this;
    }
    this.enterCustomModifiersName = function (value) {
        inputBoxActions.type(customModifiers, value)
        return this;
    }
    this.clickOnAddOption = function () {
        buttonActions.click(addOption)
        return this;
    }
    this.enterOptionName = function (value) {
        inputBoxActions.type(optionName, value)
        return this;
    }
    this.clickOnCustomSaveBtn = function () {
        buttonActions.click(customSaveBtn)
        return this;
    }
    //custom Modifiers edit flow
    this.clickOnCustoMmdfrsCheckBox=function(){
        buttonActions.click(customModifiersList)
        return this;
    }
    this.clickOnEditBtn=function(){
       buttonActions.click(editBtn)
        return this;
    }
    this.clickOnDeleteBtn=function(){
        buttonActions.click(deleteBtn)
        return this;
    }
    
    //Sub modfiers functions
    this.clickOnAddSubModifiersIcon=function(){
        buttonActions.click(addSubModifiers)
        return this;
    }
    this.SaveSubModifiers=function(){
        buttonActions.click(sbmAddSubMdfrBtn)
        return this;
    }
    
    //function call reusablity
    this.createModifiers = function () {
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.wait()
        this.clickOnAddModifiers()
        waitActions.wait()
        this.clickOnSelectAll()
        waitActions.wait()
        this.clickOnSaveBtn()
        waitActions.wait()
        waitActions.wait()
        waitActions.wait()
        this.clickOnEditIcon()
        waitActions.wait()
        waitActions.wait()
        this.clickOnSelectAll()
        waitActions.wait()
        this.clickOnUpdateBtn()
        waitActions.wait()
        waitActions.wait()
    }

    //Create custom Modifiers
    this.createCustomModifiers = function (customModifiers,optionName) {
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnNotIntheList()
        waitActions.waitForElementIsDisplayed()
        this.enterCustomModifiersName(customModifiers)
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddOption()
        waitActions.waitForElementIsDisplayed()
        this.enterOptionName(optionName)
        waitActions.wait()
        this.clickOnCustomSaveBtn()
        waitActions.wait()
    }

    //Custom Modifiers Edit and delete flow
    this.editCustomModifiers=function(editCustomModifiers){
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.clickOnEditBtn()
        waitActions.waitForElementIsDisplayed()
        this.enterCustomModifiersName(editCustomModifiers)
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddOption()
        // waitActions.wait()
        // this.enterOptionName(optionName)
        this.clickOnCustomSaveBtn()
        waitActions.wait()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.wait()
        this.clickOnDeleteBtn()
        waitActions.wait()
        waitActions.wait()
    }
   
    //Create Sub modifiers 
    this.createSubModifiers=function(){
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddSubModifiersIcon()
        waitActions.wait()
        this.clickOnSelectAll()
        waitActions.wait()
        this.clickOnSaveBtn()
        waitActions.wait()
        waitActions.wait()
        this.clickOnEditIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnSelectAll()
        waitActions.wait()
        this.clickOnUpdateBtn()
        waitActions.wait()
        waitActions.wait()
    }
    this.createCustomSubModifiers = function (customModifiers,optionName) {
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddSubModifiersIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnNotIntheList()
        waitActions.waitForElementIsDisplayed()
        this.enterCustomModifiersName(customModifiers)
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddOption()
        waitActions.waitForElementIsDisplayed()
        this.enterOptionName(optionName)
        waitActions.wait()
        this.SaveSubModifiers()
        waitActions.wait()
        waitActions.wait()
    }

    //Custom Modifiers Edit and delete flow
    this.editCustomSubModifiers=function(editCustomModifiers){
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddSubModifiersIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.clickOnEditBtn()
        waitActions.waitForElementIsDisplayed()
        this.enterCustomModifiersName(editCustomModifiers)
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddOption()
        // waitActions.wait()
        // this.enterOptionName(optionName)
        this.SaveSubModifiers()
        waitActions.wait()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.wait()
        this.clickOnDeleteBtn()
        waitActions.wait()
        waitActions.wait()
    }
}