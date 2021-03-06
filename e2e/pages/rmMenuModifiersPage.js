const { browser } = require('protractor');

module.exports = function () {
    'use strict'

    //import required actions and create object
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var waitActions = new commons.waitActions();
    var inputBoxActions = new commons.inputBoxActions();

    //modifiers page objects locators
    var headerModifiers = objLocator.findLocator(objRepo.modifiers.headerModifiers)
    var addModifiers = objLocator.findLocator(objRepo.modifiers.addModifiers)
    var selectAll = objLocator.findLocator(objRepo.modifiers.selectAll)
    //var selectAllModifiers=objLocator.findLocator(objRepo.modifiers.selectAllModifiers) (more then one element need to get for code waiting)
    var saveButton = objLocator.findLocator(objRepo.modifiers.saveButton)
    var cancelButton = objLocator.findLocator(objRepo.modifiers.cancelButton)
    var editIcon=objLocator.findLocator(objRepo.modifiers.editIcon)
    var updateButton=objLocator.findLocator(objRepo.modifiers.updateButton)
    var modifiersNotIntheList = objLocator.findLocator(objRepo.modifiers.modifiersNotIntheList)
    var addCustomModifiersName = objLocator.findLocator(objRepo.modifiers.addCustomModifiersName)
    var addOption = objLocator.findLocator(objRepo.modifiers.addOption)
    var optionName = objLocator.findLocator(objRepo.modifiers.optionName)
    var customSaveButton = objLocator.findLocator(objRepo.modifiers.customSaveButton)
    var customModifiersList=objLocator.findLocator(objRepo.modifiers.customModifiersList)
    var editButton=objLocator.findLocator(objRepo.modifiers.editButton)
    var updateModifierAlertButton=objLocator.findLocator(objRepo.modifiers.updateModifierAlertButton)
    var deleteButton=objLocator.findLocator(objRepo.modifiers.deleteButton)
    
    //dependency custom item flow 
    var chooseModifierIdli=objLocator.findLocator(objRepo.modifiers.chooseModifierIdli)
    var modifierIdli=objLocator.findLocator(objRepo.modifiers.modifierIdli)
    var selectToggleSwitch=objLocator.findLocator(objRepo.modifiers.selectToggleSwitch)
    var idliSaveBtn=objLocator.findLocator(objRepo.modifiers.idliSaveBtn)
    
    //Modifiers Validation
    var chooseModifiersOption=objLocator.findLocator(objRepo.modifiers.chooseModifiersOption)
    var ModifiersDashBoardItemName=objLocator.findLocator(objRepo.modifiers.ModifiersDashBoardItemName)
    var customModifiresName=objLocator.findLocator(objRepo.modifiers.customModifiresName)

    //Sub modifiers locators 
    var subModifiersEditBtn=objLocator.findLocator(objRepo.subModifiers.subModifiersEditBtn)
    var addSubModifiers=objLocator.findLocator(objRepo.subModifiers.addSubModifiers)
    var SubModifiersSelectAll=objLocator.findLocator(objRepo.subModifiers.SubModifiersSelectAll)
    var alertAddSuBModifierBtn=objLocator.findLocator(objRepo.subModifiers.alertAddSuBModifierBtn)
    var updateAlertSubModifierBtn=objLocator.findLocator(objRepo.subModifiers.updateAlertSubModifierBtn)
    var addCustomSubModifiersName=objLocator.findLocator(objRepo.subModifiers.addCustomSubModifiersName)
    var SubModifieroptionName=objLocator.findLocator(objRepo.subModifiers.SubModifieroptionName)
    var editCustomSubModifiers=objLocator.findLocator(objRepo.subModifiers.editCustomSubModifiers)
    var editSubModifierOptionName=objLocator.findLocator(objRepo.subModifiers.editSubModifierOptionName)
    var subModifiersDashBoardSmall=objLocator.findLocator(objRepo.subModifiers.subModifiersDashBoardSmall)
    var chooseSubModifiersSmall=objLocator.findLocator(objRepo.subModifiers.chooseSubModifiersSmall)
    var smallSelectAll=objLocator.findLocator(objRepo.subModifiers.smallSelectAll)
    
    //submodifers validation
    var subModifiersOptionName=objLocator.findLocator(objRepo.subModifiers.subModifiersOptionName)
    var customSubModifierValidation=objLocator.findLocator(objRepo.subModifiers.customSubModifierValidation)


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
        buttonActions.click(saveButton)
        return this;
    }
    this.clickOnCancelBtn = function () {
        buttonActions.click(cancelButton)
        return this;
    }
    this.clickOnEditIcon=function(){
        buttonActions.click(editIcon)
        return this;
    }
    this.clickOnUpdateBtn=function(){
        buttonActions.click(updateButton)
        return this;
    }

    //Not in the list Elements
    this.clickOnNotIntheList = function () {
        buttonActions.click(modifiersNotIntheList)
        return this;
    }
    this.enterCustomModifiersName = function (value) {
        inputBoxActions.type(addCustomModifiersName, value)
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
        buttonActions.click(customSaveButton)
        return this;
    }

    //custom Modifiers edit flow
    this.clickOnCustoMmdfrsCheckBox=function(){
        buttonActions.click(customModifiersList)
        return this;
    }
    this.clickOnEditBtn=function(){
       buttonActions.click(editButton)
        return this;
    }

    this.updateModifierAlert=function(){
        buttonActions.click(updateModifierAlertButton)
        return this;
    }
    this.clickOnDeleteBtn=function(){
        buttonActions.click(deleteButton)
        return this;
    }
    this.clickOnModifiersIdli=function(){
        buttonActions.click(chooseModifierIdli)
        return this;
    }    
    this.clickOnModifierDashBoadIdli=function(){
        buttonActions.click(modifierIdli)
        return this;
    }
    this.clickOnToggleSwitch=function(){
        buttonActions.click(selectToggleSwitch)
        return this;
    }


    //Modifiers validation
    this.modifiersNameValidation=function(){
        chooseModifiersOption.getText().then(function(text) {
            console.log("Modifiers Name : ",text);
            return this;
    });
    }
this.ModifiersDashBoardGetItemName=function() {
    ModifiersDashBoardItemName.getText().then(function(text1) {
    console.log("Modifiers dashbord Name : ",text1);
    expect("Half Plate").toEqual(text1);
    return this;
});
}

//custom modifires 
this.customModifiersNameValidation=function(){
    customModifiresName.getText().then(function(customName) {
        console.log("Modifiers dashbord Name : ",customName);
        expect("Regular Pizza").toEqual(customName);
        return this;
     });
}

    //Sub modfiers functions
    this.clickOnAddSubModifiersIcon=function(){
        buttonActions.click(addSubModifiers)
        return this;
    }
    this.SaveSubModifiers=function(){
        buttonActions.click(SubModifiersSelectAll)
        return this;
    }
    this.clickOnSubModifiersEditBtn=function(){
        buttonActions.click(subModifiersEditBtn)
        return this;
    }
    this.alertAddSubModifiersButton=function(){
        buttonActions.click(alertAddSuBModifierBtn)
        return this;
    }
    this.updateAlertSubModifierButton=function(){
        buttonActions.click(updateAlertSubModifierBtn)
        return this;
    }

    //Custom Sub Modifier 
    this.enterCustomSubModifiersName = function (value) {
        inputBoxActions.type(addCustomSubModifiersName, value)
        return this;
    }
    this.enterSubOptionName = function (value) {
        inputBoxActions.type(SubModifieroptionName, value)
        return this;
    }
    this.editCustomSubModifier=function(value){
        inputBoxActions.type(editCustomSubModifiers,value)
        return this;
    }
    this.editCustomSubModifierOption=function(value){
        inputBoxActions.type(editSubModifierOptionName,value)
        return this;
    }

    //sub modifiers Name validation
    this.validationSubModifiersOption=function(){
        subModifiersOptionName.getText().then(function(SubModifierOption){
            console.log("custom sub modifers Name validation :" ,SubModifierOption)
            expect(SubModifierOption).toEqual("Medium")
            return this;
        })
    }
    //Custom Sub modifier validation
    this.validationcustomSubModifiers=function(){
    customSubModifierValidation.getText().then(function(customSubModifier){
        console.log("custom sub modifers Name validation :" ,customSubModifier)
        expect(customSubModifier).toEqual("Medium Pizza")
        return this;
    })
}

//Combo menu Dependency submodifiers
this.clickOnSubModifiersDashBoardSmall=function(){
    buttonActions.click(subModifiersDashBoardSmall)
    return this;
}
this.clickOnChooseSubModifiersSmall=function(){
    buttonActions.click(chooseSubModifiersSmall)
    return this;
}
this.clickOnSmallSelectAll=function(){
    buttonActions.click(smallSelectAll)
    return this;
}
this.ModifiersSubModifierSaveBtn=function(){
    buttonActions.click(idliSaveBtn)
    return this;
}


    //Add Modifiers flow (function call reusablity)
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
        this.clickOnEditIcon()
        waitActions.wait()
        waitActions.wait()
        this.clickOnSelectAll()
        waitActions.wait()
        this.clickOnUpdateBtn()
        waitActions.wait()
        waitActions.wait()
        waitActions.wait()
    }

    //Create custom Modifiers flow
    this.createCustomModifiers = function (addCustomModifiersName,optionName) {
        waitActions.wait()
        this.clickOnAddModifiers()
        waitActions.wait()
        this.clickOnNotIntheList()
        waitActions.wait()
        this.enterCustomModifiersName(addCustomModifiersName)
        waitActions.wait()
        this.clickOnAddOption()
        waitActions.wait()
        this.enterOptionName(optionName)
        waitActions.wait()
        this.clickOnCustomSaveBtn()
        waitActions.wait()
        waitActions.wait()
    }

    //Custom Modifiers Edit and delete flow
    this.editCustomModifiers=function(editCustomModifiers,editOptionName){
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
        waitActions.wait()
        this.enterOptionName(editOptionName)
        waitActions.wait()
        this.updateModifierAlert()
        waitActions.wait()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.wait()
        this.clickOnDeleteBtn()
        waitActions.wait()
        waitActions.wait()
    }
//custom item Create Dependency item 
 this.modifiersMenuItem=function(){
     waitActions.wait()
     this.clickOnAddModifiers()
     waitActions.wait()
    this.clickOnModifiersIdli()
    waitActions.wait()
    this.clickOnSaveBtn()
    waitActions.wait()
    waitActions.wait()
    this.clickOnModifierDashBoadIdli()
    waitActions.wait()
    this.clickOnToggleSwitch()
    waitActions.wait()
    this.ModifiersSubModifierSaveBtn()
    browser.sleep(7000) //signout button is not visible so given delay
 }

   
//Modifiers Validation flow
this.modifiersItemsValidation=function(){
    waitActions.wait();
    this.clickOnHedaerModifiers()
    waitActions.wait();
    this.clickOnAddModifiers()
    waitActions.wait()
    this.clickOnSelectAll()
    waitActions.wait()
    this.modifiersNameValidation();
    waitActions.wait()
    this.clickOnSaveBtn()
    waitActions.wait()
    this.ModifiersDashBoardGetItemName()
    waitActions.wait()
    waitActions.wait()
}


//Custom modifiers validation
this.customModifiersValidation=function(){
    waitActions.wait()
    this.customModifiersNameValidation()
    waitActions.wait()
}

    //Add Sub modifiers 
    this.createSubModifiers=function(){
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddSubModifiersIcon()
        waitActions.wait()
        this.clickOnSelectAll()
        waitActions.wait()
        this.validationSubModifiersOption()
        this.clickOnSaveBtn()
        waitActions.wait()
        waitActions.wait()
        this.clickOnSubModifiersEditBtn()
        waitActions.wait()
        this.clickOnSelectAll()
        waitActions.wait()
        waitActions.wait()
        this.clickOnUpdateBtn()
        waitActions.wait()
        waitActions.wait()
    }

    // Create custom Submodifiers flow
    this.createCustomSubModifiers = function (addCustomSubModifiersName,SubModifieroptionName) {
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.waitForElementIsDisplayed()
        this.clickOnAddSubModifiersIcon()
        waitActions.wait()
        this.clickOnNotIntheList()
        waitActions.wait()
        this.enterCustomSubModifiersName(addCustomSubModifiersName)
        waitActions.wait()
        this.clickOnAddOption()
        waitActions.wait()
        this.enterSubOptionName(SubModifieroptionName)
        waitActions.wait()
        this.alertAddSubModifiersButton()
        waitActions.wait()
        waitActions.wait()
    }

    //sub modifiers validation
    this.validationSubmodifiers=function(){
        waitActions.wait()
        this.validationcustomSubModifiers()
        waitActions.wait()
    }
 
    //Update Custom subModifiers by Edit and delete functions
    this.editCustomSubModifiers=function(editCustomSubModifiers,editSubModifierOptionName){
        waitActions.wait()
        this.clickOnHedaerModifiers()
        waitActions.wait()
        this.clickOnAddSubModifiersIcon()
        waitActions.wait()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.wait()
        this.clickOnEditBtn()
        waitActions.wait()
        this.editCustomSubModifier(editCustomSubModifiers)
        waitActions.wait()
        this.clickOnAddOption()
        waitActions.wait()
        this.editCustomSubModifierOption(editSubModifierOptionName)
        waitActions.wait()
        this.updateAlertSubModifierButton()
        waitActions.wait()
        this.clickOnCustoMmdfrsCheckBox()
        waitActions.wait()
        this.clickOnDeleteBtn()
        waitActions.wait()
        waitActions.wait()
    }

    //combo menu dependency
    this.subModifiersComboMenu=function(){
        this.clickOnAddSubModifiersIcon()
        waitActions.wait()
        this.clickOnChooseSubModifiersSmall()
        waitActions.wait()
        this.clickOnSaveBtn()
        waitActions.wait()
        waitActions.wait()
        this.clickOnSubModifiersDashBoardSmall()
        waitActions.wait()
        this.clickOnSmallSelectAll()
        waitActions.wait()
        this.ModifiersSubModifierSaveBtn()
      browser.sleep(7000) //signout button is not visible so given delay
    }
}