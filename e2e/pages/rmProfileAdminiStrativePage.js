const { browser, element, ExpectedConditions } = require('protractor');

module.exports=function(){
    'use strict'

 //import required actions and create object for its
 var objRepo = require('../resources/objectRepository.json');
 var objLocator = new utils.objectLocator();
 var buttonActions=new commons.buttonActions();
 var inputBoxActions=new commons.inputBoxActions();
 var waitActions=new commons.waitActions();

 //administrative locators
 var adminDetailsBtn=objLocator.findLocator(objRepo.adminiStratative.adminDetailsBtn)
 var phoneNumber=objLocator.findLocator(objRepo.adminiStratative.phoneNumber)
 var secondaryPhoneNumberLink=objLocator.findLocator(objRepo.adminiStratative.secondaryPhoneNumberLink)
 var secondaryPhoneNumber=objLocator.findLocator(objRepo.adminiStratative.secondaryPhoneNumber)
 var removeSecPhoneNumber=objLocator.findLocator(objRepo.adminiStratative.removeSecPhoneNumber)
 var emailId=objLocator.findLocator(objRepo.adminiStratative.emailId)
 var secoundaryEmailidLink=objLocator.findLocator(objRepo.adminiStratative.secoundaryEmailidLink)
 var secondaryEmailid=objLocator.findLocator(objRepo.adminiStratative.secondaryEmailid)
 var removeEmailid=objLocator.findLocator(objRepo.adminiStratative.removeEmailid)
 var gstNumber=objLocator.findLocator(objRepo.adminiStratative.gstNumber)
 var gstCertificate=objLocator.findLocator(objRepo.adminiStratative.gstCertificate)
 var vatNumber=objLocator.findLocator(objRepo.adminiStratative.vatNumber)
 var panNumber=objLocator.findLocator(objRepo.adminiStratative.panNumber)
 var fssaiNumber=objLocator.findLocator(objRepo.adminiStratative.fssaiNumber)
 var savebutton=objLocator.findLocator(objRepo.adminiStratative.savebutton)
 var closeCeritificateWindow=objLocator.findLocator(objRepo.adminiStratative.closeCeritificateWindow)
 var verificateIOnStatus=objLocator.findLocator(objRepo.adminiStratative.verificateIOnStatus)
 var fileUploadVerificationMsg=objLocator.findLocator(objRepo.adminiStratative.fileUploadVerificationMsg)

 this.rmProfileAdminiStrativePage= function(path){
    if(typeof path === 'undefined'){
        path='';
    }
    browser.get(path)
    return this;
}

this.clickOnAdminDetailsBtn=function(){
    buttonActions.click(adminDetailsBtn)
    return this;
}

this.enterPhNumber=function(value){
    inputBoxActions.type(phoneNumber,value)
    return this;
}
this.clickOnSecndPhNumberLink=function(){
    buttonActions.click(secondaryPhoneNumberLink)
    return this;
}
this.enterSecondaryPhnumber=function(value){
    inputBoxActions.type(secondaryPhoneNumber,value)
    return this;
}
this.clickOnRemvSecndaryPhNbr=function(){
    buttonActions.click(removeSecPhoneNumber)
    return this;
}
this.enterEmailId=function(value){
    inputBoxActions.type(emailId,value)
    return this;
}
this.clickOnSecndaryEmail=function(){
    buttonActions.click(secoundaryEmailidLink)
    return this;
}
this.enterSecondaryEmailId=function(value){
  inputBoxActions.type(secondaryEmailid,value)
  return this;
}
this.clickOnRmvEmailIdLink=function(){
    buttonActions.click(removeEmailid)
    return this;
}
this.enterGstNumber=function(value){
    inputBoxActions.type(gstNumber,value)
    return this;
}
this.upLoadgstCertificate=function(value){
    var uploadGstCertificate=element(By.xpath("(//input[@type='file'])[1]"))
    inputBoxActions.fileUpload(uploadGstCertificate,value)
    return this;
}
this.clickonViewGstCertificate=function(){
    var viewgstCertificate=element.all(by.xpath("(//label[text()='Upload GST Certificate ']/following::ion-button[@class='btn_class fs-10 fs-md-13 fs-lg-12 active ng-star-inserted md button button-solid ion-activatable ion-focusable hydrated'])[1]"))
    buttonActions.click(viewgstCertificate)
    return this;
}
this.editGstCertificate=function(value){
    var gstCertficateEdit=element(By.xpath("(//input[@type='file'])[1]"))
    inputBoxActions.fileUpload(gstCertficateEdit,value)
    return this;
}
this.closeViewCertificate=function(){
    buttonActions.click(closeCeritificateWindow)
    return this;
}
this.enterVatNamber=function(value){
inputBoxActions.type(vatNumber,value)
return this;
}
this.enterPanNumber=function(value){
    inputBoxActions.type(panNumber,value)
    return this;
}
this.enterFssaiNumber=function(value){
inputBoxActions.type(fssaiNumber,value)
return this;
}
this.upLoadFssaiCertificate=function(value){
    var uploadFssaiCertificate=element(By.xpath("(//input[@type='file'])[1]"))
    inputBoxActions.fileUpload(uploadFssaiCertificate,value)
    return this;
}
this.clickonViewFssaiCertificate=function(){
    var viewFssaiCertificate=element.all(by.xpath("//label[text()='Upload FSSAI Certificate ']/following::ion-button[@class='btn_class fs-10 fs-md-13 fs-lg-12 active ng-star-inserted md button button-solid ion-activatable ion-focusable hydrated']"))
    buttonActions.click(viewFssaiCertificate)
    return this;
}
this.editFssaiCertificate=function(value){
    var fssaiCertficateEdit=element(By.xpath("(//input[@type='file'])[1]"))
    inputBoxActions.fileUpload(fssaiCertficateEdit,value)
    return this;
}
this.clickOnSavebtn=function(){
    buttonActions.click(savebutton)
    return this;
}

//validation Verification is present
this.validateVerificateStatus=function(){
    expect(verificateIOnStatus.isPresent()).toBe(true)
    console.log("verfication status button is present ")
    return this;
}
//verification message of file upload
this.verficationMessageofFileUpld=function(){
    expect(fileUploadVerificationMsg.isPresent()).toBe(true)
    console.log("file uploaded Successfully")
    return this;
}

//administrative function call(action)
this.enterAdminiStrativeDetails=function(phoneNumber,emailId,gstNumber,vatNumber
    ,panNumber,fssaiNumber,uploadGstCertificate,upLoadFssaiCertificate){
   waitActions.wait()
    this.clickOnAdminDetailsBtn()
    waitActions.wait()
    this.enterPhNumber(phoneNumber)
    waitActions.wait()
    this.enterEmailId(emailId)
    waitActions.wait()
    this.enterGstNumber(gstNumber)
    waitActions.wait()
    this.upLoadgstCertificate(uploadGstCertificate)
    waitActions.wait()
    this.verficationMessageofFileUpld()
    waitActions.wait()
    this.enterVatNamber(vatNumber)
    waitActions.wait()
    this.enterPanNumber(panNumber)
    waitActions.wait()
    this.enterFssaiNumber(fssaiNumber)
    waitActions.wait()
    this.upLoadFssaiCertificate(upLoadFssaiCertificate)
    waitActions.wait()
    this.verficationMessageofFileUpld()
    waitActions.wait()
    this.clickOnSavebtn()
    waitActions.wait()
    this.validateVerificateStatus()
    waitActions.wait()
    waitActions.wait()
}

//adminstartive edit flow
this.editAdministrativeFlow=function(secondaryPhoneNumber,secondaryEmailid,gstCertficateEdit,fssaiCertficateEdit){
    this.clickOnAdminDetailsBtn()
    waitActions.wait()
    // this.clickOnSecndPhNumberLink()
    // waitActions.wait()
    // this.enterSecondaryPhnumber(secondaryPhoneNumber)
    // this.clickOnRemvSecndaryPhNbr()
    // waitActions.wait()
    // this.clickOnSecndaryEmail()
    // waitActions.wait()
    // this.enterSecondaryEmailId(secondaryEmailid)
    // waitActions.wait()
    // this.clickOnRmvEmailIdLink()
    waitActions.wait()
    this.clickonViewGstCertificate()
    waitActions.wait()
    waitActions.wait()
    this.editGstCertificate(gstCertficateEdit)
    waitActions.wait()
    this.verficationMessageofFileUpld()
    waitActions.wait()
    this.closeViewCertificate()
    waitActions.wait()
    waitActions.wait()
    this.clickonViewFssaiCertificate()
    waitActions.wait()
    waitActions.wait()
    this.editFssaiCertificate(fssaiCertficateEdit)
    waitActions.wait()
    this.verficationMessageofFileUpld()
    waitActions.wait()
    this.closeViewCertificate()
    waitActions.wait()
    waitActions.wait()
}
}