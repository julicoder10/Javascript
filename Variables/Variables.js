/*La declaracion de variable let, es unica en bloque de codigo, por lo cual si lo hacemos por ejemplo, dentro de un bloque de codigo como un bucle, solo existira la variable let dentro de ese bloque de codigo, si intentamos llamarla por fuera, no se podria, ya que no existiria.*/

let a = 1;
let b = 2;

let suma = a + b;
console.log(suma);

/*Si queremos una variable con un dato que nunca queremos o sabemos que nunca lo vamos a cambiar (en este caso PI) usamos la declaracion de variable const, que almacena un dato, y queda guardado siempre en la declaracion, no podrias llamar a esa variable y cambiarle el dato, ya que es una constante*/

const PI = 3.14;

console.log(PI);

/*Luego esta la declaracion de variable var, pero la unica diferencia es que si la creamos dentro de un bucle, o un cierto tipo de bloque de codigo, podriamos llamarla incluso por fuera del tipo de bloque de codigo, por ejemplo:*/

var numero = 0;
if (numero = 0) {
  var numero = 10;
}
var numero = 20;
console.log(numero);
//lo que hicimos fue crear una variable numero, que tiene un dato en este caso 0, luego en un if que pregunta si el dato es 0, queremos cambiarle el dato de nuevo, y se lo cambia a 10 dentro del bloque de codigo, luego llamamos a numero de nuevo por fuera del bloque, y le volvimos a cambiar el dato, despues lo llamamos en un console.log y nos da el dato(20)