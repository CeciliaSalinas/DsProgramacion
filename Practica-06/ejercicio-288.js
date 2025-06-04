/* Programar una función llamada promedios.
Dicha función debe recibir una matriz, y retornar un vector, en donde 
cada elemento del vector sea el promedio de la fila correspondiente de la matriz.

Por ejemplo, si la función recibe la matriz : 
3 8 1
9 4 2
1 2 6
debe retornar el vector 4 5 3 (porque 4 es el promedio de la primera fila, 5 el de la segunda y 3 el de la
tercera).

IMPORTANTE: Lo anterior es solo un ejemplo, la matriz recibida podría tener otros números
cualesquiera y/u otras dimensiones (no necesariamente 3 filas y 3 columnas).

ALGORITMO:
Inicio
    Definir la función promedios(matriz)
        Crear un vector vacío llamado resultados

        Para cada fila en la matriz
            Inicializar suma en 0
            Para cada elemento en la fila
                Sumar el elemento a suma
            Fin Para

            Calcular promedio = suma / cantidad de elementos de la fila
            Agregar promedio al vector resultados
        Fin Para

        Retornar vector resultados
    Fin función
Fin */
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
let matriz = matrizAleatoria(3,3,3)
console.log(matriz)


let resultado = promedios(matriz)
console.log(`El promedio**** la matriz es ${resultado}`) 


