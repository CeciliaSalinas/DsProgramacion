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


/* crear arreglo aleatorio */
function numerosAleatorios(cantidadElemento, numMinimo, numMaximo){
    let elementosEnteros = []

    for(let i = 0; i < cantidadElemento; i++ ){
        let numerosAleatorios = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo
        elementosEnteros.push(numerosAleatorios)
    }
    return elementosEnteros
}

let elementosEnteros = numerosAleatorios(30,1,100)
alert(`El arreglo contiene los núemeros: ${elementosEnteros}.`) 


let unicoValor = parseInt(prompt('Ingresar un numero entero:'))
let largoArreglo = elementosEnteros.length
let elementoEncontrado = false

for(let i = 0; i < largoArreglo; i++){
    if(elementosEnteros[i] === unicoValor){
        alert(`El número entero ${unicoValor} está en la posición ${i}`)
        elementoEncontrado = true
        break
    }
}
if(!elementoEncontrado){
    alert(`El número entero ingresado ${unicoValor} no se encuentra en el arreglo`)
}

