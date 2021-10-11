//UNA FUNCION ES UN BLOQUE DE CODIGO QUE NOSOTROS GUARDAMOS PARA LUEGO PODER USARLO TANTAS VECES QUERAMOS.

function suma(num1, num2) {
   return num1 + num2;
   
}
//LUEGO LA LLAMAMOS Y COMPLETAMOS SUS PARAMETROS CON LOS DATOS QUE QUEREMOS(EN ESTE CASO DOS NUMEROS) Y LA GUARDAMOS EN UNA VARIABLE (RESULTADO EN ESTE CASO)

var resultado = suma(10, 20);
console.log(resultado)


//OTRO EJEMPLO DE FUNCIÓN

function saludar(nombre) {
    var nombre = nombre;
    var saludo = "Buenas señor ";
    console.log(saludo + nombre);
}

let saludo = saludar("Julián Aquino");