const { link } = require('fs-extra');
const { duration } = require('moment');
const { browser } = require('protractor');

module.exports = function () {
    'use strict'

    //import required actions and create object for its
    var objRepo = require('../resources/objectRepository.json')
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var inputBoxActions = new commons.inputBoxActions();
    var waitActions = new commons.waitActions();

    //Combo Menu create flow locator decalartin
    var addButtonComboMenu = objLocator.findLocator(objRepo.comboMenu.addButtonComboMenu)
    var enterComboSectionName = objLocator.findLocator(objRepo.comboMenu.enterComboSectionName)
    var slectNorthIndiaMenu = objLocator.findLocator(objRepo.comboMenu.slectNorthIndiaMenu)
    var slectMenuItemChikenTikka = objLocator.findLocator(objRepo.comboMenu.slectMenuItemChikenTikka)
    var saveButton = objLocator.findLocator(objRepo.comboMenu.saveButton)
    var selectChickenTikkaMenuItem = objLocator.findLocator(objRepo.comboMenu.selectChickenTikkaMenuItem)

    //ComboMenu item add flow
    var chikenTikkaModifiersAddButton = objLocator.findLocator(objRepo.comboMenu.chikenTikkaModifiersAddButton)
    var modifiersIdli = objLocator.findLocator(objRepo.comboMenu.modifiersIdli)
    var modifiersOptionItem = objLocator.findLocator(objRepo.comboMenu.modifiersOptionItem)
    var addModifiersButton = objLocator.findLocator(objRepo.comboMenu.addModifiersButton)
    var modifierCheckBox = objLocator.findLocator(objRepo.comboMenu.modifierCheckBox)
    var modifiersPrice = objLocator.findLocator(objRepo.comboMenu.modifiersPrice)
    var modifiersDiscount = objLocator.findLocator(objRepo.comboMenu.modifiersDiscount)
    var modifierServing = objLocator.findLocator(objRepo.comboMenu.modifierServing)

    //submodifiers add locators
    var subModifiersAddBtn = objLocator.findLocator(objRepo.comboMenu.subModifiersAddBtn)
    var addSubModifierOption = objLocator.findLocator(objRepo.comboMenu.addSubModifierOption)
    var selectSubModifierOption = objLocator.findLocator(objRepo.comboMenu.selectSubModifierOption)
    var subModifiersOptionDiscount = objLocator.findLocator(objRepo.comboMenu.subModifiersOptionDiscount)
    var subModifierOptionPrice = objLocator.findLocator(objRepo.comboMenu.subModifierOptionPrice)
    var addSubModifierBtn = objLocator.findLocator(objRepo.comboMenu.addSubModifierBtn)
    var add_OnsAddBtn = objLocator.findLocator(objRepo.comboMenu.add_OnsAddBtn)
    var chooseAddOnsSpiceBtn = objLocator.findLocator(objRepo.comboMenu.chooseAddOnsSpiceBtn)
    var selecSamosaSpiceOption = objLocator.findLocator(objRepo.comboMenu.selecSamosaSpiceOption)
    var updateBtn = objLocator.findLocator(objRepo.comboMenu.updateBtn)
    var add_OnsSpiceOpton = objLocator.findLocator(objRepo.comboMenu.add_OnsSpiceOpton)
    var samosaDiscount = objLocator.findLocator(objRepo.comboMenu.samosaDiscount)
    var samosaPrice = objLocator.findLocator(objRepo.comboMenu.samosaPrice)
    var spiceEnableDisable = objLocator.findLocator(objRepo.comboMenu.spiceEnableDisable)
    var spiceDeleteBtn = objLocator.findLocator(objRepo.comboMenu.spiceDeleteBtn)
    var deleteAlertBtn=objLocator.findLocator(objRepo.comboMenu.deleteAlertBtn)

    
    //validation combo Menu
    var combosNameValidation = objLocator.findLocator(objRepo.comboMenu.combosNameValidation)

    //function call 
    this.addComboMenuButtonPlusIcon = function () {
        buttonActions.click(addButtonComboMenu)
        return this;
    }

    this.enterComboName = function (value) {
        inputBoxActions.type(enterComboSectionName, value)
        return this;
    }

    this.clickNorthIndia = function () {
        buttonActions.click(slectNorthIndiaMenu)
        return this;
    }

    this.selectChickenTikka = function () {
        buttonActions.click(slectMenuItemChikenTikka)
        return this;
    }

    this.clickOnSaveButton = function () {
        buttonActions.click(saveButton)
        return this;
    }

    this.clickOnChikenSpecial = function () {
        buttonActions.click(combosNameValidation)
        return this;
    }

    this.clickOnComboMenuItem = function () {
        buttonActions.click(selectChickenTikkaMenuItem)
        return this;
    }

    //validation elemet present
    this.validationForComboMenuName = function () {
        expect(combosNameValidation.isPresent()).toBe(true);
        console.log("combo Menu section Name is present ")
        return this;
    }

    //combo Menu item Modifies flow
    this.clickMenuItemModifier = function () {
        buttonActions.click(chikenTikkaModifiersAddButton)
        return this;
    }
    this.selectModifier = function () {
        buttonActions.click(modifiersIdli)
        return this;
    }
    this.selectModifiersOption = function () {
        buttonActions.click(modifiersOptionItem)
        return this;
    }
    this.saveModifiersButton = function () {
        buttonActions.click(addModifiersButton)
        return this;
    }
    this.clickOnModifiersCheckBox = function () {
        buttonActions.click(modifierCheckBox)
        return this;
    }
    this.enterModifiersPrice = function (value) {
        inputBoxActions.type(modifiersPrice, value)
        return this;
    }
    this.enterModifiersDiscount = function (value) {
        inputBoxActions.type(modifiersDiscount, value)
        return this;
    }
    this.enterModifeirsServing = function () {
        inputBoxActions.type(modifierServing)
        return this;
    }
    //sub modifiers flow
    this.clickOnSuBmodifiersAddButton = function () {
        buttonActions.click(subModifiersAddBtn)
        return this;
    }
    this.selectSubModifierOption = function () {
        buttonActions.click(addSubModifierOption)
        return this;
    }
    this.clickOnSubModifierOption = function () {
        buttonActions.click(selectSubModifierOption)
        return this;
    }
    this.enterSubModifiersDiscount = function (value) {
        inputBoxActions.type(subModifiersOptionDiscount, value)
        return this;
    }
    this.enterSubMofiersPrice = function (value) {
        inputBoxActions.type(subModifierOptionPrice, value)
        return this;
    }
    this.clickOnSubModifiersSaveBtn = function () {
        buttonActions.click(addSubModifierBtn)
        return this;
    }

    //add_ons function flow
    this.clickOnAddOnsAddBtn = function () {
        buttonActions.click(add_OnsAddBtn)
        return this;
    }
    this.selectAddonsSpiceBtn = function () {
        buttonActions.click(chooseAddOnsSpiceBtn)
        return this;
    }
    this.chooseSamosaSpiceOPtion = function () {
        buttonActions.click(selecSamosaSpiceOption)
        return this;
    }
    this.clickOnUpdateBtn = function () {
        buttonActions.click(updateBtn)
        return this;
    }
    this.clickOnAddOnsSpiceOption = function () {
        buttonActions.click(add_OnsSpiceOpton)
        return this;
    }
    this.enterSamosaDiscount = function (value) {
        inputBoxActions.type(samosaDiscount, value)
        return this;
    }
    this.enterSamosaPrice = function (value) {
        inputBoxActions.type(samosaPrice, value)
        return this;
    }
    this.clickOnSpiceEnableDisableBtn = function () {
        buttonActions.click(spiceEnableDisable)
        return this;
    }
    this.clickOnAddOnsDeleteBtn = function () {
        buttonActions.click(spiceDeleteBtn)
        return this;
    }
    this.clickOnDeleteAlertBtn=function(){
        buttonActions.click(deleteAlertBtn)
        return this;
    }

    //combo Menu item add flow
    this.comboMebuaddItemFlow = function (enterComboSectionName) {
        waitActions.wait()
        this.addComboMenuButtonPlusIcon()
        waitActions.wait()
        this.enterComboName(enterComboSectionName)
        waitActions.wait()
        this.clickNorthIndia()
        waitActions.wait()
        this.selectChickenTikka()
        waitActions.wait()
        this.clickOnSaveButton()
        waitActions.wait()
        this.validationForComboMenuName()
    }

    this.comboMenuItemAddFlow = function (modifiersPrice, modifiersDiscount, modifierServing,subModifiersOptionDiscount,subModifierOptionPrice) {
        waitActions.wait()
        this.clickOnChikenSpecial()
        waitActions.wait()
        this.clickOnComboMenuItem()
        waitActions.wait()
        waitActions.wait()
        this.clickMenuItemModifier()
        waitActions.wait()
        this.selectModifier()
        waitActions.wait()
        this.selectModifiersOption()
        waitActions.wait()
        this.saveModifiersButton()
        waitActions.wait()
        this.clickOnModifiersCheckBox()
        waitActions.wait()
        this.enterModifiersPrice(modifiersPrice)
        waitActions.wait()
        this.enterModifiersDiscount(modifiersDiscount)
        waitActions.wait()
        this.enterModifeirsServing(modifierServing)
        waitActions.wait()
        this.clickOnSuBmodifiersAddButton()  
        waitActions.wait()
        this.selectSubModifierOption()
        waitActions.wait()
        this.clickOnSubModifierOption()
        waitActions.wait()
        this.enterSubModifiersDiscount(subModifiersOptionDiscount)
        waitActions.wait()
        this.enterSubMofiersPrice(subModifierOptionPrice)
        waitActions.wait()
        this.clickOnSubModifiersSaveBtn()
        waitActions.wait()
        waitActions.wait()
    }

    this.commboAddOnsFlow = function(samosaDiscount,samosaPrice) {
        waitActions.wait()
        this.clickOnAddOnsAddBtn()
        waitActions.wait()
        this.selectAddonsSpiceBtn()
        waitActions.wait()
        this.chooseSamosaSpiceOPtion()
        waitActions.wait()
        this.clickOnUpdateBtn()
        waitActions.wait()
        this.clickOnAddOnsSpiceOption()
        waitActions.wait()
        this.enterSamosaDiscount(samosaDiscount)
        waitActions.wait()
        this.enterSamosaPrice(samosaPrice)
        waitActions.wait()
        this.clickOnSpiceEnableDisableBtn()
        waitActions.wait()
        this.clickOnAddOnsDeleteBtn()
        waitActions.wait()
        waitActions.wait()
        waitActions.wait()
    }

}