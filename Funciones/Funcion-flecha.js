//SI TENES QUE HACER UNA FUNCION CON POCO CODIGO DENTRO, DEBES DE USAR UNA FUNCION FLECHA, PARA NO CONSUMIR TANTOS RECURSOS A LA LARGA.

//si tiene parametros los pones si no, los dejas en blanco como una funcion común
var suma = (num1, num2) => num1 + num2;

console.log(suma(10,30));

//sin parametros
var saludar = () => console.log("Hello!");

saludar();

//sin dudas es mucho mejor que:
function saludar2() {
    console.log("Hello! 2")
}

saludar2();

//SI QUIERES HACER UNA FUNCION FLECHA MULTILINEA SOLO AGREGAS LAS LLAVES
let multiplicacion = (numero1,numero2) => {
    let resultado = numero1 * numero2;
    return resultado;
};
console.log(multiplicacion(10,2));

//DEFINITIVAMENTE ES MEJOR USAR LAS FLEXIONES FLECHA, YA QUE SI ES POCO CODIGO LA USAMOS, Y SI QUEREMOS MÁS CODIGO EN NUESTRO BLOQUE, SOLO AGREGAMOS LLAVES, PARA CONVERTIRLA EN UNA FUNCION MULTILINEA