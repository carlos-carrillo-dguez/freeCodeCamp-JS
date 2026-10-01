const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

/**
 *  Actualiza una coleccion de albumes de musica segun el ID, la propiedad y el valor proporcionado
 *    @param {Object} records - El objeto que contiene la coleccion completa de albumes
 *    @param {number} id - El identificador unico del album a actualizar
 *    @param {string} prop - La propiedad del album que se desea modificar o eliminar
 *    @param {string} value - El nuevo valor para la propiedad. Si esta vacio, elimina la propiedad
 *    @returns {Object} La colección de albumes completa y actualizada
 */
function updateRecords(records, id, prop, value){
  if (value === ""){
    delete records[id][prop];
  }
  else if (prop !== "tracks" && value !== ""){
    records[id][prop] = value; 
  }
  else if (prop == "tracks" && value !== ""){
    if (!records[id].hasOwnProperty("tracks")){
        records[id][prop] = [value];
    } else {
        records[id][prop].push(value);
    }
  }
  return records;
}

// Pruebas
console.log ("Añadir artista ABBA:", updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log ("Añadir primera canción:", updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log ("Eliminar artista:", updateRecords(recordCollection, 2548, "artist", ""));