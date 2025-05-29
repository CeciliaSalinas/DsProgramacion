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
let arrayElmentos = ingresoElementos.split('').map(Number)
let largoElementos = ingresoElementos.length



if(largoElementos !== 30){
    alert(`Debés ingresar exactamente 30 caracteres. Ingresaste ${largoElementos}.`)
}
else{
   let ingresoUnElemento = prompt('Ingresar un número entero:')
   let largoArray = arrayElmentos.length

   for( let i = 0; i < largoArray; i++ ){

}
}


function buscarCoincidencia(){

}


/* 
let ingresoElementos = prompt('Ingresar 30 números enteros separados por espacio:');
let arrayElementos = ingresoElementos.split(' ').map(Number);

// Validar que haya exactamente 30 números y que todos sean válidos
if (arrayElementos.length !== 30 || arrayElementos.some(num => isNaN(num))) {
    alert(`Debés ingresar exactamente 30 números válidos separados por espacio.`);
} else {
    let ingresoUnElemento = parseInt(prompt('Ingresar un número entero a buscar:'));

    if (isNaN(ingresoUnElemento)) {
        alert('El número ingresado no es válido.');
    } else {
        let posicion = buscarCoincidencia(arrayElementos, ingresoUnElemento);

        if (posicion !== -1) {
            alert(`✅ El número ${ingresoUnElemento} se encuentra en la posición ${posicion} del arreglo.`);
        } else {
            alert(`❌ El número ${ingresoUnElemento} no está en el arreglo.`);
        }
    }
}

function buscarCoincidencia(arreglo, valorBuscado) {
    return arreglo.indexOf(valorBuscado);
}
*/



