
'use strict';
 
export const propertiesDTO = 'propertiesDTOSession';
export const userSession = 'userSession_key';
export var plataforma = "gravame";
export var user;
 
 
export const recuperaPropertiesSession = function (): any {
    var properties = window.sessionStorage.getItem(propertiesDTO);
    if (properties) {
        return JSON.parse(properties);
    } else {
        return null;
    }
}
 
export const recuperaUsuarioSession = function (): any {
    var properties = window.sessionStorage.getItem(userSession);
    if (properties) {
        return JSON.parse(properties);
    } else {
        return null;
    }
}
 
export const recuperaMenuSession = function (): any {
    var properties = window.sessionStorage.getItem(userSession);
    if (properties) {
        console.log(properties);
        return JSON.parse(properties).plataformas;
    } else {
        return null;
    }
}
 
export const recuperaRotasPermitidasSession = function (): any {
    var funcionalidades = [];
    var plataformas = [];

    if (JSON.parse(window.sessionStorage.getItem(userSession))) {
        console.log('passieo aqui');
        plataformas = JSON.parse(window.sessionStorage.getItem(userSession)).plataformas;
    } 

    console.log('tamano plataforma');
    console.log(plataformas.length);
 
    if (plataformas) {
        for (var i = 0; plataformas.length > 0; i++) {
            console.log('nao devia passar aqui ...');
            console.log(plataforma);
            if (plataformas[i].nome == plataforma) {
                if (plataformas[i].modulos) {
                    for (var j = 0; plataformas[i].modulos.length > 0; j++) {
                        if (plataformas[i].modulos[j]) {
                            if (plataformas[i].modulos[j].funcionalidades) {
                                return funcionalidades = plataformas[i].modulos[j].funcionalidades;
                            }
                        }
                    }
                }
            }
        }
    } else {
        console.log('sem dados');
    }
}