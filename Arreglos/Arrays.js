//UN ARRAY ES COMO UNA LISTA, DONDE SE ALMACENAN VARIABLES (OSEA DATOS) DENTRO DE DETERMINADA DECLARACION
//POR EJEMPLO:
let colores = ['azul','rojo', 'verde']

// Y CON UN CONSOLE.LOG PODEMOS VER CUAL ES LA CANTIDAD DE POSICIONES EN CIERTO ARRAY. (EN ESTE CASO HAY 3 POSICIONES)

console.log(colores.length)


//Y LUEGO SI QUEREMOS ENTRAR A DETERMINADO COLOR EN ESTE CASO, A TRAVÉS DE SU INDICE LO HACEMOS ASI (dentro de los corchetes para seleccionar el indice.)

let primerColor = colores[0];

console.log(primerColor);

// SI QUEREMOS GUARDAR O GENERAR UN NUEVO DATO PARA NUESTRO ARRAY HACEMOS ASI

let nuevocolor = colores.push('naranja');
console.log(colores.length)

//SI QUEREMOS ENCONTRAR LA POSICION DE UN ELEMENTO HACEMOS ASI

let posicionAzul = colores.indexOf('azul');
console.log(posicionAzul);
