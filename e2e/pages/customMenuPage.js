const {browser, element } = require('protractor');

module.exports=function(){
    'use strict'

    //import required actions and create object
    var objRepo=require('../resources/objectRepository.json');
    var objLocator=new utils.objectLocator();
    var buttonActions=new commons.buttonActions();
    var inputBoxActions=new commons.inputBoxActions();
    var waitActions=new commons.waitActions();

    //new section create
    var addNewSection=objLocator.findLocator(objRepo.customMenu.addNewSection)
    var sectionName=objLocator.findLocator(objRepo.customMenu.sectionName)
    var northIndiaMenuItem=objLocator.findLocator(objRepo.customMenu.northIndiaMenuItem)
    var menuItemAlloMatter=objLocator.findLocator(objRepo.customMenu.menuItemAlloMatter)
    var saveButton=objLocator.findLocator(objRepo.customMenu.saveButton)
    var editButton=objLocator.findLocator(objRepo.customMenu.editButton)
    var southIndiaMenuItem=objLocator.findLocator(objRepo.customMenu.southIndiaMenuItem)
    var southIndiaBisiBeleBath=objLocator.findLocator(objRepo.customMenu.southIndiaBisiBeleBath)
    var southIndiaDosa=objLocator.findLocator(objRepo.customMenu.southIndiaDosa)
    var updateButton=objLocator.findLocator(objRepo.customMenu.updateButton)

    //disable Enable customMenu
    var toggleDisableEnable=objLocator.findLocator(objRepo.customMenu.toggleDisableEnable)
    var deleteButton=objLocator.findLocator(objRepo.customMenu.deleteButton)
    var customMenuSectionName=objLocator.findLocator(objRepo.customMenu.customMenuSectionName)
    //var restaurantCustomItemsCount=objLocator.findLocator(objRepo.customMenu.restaurantCustomItemsCount)
    
    this.customMenuPage= function(path){
        if(typeof path === 'undefined'){
            path='';
        }
        browser.get(path)
        return this;
    }


    this.customMenuAddNewSecction=function(){
        buttonActions.click(addNewSection)
        return this;
    }

    this.enterCustomNewSectionName=function(value){
        inputBoxActions.type(sectionName,value)
        return this;
    }
    
    this.clickOnNorthIndiaMneuItem=function(){
        buttonActions.click(northIndiaMenuItem)
        return this;
    }
    
    this.selectMenuAlooMatterItem=function(){
        buttonActions.click(menuItemAlloMatter)
        return this;
    }

    
    this.clickOnSaveButton=function(){
        buttonActions.click(saveButton)
        return this;
    }
    
    //update flow
    this.clickOnEditButton=function(){
        buttonActions.click(editButton)
        return this;
    }
    
    this.clickSouthIndiaMenuItem=function(){
        buttonActions.click(southIndiaMenuItem)
        return this;
    }
    
    this.selectSounthIndiaBisiBeleBath=function(){
        buttonActions.click(southIndiaBisiBeleBath)
        return this;
    }
    
    this.selectSouthIndiaDosa=function(){
        buttonActions.click(southIndiaDosa)
        return this;
    }
    
    this.clickOnUpdateButton=function(){
        buttonActions.click(updateButton)
        return this;
    }
    
    //disable enable flow
    this.disableEnableCustomMenu=function(){
        buttonActions.click(toggleDisableEnable)
        return this;
    }
    
    this.deleteCustomMenuItem=function(){
        element.all(by.className('ion-float-left md button button-clear button-has-icon-only ion-activatable ion-focusable hydrated')).click();
         return this;
     }
    
     this.deleAlertbutton=function(){
         let deleteAlert=browser.findElement(by.xpath("//ion-button[text()=' Delete ']"))
         browser.executeScript("arguments[0].click()",deleteAlert)
        //buttonActions.click(deleteButton) 
        return this;
     }

     //Restaurant special item Name validatiom
     this.customRestaurantNameValidation=function(){
        customMenuSectionName.getText().then(function(restaurantCustomName){
        console.log("Restaurant special section Name :",restaurantCustomName)
        expect(restaurantCustomName).toEqual("Restaurant Special")
        })
     }

     this.customItemAddedcounts=function(){
        element.all(by.xpath("//ion-col[@class='catrgoies_center mr-4 mb-3 ng-star-inserted md hydrated']")).count().then(function(count) {
            console.log("items added count : ",count);
            expect(count).toBe(1);
          });
        return this;
     }
     //Restaurant updated items counts 
     this.updatedRestaurantsItemsAddedCount=function(){
        element.all(by.xpath("//ion-col[@class='catrgoies_center mr-4 mb-3 ng-star-inserted md hydrated']")).count().then(function(count) {
            console.log("restaurant items updated counts : ",count);
            expect(count).toBe(1);
          });
        return this;
        }


        //enabel and disable validation
        this.validationDisable=function(){
            expect(updateButton.isDisplayed()).toBe(true)
            console.log("section is disabled")
            return this;
        }

         //delete Restaurant name validation
         this.validatForDeleteSection=function(){
            expect(customMenuSectionName.isPresent()).toBeTruthy()
            console.log("Restaurant section is deleted succeessfully")
            return this;
        }
    this.addCustomMenuFlow=function(sectionName){
        waitActions.wait()
        this.customMenuAddNewSecction()
        waitActions.wait()
        waitActions.wait()
        this.enterCustomNewSectionName(sectionName)
        waitActions.wait()
        this.clickOnNorthIndiaMneuItem()
        waitActions.wait()
        this.selectMenuAlooMatterItem()
        waitActions.wait()
        this.clickOnSaveButton()
        waitActions.wait()
        this.customRestaurantNameValidation()
        waitActions.wait()
        waitActions.wait()
        this.customItemAddedcounts()
        waitActions.wait()
        waitActions.wait()
    }    

    this.updateCustomMenuflow=function(sectionName){
        this.clickOnEditButton()
        waitActions.wait()
        this.enterCustomNewSectionName(sectionName)
        waitActions.wait()
        this.clickSouthIndiaMenuItem()
        waitActions.wait()
        this.selectSounthIndiaBisiBeleBath()
        waitActions.wait()
        this.selectSouthIndiaDosa()
        waitActions.wait()
        this.clickOnUpdateButton()
        waitActions.wait()
        this.updatedRestaurantsItemsAddedCount()
        waitActions.wait()
        waitActions.wait()
    }
    
    //disable Enable 
    this.enableDisableCustomMenu=function(){
        this.clickOnEditButton()
        waitActions.wait()
        this.disableEnableCustomMenu()
        waitActions.wait()
        this.validationDisable()
        waitActions.wait()
        this.disableEnableCustomMenu()
        waitActions.wait()
    }
    
    this.deleteCustomMenu=function(){
        this.clickOnEditButton()
        waitActions.wait()
        this.deleteCustomMenuItem()
        waitActions.wait()
        this.deleAlertbutton()
        this.validatForDeleteSection()
        browser.sleep(7000) //signout button is not visible so given delay
    }
}
