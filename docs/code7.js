gdjs.SettingsCode = {};
gdjs.SettingsCode.GDPlayerObjects1= [];
gdjs.SettingsCode.GDPlayerObjects2= [];
gdjs.SettingsCode.GDGoblinObjects1= [];
gdjs.SettingsCode.GDGoblinObjects2= [];
gdjs.SettingsCode.GDShadowObjects1= [];
gdjs.SettingsCode.GDShadowObjects2= [];
gdjs.SettingsCode.GDHealthBarBaseObjects1= [];
gdjs.SettingsCode.GDHealthBarBaseObjects2= [];
gdjs.SettingsCode.GDHealthObjects1= [];
gdjs.SettingsCode.GDHealthObjects2= [];
gdjs.SettingsCode.GDHitBoxObjects1= [];
gdjs.SettingsCode.GDHitBoxObjects2= [];
gdjs.SettingsCode.GDJumpObjects1= [];
gdjs.SettingsCode.GDJumpObjects2= [];
gdjs.SettingsCode.GDLevelObjects1= [];
gdjs.SettingsCode.GDLevelObjects2= [];
gdjs.SettingsCode.GDCamObjects1= [];
gdjs.SettingsCode.GDCamObjects2= [];
gdjs.SettingsCode.GDPowerUpsObjects1= [];
gdjs.SettingsCode.GDPowerUpsObjects2= [];
gdjs.SettingsCode.GDSettingsObjects1= [];
gdjs.SettingsCode.GDSettingsObjects2= [];
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];
gdjs.SettingsCode.GDSliderBaseObjects1= [];
gdjs.SettingsCode.GDSliderBaseObjects2= [];
gdjs.SettingsCode.GDSliderObjects1= [];
gdjs.SettingsCode.GDSliderObjects2= [];
gdjs.SettingsCode.GDMusicObjects1= [];
gdjs.SettingsCode.GDMusicObjects2= [];
gdjs.SettingsCode.GDDialogueObjects1= [];
gdjs.SettingsCode.GDDialogueObjects2= [];
gdjs.SettingsCode.GDSFXObjects1= [];
gdjs.SettingsCode.GDSFXObjects2= [];
gdjs.SettingsCode.GDTitle2Objects1= [];
gdjs.SettingsCode.GDTitle2Objects2= [];
gdjs.SettingsCode.GDTitleObjects1= [];
gdjs.SettingsCode.GDTitleObjects2= [];
gdjs.SettingsCode.GDVolumeControlObjects1= [];
gdjs.SettingsCode.GDVolumeControlObjects2= [];
gdjs.SettingsCode.GDMuteObjects1= [];
gdjs.SettingsCode.GDMuteObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.condition3IsTrue_0 = {val:false};
gdjs.SettingsCode.condition4IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};
gdjs.SettingsCode.condition3IsTrue_1 = {val:false};
gdjs.SettingsCode.condition4IsTrue_1 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.SettingsCode.GDBackObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cam"), gdjs.SettingsCode.GDCamObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.SettingsCode.GDCamObjects1.length !== 0 ? gdjs.SettingsCode.GDCamObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.SettingsCode.GDCamObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDCamObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 1 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14284860);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDVolumeControlObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeControlObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14790332);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDVolumeControlObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeControlObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 3 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14791524);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDVolumeControlObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeControlObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 1 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber((( gdjs.SettingsCode.GDVolumeControlObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDVolumeControlObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber((( gdjs.SettingsCode.GDVolumeControlObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDVolumeControlObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 3 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber((( gdjs.SettingsCode.GDVolumeControlObjects1.length === 0 ) ? 0 :gdjs.SettingsCode.GDVolumeControlObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 2);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.SettingsCode.GDMuteObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
gdjs.SettingsCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 1 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDMuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMuteObjects1[i].getVariableNumber(gdjs.SettingsCode.GDMuteObjects1[i].getVariables().get("id")) == 1 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDMuteObjects1[k] = gdjs.SettingsCode.GDMuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMuteObjects1.length = k;}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDMuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMuteObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition2IsTrue_0.val = true;
        gdjs.SettingsCode.GDMuteObjects1[k] = gdjs.SettingsCode.GDMuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMuteObjects1.length = k;}if ( gdjs.SettingsCode.condition2IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition3IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14170516);
}
}}
}
}
if (gdjs.SettingsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.SettingsCode.GDVolumeControlObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeControlObjects1[i].getBehavior("DraggableSliderControl").SetValue(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.SettingsCode.GDMuteObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
gdjs.SettingsCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDMuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMuteObjects1[i].getVariableNumber(gdjs.SettingsCode.GDMuteObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDMuteObjects1[k] = gdjs.SettingsCode.GDMuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMuteObjects1.length = k;}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDMuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMuteObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition2IsTrue_0.val = true;
        gdjs.SettingsCode.GDMuteObjects1[k] = gdjs.SettingsCode.GDMuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMuteObjects1.length = k;}if ( gdjs.SettingsCode.condition2IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition3IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14652532);
}
}}
}
}
if (gdjs.SettingsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{for(var i = 0, len = gdjs.SettingsCode.GDVolumeControlObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeControlObjects1[i].getBehavior("DraggableSliderControl").SetValue(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.SettingsCode.GDMuteObjects1);
gdjs.copyArray(runtimeScene.getObjects("VolumeControl"), gdjs.SettingsCode.GDVolumeControlObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
gdjs.SettingsCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDVolumeControlObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariableNumber(gdjs.SettingsCode.GDVolumeControlObjects1[i].getVariables().get("id")) == 3 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDVolumeControlObjects1[k] = gdjs.SettingsCode.GDVolumeControlObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDVolumeControlObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDMuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMuteObjects1[i].getVariableNumber(gdjs.SettingsCode.GDMuteObjects1[i].getVariables().get("id")) == 3 ) {
        gdjs.SettingsCode.condition1IsTrue_0.val = true;
        gdjs.SettingsCode.GDMuteObjects1[k] = gdjs.SettingsCode.GDMuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMuteObjects1.length = k;}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDMuteObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMuteObjects1[i].getBehavior("Checkbox").IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition2IsTrue_0.val = true;
        gdjs.SettingsCode.GDMuteObjects1[k] = gdjs.SettingsCode.GDMuteObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMuteObjects1.length = k;}if ( gdjs.SettingsCode.condition2IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition3IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15236236);
}
}}
}
}
if (gdjs.SettingsCode.condition3IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDVolumeControlObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{for(var i = 0, len = gdjs.SettingsCode.GDVolumeControlObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDVolumeControlObjects1[i].getBehavior("DraggableSliderControl").SetValue(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDPlayerObjects1.length = 0;
gdjs.SettingsCode.GDPlayerObjects2.length = 0;
gdjs.SettingsCode.GDGoblinObjects1.length = 0;
gdjs.SettingsCode.GDGoblinObjects2.length = 0;
gdjs.SettingsCode.GDShadowObjects1.length = 0;
gdjs.SettingsCode.GDShadowObjects2.length = 0;
gdjs.SettingsCode.GDHealthBarBaseObjects1.length = 0;
gdjs.SettingsCode.GDHealthBarBaseObjects2.length = 0;
gdjs.SettingsCode.GDHealthObjects1.length = 0;
gdjs.SettingsCode.GDHealthObjects2.length = 0;
gdjs.SettingsCode.GDHitBoxObjects1.length = 0;
gdjs.SettingsCode.GDHitBoxObjects2.length = 0;
gdjs.SettingsCode.GDJumpObjects1.length = 0;
gdjs.SettingsCode.GDJumpObjects2.length = 0;
gdjs.SettingsCode.GDLevelObjects1.length = 0;
gdjs.SettingsCode.GDLevelObjects2.length = 0;
gdjs.SettingsCode.GDCamObjects1.length = 0;
gdjs.SettingsCode.GDCamObjects2.length = 0;
gdjs.SettingsCode.GDPowerUpsObjects1.length = 0;
gdjs.SettingsCode.GDPowerUpsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDSliderBaseObjects1.length = 0;
gdjs.SettingsCode.GDSliderBaseObjects2.length = 0;
gdjs.SettingsCode.GDSliderObjects1.length = 0;
gdjs.SettingsCode.GDSliderObjects2.length = 0;
gdjs.SettingsCode.GDMusicObjects1.length = 0;
gdjs.SettingsCode.GDMusicObjects2.length = 0;
gdjs.SettingsCode.GDDialogueObjects1.length = 0;
gdjs.SettingsCode.GDDialogueObjects2.length = 0;
gdjs.SettingsCode.GDSFXObjects1.length = 0;
gdjs.SettingsCode.GDSFXObjects2.length = 0;
gdjs.SettingsCode.GDTitle2Objects1.length = 0;
gdjs.SettingsCode.GDTitle2Objects2.length = 0;
gdjs.SettingsCode.GDTitleObjects1.length = 0;
gdjs.SettingsCode.GDTitleObjects2.length = 0;
gdjs.SettingsCode.GDVolumeControlObjects1.length = 0;
gdjs.SettingsCode.GDVolumeControlObjects2.length = 0;
gdjs.SettingsCode.GDMuteObjects1.length = 0;
gdjs.SettingsCode.GDMuteObjects2.length = 0;

gdjs.SettingsCode.eventsList0(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
