const {browser } = require('protractor');

module.exports=function(){
    'use strict'

    //import required actions and create object
    var objRepo=require('../resources/objectRepository.json');
    var objLocator=new utils.objectLocator();
    var buttonActions=new commons.buttonActions();
    var waitActions=new commons.waitActions();

    //MenuDashBoard page locators
    var menuItems=objLocator.findLocator(objRepo.menuDashBoard.menuItems)
    var controlPanel=objLocator.findLocator(objRepo.menuDashBoard.controlPanel)

    this.menuDashBoardPage=function(){
        if(typeof path === 'undefined'){
            path='';
        }
        browser.get(path)
        return this;
    }

    this.clickOnMenuItems=function(){
        buttonActions.click(menuItems)
        return this;
    }
    this.clickOnControlPanel=function(){
        buttonActions.click(controlPanel)
        return this;
    }
}