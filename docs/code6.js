gdjs.LeaderboardsCode = {};
gdjs.LeaderboardsCode.GDButtonObjects1_1final = [];

gdjs.LeaderboardsCode.GDButtonTextObjects1_1final = [];

gdjs.LeaderboardsCode.GDPlayerObjects1= [];
gdjs.LeaderboardsCode.GDPlayerObjects2= [];
gdjs.LeaderboardsCode.GDGoblinObjects1= [];
gdjs.LeaderboardsCode.GDGoblinObjects2= [];
gdjs.LeaderboardsCode.GDShadowObjects1= [];
gdjs.LeaderboardsCode.GDShadowObjects2= [];
gdjs.LeaderboardsCode.GDHealthBarBaseObjects1= [];
gdjs.LeaderboardsCode.GDHealthBarBaseObjects2= [];
gdjs.LeaderboardsCode.GDHealthObjects1= [];
gdjs.LeaderboardsCode.GDHealthObjects2= [];
gdjs.LeaderboardsCode.GDHitBoxObjects1= [];
gdjs.LeaderboardsCode.GDHitBoxObjects2= [];
gdjs.LeaderboardsCode.GDJumpObjects1= [];
gdjs.LeaderboardsCode.GDJumpObjects2= [];
gdjs.LeaderboardsCode.GDLevelObjects1= [];
gdjs.LeaderboardsCode.GDLevelObjects2= [];
gdjs.LeaderboardsCode.GDCamObjects1= [];
gdjs.LeaderboardsCode.GDCamObjects2= [];
gdjs.LeaderboardsCode.GDPowerUpsObjects1= [];
gdjs.LeaderboardsCode.GDPowerUpsObjects2= [];
gdjs.LeaderboardsCode.GDSettingsObjects1= [];
gdjs.LeaderboardsCode.GDSettingsObjects2= [];
gdjs.LeaderboardsCode.GDBackObjects1= [];
gdjs.LeaderboardsCode.GDBackObjects2= [];
gdjs.LeaderboardsCode.GDTitleObjects1= [];
gdjs.LeaderboardsCode.GDTitleObjects2= [];
gdjs.LeaderboardsCode.GDScoreObjects1= [];
gdjs.LeaderboardsCode.GDScoreObjects2= [];
gdjs.LeaderboardsCode.GDNameObjects1= [];
gdjs.LeaderboardsCode.GDNameObjects2= [];
gdjs.LeaderboardsCode.GDButtonObjects1= [];
gdjs.LeaderboardsCode.GDButtonObjects2= [];
gdjs.LeaderboardsCode.GDButtonTextObjects1= [];
gdjs.LeaderboardsCode.GDButtonTextObjects2= [];

gdjs.LeaderboardsCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition1IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition2IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition3IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition4IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition5IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition6IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition7IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition8IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition9IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition10IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.conditionTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition0IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition1IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition2IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition3IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition4IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition5IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition6IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition7IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition8IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition9IsTrue_1 = {val:false};
gdjs.LeaderboardsCode.condition10IsTrue_1 = {val:false};


gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.LeaderboardsCode.GDButtonObjects2});gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDButtonTextObjects2Objects = Hashtable.newFrom({"ButtonText": gdjs.LeaderboardsCode.GDButtonTextObjects2});gdjs.LeaderboardsCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Purple Black Loop.wav", 1, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)), 1);
}}

}


};gdjs.LeaderboardsCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Cam"), gdjs.LeaderboardsCode.GDCamObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LeaderboardsCode.GDCamObjects1.length !== 0 ? gdjs.LeaderboardsCode.GDCamObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDCamObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDCamObjects1[i].hide();
}
}}

}


{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.firebase.firestore.getDocument("highscores", "First", runtimeScene.getVariables().getFromIndex(0).getChild("1"), runtimeScene.getVariables().getFromIndex(4));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Second", runtimeScene.getVariables().getFromIndex(0).getChild("2"), runtimeScene.getVariables().getFromIndex(5));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Third", runtimeScene.getVariables().getFromIndex(0).getChild("3"), runtimeScene.getVariables().getFromIndex(6));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Fourth", runtimeScene.getVariables().getFromIndex(0).getChild("4"), runtimeScene.getVariables().getFromIndex(7));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Fifth", runtimeScene.getVariables().getFromIndex(0).getChild("5"), runtimeScene.getVariables().getFromIndex(8));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Sixth", runtimeScene.getVariables().getFromIndex(0).getChild("6"), runtimeScene.getVariables().getFromIndex(9));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Seventh", runtimeScene.getVariables().getFromIndex(0).getChild("7"), runtimeScene.getVariables().getFromIndex(10));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Eighth", runtimeScene.getVariables().getFromIndex(0).getChild("8"), runtimeScene.getVariables().getFromIndex(11));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Ninth", runtimeScene.getVariables().getFromIndex(0).getChild("9"), runtimeScene.getVariables().getFromIndex(12));
}{gdjs.evtTools.firebase.firestore.getDocument("highscores", "Tenth", runtimeScene.getVariables().getFromIndex(0).getChild("10"), runtimeScene.getVariables().getFromIndex(13));
}}

}


{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition2IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition3IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition4IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition5IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition6IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition7IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition8IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition9IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)) == "ok";
}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(5)) == "ok";
}if ( gdjs.LeaderboardsCode.condition1IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(6)) == "ok";
}if ( gdjs.LeaderboardsCode.condition2IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(7)) == "ok";
}if ( gdjs.LeaderboardsCode.condition3IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(8)) == "ok";
}if ( gdjs.LeaderboardsCode.condition4IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition5IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(13)) == "ok";
}if ( gdjs.LeaderboardsCode.condition5IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition6IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(9)) == "ok";
}if ( gdjs.LeaderboardsCode.condition6IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition7IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(10)) == "ok";
}if ( gdjs.LeaderboardsCode.condition7IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition8IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(11)) == "ok";
}if ( gdjs.LeaderboardsCode.condition8IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition9IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(12)) == "ok";
}}
}
}
}
}
}
}
}
}
if (gdjs.LeaderboardsCode.condition9IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 1 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 1 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("1").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("1").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 2 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("2").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("2").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 3 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 3 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("3").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("3").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 4 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 4 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("4").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("4").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 5 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 5 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("5").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("5").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 6 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 6 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("6").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("6").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 7 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 7 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("7").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("7").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 8 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 8 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("8").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("8").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 9 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 9 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("9").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("9").getChild("Score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.LeaderboardsCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.LeaderboardsCode.GDScoreObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDNameObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDNameObjects1[i].getVariables().get("id")) == 10 ) {
        gdjs.LeaderboardsCode.condition0IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDNameObjects1[k] = gdjs.LeaderboardsCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDNameObjects1.length = k;}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LeaderboardsCode.GDScoreObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariableNumber(gdjs.LeaderboardsCode.GDScoreObjects1[i].getVariables().get("id")) == 10 ) {
        gdjs.LeaderboardsCode.condition1IsTrue_0.val = true;
        gdjs.LeaderboardsCode.GDScoreObjects1[k] = gdjs.LeaderboardsCode.GDScoreObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardsCode.GDScoreObjects1.length = k;}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDNameObjects1 */
/* Reuse gdjs.LeaderboardsCode.GDScoreObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDNameObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("10").getChild("Name")));
}
}{for(var i = 0, len = gdjs.LeaderboardsCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0).getChild("10").getChild("Score")));
}
}}

}


{

gdjs.LeaderboardsCode.GDButtonObjects1.length = 0;

gdjs.LeaderboardsCode.GDButtonTextObjects1.length = 0;


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_0.val = false;
{
{gdjs.LeaderboardsCode.conditionTrue_1 = gdjs.LeaderboardsCode.condition0IsTrue_0;
gdjs.LeaderboardsCode.GDButtonObjects1_1final.length = 0;gdjs.LeaderboardsCode.GDButtonTextObjects1_1final.length = 0;gdjs.LeaderboardsCode.condition0IsTrue_1.val = false;
gdjs.LeaderboardsCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.LeaderboardsCode.GDButtonObjects2);
gdjs.LeaderboardsCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDButtonObjects2Objects, runtimeScene, true, false);
if( gdjs.LeaderboardsCode.condition0IsTrue_1.val ) {
    gdjs.LeaderboardsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LeaderboardsCode.GDButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.LeaderboardsCode.GDButtonObjects1_1final.indexOf(gdjs.LeaderboardsCode.GDButtonObjects2[j]) === -1 )
            gdjs.LeaderboardsCode.GDButtonObjects1_1final.push(gdjs.LeaderboardsCode.GDButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonText"), gdjs.LeaderboardsCode.GDButtonTextObjects2);
gdjs.LeaderboardsCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDButtonTextObjects2Objects, runtimeScene, true, false);
if( gdjs.LeaderboardsCode.condition1IsTrue_1.val ) {
    gdjs.LeaderboardsCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LeaderboardsCode.GDButtonTextObjects2.length;j<jLen;++j) {
        if ( gdjs.LeaderboardsCode.GDButtonTextObjects1_1final.indexOf(gdjs.LeaderboardsCode.GDButtonTextObjects2[j]) === -1 )
            gdjs.LeaderboardsCode.GDButtonTextObjects1_1final.push(gdjs.LeaderboardsCode.GDButtonTextObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LeaderboardsCode.GDButtonObjects1_1final, gdjs.LeaderboardsCode.GDButtonObjects1);
gdjs.copyArray(gdjs.LeaderboardsCode.GDButtonTextObjects1_1final, gdjs.LeaderboardsCode.GDButtonTextObjects1);
}
}
}if ( gdjs.LeaderboardsCode.condition0IsTrue_0.val ) {
{
gdjs.LeaderboardsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.LeaderboardsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HomePage", false);
}}

}


{


gdjs.LeaderboardsCode.eventsList0(runtimeScene);
}


};

gdjs.LeaderboardsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardsCode.GDPlayerObjects1.length = 0;
gdjs.LeaderboardsCode.GDPlayerObjects2.length = 0;
gdjs.LeaderboardsCode.GDGoblinObjects1.length = 0;
gdjs.LeaderboardsCode.GDGoblinObjects2.length = 0;
gdjs.LeaderboardsCode.GDShadowObjects1.length = 0;
gdjs.LeaderboardsCode.GDShadowObjects2.length = 0;
gdjs.LeaderboardsCode.GDHealthBarBaseObjects1.length = 0;
gdjs.LeaderboardsCode.GDHealthBarBaseObjects2.length = 0;
gdjs.LeaderboardsCode.GDHealthObjects1.length = 0;
gdjs.LeaderboardsCode.GDHealthObjects2.length = 0;
gdjs.LeaderboardsCode.GDHitBoxObjects1.length = 0;
gdjs.LeaderboardsCode.GDHitBoxObjects2.length = 0;
gdjs.LeaderboardsCode.GDJumpObjects1.length = 0;
gdjs.LeaderboardsCode.GDJumpObjects2.length = 0;
gdjs.LeaderboardsCode.GDLevelObjects1.length = 0;
gdjs.LeaderboardsCode.GDLevelObjects2.length = 0;
gdjs.LeaderboardsCode.GDCamObjects1.length = 0;
gdjs.LeaderboardsCode.GDCamObjects2.length = 0;
gdjs.LeaderboardsCode.GDPowerUpsObjects1.length = 0;
gdjs.LeaderboardsCode.GDPowerUpsObjects2.length = 0;
gdjs.LeaderboardsCode.GDSettingsObjects1.length = 0;
gdjs.LeaderboardsCode.GDSettingsObjects2.length = 0;
gdjs.LeaderboardsCode.GDBackObjects1.length = 0;
gdjs.LeaderboardsCode.GDBackObjects2.length = 0;
gdjs.LeaderboardsCode.GDTitleObjects1.length = 0;
gdjs.LeaderboardsCode.GDTitleObjects2.length = 0;
gdjs.LeaderboardsCode.GDScoreObjects1.length = 0;
gdjs.LeaderboardsCode.GDScoreObjects2.length = 0;
gdjs.LeaderboardsCode.GDNameObjects1.length = 0;
gdjs.LeaderboardsCode.GDNameObjects2.length = 0;
gdjs.LeaderboardsCode.GDButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDButtonTextObjects1.length = 0;
gdjs.LeaderboardsCode.GDButtonTextObjects2.length = 0;

gdjs.LeaderboardsCode.eventsList1(runtimeScene);
return;

}

gdjs['LeaderboardsCode'] = gdjs.LeaderboardsCode;
