const { browser, element } = require('protractor');

module.exports=function(){
    'use strict'
 //import required actions and create object for its
 var objRepo = require('../resources/objectRepository.json');
 var objLocator = new utils.objectLocator();
 var buttonActions=new commons.buttonActions();
 var inputBoxActions=new commons.inputBoxActions();
 var waitActions=new commons.waitActions();

 //Menu item add flow
 var menuAddButton=objLocator.findLocator(objRepo.menuItem.menuAddButton)
 var menuTypeSelect=objLocator.findLocator(objRepo.menuItem.menuTypeSelect)
 var saveButton=objLocator.findLocator(objRepo.menuItem.saveButton)
 var customMenuHeader=objLocator.findLocator(objRepo.menuItem.customMenuHeader)
 var comboMenuHeader=objLocator.findLocator(objRepo.menuItem.comboMenuHeader)
 var selectedFoodMenu=objLocator.findLocator(objRepo.menuItem.selectedFoodMenu)
 var cuisineTypeAddBtn=objLocator.findLocator(objRepo.menuItem.cuisineTypeAddBtn)
 var chooseUrCuisineToggle=objLocator.findLocator(objRepo.menuItem.chooseUrCuisineToggle)
 var cuisineTypeSelectIndian=objLocator.findLocator(objRepo.menuItem.cuisineTypeSelectIndian)
 var foodTypeAddBtn=objLocator.findLocator(objRepo.menuItem.foodTypeAddBtn)
 var foodTypeToggleSwitch =objLocator.findLocator(objRepo.menuItem.foodTypeToggleSwitch)
 var selectIndianFoodType=objLocator.findLocator(objRepo.menuItem.selectIndianFoodType)
 var selectSouthIndianFoodType=objLocator.findLocator(objRepo.menuItem.selectSouthIndianFoodType)
 var selectVegitarianSubfoodTpe=objLocator.findLocator(objRepo.menuItem.selectVegitarianSubfoodTpe)
 var selectEastIndiaFoodType=objLocator.findLocator(objRepo.menuItem.selectEastIndiaFoodType)
 var subFoodTypeToggle=objLocator.findLocator(objRepo.menuItem.subFoodTypeToggle)
 var northIndiaChikkenTikka=objLocator.findLocator(objRepo.menuItem.northIndiaChikkenTikka)
 var northIndinButterChiken=objLocator.findLocator(objRepo.menuItem.northIndinButterChiken)
 var slctEastIndiaSubFoodTypeDal=objLocator.findLocator(objRepo.menuItem.slctEastIndiaSubFoodTypeDal)
 var menuItemSelectDal=objLocator.findLocator(objRepo.menuItem.menuItemSelectDal)
 var selectMenuFoodicon=objLocator.findLocator(objRepo.menuItem.selectMenuFoodicon)

 //menu item edit flow locator
 var menuItemEditBtn=objLocator.findLocator(objRepo.menuItem.menuItemEditBtn)
 var menuItemDeleteBtn=objLocator.findLocator(objRepo.menuItem.menuItemDeleteBtn)
 var menuItemEnableDisable=objLocator.findLocator(objRepo.menuItem.menuItemEnableDisable)
 var deliverBaleCheckBox=objLocator.findLocator(objRepo.menuItem.deliverBaleCheckBox)
 var containsAlchohol=objLocator.findLocator(objRepo.menuItem.containsAlchohol)
 var updateBtn=objLocator.findLocator(objRepo.menuItem.updateBtn)

 this.menuItemPage= function(path){
    if(typeof path === 'undefined'){
        path='';
    }
    browser.get(path)
    return this;
}


//Menu item crearte flow
this.menuAddplusButton=function(){
    buttonActions.click(menuAddButton)
    return this;
}

this.addMenuType=function(){
    buttonActions.click(menuTypeSelect)
    return this
}
this.clickOnSaveButton=function(){
    buttonActions.click(saveButton)
    return this
}

this.clickOnCustomMenuHeader=function(){
    buttonActions.click(customMenuHeader)
    return this;
}

this.clickOnComboMenuHedaer=function(){
    buttonActions.click(comboMenuHeader)
    return this;
}
this.clickOnMenuFoodIcon=function(){
    buttonActions.click(selectMenuFoodicon)
    return this;
}
//Menu Cuisine type add flow
this.clickOnSelectFoodMenu=function(){
    buttonActions.click(selectedFoodMenu)
    return this;
}

this.clickOnAddCuisineBtn=function(){
    buttonActions.click(cuisineTypeAddBtn)
    return  this;
}

this.clickOnToggleBtn=function(){
    buttonActions.click(chooseUrCuisineToggle)
    return this;
}

//Food type flow
this.selectIndianCusine=function(){
    buttonActions.click(cuisineTypeSelectIndian)
    return this;
}
this.clickOnFoodTypeAddButton=function(){
    buttonActions.click(foodTypeAddBtn)
    return this;
}
this.clickFoddTypeOnToggleSwitch=function(){
    buttonActions.click(foodTypeToggleSwitch)
    return this;
}

//MEnu Sub food type flow
this.clickOnNorthIndian=function(){
    buttonActions.click(selectIndianFoodType)
    return this;
}
this.clickOnSouthIndian=function(){
    buttonActions.click(selectSouthIndianFoodType)
    return this;
}
this.clickOnSouthIndianSoubFoodType=function(){
    buttonActions.click(selectVegitarianSubfoodTpe)
    return this;
}
this.clickOnSelectEastIndiaFoodType=function(){
    buttonActions.click(selectEastIndiaFoodType)
    return this;
}

this.clickOnEstIndanItemDal=function(){
    buttonActions.click(slctEastIndiaSubFoodTypeDal)
    return this;
}
this.selectMenuItemDal=function(){
    buttonActions.click(menuItemSelectDal)
    return this;
}

this.clickOnSubFoodTypeToggle=function(){
    //var subFoddToggle=element("ion-toggle[id='subFoodToggle']")
    buttonActions.click(subFoodTypeToggle)
    return this;
}

this.clickOnNorthIndianIteamChikkenTikka=function(){
    buttonActions.click(northIndiaChikkenTikka)
    return this;
}

this.clickOnNorthIndiaButterChikken=function(){
    buttonActions.click(northIndinButterChiken)
    return this;
}

//menu item edit flow function
this.clickOnEditBtn=function(){
    buttonActions.click(menuItemEditBtn)
    return this;
}
this.clickOnDeleteBtn=function(){
    buttonActions.click(menuItemDeleteBtn)
    return this;
}
this.clickOnToggleEnblDsablSwitch=function(){
    buttonActions.click(menuItemEnableDisable)
    return this;
}
this.clickOnDeliverbaleCheckBox=function(){
    buttonActions.click(deliverBaleCheckBox)
    return this;
}
this.clickOnAlchoholCheckBox=function(){
    buttonActions.click(containsAlchohol)
    return this;
}
this.clickOnUpdateBtn=function(){
    buttonActions.click(updateBtn)
    return this;
}

//Menu item function call (action method)
this.menuItemAddflow=function(){
    waitActions.wait()
    this.menuAddplusButton()
    waitActions.wait()
    this.addMenuType()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
    waitActions.wait()
}

//Menu cuisine add Flow
this.cuisineAdd=function(){
    waitActions.wait()
    this.clickOnSelectFoodMenu()
    waitActions.wait()
    this.clickOnAddCuisineBtn()
    waitActions.wait()
    this.clickOnToggleBtn()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
}
//menu food type flow
this.foodMenuAdd=function(){
    waitActions.wait()
    this.selectIndianCusine()
    waitActions.wait()
    this.clickOnFoodTypeAddButton()
    waitActions.wait()
    this.clickFoddTypeOnToggleSwitch()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
}

//Menu Sub food type flow
this.subFoodType=function(){
    waitActions.wait()
    this.clickOnNorthIndian()
    waitActions.wait()
    this.clickOnSubFoodTypeToggle()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
    this.clickOnSouthIndian()
    waitActions.wait()
    this.clickOnSouthIndianSoubFoodType()
    waitActions.wait()
    this.clickOnSubFoodTypeToggle()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
    waitActions.wait()
}

//Menu item edit flow
this.menuItemSelectFlow=function(){
    waitActions.wait()
    this.clickOnSelectEastIndiaFoodType()
    waitActions.wait()
    this.clickOnEstIndanItemDal()
    waitActions.wait()
    this.clickOnSaveButton()
    waitActions.wait()
    this.selectMenuItemDal()
    waitActions.wait()
    waitActions.wait()
    //this.clickOnDeleteBtn()
    waitActions.wait()
    this.clickOnToggleEnblDsablSwitch()
    waitActions.wait()
    this.clickOnToggleEnblDsablSwitch()
    waitActions.wait()
    this.clickOnDeliverbaleCheckBox()
    waitActions.wait()
    this.clickOnAlchoholCheckBox()
    waitActions.wait()
    this.clickOnUpdateBtn()
    waitActions.wait()
    this.selectMenuItemDal()
    waitActions.wait()
    this.clickOnEditBtn()
    waitActions.wait()
    waitActions.wait()
}
}