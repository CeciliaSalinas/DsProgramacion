console.log('Practica Javascript 05 - E180')

/* Ingresar 30 elementos enteros distintos en un arreglo.
Ingresar luego un valor entero.
Se desea determinar si dicho valor coincide con algún elemento del arreglo; si es así, exhibir el valor y la
posición que ocupa en el arreglo, sino, informar dicha situación.

Ingresar 30 números enteros distintos en un arreglo.
Ingresar otro número entero.
Ver si ese número está en el arreglo.
Si está, mostrar el número y su posición.
Si no está, informar que no se encuentra.
 */

let ingresoElementos = prompt('Ingresar 30 numeros enteros')
let largoElementos = ingresoElementos.length

let ingresoUnElemento = prompt('Ingresar un número entero:')

if(largoElementos !== 30){
    alert(`Debés ingresar exactamente 30 caracteres. Ingresaste ${largoElementos}.`)
}
else{
   let arrayElmentos = ingresoElementos.split('') 
   let largoArray = arrayElmentos.length

   for( let i = 0; i < largoArray; i++ ){

}
}


function buscarCoincidencia(){

}






