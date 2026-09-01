/*
    Comprobar si el argumento proporcionado es un tipo de dato primitivo Booleano

    argumento => lo que se desea verificar
    return {Booleano} => Devuelve true si es un booleano o false en caso contrario

*/

function booWho(argumento){
  if (typeof argumento === "boolean"){
    return true;
  } else {
    return false;
  }
}