console.log('Practica Javascript 05 - E116')

let filas= 8
let columnas = 8
let cantidadMinas = 10
let matrizTablero 
let matrizTableroVisual 


/* minas aleatoriamente */
function numerosAleatorios(cantidadElemento, numMinimo, numMaximo){
    let posicionesMinas = []

    for(let i = 0; i < cantidadElemento; i++ ){
        let numerosAleatorios = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo
        posicionesMinas.push(numerosAleatorios)
    }
    return posicionesMinas
}

let posicionesMinas = numerosAleatorios(10,8,8)
alert(`numeros del array: ${posicionesMinas}.`) 


