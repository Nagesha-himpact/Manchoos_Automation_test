(function () {
    'use strict';

    // Helper functions
    global.wait = {
        until: {
            present: function (elementFinder, optionalTimeout) {
                browser.driver.wait(function () {
                    return elementFinder.isPresent().then(function (present) {
                        return present;
                    });
                }, optionalTimeout || 60000);
            }
        }
    };

    global.commons = {};
    global.commons.inputBoxActions = require('./commons/inputBoxActions.js');
    global.commons.buttonActions = require('./commons/buttonActions.js');
    global.commons.dropDownActions = require('./commons/dropDownActions.js');
    global.commons.mouseActions = require('./commons/mouseActions.js');
    global.commons.waitActions = require('./commons/waitActions.js');
    global.commons.verifyActions = require('./commons/verifyActions.js');

    global.utils = {};
    global.utils.objectLocator = require('./utils/objectLocator.js');
    
    global.pages = {};
    global.pages.loginPage = require('./pages/loginPage');
    global.pages.dashBoardPage = require('./pages/dashBoardPage');
    global.pages.leftNavigationPage = require('./pages/leftNavigationPage');
    global.pages.valetPage = require('./pages/valetPage');
    global.pages.dineInPage= require('./pages/dineInPage');
    global.pages.timingsCalendarPage=require('./pages/timingsCalendarPage');
    global.pages.timingsCalendarHolidayPage=require('./pages/timingsCalendarHolidayPage')
    global.pages.reMenuModifiersPage=require('./pages/rmMenuModifiersPage')
    global.pages.menuDashBoardPage=require('./pages/menuDashBoardPage')
    global.pages.addOnsPage=require('./pages/addOnsPage')
}());
