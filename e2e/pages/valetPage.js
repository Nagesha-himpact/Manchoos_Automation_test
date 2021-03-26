module.exports=function(){
    'use strict'
    //valet create and its validaiton
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions=new commons.buttonActions();
    var inputBoxActions=new commons.inputBoxActions();
    var waitActions=new commons.waitActions();
    var addNewsection=objLocator.findLocator(objRepo.valet.addNewsection)
    var sectionName=objLocator.findLocator(objRepo.valet.sectionName)
    var sectionCode=objLocator.findLocator(objRepo.valet.sectionCode)
    var parkingSpots=objLocator.findLocator(objRepo.valet.parkingSpots)
    var accessiBility=objLocator.findLocator(objRepo.valet.accessiBility)
    var reserved=objLocator.findLocator(objRepo.valet.reserved)
    var saveButton=objLocator.findLocator(objRepo.valet.saveButton)
    var disableSection=objLocator.findLocator(objRepo.valet.disableSection)
    var alertDisablebutton=objLocator.findLocator(objRepo.valet.alertDisablebutton)
    var enableSection=objLocator.findLocator(objRepo.valet.enableSection)
    var alertEnablebutton=objLocator.findLocator(objRepo.valet.alertEnablebutton)
    var deleteSection=objLocator.findLocator(objRepo.valet.deleteSection)
    var alertDeletebutton=objLocator.findLocator(objRepo.valet.alertDeletebutton)
    
    //Update variable and locators declartion
    var updateButton=objLocator.findLocator(objRepo.valet.updateButton)
    var alertUpdate=objLocator.findLocator(objRepo.valet.alertUpdate)
    var alertOkButton=objLocator.findLocator(objRepo.valet.alertOkButton)

    //Validation parking spots 
    var sidebarPrkingspots=objLocator.findLocator(objRepo.valet.sidebarPrkingspots)
    
    this.valetPage= function(path){
        if(typeof path === 'undefined'){
            path='';
        }
        browser.get(path)
        return this;
    }
    //Add new valet secton flow
    this.clickaddNewsection=function(){
        waitActions.wait();
        buttonActions.click(addNewsection)
        return this;
    }
    this.enterSectionName=function(value){
        inputBoxActions.type(sectionName, value)
        return this;
    }
    this.enterCodeName=function(value){
        inputBoxActions.type(sectionCode, value)
        return this;
    }
    this.enterParkingSpots=function(value){
        inputBoxActions.type(parkingSpots, value)
        return this;
    }
    // Error in Accessibility to enter the value

    this.enterAccesBilityParkingSpots=function(value){
    inputBoxActions.type(accessiBility, value)
    //this.enterAccessiBilityValue= function (value, accessiBility) {
	//browser.executeScript("arguments[0].setAttribute('value', '" + value +"')", accessiBility);
    return this;
    //}
    };
    this.enterReserved=function(value){
        inputBoxActions.type(reserved, value)
        return this;
    }
    this.clickSaveButton=function(){
        buttonActions.click(saveButton)
        return this;
    }
    this.clickOnAlertokButton=function(){
        buttonActions.click(alertOkButton)
        return this;
    }
    this.disable_Section=function(){
        buttonActions.click(disableSection)
        return this;
    }
    this.clickAlertDisable=function(){
        buttonActions.click(alertDisablebutton)
        return this;
    }
    this.enable_Section=function(){
        buttonActions.click(enableSection)
        return this;
    }
    this.clickAlertEnable=function(){
        buttonActions.click(alertEnablebutton)
        return this;
    }
    this.delete_section=function(){
        buttonActions.click(deleteSection)
        return this;
    }
    this.clickAlertDelete=function(){
        buttonActions.click(alertDeletebutton)
        return this;
    }
    

   //click on Update button for valet section details update
    this.clickOnUpdateButton=function(){
        buttonActions.click(updateButton)
        return this;
    }
    this.clickAlertUpdateok=function(){
        buttonActions.click(alertUpdate)
        return this;
    }
    
    //Parking spots validation
    this.validnsParkingSpots= function(){
       inputBoxActions.verifyValue(sidebarPrkingspots)
       console.log(sidebarPrkingspots,": parking spots ")
       return this;
    }

    //Create valte section flow by calling value
    this.valetSection=function(sectionName ,sectionCode,parkingSpots,accessiBility,reserved){
        waitActions.wait()
        this.clickaddNewsection();
        waitActions.waitForElementIsDisplayed();
        this.enterSectionName(sectionName);
        waitActions.waitForElementIsDisplayed();
        this.enterCodeName(sectionCode);
        waitActions.waitForElementIsDisplayed();
        this.enterParkingSpots(parkingSpots)
        waitActions.waitForElementIsDisplayed();
        this.enterAccesBilityParkingSpots(accessiBility)
        waitActions.waitForElementIsDisplayed();
        this.enterReserved(reserved)
        waitActions.waitForElementIsDisplayed(); 
        this.clickSaveButton()
        waitActions.waitForElementIsDisplayed();
        this.clickOnAlertokButton()
        waitActions.waitForElementIsDisplayed()
    }


    // valet UpdateSection flow
    this.valetSectionUpdate=function(UpdateSectionName,UpdateSectionCode,updateParkingSpots,updateAccessiBility,updateReserved){
        waitActions.waitForElementIsDisplayed();
        this.enterSectionName(UpdateSectionName);
        waitActions.waitForElementIsDisplayed();
        this.enterCodeName(UpdateSectionCode);
        waitActions.waitForElementIsDisplayed();
        this.enterParkingSpots(updateParkingSpots)
        waitActions.waitForElementIsDisplayed();
        this.enterAccesBilityParkingSpots(updateAccessiBility)
        waitActions.waitForElementIsDisplayed();
        this.enterReserved(updateReserved)
        waitActions.waitForElementIsDisplayed(); 
        this.clickOnUpdateButton()
        waitActions.waitForElementIsDisplayed();
        this.clickAlertUpdateok()
        waitActions.waitForElementIsDisplayed();
    }

    //valet section disable
    this.valetSectionDisable=function(){
        waitActions.wait()
        this.disable_Section()
        waitActions.waitForElementIsDisplayed()
        this.clickAlertDisable()
        waitActions.wait()
    }

    //valet section Enable
    this.valetSectionEnable=function(){
        this.enable_Section()
        waitActions.waitForElementIsDisplayed()
        this.clickAlertEnable()
        waitActions.wait()
    }
    
    //valet section delete
    this.valetSectionDelete=function(){
        waitActions.wait()
        this.delete_section();
        waitActions.waitForElementIsDisplayed()
        this.clickAlertDelete();
    } 

    // //Validation parking spots
    // this.validationSpots=function(sidebarPrkingspots){
    //     waitActions.wait()
    //     this.validnsParkingSpots(sidebarPrkingspots)
        
    // }
}
