gdjs.CreditsCode = {};
gdjs.CreditsCode.GDPlayerObjects1= [];
gdjs.CreditsCode.GDPlayerObjects2= [];
gdjs.CreditsCode.GDGoblinObjects1= [];
gdjs.CreditsCode.GDGoblinObjects2= [];
gdjs.CreditsCode.GDShadowObjects1= [];
gdjs.CreditsCode.GDShadowObjects2= [];
gdjs.CreditsCode.GDHealthBarBaseObjects1= [];
gdjs.CreditsCode.GDHealthBarBaseObjects2= [];
gdjs.CreditsCode.GDHealthObjects1= [];
gdjs.CreditsCode.GDHealthObjects2= [];
gdjs.CreditsCode.GDHitBoxObjects1= [];
gdjs.CreditsCode.GDHitBoxObjects2= [];
gdjs.CreditsCode.GDJumpObjects1= [];
gdjs.CreditsCode.GDJumpObjects2= [];
gdjs.CreditsCode.GDLevelObjects1= [];
gdjs.CreditsCode.GDLevelObjects2= [];
gdjs.CreditsCode.GDCamObjects1= [];
gdjs.CreditsCode.GDCamObjects2= [];
gdjs.CreditsCode.GDPowerUpsObjects1= [];
gdjs.CreditsCode.GDPowerUpsObjects2= [];
gdjs.CreditsCode.GDSettingsObjects1= [];
gdjs.CreditsCode.GDSettingsObjects2= [];
gdjs.CreditsCode.GDBackObjects1= [];
gdjs.CreditsCode.GDBackObjects2= [];
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDNewObjectObjects1= [];
gdjs.CreditsCode.GDNewObjectObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};
gdjs.CreditsCode.condition2IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.CreditsCode.GDBackObjects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Cam"), gdjs.CreditsCode.GDCamObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.CreditsCode.GDCamObjects1.length !== 0 ? gdjs.CreditsCode.GDCamObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.CreditsCode.GDCamObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDCamObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CreditsCode.GDBackObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
gdjs.CreditsCode.condition1IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditsCode.condition0IsTrue_0.val ) {
{
gdjs.CreditsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.CreditsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDPlayerObjects1.length = 0;
gdjs.CreditsCode.GDPlayerObjects2.length = 0;
gdjs.CreditsCode.GDGoblinObjects1.length = 0;
gdjs.CreditsCode.GDGoblinObjects2.length = 0;
gdjs.CreditsCode.GDShadowObjects1.length = 0;
gdjs.CreditsCode.GDShadowObjects2.length = 0;
gdjs.CreditsCode.GDHealthBarBaseObjects1.length = 0;
gdjs.CreditsCode.GDHealthBarBaseObjects2.length = 0;
gdjs.CreditsCode.GDHealthObjects1.length = 0;
gdjs.CreditsCode.GDHealthObjects2.length = 0;
gdjs.CreditsCode.GDHitBoxObjects1.length = 0;
gdjs.CreditsCode.GDHitBoxObjects2.length = 0;
gdjs.CreditsCode.GDJumpObjects1.length = 0;
gdjs.CreditsCode.GDJumpObjects2.length = 0;
gdjs.CreditsCode.GDLevelObjects1.length = 0;
gdjs.CreditsCode.GDLevelObjects2.length = 0;
gdjs.CreditsCode.GDCamObjects1.length = 0;
gdjs.CreditsCode.GDCamObjects2.length = 0;
gdjs.CreditsCode.GDPowerUpsObjects1.length = 0;
gdjs.CreditsCode.GDPowerUpsObjects2.length = 0;
gdjs.CreditsCode.GDSettingsObjects1.length = 0;
gdjs.CreditsCode.GDSettingsObjects2.length = 0;
gdjs.CreditsCode.GDBackObjects1.length = 0;
gdjs.CreditsCode.GDBackObjects2.length = 0;
gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDNewObjectObjects1.length = 0;
gdjs.CreditsCode.GDNewObjectObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
