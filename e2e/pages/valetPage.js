const { browser } = require('protractor');

module.exports=function(){
    'use strict'
    
    //import required actions and create object for its
    var objRepo = require('../resources/objectRepository.json');
    var objLocator = new utils.objectLocator();
    var buttonActions=new commons.buttonActions();
    var inputBoxActions=new commons.inputBoxActions();
    var waitActions=new commons.waitActions();

    
    //create valet section and its validaiton
    var addNewsection=objLocator.findLocator(objRepo.valet.addNewsection)
    var sectionName=objLocator.findLocator(objRepo.valet.sectionName)
    var sectionCode=objLocator.findLocator(objRepo.valet.sectionCode)
    var parkingSpots=objLocator.findLocator(objRepo.valet.parkingSpots)
    var accessiBility=objLocator.findLocator(objRepo.valet.accessiBility)
    var reserved=objLocator.findLocator(objRepo.valet.reserved)
    var saveButton=objLocator.findLocator(objRepo.valet.saveButton)
    var disableSection=objLocator.findLocator(objRepo.valet.disableSection)
    var cancelDisableAlert=objLocator.findLocator(objRepo.valet.cancelDisableAlert)
    var alertDisablebutton=objLocator.findLocator(objRepo.valet.alertDisablebutton)
    var enableSection=objLocator.findLocator(objRepo.valet.enableSection)
    var alertEnablebutton=objLocator.findLocator(objRepo.valet.alertEnablebutton)
    var deleteSection=objLocator.findLocator(objRepo.valet.deleteSection)
    var alertDeleteButton=objLocator.findLocator(objRepo.valet.alertDeleteButton)
    
    
    //Update variable and locators declartion
    var updateButton=objLocator.findLocator(objRepo.valet.updateButton)
    var alertUpdate=objLocator.findLocator(objRepo.valet.alertUpdate)
    var alertOkButton=objLocator.findLocator(objRepo.valet.alertOkButton)

    //Validation parking spots 
    var availableSpots=objLocator.findLocator(objRepo.valet.availableSpots)
    var accessibilitySpots=objLocator.findLocator(objRepo.valet.accessibilitySpots)
    var reservedSpots=objLocator.findLocator(objRepo.valet.reservedSpots)
    var sectionDetailsParkingSpots=objLocator.findLocator(objRepo.valet.sectionDetailsParkingSpots)
    //var valetSectionCount=objLocator.findLocator(objRepo.valet.valetSectionCount)
    
    
    
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
    return this;
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
    this.disableValetSection=function(){
        buttonActions.click(disableSection)
        return this;
    }
    this.clickAlertDisable=function(){
        buttonActions.click(alertDisablebutton)
        waitActions.wait();
        // if(cancelDisableAlert.isPresent()) // validation with the cancel alert need  to check with alert if candition is not working
        // {
        //     buttonActions.click(cancelDisableAlert)
        // }else{
        //     return this;
        // }
        return this;
    }
    
    this.enableValetSection=function(){
        buttonActions.click(enableSection)
        return this;
    }
    this.clickAlertEnable=function(){
        buttonActions.click(alertEnablebutton)
        return this;
    }
    this.deleteValetSection=function(){
        buttonActions.click(deleteSection)
        return this;
    }
    this.clickAlertDelete=function(){
        buttonActions.click(alertDeleteButton)
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
    
   
    //Value hard coded and validating the parking spots
    this.availableParkingSpots=function(){
        availableSpots.getText().then(function(text) {
            console.log("available spots : ",text);
            expect(text).toEqual("2");  
          });
    return this; 
   }

   //accessbility spots validation
   this.accessiBilityParkingSpots=function(){
    accessibilitySpots.getText().then(function(text) {
        console.log("accessibility parking spots : ",text);
        expect(text).toEqual("5");  
      });
       return this;
   }

   //Reserved Spots validation
   this.reservedParkingSpots=function(){
    reservedSpots.getText().then(function(text) {
        console.log("Reserved parking spots : ",text);
        expect(text).toEqual("3");  
      });
       return this;
   }

   //Section parking spots validation
   this.parkingSpotsValidation=function(){
    sectionDetailsParkingSpots.getAttribute('value').then(function(text) {
        console.log("Section details parking spots : ",text);
        expect(text).toEqual("10");  
      });  
    return this;
   }

   this.valetSectionParkingSpotsCount=function(){
    var rows = element.all(by.xpath("//ion-col[@class='col_padding ng-star-inserted md hydrated']"));
    rows.count().then(function(count){
        expect(count).toEqual(10);
        console.log("valet section count : ",count);
    });
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
        waitActions.wait()
        this.enterSectionName(UpdateSectionName);
        waitActions.wait()
        this.enterCodeName(UpdateSectionCode);
        waitActions.wait()
        this.enterParkingSpots(updateParkingSpots)
        waitActions.wait()
        this.enterAccesBilityParkingSpots(updateAccessiBility)
        waitActions.wait()
        this.enterReserved(updateReserved)
        waitActions.wait()
        this.clickOnUpdateButton()
        waitActions.wait()
        this.clickAlertUpdateok()
        waitActions.wait()
    }

    //valet section disable
    this.valetSectionDisable=function(){
        waitActions.wait()
        this.disableValetSection()   
        waitActions.waitForElementIsDisplayed()
        this.clickAlertDisable()
        waitActions.wait()
    }

    //valet section Enable
    this.valetSectionEnable=function(){
        this.enableValetSection()
        waitActions.waitForElementIsDisplayed()
        this.clickAlertEnable()
        waitActions.wait()
    }
    
    //valet section delete
    this.valetSectionDelete=function(){
        waitActions.wait()
        this.deleteValetSection();
        waitActions.waitForElementIsDisplayed()
        this.clickAlertDelete();
    } 
    
    //Valet parking spots validation
    this.ValetParkingSpotsValidation=function(){
        waitActions.wait()
        waitActions.wait()
        this.availableParkingSpots()
        waitActions.wait()
        this.accessiBilityParkingSpots()
        waitActions.wait()
        this.reservedParkingSpots()
        waitActions.wait()
        this.parkingSpotsValidation()
        waitActions.wait()
        this.valetSectionParkingSpotsCount()
        waitActions.wait()
    }
  
}
