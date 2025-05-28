console.log('Practica Javascript 05 - E176')

/* crear arreglo aleatorio */
function numerosAleatorios(cantidadElemento, numMinimo, numMaximo){
    let x = []

    for(let i = 0; i < cantidadElemento; i++ ){
        let numerosAleatorios = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo
        x.push(numerosAleatorios)
    }
    return x 
}

let x = numerosAleatorios(50,2,80)
console.log(x) 



/* creo el arreglo xd */
let dx = []
let largoArreglo = x.length

for(let i = 1; i < largoArreglo; i++){
    dx.push(x[i] - x[i - 1])
}
console.log(dx)



