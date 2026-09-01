// Variable email
const email = "carlos@prueba.com";

// crear la funcion maskEmail
function maskEmail(email){
    // Posicion "@"
    const posicionArroba = email.indexOf("@");
    // Primera letra del nombre del correo
    const primLetra = email.slice(0,1);
    // Ultima letra del nombre del correo
    const ultiLetraNombre = email.slice(posicionArroba-1, posicionArroba);
    // @ Dominio
    const nombreDominio = email.slice(posicionArroba);
    // *** del medio del correo
    const estrellaNombre = "*".repeat(posicionArroba-2);
    
    return primLetra + estrellaNombre + ultiLetraNombre + nombreDominio;
}
console.log(maskEmail(email));