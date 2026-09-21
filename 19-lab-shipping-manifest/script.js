/**
 *  Normaliza las unidades de peso de un manifiesto a kilogramos
 *      @param {Object} manifest -  Objeto manifiesto original
 *      @returns {Object}  Nuevo objeto manifiesto con el peso kg y la unidad normalizada
 */

let normalizeUnits = (manifest) => {
    if (manifest.unit === "lb"){
        return {
            containerId: manifest.containerId, destination: manifest.destination, weight: manifest.weight * 0.45, unit: "kg", hazmat: manifest.hazmat
        }
    }   else { 
        return {
            containerId: manifest.containerId, destination: manifest.destination, weight: manifest.weight, unit: "kg", hazmat: manifest.hazmat
        }
    }
}

/**
 *  Valida todas las propiedades requeridas de un objeto manifiesto
 *      @param {Object} manifest -  Objeto manifiesto a validar
 *      @returns {Object}  objeto con las propiedades que contienen errores ("Missing" o "Invalid")
 */

let validateManifest = (manifest) => {
    let errorValidate = {}    
    if (manifest.containerId === undefined){
        errorValidate.containerId = "Missing";
    }else if (!Number.isInteger(manifest.containerId) || manifest.containerId <= 0) {
        errorValidate.containerId = "Invalid";
    }
    
    if (manifest.destination === undefined){
        errorValidate.destination = "Missing";
    } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === ""){
        errorValidate.destination = "Invalid";
    }
    
    if (manifest.weight === undefined){
        errorValidate.weight = "Missing";
    } else if (typeof manifest.weight !== "number" || Number.isNaN(manifest.weight) || manifest.weight <= 0){
        errorValidate.weight = "Invalid";
    }
    
    if (manifest.unit === undefined){
        errorValidate.unit = "Missing";
    } else if (manifest.unit !== "kg" && manifest.unit !== "lb"){
        errorValidate.unit = "Invalid";
    }
    
    if (manifest.hazmat === undefined){
        errorValidate.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean"){
        errorValidate.hazmat = "Invalid";
    }
    
    return errorValidate
} 

/**
 *  Orquesta la normalización y validación de un manifiesto
 *  Registra en consola el estado del proceso y devuelve los errores o el manifiesto procesado
 *      @param {Object} manifest -  Objeto manifiesto a procesar
 *      @returns {Object}  El manifiesto normalizado si es válido, o el objeto de errores si no lo es
 */

let processManifest = (manifest) => {
    let primerValor = normalizeUnits(manifest);
    let segundoValor = validateManifest(manifest);
    if (Object.keys(segundoValor).length > 0){
        console.log("Validation error: " + manifest.containerId);
        console.log (segundoValor);
        return segundoValor;
    } else {
        console.log("Validation success: " + manifest.containerId);
        console.log ("Total weight: " + primerValor.weight + " kg");
        return primerValor;
    }
}
