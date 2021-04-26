gdjs.DeathScreenCode = {};
gdjs.DeathScreenCode.GDPlayerObjects1= [];
gdjs.DeathScreenCode.GDPlayerObjects2= [];
gdjs.DeathScreenCode.GDPlayerObjects3= [];
gdjs.DeathScreenCode.GDGoblinObjects1= [];
gdjs.DeathScreenCode.GDGoblinObjects2= [];
gdjs.DeathScreenCode.GDGoblinObjects3= [];
gdjs.DeathScreenCode.GDShadowObjects1= [];
gdjs.DeathScreenCode.GDShadowObjects2= [];
gdjs.DeathScreenCode.GDShadowObjects3= [];
gdjs.DeathScreenCode.GDHealthBarBaseObjects1= [];
gdjs.DeathScreenCode.GDHealthBarBaseObjects2= [];
gdjs.DeathScreenCode.GDHealthBarBaseObjects3= [];
gdjs.DeathScreenCode.GDHealthObjects1= [];
gdjs.DeathScreenCode.GDHealthObjects2= [];
gdjs.DeathScreenCode.GDHealthObjects3= [];
gdjs.DeathScreenCode.GDHitBoxObjects1= [];
gdjs.DeathScreenCode.GDHitBoxObjects2= [];
gdjs.DeathScreenCode.GDHitBoxObjects3= [];
gdjs.DeathScreenCode.GDJumpObjects1= [];
gdjs.DeathScreenCode.GDJumpObjects2= [];
gdjs.DeathScreenCode.GDJumpObjects3= [];
gdjs.DeathScreenCode.GDLevelObjects1= [];
gdjs.DeathScreenCode.GDLevelObjects2= [];
gdjs.DeathScreenCode.GDLevelObjects3= [];
gdjs.DeathScreenCode.GDCamObjects1= [];
gdjs.DeathScreenCode.GDCamObjects2= [];
gdjs.DeathScreenCode.GDCamObjects3= [];
gdjs.DeathScreenCode.GDPowerUpsObjects1= [];
gdjs.DeathScreenCode.GDPowerUpsObjects2= [];
gdjs.DeathScreenCode.GDPowerUpsObjects3= [];
gdjs.DeathScreenCode.GDSettingsObjects1= [];
gdjs.DeathScreenCode.GDSettingsObjects2= [];
gdjs.DeathScreenCode.GDSettingsObjects3= [];
gdjs.DeathScreenCode.GDBackObjects1= [];
gdjs.DeathScreenCode.GDBackObjects2= [];
gdjs.DeathScreenCode.GDBackObjects3= [];
gdjs.DeathScreenCode.GDDeathMessageObjects1= [];
gdjs.DeathScreenCode.GDDeathMessageObjects2= [];
gdjs.DeathScreenCode.GDDeathMessageObjects3= [];
gdjs.DeathScreenCode.GDNoteObjects1= [];
gdjs.DeathScreenCode.GDNoteObjects2= [];
gdjs.DeathScreenCode.GDNoteObjects3= [];

gdjs.DeathScreenCode.conditionTrue_0 = {val:false};
gdjs.DeathScreenCode.condition0IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition1IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition2IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition3IsTrue_0 = {val:false};
gdjs.DeathScreenCode.condition4IsTrue_0 = {val:false};


gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDBackObjects2Objects = Hashtable.newFrom({"Back": gdjs.DeathScreenCode.GDBackObjects2});gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.DeathScreenCode.GDBackObjects1});gdjs.DeathScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DeathScreenCode.GDBackObjects2);

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
gdjs.DeathScreenCode.condition1IsTrue_0.val = false;
gdjs.DeathScreenCode.condition2IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDBackObjects2Objects, runtimeScene, true, false);
}if ( gdjs.DeathScreenCode.condition0IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DeathScreenCode.condition1IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}}
}
if (gdjs.DeathScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HomePage", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.DeathScreenCode.GDBackObjects1);

gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
gdjs.DeathScreenCode.condition1IsTrue_0.val = false;
gdjs.DeathScreenCode.condition2IsTrue_0.val = false;
gdjs.DeathScreenCode.condition3IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathScreenCode.mapOfGDgdjs_46DeathScreenCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DeathScreenCode.condition0IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.DeathScreenCode.condition1IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0));
}if ( gdjs.DeathScreenCode.condition2IsTrue_0.val ) {
{
gdjs.DeathScreenCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}}
}
}
if (gdjs.DeathScreenCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Add score", false);
}}

}


};gdjs.DeathScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) != "ok";
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.getField("highscores", "Tenth", "Score", runtimeScene.getVariables().getFromIndex(0), runtimeScene.getVariables().getFromIndex(1));
}}

}


{


gdjs.DeathScreenCode.condition0IsTrue_0.val = false;
{
gdjs.DeathScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)) == "ok";
}if (gdjs.DeathScreenCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.DeathScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cam"), gdjs.DeathScreenCode.GDCamObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.DeathScreenCode.GDCamObjects1.length !== 0 ? gdjs.DeathScreenCode.GDCamObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.advancedWindow.maximize(true);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{for(var i = 0, len = gdjs.DeathScreenCode.GDCamObjects1.length ;i < len;++i) {
    gdjs.DeathScreenCode.GDCamObjects1[i].hide();
}
}}

}


};

gdjs.DeathScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathScreenCode.GDPlayerObjects1.length = 0;
gdjs.DeathScreenCode.GDPlayerObjects2.length = 0;
gdjs.DeathScreenCode.GDPlayerObjects3.length = 0;
gdjs.DeathScreenCode.GDGoblinObjects1.length = 0;
gdjs.DeathScreenCode.GDGoblinObjects2.length = 0;
gdjs.DeathScreenCode.GDGoblinObjects3.length = 0;
gdjs.DeathScreenCode.GDShadowObjects1.length = 0;
gdjs.DeathScreenCode.GDShadowObjects2.length = 0;
gdjs.DeathScreenCode.GDShadowObjects3.length = 0;
gdjs.DeathScreenCode.GDHealthBarBaseObjects1.length = 0;
gdjs.DeathScreenCode.GDHealthBarBaseObjects2.length = 0;
gdjs.DeathScreenCode.GDHealthBarBaseObjects3.length = 0;
gdjs.DeathScreenCode.GDHealthObjects1.length = 0;
gdjs.DeathScreenCode.GDHealthObjects2.length = 0;
gdjs.DeathScreenCode.GDHealthObjects3.length = 0;
gdjs.DeathScreenCode.GDHitBoxObjects1.length = 0;
gdjs.DeathScreenCode.GDHitBoxObjects2.length = 0;
gdjs.DeathScreenCode.GDHitBoxObjects3.length = 0;
gdjs.DeathScreenCode.GDJumpObjects1.length = 0;
gdjs.DeathScreenCode.GDJumpObjects2.length = 0;
gdjs.DeathScreenCode.GDJumpObjects3.length = 0;
gdjs.DeathScreenCode.GDLevelObjects1.length = 0;
gdjs.DeathScreenCode.GDLevelObjects2.length = 0;
gdjs.DeathScreenCode.GDLevelObjects3.length = 0;
gdjs.DeathScreenCode.GDCamObjects1.length = 0;
gdjs.DeathScreenCode.GDCamObjects2.length = 0;
gdjs.DeathScreenCode.GDCamObjects3.length = 0;
gdjs.DeathScreenCode.GDPowerUpsObjects1.length = 0;
gdjs.DeathScreenCode.GDPowerUpsObjects2.length = 0;
gdjs.DeathScreenCode.GDPowerUpsObjects3.length = 0;
gdjs.DeathScreenCode.GDSettingsObjects1.length = 0;
gdjs.DeathScreenCode.GDSettingsObjects2.length = 0;
gdjs.DeathScreenCode.GDSettingsObjects3.length = 0;
gdjs.DeathScreenCode.GDBackObjects1.length = 0;
gdjs.DeathScreenCode.GDBackObjects2.length = 0;
gdjs.DeathScreenCode.GDBackObjects3.length = 0;
gdjs.DeathScreenCode.GDDeathMessageObjects1.length = 0;
gdjs.DeathScreenCode.GDDeathMessageObjects2.length = 0;
gdjs.DeathScreenCode.GDDeathMessageObjects3.length = 0;
gdjs.DeathScreenCode.GDNoteObjects1.length = 0;
gdjs.DeathScreenCode.GDNoteObjects2.length = 0;
gdjs.DeathScreenCode.GDNoteObjects3.length = 0;

gdjs.DeathScreenCode.eventsList1(runtimeScene);
return;

}

gdjs['DeathScreenCode'] = gdjs.DeathScreenCode;
