console.log('Practica Javascript 05 - E180')

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

