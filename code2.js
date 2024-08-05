gdjs.PosadaCode = {};
gdjs.PosadaCode.localVariables = [];
gdjs.PosadaCode.GDPosadaFondoObjects1= [];
gdjs.PosadaCode.GDPosadaFondoObjects2= [];
gdjs.PosadaCode.GDPosadaFondoObjects3= [];
gdjs.PosadaCode.GDGetWeaponObjects1= [];
gdjs.PosadaCode.GDGetWeaponObjects2= [];
gdjs.PosadaCode.GDGetWeaponObjects3= [];
gdjs.PosadaCode.GDShotgunObjects1= [];
gdjs.PosadaCode.GDShotgunObjects2= [];
gdjs.PosadaCode.GDShotgunObjects3= [];
gdjs.PosadaCode.GDGatlingGunObjects1= [];
gdjs.PosadaCode.GDGatlingGunObjects2= [];
gdjs.PosadaCode.GDGatlingGunObjects3= [];
gdjs.PosadaCode.GDGunObjects1= [];
gdjs.PosadaCode.GDGunObjects2= [];
gdjs.PosadaCode.GDGunObjects3= [];
gdjs.PosadaCode.GDJugarObjects1= [];
gdjs.PosadaCode.GDJugarObjects2= [];
gdjs.PosadaCode.GDJugarObjects3= [];
gdjs.PosadaCode.GDDescripcionPosadaObjects1= [];
gdjs.PosadaCode.GDDescripcionPosadaObjects2= [];
gdjs.PosadaCode.GDDescripcionPosadaObjects3= [];
gdjs.PosadaCode.GDVolverObjects1= [];
gdjs.PosadaCode.GDVolverObjects2= [];
gdjs.PosadaCode.GDVolverObjects3= [];
gdjs.PosadaCode.GDNombreObjects1= [];
gdjs.PosadaCode.GDNombreObjects2= [];
gdjs.PosadaCode.GDNombreObjects3= [];
gdjs.PosadaCode.GDMosaicoArmaObjects1= [];
gdjs.PosadaCode.GDMosaicoArmaObjects2= [];
gdjs.PosadaCode.GDMosaicoArmaObjects3= [];
gdjs.PosadaCode.GDQuestionMarkObjects1= [];
gdjs.PosadaCode.GDQuestionMarkObjects2= [];
gdjs.PosadaCode.GDQuestionMarkObjects3= [];
gdjs.PosadaCode.GDWarningObjects1= [];
gdjs.PosadaCode.GDWarningObjects2= [];
gdjs.PosadaCode.GDWarningObjects3= [];
gdjs.PosadaCode.GDTransitionObjects1= [];
gdjs.PosadaCode.GDTransitionObjects2= [];
gdjs.PosadaCode.GDTransitionObjects3= [];
gdjs.PosadaCode.GDDarkenObjects1= [];
gdjs.PosadaCode.GDDarkenObjects2= [];
gdjs.PosadaCode.GDDarkenObjects3= [];


gdjs.PosadaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)) == "0");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nombre"), gdjs.PosadaCode.GDNombreObjects1);
{for(var i = 0, len = gdjs.PosadaCode.GDNombreObjects1.length ;i < len;++i) {
    gdjs.PosadaCode.GDNombreObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}}

}


};gdjs.PosadaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Warning"), gdjs.PosadaCode.GDWarningObjects2);
{for(var i = 0, len = gdjs.PosadaCode.GDWarningObjects2.length ;i < len;++i) {
    gdjs.PosadaCode.GDWarningObjects2[i].setBBText("Obten un arma para poder entrar al coliseo");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nombre"), gdjs.PosadaCode.GDNombreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDNombreObjects2.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDNombreObjects2[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDNombreObjects2[k] = gdjs.PosadaCode.GDNombreObjects2[i];
        ++k;
    }
}
gdjs.PosadaCode.GDNombreObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Warning"), gdjs.PosadaCode.GDWarningObjects2);
{for(var i = 0, len = gdjs.PosadaCode.GDWarningObjects2.length ;i < len;++i) {
    gdjs.PosadaCode.GDWarningObjects2[i].setBBText(gdjs.PosadaCode.GDWarningObjects2[i].getBBText() + (" y registrate en la posada para entrar al coliseo"));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Nombre"), gdjs.PosadaCode.GDNombreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDNombreObjects1.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDNombreObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDNombreObjects1[k] = gdjs.PosadaCode.GDNombreObjects1[i];
        ++k;
    }
}
gdjs.PosadaCode.GDNombreObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Warning"), gdjs.PosadaCode.GDWarningObjects1);
{for(var i = 0, len = gdjs.PosadaCode.GDWarningObjects1.length ;i < len;++i) {
    gdjs.PosadaCode.GDWarningObjects1[i].setBBText("Registrate en la posada para entrar al coliseo");
}
}}

}


};gdjs.PosadaCode.mapOfGDgdjs_9546PosadaCode_9546GDGunObjects2Objects = Hashtable.newFrom({"Gun": gdjs.PosadaCode.GDGunObjects2});
gdjs.PosadaCode.mapOfGDgdjs_9546PosadaCode_9546GDShotgunObjects2Objects = Hashtable.newFrom({"Shotgun": gdjs.PosadaCode.GDShotgunObjects2});
gdjs.PosadaCode.mapOfGDgdjs_9546PosadaCode_9546GDGatlingGunObjects1Objects = Hashtable.newFrom({"GatlingGun": gdjs.PosadaCode.GDGatlingGunObjects1});
gdjs.PosadaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MosaicoArma"), gdjs.PosadaCode.GDMosaicoArmaObjects2);
gdjs.PosadaCode.GDGunObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PosadaCode.mapOfGDgdjs_9546PosadaCode_9546GDGunObjects2Objects, (( gdjs.PosadaCode.GDMosaicoArmaObjects2.length === 0 ) ? 0 :gdjs.PosadaCode.GDMosaicoArmaObjects2[0].getCenterXInScene()), (( gdjs.PosadaCode.GDMosaicoArmaObjects2.length === 0 ) ? 0 :gdjs.PosadaCode.GDMosaicoArmaObjects2[0].getCenterYInScene()), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MosaicoArma"), gdjs.PosadaCode.GDMosaicoArmaObjects2);
gdjs.PosadaCode.GDShotgunObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PosadaCode.mapOfGDgdjs_9546PosadaCode_9546GDShotgunObjects2Objects, (( gdjs.PosadaCode.GDMosaicoArmaObjects2.length === 0 ) ? 0 :gdjs.PosadaCode.GDMosaicoArmaObjects2[0].getCenterXInScene()), (( gdjs.PosadaCode.GDMosaicoArmaObjects2.length === 0 ) ? 0 :gdjs.PosadaCode.GDMosaicoArmaObjects2[0].getCenterYInScene()), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MosaicoArma"), gdjs.PosadaCode.GDMosaicoArmaObjects1);
gdjs.PosadaCode.GDGatlingGunObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PosadaCode.mapOfGDgdjs_9546PosadaCode_9546GDGatlingGunObjects1Objects, (( gdjs.PosadaCode.GDMosaicoArmaObjects1.length === 0 ) ? 0 :gdjs.PosadaCode.GDMosaicoArmaObjects1[0].getCenterXInScene()), (( gdjs.PosadaCode.GDMosaicoArmaObjects1.length === 0 ) ? 0 :gdjs.PosadaCode.GDMosaicoArmaObjects1[0].getCenterYInScene()), "");
}}

}


};gdjs.PosadaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\🍺 Música de TABERNA Medieval _ Música ambiental de fantasía.mp3", 2, true, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").getAsNumber(), 1);
}
{ //Subevents
gdjs.PosadaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Volver"), gdjs.PosadaCode.GDVolverObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDVolverObjects1.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDVolverObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDVolverObjects1[k] = gdjs.PosadaCode.GDVolverObjects1[i];
        ++k;
    }
}
gdjs.PosadaCode.GDVolverObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jugar"), gdjs.PosadaCode.GDJugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDJugarObjects1.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDJugarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDJugarObjects1[k] = gdjs.PosadaCode.GDJugarObjects1[i];
        ++k;
    }
}
gdjs.PosadaCode.GDJugarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.PosadaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jugar"), gdjs.PosadaCode.GDJugarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Nombre"), gdjs.PosadaCode.GDNombreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDJugarObjects1.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDJugarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDJugarObjects1[k] = gdjs.PosadaCode.GDJugarObjects1[i];
        ++k;
    }
}
gdjs.PosadaCode.GDJugarObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDNombreObjects1.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDNombreObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDNombreObjects1[k] = gdjs.PosadaCode.GDNombreObjects1[i];
        ++k;
    }
}
gdjs.PosadaCode.GDNombreObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PosadaCode.GDNombreObjects1 */
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 2);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.PosadaCode.GDNombreObjects1.length === 0 ) ? "" :gdjs.PosadaCode.GDNombreObjects1[0].getText()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GetWeapon"), gdjs.PosadaCode.GDGetWeaponObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PosadaCode.GDGetWeaponObjects1.length;i<l;++i) {
    if ( gdjs.PosadaCode.GDGetWeaponObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.PosadaCode.GDGetWeaponObjects1[k] = gdjs.PosadaCode.GDGetWeaponObjects1[i];
        ++k;
    }
}
gdjs.PosadaCode.GDGetWeaponObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("QuestionMark"), gdjs.PosadaCode.GDQuestionMarkObjects1);
{for(var i = 0, len = gdjs.PosadaCode.GDQuestionMarkObjects1.length ;i < len;++i) {
    gdjs.PosadaCode.GDQuestionMarkObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(1, 3));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{ //Subevents
gdjs.PosadaCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.PosadaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PosadaCode.GDPosadaFondoObjects1.length = 0;
gdjs.PosadaCode.GDPosadaFondoObjects2.length = 0;
gdjs.PosadaCode.GDPosadaFondoObjects3.length = 0;
gdjs.PosadaCode.GDGetWeaponObjects1.length = 0;
gdjs.PosadaCode.GDGetWeaponObjects2.length = 0;
gdjs.PosadaCode.GDGetWeaponObjects3.length = 0;
gdjs.PosadaCode.GDShotgunObjects1.length = 0;
gdjs.PosadaCode.GDShotgunObjects2.length = 0;
gdjs.PosadaCode.GDShotgunObjects3.length = 0;
gdjs.PosadaCode.GDGatlingGunObjects1.length = 0;
gdjs.PosadaCode.GDGatlingGunObjects2.length = 0;
gdjs.PosadaCode.GDGatlingGunObjects3.length = 0;
gdjs.PosadaCode.GDGunObjects1.length = 0;
gdjs.PosadaCode.GDGunObjects2.length = 0;
gdjs.PosadaCode.GDGunObjects3.length = 0;
gdjs.PosadaCode.GDJugarObjects1.length = 0;
gdjs.PosadaCode.GDJugarObjects2.length = 0;
gdjs.PosadaCode.GDJugarObjects3.length = 0;
gdjs.PosadaCode.GDDescripcionPosadaObjects1.length = 0;
gdjs.PosadaCode.GDDescripcionPosadaObjects2.length = 0;
gdjs.PosadaCode.GDDescripcionPosadaObjects3.length = 0;
gdjs.PosadaCode.GDVolverObjects1.length = 0;
gdjs.PosadaCode.GDVolverObjects2.length = 0;
gdjs.PosadaCode.GDVolverObjects3.length = 0;
gdjs.PosadaCode.GDNombreObjects1.length = 0;
gdjs.PosadaCode.GDNombreObjects2.length = 0;
gdjs.PosadaCode.GDNombreObjects3.length = 0;
gdjs.PosadaCode.GDMosaicoArmaObjects1.length = 0;
gdjs.PosadaCode.GDMosaicoArmaObjects2.length = 0;
gdjs.PosadaCode.GDMosaicoArmaObjects3.length = 0;
gdjs.PosadaCode.GDQuestionMarkObjects1.length = 0;
gdjs.PosadaCode.GDQuestionMarkObjects2.length = 0;
gdjs.PosadaCode.GDQuestionMarkObjects3.length = 0;
gdjs.PosadaCode.GDWarningObjects1.length = 0;
gdjs.PosadaCode.GDWarningObjects2.length = 0;
gdjs.PosadaCode.GDWarningObjects3.length = 0;
gdjs.PosadaCode.GDTransitionObjects1.length = 0;
gdjs.PosadaCode.GDTransitionObjects2.length = 0;
gdjs.PosadaCode.GDTransitionObjects3.length = 0;
gdjs.PosadaCode.GDDarkenObjects1.length = 0;
gdjs.PosadaCode.GDDarkenObjects2.length = 0;
gdjs.PosadaCode.GDDarkenObjects3.length = 0;

gdjs.PosadaCode.eventsList3(runtimeScene);

return;

}

gdjs['PosadaCode'] = gdjs.PosadaCode;
