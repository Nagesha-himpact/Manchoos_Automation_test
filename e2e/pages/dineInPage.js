const { browser } = require('protractor');
const { ExpectedConditions } = require("protractor");
module.exports = function () {
    'use strict'

    //import required actions and create object
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions = new commons.buttonActions();
    var inputBoxActions = new commons.inputBoxActions();
    var waitActions = new commons.waitActions();
    var mouseActions = new commons.mouseActions();
    var expectedConditions = ExpectedConditions;

    //Dine-in section creation 
    var addNewSection = objLocator.findLocator(objRepo.dineIn.addNewSection)
    var sectionName = objLocator.findLocator(objRepo.dineIn.sectionName)
    var sectionCode = objLocator.findLocator(objRepo.dineIn.sectionCode)
    var addNoTable = objLocator.findLocator(objRepo.dineIn.addNoTable)
    var seatingCapacity = objLocator.findLocator(objRepo.dineIn.seatingCapacity)
    var increaseAddNoTablePlusIcon = objLocator.findLocator(objRepo.dineIn.increaseAddNoTablePlusIcon)
    var childFriendlyCheckBox = objLocator.findLocator(objRepo.dineIn.childFriendlyCheckBox)
    var drinkingPermitedCheckBox = objLocator.findLocator(objRepo.dineIn.drinkingPermitedCheckBox)
    var handiCapedCheckBox = objLocator.findLocator(objRepo.dineIn.handiCapedCheckBox)
    var smokingPermitedCheckBox = objLocator.findLocator(objRepo.dineIn.smokingPermitedCheckBox)
    var saveButton = objLocator.findLocator(objRepo.dineIn.saveButton)
    var alertOkButton = objLocator.findLocator(objRepo.dineIn.alertOkButton)
    var deleteSection = objLocator.findLocator(objRepo.dineIn.deleteSection)
    var deleteAletOk = objLocator.findLocator(objRepo.dineIn.deleteAletOk)
    var disableSection = objLocator.findLocator(objRepo.dineIn.disableSection)
    var disableAlert = objLocator.findLocator(objRepo.dineIn.disableAlert)
    var enableSection = objLocator.findLocator(objRepo.dineIn.enableSection)
    var enableAlert = objLocator.findLocator(objRepo.dineIn.enableAlert)
   
  
    //Filter Elements
    var featureFilter = objLocator.findLocator(objRepo.dineIn.featureFilter)
    var childFiendlyFilter = objLocator.findLocator(objRepo.dineIn.childFiendlyFilter)
    var drinkingFilter = objLocator.findLocator(objRepo.dineIn.drinkingFilter)
    var handicapFilter = objLocator.findLocator(objRepo.dineIn.handicapFilter)
    var somkingFilter = objLocator.findLocator(objRepo.dineIn.somkingFilter)
    var seatersFilterAll = objLocator.findLocator(objRepo.dineIn.seatersFilterAll)
    var twoSeaterFilter = objLocator.findLocator(objRepo.dineIn.twoSeaterFilter)
    var fourSeaterFilter = objLocator.findLocator(objRepo.dineIn.fourSeaterFilter)
    var fiveSeaterFilter = objLocator.findLocator(objRepo.dineIn.fiveSeaterFilter)
    var sixSeaterFilter = objLocator.findLocator(objRepo.dineIn.sixSeaterFilter)
    var eightSeaterFilter = objLocator.findLocator(objRepo.dineIn.eightSeaterFilter)
    var tenSeaterFilter = objLocator.findLocator(objRepo.dineIn.tenSeaterFilter)
    var dineInSeaterName=objLocator.findLocator(objRepo.dineIn.dineInSeaterName)
   
    //Seater locators
    var fourSeaterCheckBox=objLocator.findLocator(objRepo.dineIn.fourSeaterCheckBox)
    var fourSeaterTable1=objLocator.findLocator(objRepo.dineIn.fourSeaterTable1)
    var fourSeaterTable2=objLocator.findLocator(objRepo.dineIn.fourSeaterTable2)

    //Dine in update button click 
    var updateButton = objLocator.findLocator(objRepo.dineIn.updateButton)
    var updateAlrtOkButton = objLocator.findLocator(objRepo.dineIn.updateAlrtOkButton)

    //Print all section name
    var getSectionName=objLocator.findLocator(objRepo.dineIn.getSectionName)
    var dineInSeaterName=objLocator.findLocator(objRepo.dineIn.dineInSeaterName)


    //Dine in through launch the Url
    this.dineInPage = function (path) {
        if (typeof path === 'undefined') {
            path = '';
        }
        browser.get(path)
        return this;
    }

    //Create new dineIn section
    this.clickAddNewSection = function () {
        buttonActions.click(addNewSection);
        return this;
    }
    this.enterSectionName = function (value) {
        inputBoxActions.type(sectionName, value)
        return this;
    }
    this.enterSectionCode = function (value) {
        inputBoxActions.type(sectionCode, value)
        return this;
    }

    // buttonActions.click(seatingCapacity)
    // seatingCapacity.getText().then(function(text){
    // console.log(text)
    // expect(text).toBe(4)
    // })
    //elementToBeClickable
    
    this.clickOnSceatingCapacity = function () {
    mouseActions.mouseMove(seatingCapacity)
    browser.wait(expectedConditions.visibilityOf(seatingCapacity), 30000).then(function () {
    browser.executeScript("arguments[0].click()", seatingCapacity)
    return this;
    });   
    }
     this.enterAddNoTables=function(value){
         inputBoxActions.type(addNoTable,value)
         return this;
     }
    this.clickOnPlusIcon = function () {
        buttonActions.click(increaseAddNoTablePlusIcon)
        return this;
    }
    this.selectChildFriendlyCheckBox = function () {  
        buttonActions.click(childFriendlyCheckBox)
        return this;
    }
    this.selectDrinkingPermitedCheckBox = function () {
        buttonActions.click(drinkingPermitedCheckBox)
        return this;
    }
    this.selectHandiCapedCheckBox = function () {
        buttonActions.click(handiCapedCheckBox)
        return this;
    }
    this.selectSmokingPermitedCheckBox = function () {
        buttonActions.click(smokingPermitedCheckBox)
        return this;
    }
    this.clickOnSaveButton = function () {
        buttonActions.click(saveButton)
        return this;
    }

    this.clickOnAlertOk = function () {
        buttonActions.click(alertOkButton)
        return this;
    }
    this.deleteSectionIcon = function () {
        buttonActions.click(deleteSection)
        return this;
    }
    this.clickOnDeleteAlert = function () {
        buttonActions.click(deleteAletOk)
        return this;
    }
    this.clickOndisableIcon = function () {
        buttonActions.click(disableSection)
        return this;
    }
    this.clickOnDisableAlert = function () {
        buttonActions.click(disableAlert)
        return this;
    }
    this.clickOnEnbaleIcon = function () {
        buttonActions.click(enableSection)
        return this;
    }
    this.clickOnEnableAlert = function () {
        buttonActions.click(enableAlert)
        return this;
    }


    //Update button click function
    this.DineInSectionDetailsUpdateButton = function () {
        buttonActions.click(updateButton)
        return this;
    }
    this.DineInSectionDetailsUpdateAlrtOkButton = function () {
        buttonActions.click(updateAlrtOkButton)
        return this;
    }

    //Feature Filter click 
    this.clickOnFeatureFilter = function () {
        buttonActions.click(featureFilter)
        return this;
    }
    this.clickOnChildFriendlyFilter = function () {
        buttonActions.click(childFiendlyFilter)
        return this;
    }
    this.clickOnDrinkingFilter = function () {
        buttonActions.click(drinkingFilter)
        return this;
    }
    this.clickOnHandicapFilter = function () {
        buttonActions.click(handicapFilter)
        return this;
    }
    this.clickOnSmokingFilter = function () {
        buttonActions.click(somkingFilter)
        return this;
    }

    //Seater Filter 
    this.clickOnSeaterAllIcon = function () {
        buttonActions.click(seatersFilterAll)
        return this;
    }
    this.clickOnTwoSeatersFilter = function () {
        buttonActions.click(twoSeaterFilter)
        return this;
    }
    this.clickOnFourSeaterFilter = function () {
        buttonActions.click(fourSeaterFilter)
        return this;
    }
    this.clickOnFiveSeaterFilter = function () {
        buttonActions.click(fiveSeaterFilter)
        return this;
    }
    this.clickOnSixSeaterFilter = function () {
        buttonActions.click(sixSeaterFilter)
        return this;
    }
    this.clickOnEightSeaterFilter = function () {
        buttonActions.click(eightSeaterFilter)
        return this;
    }
    this.clickOnTenSeaterFilter = function () {
        buttonActions.click(tenSeaterFilter)
        return this;
    }

    //Ex: four Seater call function
    this.clickOnFourSeaterCheckBox=function(){
        buttonActions.click(fourSeaterCheckBox)
        return this;
    }
    this.clickOnfourTableOne=function(){
        buttonActions.click(fourSeaterTable1)
        return this;
    }
    this.clickOnFourSeaterTwo=function(){
        buttonActions.click(fourSeaterTable2)
        return this;
    }
   
      //Dine in validation
      this.dineInSectionNameValidation=function(){
        getSectionName.getText().then(function(text) {
            console.log("dineInSection name spots : ",text);
            expect(text).toEqual("First Floor");  
          });
        return this;
    }

    this.dineInSeaterNameValidation=function(){
        dineInSeaterName.getText().then(function(text) {
            console.log("dineInSeaters spots : ",text);
            expect(text).toEqual("4-Seaters");  
          });
        return this;
    }

    //Create the Dine-In section & Table by calling functions
    this.dineInCreate = function (sectionName, sectionCode,addNoTable) {
        browser.sleep(2000)                                          // to some wait to create a table
        this.clickAddNewSection()
        browser.sleep(2000)
        this.enterSectionName(sectionName)
        browser.sleep(2000)
        this.enterSectionCode(sectionCode)
        browser.sleep(2000)
        this.clickOnSceatingCapacity()
        browser.sleep(2000)
        // this.clickOnPlusIcon()
        // waitActions.waitForElementIsDisplayed()
        // this.clickOnPlusIcon()
        // waitActions.wait()
        this.enterAddNoTables(addNoTable)
        browser.sleep(10000)
        // this.selectChildFriendlyCheckBox()
        // waitActions.waitForElementIsDisplayed()
        // this.selectDrinkingPermitedCheckBox()
        // waitActions.waitForElementIsDisplayed()
        // this.selectHandiCapedCheckBox()
        // waitActions.waitForElementIsDisplayed()
        // this.selectSmokingPermitedCheckBox()
        // waitActions.waitForElementIsDisplayed()
        this.clickOnSaveButton()
        browser.sleep(2000)
        this.clickOnAlertOk()
        waitActions.wait()
    }

    //Update Dine-In section & Table by calling functions
    this.upDateDineInsection = function (updateSectionName,updateSectionCode,updateAddNoTable) {
        waitActions.wait()
        this.enterSectionName(updateSectionName)
        waitActions.waitForElementIsDisplayed()
        this.enterSectionCode(updateSectionCode)
        waitActions.waitForElementIsDisplayed()
        this.clickOnSceatingCapacity()
        waitActions.waitForElementIsDisplayed()
        this.clickOnPlusIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnPlusIcon()
        waitActions.waitForElementIsDisplayed()
        this.enterAddNoTables(updateAddNoTable)
        waitActions.waitForElementIsDisplayed()
        this.selectChildFriendlyCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.selectDrinkingPermitedCheckBox()
        waitActions.waitForElementIsDisplayed()
        //this.selectHandiCapedCheckBox()
        waitActions.waitForElementIsDisplayed()
        this.selectSmokingPermitedCheckBox()
        waitActions.waitForElementIsDisplayed()
        waitActions.wait()
        this.DineInSectionDetailsUpdateButton()
        waitActions.wait()
        this.DineInSectionDetailsUpdateAlrtOkButton()
        waitActions.wait()
    }

    //disable-enable-delete flow of Dine-In section & Table by calling functions
    this.disableEnableDeleteSection = function () {
        waitActions.wait()
        this.clickOndisableIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnDisableAlert()
        waitActions.wait()
        this.clickOnEnbaleIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnEnableAlert()
        waitActions.waitForElementIsDisplayed()
    }

    //Dine-In Feature & Seater filter function call
    this.featureAndSeaterFilter = function () {
        waitActions.wait()
        //Feature filter
        waitActions.wait()
        this.clickOnChildFriendlyFilter()
        waitActions.wait()
        this.clickOnDrinkingFilter()
        waitActions.wait()
        this.clickOnFeatureFilter()
        waitActions.wait()
        this.clickOnHandicapFilter()
        waitActions.wait()
        this.clickOnSmokingFilter()
        waitActions.wait()
        
        //seater filter
        this.clickOnSeaterAllIcon()
        waitActions.wait()
        this.clickOnTwoSeatersFilter()
        waitActions.wait()
        this.clickOnFourSeaterFilter()
        waitActions.wait()
        this.clickOnFiveSeaterFilter()
        waitActions.wait()
        this.clickOnSixSeaterFilter()
        waitActions.wait()
        this.clickOnEightSeaterFilter()
        waitActions.wait()
        this.clickOnTenSeaterFilter()
        waitActions.wait()
        waitActions.wait()
    }

    //Table validation (four seater disbale-enable-delete)
    this.dineInTableValidation=function(){
        waitActions.wait()
        this.clickOnFourSeaterCheckBox()
        waitActions.wait()
        this.clickOndisableIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnDisableAlert()
        waitActions.wait()
        this.clickOnFourSeaterCheckBox()
        waitActions.wait()
        this.clickOnEnbaleIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnEnableAlert()
        waitActions.wait()

        this.clickOnfourTableOne()
        waitActions.wait()
        this.clickOndisableIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnDisableAlert()
        waitActions.wait()
        this.clickOnfourTableOne()
        waitActions.wait()
        this.clickOnEnbaleIcon()
        waitActions.waitForElementIsDisplayed()
        this.clickOnEnableAlert()
        waitActions.wait()

        this.clickOnfourTableOne()
        waitActions.wait()
        this.deleteSectionIcon()
        waitActions.wait()
        this.clickOnDeleteAlert()
        waitActions.wait()

        this.clickOnFourSeaterCheckBox()
        waitActions.wait()
        this.deleteSectionIcon()
        waitActions.wait()
        this.clickOnDeleteAlert()
        waitActions.wait()

        //section delete
        waitActions.wait()
        this.deleteSectionIcon()
        waitActions.wait()
        this.clickOnDeleteAlert()
        waitActions.wait()
    }

    this.dineInSectionValidation=function(){
        waitActions.wait()
        this.dineInSectionNameValidation()
        waitActions.wait()
        waitActions.wait()
        this.dineInSeaterNameValidation()
        waitActions.wait()
    }
}
