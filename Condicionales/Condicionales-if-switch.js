/*UN CONDICIONAL, ES UN BLOQUE DE CODIGO QUE SE VA A CUMPLIR DEPENDIENDO DE LA CONDICION PEDIDA ANTERIORMENTE, NOSOTROS PODEMOS PEDIR QUE SE CUMPLA SIEMPRE Y CUANDO RESPETE NUESTRA CONDICION (QUE NOSOTROS MISMOS LE DAMOS AL IF O AL CONDICIONAL)*/

//EJEMPLO
var x = 10;
//CREAMOS UN CONDICIONAL QUE PREGUNTA DENTRO DE LOS () [PARENTESIS] SI X ES IGUAL A 11, SI X ES IGUAL 11 ENTONCES SE PONE EN CONSOLA "X ES IGUAL A 11"
if (x = 11) {
    console.log("x es igual a 11")
//EL ELSE IF ES OTRA CONDICION MÁS POR SI LA ANTERIOR NO SE CUMPLIÓ.
} 
else if(x = 10){
    console.log("x es igual a 10 :D")
}
//COMO X NO ES IGUAL A 11, ENTONCES SE PASA AL ELSE, QUE ES POR DEFAULT DIGAMOS, ENTONCES SI EL IF NO SE CUMPLE, SE CUMPLE SI O SI EL ELSE, YA QUE ES POR DEFAULT, SI EL ANTERIOR NO SE CUMPLE, CUMPLIS EL ELSE (POR DEFAULT), en este caso hay un else if antes, que si se cumplió, por lo cual se corta el blue o condicional en el punto en donde se cumple.
else  {
    console.log("x no es igual a 11")
}

//UN SWITCH ES UN CONDICIONAL EN DONDE SE CUMPLE LA CONDICION, SI AL PRESENTARLE MUCHOS CASOS POSIBLES, UNO SE CUMPLE.(CASES), si ninguno se cumple, se dara por cumplido el default (en este ejemplo no hay.)
var texto;
switch (x = 20) { 
    case 30 :
       texto = "el numero es 30"
       break;
    case 20: 
       texto = "el numero es 20"
       break; 
    case 10: 
      texto = "el numero correcto es 10"
       break; 
    default: 
       
}
console.log(texto)