console.log('Practica Javascript 06 - E288')

function promedios(matriz){
    let resultados = []
    for( let filas of matriz){
        let suma = 0
        for(let elemento of filas){
            suma = suma + elemento
        }
        let largoFilas = filas.length
        let promedio = suma / largoFilas
        resultados.push(promedio)
    }
    return resultados
}


function matrizAleatoria(filas, columnas){
    let matrizInicial = []
    for( let i = 0; i < filas; i++){
        let filasMatriz = []
        for( let a = 0; a < columnas; a++){
            filasMatriz.push(Math.floor(Math.random() * 10))
        }
        matrizInicial.push(filasMatriz)
    }
    return matrizInicial
}

function muestraTablero(tablero) {
    for (let fila of tablero) {
        console.log(fila.join(' '))
    }
}

let matriz = matrizAleatoria(3,3,3)
muestraTablero(matriz)


let resultado = promedios(matriz)
console.log(`Los promedios de las filas de la matriz son: ${resultado.join(', ')}`) 


