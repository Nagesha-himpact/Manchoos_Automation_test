const { browser, element } = require('protractor');

module.exports=function(){
    'use strict'
 //import required actions and create object for its
 var objRepo = require('../resources/objectRepository.json');
 var objLocator = new utils.objectLocator();
 var buttonActions=new commons.buttonActions();
 var inputBoxActions=new commons.inputBoxActions();
 var waitActions=new commons.waitActions();



//Custom item locators
var notIntheListFoodAddBtn=objLocator.findLocator(objRepo.customItemPage.notIntheListFoodAddBtn)
var customItemName=objLocator.findLocator(objRepo.customItemPage.customItemName)
var customItemdiscription=objLocator.findLocator(objRepo.customItemPage.customItemdiscription)
var customItemUniqueCode=objLocator.findLocator(objRepo.customItemPage.customItemUniqueCode)
var customItemPrice=objLocator.findLocator(objRepo.customItemPage.customItemPrice)
var customItemDiscount=objLocator.findLocator(objRepo.customItemPage.customItemDiscount)
var customItemNonVegradioButton=objLocator.findLocator(objRepo.customItemPage.customItemNonVegradioButton)
var customItemVegradioButton=objLocator.findLocator(objRepo.customItemPage.customItemVegradioButton)
var customItemselectRecomdation=objLocator.findLocator(objRepo.customItemPage.customItemselectRecomdation)
var customItemsaveButton=objLocator.findLocator(objRepo.customItemPage.customItemsaveButton)

//Custom  item edit flow
var customItemclickOnCheckBox=objLocator.findLocator(objRepo.customItemPage.customItemclickOnCheckBox)
var customItemEdit=objLocator.findLocator(objRepo.customItemPage.customItemEdit)
var customItemDelete=objLocator.findLocator(objRepo.customItemPage.customItemDelete)
var customItemAdProfilePic=objLocator.findLocator(objRepo.customItemPage.customItemAdProfilePic)
var customItemClickModifiers=objLocator.findLocator(objRepo.customItemPage.customItemClickModifiers)
var clickModifiersItemIdli=objLocator.findLocator(objRepo.customItemPage.clickModifiersItemIdli)
var clickEditModifiers=objLocator.findLocator(objRepo.customItemPage.clickEditModifiers)
var modifierSaveBtn=objLocator.findLocator(objRepo.customItemPage.modifierSaveBtn)
var addAdones=objLocator.findLocator(objRepo.customItemPage.addAdones)
var selectAddonsDallCurry=objLocator.findLocator(objRepo.customItemPage.selectAddonsDallCurry)
var editAddones=objLocator.findLocator(objRepo.customItemPage.editAddones)
var updateButton=objLocator.findLocator(objRepo.customItemPage.updateButton)
var cancelButton=objLocator.findLocator(objRepo.customItemPage.cancelButton)

//custom item Name validation locator
var customItemNameValidation=objLocator.findLocator(objRepo.customItemPage.customItemNameValidation)
var customItemDeletedMessage=objLocator.findLocator(objRepo.customItemPage.customItemDeletedMessage)

this.clickOnNotInTheList=function(){
    buttonActions.click(notIntheListFoodAddBtn)
    return this;
}
this.enterItemName=function(value){
    inputBoxActions.type(customItemName,value)
    return this;
}
this.enterItemDescription=function(value){
    inputBoxActions.type(customItemdiscription,value)
    return this;
}
this.enterItemCode=function(value){
    inputBoxActions.type(customItemUniqueCode,value)
    return this;
}
this.enterItemPrice=function(value){
    inputBoxActions.type(customItemPrice,value)
    return this;
}
this.enterItemDiscount=function(value){
    inputBoxActions.type(customItemDiscount,value)
    return this;
}
this.clickOnVegRadioBtn=function(){
    buttonActions.click(customItemVegradioButton)
    return this;
}
this.clickOnNonVegRadioButton=function(){
    buttonActions.click(customItemNonVegradioButton)
    return this;
}
this.clickOnItemCheckBox=function(){
    buttonActions.click(customItemselectRecomdation)
    return this;
}
this.clickOnSaveButton=function(){
    buttonActions.click(customItemsaveButton)
    return this;
}
this.clickOncancelButton=function(){
    buttonActions.click(cancelButton)
    return this;
}

//item edit flow
this.clickOnItemCustomItemCheckBox=function(){
    buttonActions.click(customItemclickOnCheckBox)
    return this;
}
this.clickOnEditButton=function(){
    buttonActions.click(customItemEdit)
    return this;
}
this.clickOnDeleteButton=function(){
    buttonActions.click(customItemDelete)
    return this;
}
this.addItemPrfilePice=function(){
    buttonActions.click(customItemAdProfilePic)
    return this;
}
this.clickOnItemModifiers=function(){
    buttonActions.click(customItemClickModifiers)
    return this;
}
this.selectModifiersItemIdili=function(){
    buttonActions.click(clickModifiersItemIdli)
    return this;
}
this.clickOnEditModifiers=function(){
    buttonActions.click(clickEditModifiers)
    return this;
}
this.clickOnModifiersSaveBtn=function(){
    buttonActions.click(modifierSaveBtn)
    return this;
}
this.clickOnItemAddOns=function(){
    buttonActions.click(addAdones)
    return this;
}
this.clickOnAddOnsOption=function(){
    buttonActions.click(selectAddonsDallCurry)
    return this;
}
this.clickOnAddOnsEdit=function(){
    buttonActions.click(editAddones)
    return this;
}

this.clickOnUpdateButton=function(){
    buttonActions.click(updateButton)
    return this;
}

//validation cunstom item Name
this.ValidationChikenBiriyaniName=function(){
    expect(customItemNameValidation.isPresent()).toBe(true)
    console.log("Chiken Biriyani item is present")
    return this;
}

//custom item add flow
this.customItemAddFlow=function(customItemName,customItemdiscription,customItemUniqueCode,customItemPrice,customItemDiscount){
    waitActions.wait()
    this.clickOnNotInTheList()
    waitActions.wait()
    this.enterItemName(customItemName)
    waitActions.wait()
    this.enterItemDescription(customItemdiscription)
    waitActions.wait()
    this.enterItemCode(customItemUniqueCode)
    waitActions.wait()
    this.enterItemPrice(customItemPrice)
    waitActions.wait()
    this.enterItemDiscount(customItemDiscount)
    waitActions.wait()
    this.clickOnNonVegRadioButton()
    waitActions.wait()
    this.clickOnItemCheckBox()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
    //this.ValidationChikenBiriyaniName()
    waitActions.wait()
    waitActions.wait()   
}
//custom Item edit flow
this.customMenuItemEditflow=function(customItemName){
    waitActions.wait()
    this.clickOnItemCustomItemCheckBox()
    waitActions.wait()
    this.clickOnEditButton()
    waitActions.wait()
    this.enterItemName(customItemName)
    waitActions.wait()
    waitActions.wait()
    this.clickOnSaveButton()
    browser.sleep(7000) //signout button is not visible so given delay
}
this.modifiersAddOnsAdding=function(){
    waitActions.waitForElementIsDisplayed()
    this.clickOnItemCustomItemCheckBox()
    waitActions.wait()
    this.clickOnEditButton()
    waitActions.wait()
    this.clickOnItemModifiers()
    waitActions.wait()
    this.selectModifiersItemIdili()
    waitActions.wait()
    this.clickOnModifiersSaveBtn()
    waitActions.wait()
    this.clickOnEditModifiers()
    waitActions.wait()
    this.selectModifiersItemIdili()
    waitActions.wait()
    this.clickOnModifiersSaveBtn()
    waitActions.wait()
    this.clickOnItemAddOns()
    waitActions.wait()
    this.clickOnAddOnsOption()
    waitActions.wait()
    this.clickOnModifiersSaveBtn()
    waitActions.wait()
    this.clickOnAddOnsEdit()
    waitActions.wait()
    this.clickOnAddOnsOption()
    waitActions.wait()
    this.clickOnUpdateButton()
    waitActions.wait()
    waitActions.wait()
    this.clickOncancelButton()
    waitActions.wait()
    waitActions.wait()
}

//Custom item validation
this.customItemValidation=function(){
    waitActions.wait()
    this.clickOnItemCustomItemCheckBox()
    waitActions.wait()
    this.clickOnDeleteButton()
    browser.sleep(7000) //signout button is not visible so given delay
}

this.enterMenuItemDeatils=function(customItemUniqueCode,customItemPrice,customItemDiscount){
    waitActions.wait()
    this.enterItemCode(customItemUniqueCode)
    waitActions.wait()
    this.enterItemPrice(customItemPrice)
    waitActions.wait()
    this.enterItemDiscount(customItemDiscount)
    waitActions.wait()
    this.clickOnVegRadioBtn()
    waitActions.wait()
    this.clickOnItemCheckBox()
    waitActions.wait()
    this.clickOnSaveButton()
    browser.sleep(7000) //signout button is not visible so given delay

}
}