gdjs.Add_32scoreCode = {};
gdjs.Add_32scoreCode.GDPlayerObjects1= [];
gdjs.Add_32scoreCode.GDPlayerObjects2= [];
gdjs.Add_32scoreCode.GDPlayerObjects3= [];
gdjs.Add_32scoreCode.GDGoblinObjects1= [];
gdjs.Add_32scoreCode.GDGoblinObjects2= [];
gdjs.Add_32scoreCode.GDGoblinObjects3= [];
gdjs.Add_32scoreCode.GDShadowObjects1= [];
gdjs.Add_32scoreCode.GDShadowObjects2= [];
gdjs.Add_32scoreCode.GDShadowObjects3= [];
gdjs.Add_32scoreCode.GDHealthBarBaseObjects1= [];
gdjs.Add_32scoreCode.GDHealthBarBaseObjects2= [];
gdjs.Add_32scoreCode.GDHealthBarBaseObjects3= [];
gdjs.Add_32scoreCode.GDHealthObjects1= [];
gdjs.Add_32scoreCode.GDHealthObjects2= [];
gdjs.Add_32scoreCode.GDHealthObjects3= [];
gdjs.Add_32scoreCode.GDHitBoxObjects1= [];
gdjs.Add_32scoreCode.GDHitBoxObjects2= [];
gdjs.Add_32scoreCode.GDHitBoxObjects3= [];
gdjs.Add_32scoreCode.GDJumpObjects1= [];
gdjs.Add_32scoreCode.GDJumpObjects2= [];
gdjs.Add_32scoreCode.GDJumpObjects3= [];
gdjs.Add_32scoreCode.GDLevelObjects1= [];
gdjs.Add_32scoreCode.GDLevelObjects2= [];
gdjs.Add_32scoreCode.GDLevelObjects3= [];
gdjs.Add_32scoreCode.GDCamObjects1= [];
gdjs.Add_32scoreCode.GDCamObjects2= [];
gdjs.Add_32scoreCode.GDCamObjects3= [];
gdjs.Add_32scoreCode.GDPowerUpsObjects1= [];
gdjs.Add_32scoreCode.GDPowerUpsObjects2= [];
gdjs.Add_32scoreCode.GDPowerUpsObjects3= [];
gdjs.Add_32scoreCode.GDSettingsObjects1= [];
gdjs.Add_32scoreCode.GDSettingsObjects2= [];
gdjs.Add_32scoreCode.GDSettingsObjects3= [];
gdjs.Add_32scoreCode.GDBackObjects1= [];
gdjs.Add_32scoreCode.GDBackObjects2= [];
gdjs.Add_32scoreCode.GDBackObjects3= [];
gdjs.Add_32scoreCode.GDScoreObjects1= [];
gdjs.Add_32scoreCode.GDScoreObjects2= [];
gdjs.Add_32scoreCode.GDScoreObjects3= [];
gdjs.Add_32scoreCode.GDNameLabelObjects1= [];
gdjs.Add_32scoreCode.GDNameLabelObjects2= [];
gdjs.Add_32scoreCode.GDNameLabelObjects3= [];
gdjs.Add_32scoreCode.GDTitleObjects1= [];
gdjs.Add_32scoreCode.GDTitleObjects2= [];
gdjs.Add_32scoreCode.GDTitleObjects3= [];
gdjs.Add_32scoreCode.GDEnterTextObjects1= [];
gdjs.Add_32scoreCode.GDEnterTextObjects2= [];
gdjs.Add_32scoreCode.GDEnterTextObjects3= [];
gdjs.Add_32scoreCode.GDNameEnteredObjects1= [];
gdjs.Add_32scoreCode.GDNameEnteredObjects2= [];
gdjs.Add_32scoreCode.GDNameEnteredObjects3= [];
gdjs.Add_32scoreCode.GDNameObjects1= [];
gdjs.Add_32scoreCode.GDNameObjects2= [];
gdjs.Add_32scoreCode.GDNameObjects3= [];
gdjs.Add_32scoreCode.GDButtonObjects1= [];
gdjs.Add_32scoreCode.GDButtonObjects2= [];
gdjs.Add_32scoreCode.GDButtonObjects3= [];
gdjs.Add_32scoreCode.GDinputlengthObjects1= [];
gdjs.Add_32scoreCode.GDinputlengthObjects2= [];
gdjs.Add_32scoreCode.GDinputlengthObjects3= [];

gdjs.Add_32scoreCode.conditionTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition0IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition1IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition2IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition3IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition4IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition5IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition6IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition7IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition8IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition9IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition10IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition11IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.condition12IsTrue_0 = {val:false};
gdjs.Add_32scoreCode.conditionTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition0IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition1IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition2IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition3IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition4IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition5IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition6IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition7IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition8IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition9IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition10IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition11IsTrue_1 = {val:false};
gdjs.Add_32scoreCode.condition12IsTrue_1 = {val:false};


gdjs.Add_32scoreCode.eventsList0 = function(runtimeScene) {

{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition1IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14618860);
}
}}
if (gdjs.Add_32scoreCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).getChild("Update").getChild("Score").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.sound.playSound(runtimeScene, "miscellaneous_11_meghan.wav", false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Cam"), gdjs.Add_32scoreCode.GDCamObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Add_32scoreCode.GDScoreObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Add_32scoreCode.GDCamObjects1.length !== 0 ? gdjs.Add_32scoreCode.GDCamObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Add_32scoreCode.GDCamObjects1.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDCamObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Add_32scoreCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDScoreObjects1[i].setString("Score " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Add_32scoreCode.mapOfGDgdjs_46Add_9532scoreCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.Add_32scoreCode.GDButtonObjects2});gdjs.Add_32scoreCode.mapOfGDgdjs_46Add_9532scoreCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.Add_32scoreCode.GDButtonObjects2});gdjs.Add_32scoreCode.mapOfGDgdjs_46Add_9532scoreCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.Add_32scoreCode.GDButtonObjects2});gdjs.Add_32scoreCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Add_32scoreCode.GDButtonObjects2);

gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Add_32scoreCode.mapOfGDgdjs_46Add_9532scoreCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.Add_32scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Add_32scoreCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.Add_32scoreCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDButtonObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Add_32scoreCode.GDButtonObjects2);

gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Add_32scoreCode.mapOfGDgdjs_46Add_9532scoreCode_46GDButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.Add_32scoreCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Add_32scoreCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.Add_32scoreCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDButtonObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Add_32scoreCode.GDButtonObjects2);

gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Add_32scoreCode.mapOfGDgdjs_46Add_9532scoreCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(15)) == 0;
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
/* Reuse gdjs.Add_32scoreCode.GDButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("NameEntered"), gdjs.Add_32scoreCode.GDNameEnteredObjects2);
{runtimeScene.getVariables().getFromIndex(2).getChild("Update").getChild("Name").setString((( gdjs.Add_32scoreCode.GDNameEnteredObjects2.length === 0 ) ? "" :gdjs.Add_32scoreCode.GDNameEnteredObjects2[0].getString()));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(15).setNumber(1);
}{for(var i = 0, len = gdjs.Add_32scoreCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDButtonObjects2[i].resetTimer("WriteWait");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.Add_32scoreCode.GDButtonObjects1);

gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Add_32scoreCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.Add_32scoreCode.GDButtonObjects1[i].timerElapsedTime("WriteWait", 5) ) {
        gdjs.Add_32scoreCode.condition0IsTrue_0.val = true;
        gdjs.Add_32scoreCode.GDButtonObjects1[k] = gdjs.Add_32scoreCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.Add_32scoreCode.GDButtonObjects1.length = k;}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(15)) == 1;
}}
if (gdjs.Add_32scoreCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboards", false);
}}

}


};gdjs.Add_32scoreCode.eventsList2 = function(runtimeScene) {

{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition3IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 7;
}if ( gdjs.Add_32scoreCode.condition2IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition3IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14626268);
}
}}
}
}
if (gdjs.Add_32scoreCode.condition3IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 0;
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14626468);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 8;
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 0;
}}
if (gdjs.Add_32scoreCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.Add_32scoreCode.GDNameObjects2);
gdjs.copyArray(runtimeScene.getObjects("NameEntered"), gdjs.Add_32scoreCode.GDNameEnteredObjects2);
{for(var i = 0, len = gdjs.Add_32scoreCode.GDNameEnteredObjects2.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDNameEnteredObjects2[i].activate(true);
}
}{for(var i = 0, len = gdjs.Add_32scoreCode.GDNameObjects2.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDNameObjects2[i].setString((( gdjs.Add_32scoreCode.GDNameEnteredObjects2.length === 0 ) ? "" :gdjs.Add_32scoreCode.GDNameEnteredObjects2[0].getString()));
}
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if (gdjs.Add_32scoreCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NameEntered"), gdjs.Add_32scoreCode.GDNameEnteredObjects1);
{for(var i = 0, len = gdjs.Add_32scoreCode.GDNameEnteredObjects1.length ;i < len;++i) {
    gdjs.Add_32scoreCode.GDNameEnteredObjects1[i].activate(false);
}
}}

}


};gdjs.Add_32scoreCode.eventsList3 = function(runtimeScene) {

{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("1").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition1IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14637556);
}
}}
if (gdjs.Add_32scoreCode.condition1IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "First", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Second", runtimeScene.getVariables().getFromIndex(2).getChild("1"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Third", runtimeScene.getVariables().getFromIndex(2).getChild("2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fourth", runtimeScene.getVariables().getFromIndex(2).getChild("3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(2).getChild("4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("1").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("2").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14641588);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Second", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Third", runtimeScene.getVariables().getFromIndex(2).getChild("2"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fourth", runtimeScene.getVariables().getFromIndex(2).getChild("3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(2).getChild("4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("2").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("3").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14645300);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Third", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fourth", runtimeScene.getVariables().getFromIndex(2).getChild("3"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(2).getChild("4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("3").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("4").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14648692);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fourth", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(2).getChild("4"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("4").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("5").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14651732);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("5"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("5").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("6").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14654572);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("6"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("6").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("7").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14657076);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("7"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("7").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("8").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14659316);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("8").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("9").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14661284);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("9").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2).getChild("10").getChild("Score"));
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
{gdjs.Add_32scoreCode.conditionTrue_1 = gdjs.Add_32scoreCode.condition2IsTrue_0;
gdjs.Add_32scoreCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14663052);
}
}}
}
if (gdjs.Add_32scoreCode.condition2IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.updateDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("Update"), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(14).setNumber(1);
}}

}


};gdjs.Add_32scoreCode.eventsList4 = function(runtimeScene) {

{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.Add_32scoreCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.getDocument("highscores", "First", runtimeScene.getVariables().getFromIndex(2).getChild("1"), runtimeScene.getVariables().getFromIndex(4));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Second", runtimeScene.getVariables().getFromIndex(2).getChild("2"), runtimeScene.getVariables().getFromIndex(5));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Third", runtimeScene.getVariables().getFromIndex(2).getChild("3"), runtimeScene.getVariables().getFromIndex(6));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Fourth", runtimeScene.getVariables().getFromIndex(2).getChild("4"), runtimeScene.getVariables().getFromIndex(7));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(2).getChild("5"), runtimeScene.getVariables().getFromIndex(8));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(2).getChild("6"), runtimeScene.getVariables().getFromIndex(9));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(2).getChild("7"), runtimeScene.getVariables().getFromIndex(10));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(2).getChild("8"), runtimeScene.getVariables().getFromIndex(11));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(2).getChild("9"), runtimeScene.getVariables().getFromIndex(12));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(2).getChild("10"), runtimeScene.getVariables().getFromIndex(13));
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition2IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition3IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition4IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition5IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition6IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition7IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition8IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition9IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition10IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition11IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)) == "ok";
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)) == "ok";
}if ( gdjs.Add_32scoreCode.condition1IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) == "ok";
}if ( gdjs.Add_32scoreCode.condition2IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(7)) == "ok";
}if ( gdjs.Add_32scoreCode.condition3IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(8)) == "ok";
}if ( gdjs.Add_32scoreCode.condition4IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(9)) == "ok";
}if ( gdjs.Add_32scoreCode.condition5IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition6IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(10)) == "ok";
}if ( gdjs.Add_32scoreCode.condition6IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition7IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(11)) == "ok";
}if ( gdjs.Add_32scoreCode.condition7IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition8IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(12)) == "ok";
}if ( gdjs.Add_32scoreCode.condition8IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition9IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(13)) == "ok";
}if ( gdjs.Add_32scoreCode.condition9IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition10IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Add_32scoreCode.condition10IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition11IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 0;
}}
}
}
}
}
}
}
}
}
}
}
if (gdjs.Add_32scoreCode.condition11IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}}

}


{


gdjs.Add_32scoreCode.condition0IsTrue_0.val = false;
gdjs.Add_32scoreCode.condition1IsTrue_0.val = false;
{
gdjs.Add_32scoreCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if ( gdjs.Add_32scoreCode.condition0IsTrue_0.val ) {
{
gdjs.Add_32scoreCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(14)) == 0;
}}
if (gdjs.Add_32scoreCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.Add_32scoreCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Add_32scoreCode.eventsList5 = function(runtimeScene) {

{


gdjs.Add_32scoreCode.eventsList0(runtimeScene);
}


{


gdjs.Add_32scoreCode.eventsList1(runtimeScene);
}


{


gdjs.Add_32scoreCode.eventsList2(runtimeScene);
}


{


gdjs.Add_32scoreCode.eventsList4(runtimeScene);
}


};

gdjs.Add_32scoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Add_32scoreCode.GDPlayerObjects1.length = 0;
gdjs.Add_32scoreCode.GDPlayerObjects2.length = 0;
gdjs.Add_32scoreCode.GDPlayerObjects3.length = 0;
gdjs.Add_32scoreCode.GDGoblinObjects1.length = 0;
gdjs.Add_32scoreCode.GDGoblinObjects2.length = 0;
gdjs.Add_32scoreCode.GDGoblinObjects3.length = 0;
gdjs.Add_32scoreCode.GDShadowObjects1.length = 0;
gdjs.Add_32scoreCode.GDShadowObjects2.length = 0;
gdjs.Add_32scoreCode.GDShadowObjects3.length = 0;
gdjs.Add_32scoreCode.GDHealthBarBaseObjects1.length = 0;
gdjs.Add_32scoreCode.GDHealthBarBaseObjects2.length = 0;
gdjs.Add_32scoreCode.GDHealthBarBaseObjects3.length = 0;
gdjs.Add_32scoreCode.GDHealthObjects1.length = 0;
gdjs.Add_32scoreCode.GDHealthObjects2.length = 0;
gdjs.Add_32scoreCode.GDHealthObjects3.length = 0;
gdjs.Add_32scoreCode.GDHitBoxObjects1.length = 0;
gdjs.Add_32scoreCode.GDHitBoxObjects2.length = 0;
gdjs.Add_32scoreCode.GDHitBoxObjects3.length = 0;
gdjs.Add_32scoreCode.GDJumpObjects1.length = 0;
gdjs.Add_32scoreCode.GDJumpObjects2.length = 0;
gdjs.Add_32scoreCode.GDJumpObjects3.length = 0;
gdjs.Add_32scoreCode.GDLevelObjects1.length = 0;
gdjs.Add_32scoreCode.GDLevelObjects2.length = 0;
gdjs.Add_32scoreCode.GDLevelObjects3.length = 0;
gdjs.Add_32scoreCode.GDCamObjects1.length = 0;
gdjs.Add_32scoreCode.GDCamObjects2.length = 0;
gdjs.Add_32scoreCode.GDCamObjects3.length = 0;
gdjs.Add_32scoreCode.GDPowerUpsObjects1.length = 0;
gdjs.Add_32scoreCode.GDPowerUpsObjects2.length = 0;
gdjs.Add_32scoreCode.GDPowerUpsObjects3.length = 0;
gdjs.Add_32scoreCode.GDSettingsObjects1.length = 0;
gdjs.Add_32scoreCode.GDSettingsObjects2.length = 0;
gdjs.Add_32scoreCode.GDSettingsObjects3.length = 0;
gdjs.Add_32scoreCode.GDBackObjects1.length = 0;
gdjs.Add_32scoreCode.GDBackObjects2.length = 0;
gdjs.Add_32scoreCode.GDBackObjects3.length = 0;
gdjs.Add_32scoreCode.GDScoreObjects1.length = 0;
gdjs.Add_32scoreCode.GDScoreObjects2.length = 0;
gdjs.Add_32scoreCode.GDScoreObjects3.length = 0;
gdjs.Add_32scoreCode.GDNameLabelObjects1.length = 0;
gdjs.Add_32scoreCode.GDNameLabelObjects2.length = 0;
gdjs.Add_32scoreCode.GDNameLabelObjects3.length = 0;
gdjs.Add_32scoreCode.GDTitleObjects1.length = 0;
gdjs.Add_32scoreCode.GDTitleObjects2.length = 0;
gdjs.Add_32scoreCode.GDTitleObjects3.length = 0;
gdjs.Add_32scoreCode.GDEnterTextObjects1.length = 0;
gdjs.Add_32scoreCode.GDEnterTextObjects2.length = 0;
gdjs.Add_32scoreCode.GDEnterTextObjects3.length = 0;
gdjs.Add_32scoreCode.GDNameEnteredObjects1.length = 0;
gdjs.Add_32scoreCode.GDNameEnteredObjects2.length = 0;
gdjs.Add_32scoreCode.GDNameEnteredObjects3.length = 0;
gdjs.Add_32scoreCode.GDNameObjects1.length = 0;
gdjs.Add_32scoreCode.GDNameObjects2.length = 0;
gdjs.Add_32scoreCode.GDNameObjects3.length = 0;
gdjs.Add_32scoreCode.GDButtonObjects1.length = 0;
gdjs.Add_32scoreCode.GDButtonObjects2.length = 0;
gdjs.Add_32scoreCode.GDButtonObjects3.length = 0;
gdjs.Add_32scoreCode.GDinputlengthObjects1.length = 0;
gdjs.Add_32scoreCode.GDinputlengthObjects2.length = 0;
gdjs.Add_32scoreCode.GDinputlengthObjects3.length = 0;

gdjs.Add_32scoreCode.eventsList5(runtimeScene);
return;

}

gdjs['Add_32scoreCode'] = gdjs.Add_32scoreCode;
