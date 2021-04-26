gdjs.ClickToContinueCode = {};
gdjs.ClickToContinueCode.GDPlayerObjects1= [];
gdjs.ClickToContinueCode.GDPlayerObjects2= [];
gdjs.ClickToContinueCode.GDGoblinObjects1= [];
gdjs.ClickToContinueCode.GDGoblinObjects2= [];
gdjs.ClickToContinueCode.GDShadowObjects1= [];
gdjs.ClickToContinueCode.GDShadowObjects2= [];
gdjs.ClickToContinueCode.GDHealthBarBaseObjects1= [];
gdjs.ClickToContinueCode.GDHealthBarBaseObjects2= [];
gdjs.ClickToContinueCode.GDHealthObjects1= [];
gdjs.ClickToContinueCode.GDHealthObjects2= [];
gdjs.ClickToContinueCode.GDHitBoxObjects1= [];
gdjs.ClickToContinueCode.GDHitBoxObjects2= [];
gdjs.ClickToContinueCode.GDJumpObjects1= [];
gdjs.ClickToContinueCode.GDJumpObjects2= [];
gdjs.ClickToContinueCode.GDLevelObjects1= [];
gdjs.ClickToContinueCode.GDLevelObjects2= [];
gdjs.ClickToContinueCode.GDCamObjects1= [];
gdjs.ClickToContinueCode.GDCamObjects2= [];
gdjs.ClickToContinueCode.GDPowerUpsObjects1= [];
gdjs.ClickToContinueCode.GDPowerUpsObjects2= [];
gdjs.ClickToContinueCode.GDSettingsObjects1= [];
gdjs.ClickToContinueCode.GDSettingsObjects2= [];
gdjs.ClickToContinueCode.GDBackObjects1= [];
gdjs.ClickToContinueCode.GDBackObjects2= [];
gdjs.ClickToContinueCode.GDInstructionsObjects1= [];
gdjs.ClickToContinueCode.GDInstructionsObjects2= [];
gdjs.ClickToContinueCode.GDTitleObjects1= [];
gdjs.ClickToContinueCode.GDTitleObjects2= [];

gdjs.ClickToContinueCode.conditionTrue_0 = {val:false};
gdjs.ClickToContinueCode.condition0IsTrue_0 = {val:false};
gdjs.ClickToContinueCode.condition1IsTrue_0 = {val:false};


gdjs.ClickToContinueCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Cam"), gdjs.ClickToContinueCode.GDCamObjects1);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.ClickToContinueCode.GDInstructionsObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.ClickToContinueCode.GDCamObjects1.length !== 0 ? gdjs.ClickToContinueCode.GDCamObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.ClickToContinueCode.GDCamObjects1.length ;i < len;++i) {
    gdjs.ClickToContinueCode.GDCamObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ClickToContinueCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.ClickToContinueCode.GDInstructionsObjects1[i].getBehavior("Flash").Flash(300, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.ClickToContinueCode.condition0IsTrue_0.val = false;
{
gdjs.ClickToContinueCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.ClickToContinueCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HomePage", false);
}}

}


{


gdjs.ClickToContinueCode.condition0IsTrue_0.val = false;
{
gdjs.ClickToContinueCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ClickToContinueCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(50);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(50);
}}

}


};

gdjs.ClickToContinueCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClickToContinueCode.GDPlayerObjects1.length = 0;
gdjs.ClickToContinueCode.GDPlayerObjects2.length = 0;
gdjs.ClickToContinueCode.GDGoblinObjects1.length = 0;
gdjs.ClickToContinueCode.GDGoblinObjects2.length = 0;
gdjs.ClickToContinueCode.GDShadowObjects1.length = 0;
gdjs.ClickToContinueCode.GDShadowObjects2.length = 0;
gdjs.ClickToContinueCode.GDHealthBarBaseObjects1.length = 0;
gdjs.ClickToContinueCode.GDHealthBarBaseObjects2.length = 0;
gdjs.ClickToContinueCode.GDHealthObjects1.length = 0;
gdjs.ClickToContinueCode.GDHealthObjects2.length = 0;
gdjs.ClickToContinueCode.GDHitBoxObjects1.length = 0;
gdjs.ClickToContinueCode.GDHitBoxObjects2.length = 0;
gdjs.ClickToContinueCode.GDJumpObjects1.length = 0;
gdjs.ClickToContinueCode.GDJumpObjects2.length = 0;
gdjs.ClickToContinueCode.GDLevelObjects1.length = 0;
gdjs.ClickToContinueCode.GDLevelObjects2.length = 0;
gdjs.ClickToContinueCode.GDCamObjects1.length = 0;
gdjs.ClickToContinueCode.GDCamObjects2.length = 0;
gdjs.ClickToContinueCode.GDPowerUpsObjects1.length = 0;
gdjs.ClickToContinueCode.GDPowerUpsObjects2.length = 0;
gdjs.ClickToContinueCode.GDSettingsObjects1.length = 0;
gdjs.ClickToContinueCode.GDSettingsObjects2.length = 0;
gdjs.ClickToContinueCode.GDBackObjects1.length = 0;
gdjs.ClickToContinueCode.GDBackObjects2.length = 0;
gdjs.ClickToContinueCode.GDInstructionsObjects1.length = 0;
gdjs.ClickToContinueCode.GDInstructionsObjects2.length = 0;
gdjs.ClickToContinueCode.GDTitleObjects1.length = 0;
gdjs.ClickToContinueCode.GDTitleObjects2.length = 0;

gdjs.ClickToContinueCode.eventsList0(runtimeScene);
return;

}

gdjs['ClickToContinueCode'] = gdjs.ClickToContinueCode;
