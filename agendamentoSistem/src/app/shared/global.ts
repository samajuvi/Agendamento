export const propertiesDTO='propertiesDTOSession';
export const appKey= '?gw-app-key=';

export const recuperaPropertiesSession = function() : any {
        var properties = window.sessionStorage.getItem(propertiesDTO);
         if (properties) {
            return JSON.parse(properties);
        } else {
            return null;
        }
 }

 