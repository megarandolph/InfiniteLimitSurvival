gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.forEachCount0_3 = 0;

gdjs.LeaderboardCode.forEachCount1_3 = 0;

gdjs.LeaderboardCode.forEachCount2_3 = 0;

gdjs.LeaderboardCode.forEachCount3_3 = 0;

gdjs.LeaderboardCode.forEachIndex3 = 0;

gdjs.LeaderboardCode.forEachObjects3 = [];

gdjs.LeaderboardCode.forEachTotalCount3 = 0;

gdjs.LeaderboardCode.GDtablaObjects1= [];
gdjs.LeaderboardCode.GDtablaObjects2= [];
gdjs.LeaderboardCode.GDtablaObjects3= [];
gdjs.LeaderboardCode.GDetiquetaObjects1= [];
gdjs.LeaderboardCode.GDetiquetaObjects2= [];
gdjs.LeaderboardCode.GDetiquetaObjects3= [];
gdjs.LeaderboardCode.GDpuestoTextObjects1= [];
gdjs.LeaderboardCode.GDpuestoTextObjects2= [];
gdjs.LeaderboardCode.GDpuestoTextObjects3= [];
gdjs.LeaderboardCode.GDNombreTextObjects1= [];
gdjs.LeaderboardCode.GDNombreTextObjects2= [];
gdjs.LeaderboardCode.GDNombreTextObjects3= [];
gdjs.LeaderboardCode.GDOleadaTextObjects1= [];
gdjs.LeaderboardCode.GDOleadaTextObjects2= [];
gdjs.LeaderboardCode.GDOleadaTextObjects3= [];
gdjs.LeaderboardCode.GDTiempoTextObjects1= [];
gdjs.LeaderboardCode.GDTiempoTextObjects2= [];
gdjs.LeaderboardCode.GDTiempoTextObjects3= [];
gdjs.LeaderboardCode.GDbackObjects1= [];
gdjs.LeaderboardCode.GDbackObjects2= [];
gdjs.LeaderboardCode.GDbackObjects3= [];
gdjs.LeaderboardCode.GDTransitionObjects1= [];
gdjs.LeaderboardCode.GDTransitionObjects2= [];
gdjs.LeaderboardCode.GDTransitionObjects3= [];
gdjs.LeaderboardCode.GDDarkenObjects1= [];
gdjs.LeaderboardCode.GDDarkenObjects2= [];
gdjs.LeaderboardCode.GDDarkenObjects3= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

};gdjs.LeaderboardCode.userFunc0x8afca0 = function GDJSInlineCode(runtimeScene) {
"use strict";
async function obtenerDatosDeFirebase(){
    const ref = firebase.database().ref('/clasificaciones')

    //
    const snapshot = await ref.once('value');
    const datos = snapshot.val();

    //
    let arregloDatos = [];
    for (let clave in datos){
        if(datos.hasOwnProperty(clave)){
            arregloDatos.push(datos[clave]);
        }
    }

    //Talvez no es menos
    arregloDatos.sort((a, b) => {
    if (a.minutos === b.minutos) {
        // Si los minutos son iguales, ordena por segundos
        return b.segundos - a.segundos;
    } else {
        // Si los minutos son diferentes, ordena por minutos
        return b.minutos - a.minutos;
    }
    });

    arregloDatos = arregloDatos.slice(0, 10);

    var x = 165; var y = 110;
    //Recorrer el areglo y mostrar los datos
    for (let i =0; i < arregloDatos.length; i++){
        
        let ob_puesto = runtimeScene.createObject("puestoText");
        let ob_nombre = runtimeScene.createObject("NombreText");
        let ob_oleada = runtimeScene.createObject("OleadaText");
        let ob_tiempo = runtimeScene.createObject("TiempoText");

        ob_puesto.setPosition(x,y);
        ob_puesto.setZOrder(9);

        ob_nombre.setPosition(x+30,y);
        ob_nombre.setZOrder(9);

        ob_oleada.setPosition(x+300,y);
        ob_oleada.setZOrder(9);

        ob_tiempo.setPosition(x+410,y);
        ob_tiempo.setZOrder(9);

        ob_puesto.setString(i+1);
        ob_nombre.setString(arregloDatos[i].nombre)
        ob_oleada.setString("Oleada: "+arregloDatos[i].oleada)
        ob_tiempo.setString(arregloDatos[i].minutos+":"+arregloDatos[i].segundos)

        y = y + 20;
    }

}

obtenerDatosDeFirebase();
};
gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NombreText"), gdjs.LeaderboardCode.GDNombreTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("OleadaText"), gdjs.LeaderboardCode.GDOleadaTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("TiempoText"), gdjs.LeaderboardCode.GDTiempoTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("puestoText"), gdjs.LeaderboardCode.GDpuestoTextObjects2);

gdjs.LeaderboardCode.forEachTotalCount3 = 0;
gdjs.LeaderboardCode.forEachObjects3.length = 0;
gdjs.LeaderboardCode.forEachCount0_3 = gdjs.LeaderboardCode.GDpuestoTextObjects2.length;
gdjs.LeaderboardCode.forEachTotalCount3 += gdjs.LeaderboardCode.forEachCount0_3;
gdjs.LeaderboardCode.forEachObjects3.push.apply(gdjs.LeaderboardCode.forEachObjects3,gdjs.LeaderboardCode.GDpuestoTextObjects2);
gdjs.LeaderboardCode.forEachCount1_3 = gdjs.LeaderboardCode.GDNombreTextObjects2.length;
gdjs.LeaderboardCode.forEachTotalCount3 += gdjs.LeaderboardCode.forEachCount1_3;
gdjs.LeaderboardCode.forEachObjects3.push.apply(gdjs.LeaderboardCode.forEachObjects3,gdjs.LeaderboardCode.GDNombreTextObjects2);
gdjs.LeaderboardCode.forEachCount2_3 = gdjs.LeaderboardCode.GDOleadaTextObjects2.length;
gdjs.LeaderboardCode.forEachTotalCount3 += gdjs.LeaderboardCode.forEachCount2_3;
gdjs.LeaderboardCode.forEachObjects3.push.apply(gdjs.LeaderboardCode.forEachObjects3,gdjs.LeaderboardCode.GDOleadaTextObjects2);
gdjs.LeaderboardCode.forEachCount3_3 = gdjs.LeaderboardCode.GDTiempoTextObjects2.length;
gdjs.LeaderboardCode.forEachTotalCount3 += gdjs.LeaderboardCode.forEachCount3_3;
gdjs.LeaderboardCode.forEachObjects3.push.apply(gdjs.LeaderboardCode.forEachObjects3,gdjs.LeaderboardCode.GDTiempoTextObjects2);
for (gdjs.LeaderboardCode.forEachIndex3 = 0;gdjs.LeaderboardCode.forEachIndex3 < gdjs.LeaderboardCode.forEachTotalCount3;++gdjs.LeaderboardCode.forEachIndex3) {
gdjs.LeaderboardCode.GDNombreTextObjects3.length = 0;

gdjs.LeaderboardCode.GDOleadaTextObjects3.length = 0;

gdjs.LeaderboardCode.GDTiempoTextObjects3.length = 0;

gdjs.LeaderboardCode.GDpuestoTextObjects3.length = 0;


if (gdjs.LeaderboardCode.forEachIndex3 < gdjs.LeaderboardCode.forEachCount0_3) {
    gdjs.LeaderboardCode.GDpuestoTextObjects3.push(gdjs.LeaderboardCode.forEachObjects3[gdjs.LeaderboardCode.forEachIndex3]);
}
else if (gdjs.LeaderboardCode.forEachIndex3 < gdjs.LeaderboardCode.forEachCount0_3+gdjs.LeaderboardCode.forEachCount1_3) {
    gdjs.LeaderboardCode.GDNombreTextObjects3.push(gdjs.LeaderboardCode.forEachObjects3[gdjs.LeaderboardCode.forEachIndex3]);
}
else if (gdjs.LeaderboardCode.forEachIndex3 < gdjs.LeaderboardCode.forEachCount0_3+gdjs.LeaderboardCode.forEachCount1_3+gdjs.LeaderboardCode.forEachCount2_3) {
    gdjs.LeaderboardCode.GDOleadaTextObjects3.push(gdjs.LeaderboardCode.forEachObjects3[gdjs.LeaderboardCode.forEachIndex3]);
}
else if (gdjs.LeaderboardCode.forEachIndex3 < gdjs.LeaderboardCode.forEachCount0_3+gdjs.LeaderboardCode.forEachCount1_3+gdjs.LeaderboardCode.forEachCount2_3+gdjs.LeaderboardCode.forEachCount3_3) {
    gdjs.LeaderboardCode.GDTiempoTextObjects3.push(gdjs.LeaderboardCode.forEachObjects3[gdjs.LeaderboardCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.LeaderboardCode.GDpuestoTextObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDpuestoTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDNombreTextObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDNombreTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDOleadaTextObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDOleadaTextObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.LeaderboardCode.GDTiempoTextObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTiempoTextObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


{


gdjs.LeaderboardCode.userFunc0x8afca0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.writeField("trigger", "state", "0", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.writeField("trigger", "state", "1", runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.firebaseTools.database.getField("trigger", "state", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "1";
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.LeaderboardCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDbackObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDbackObjects1[k] = gdjs.LeaderboardCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Posada", false);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDtablaObjects1.length = 0;
gdjs.LeaderboardCode.GDtablaObjects2.length = 0;
gdjs.LeaderboardCode.GDtablaObjects3.length = 0;
gdjs.LeaderboardCode.GDetiquetaObjects1.length = 0;
gdjs.LeaderboardCode.GDetiquetaObjects2.length = 0;
gdjs.LeaderboardCode.GDetiquetaObjects3.length = 0;
gdjs.LeaderboardCode.GDpuestoTextObjects1.length = 0;
gdjs.LeaderboardCode.GDpuestoTextObjects2.length = 0;
gdjs.LeaderboardCode.GDpuestoTextObjects3.length = 0;
gdjs.LeaderboardCode.GDNombreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNombreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNombreTextObjects3.length = 0;
gdjs.LeaderboardCode.GDOleadaTextObjects1.length = 0;
gdjs.LeaderboardCode.GDOleadaTextObjects2.length = 0;
gdjs.LeaderboardCode.GDOleadaTextObjects3.length = 0;
gdjs.LeaderboardCode.GDTiempoTextObjects1.length = 0;
gdjs.LeaderboardCode.GDTiempoTextObjects2.length = 0;
gdjs.LeaderboardCode.GDTiempoTextObjects3.length = 0;
gdjs.LeaderboardCode.GDbackObjects1.length = 0;
gdjs.LeaderboardCode.GDbackObjects2.length = 0;
gdjs.LeaderboardCode.GDbackObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects3.length = 0;
gdjs.LeaderboardCode.GDDarkenObjects1.length = 0;
gdjs.LeaderboardCode.GDDarkenObjects2.length = 0;
gdjs.LeaderboardCode.GDDarkenObjects3.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
