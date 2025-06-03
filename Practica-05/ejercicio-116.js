console.log('Practica Javascript 05 - E116')

function matrizTableroInicial(filas, columnas, valorInicio){
    let matrizInicial = []
    for( let i = 0; i < filas; i++){
        let filasMatriz = []
        for( let a = 0; a < columnas; a++){
            filasMatriz.push(valorInicio)
        }
        matrizInicial.push(filasMatriz)
    }
    return matrizInicial
}


function posicionesAleatorios(cantidadElemento, numMinimo, numMaximo){
    let posiciones = []

    while(posiciones.length < cantidadElemento){
        let numerosAleatorios = Math.floor(Math.random() * (numMaximo - numMinimo + 1)) + numMinimo
        if(!posiciones.includes(numerosAleatorios)){
            posiciones.push(numerosAleatorios)
        }
    }
    return posiciones
}


function colocarMinas(matriz, cantidadMinas){
    let posicionesFilaColumna = []
    let posicionesSinRepetir = posicionesAleatorios(cantidadMinas, 0, 63)

    for( let posicion of posicionesSinRepetir){
        let fila = Math.floor( posicion / 8)
        let columna = posicion % 8
        matriz[fila][columna] = 'M'
        posicionesFilaColumna.push([fila, columna])
    }
    return posicionesFilaColumna
}

function muestraTablero(tablero) {
    for (let fila of tablero) {
        console.log(fila.join(' '))
    }
}

function minasVecinas(tablero, fila, columna){
    let minasVecinas = 0

    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && i < 8 && j >= 0 && j < 8 && !(i === fila && j === columna)) {
                if (tablero[i][j] === 'M') {
                    minasVecinas++;
                }
            }
        }
    }
    return minasVecinas
}


let tableroMinas = matrizTableroInicial(8, 8, '.')
let tableroVisual = matrizTableroInicial(8,8, '.')
let minas = colocarMinas(tableroMinas, 10)


let filaUsuario
let columnaUsuario

do{filaUsuario = parseInt(prompt('Ingresá un numero de fila entre 0 y 7:'))}
while(isNaN(filaUsuario) || filaUsuario < 0 || filaUsuario > 7 )

do(columnaUsuario = parseInt(prompt('Ingresar un numero para la columna entre 0 y 7:')))
while(isNaN(columnaUsuario) || columnaUsuario < 0 || columnaUsuario > 7 )


if(tableroMinas[filaUsuario][columnaUsuario] === 'M'){
alert('Perdiste!')
for( let i = 0; i < 8; i++){
    for( let t = 0; t < 8; t++){
        if(tableroMinas[i][t]=== 'M'){
            tableroVisual[i][t] ='*'
        }
    }
}
tableroVisual[filaUsuario][columnaUsuario] = 'x' 
muestraTablero(tableroVisual, filaUsuario, columnaUsuario)
}
else {
let cantidad = minasVecinas(tableroMinas, filaUsuario, columnaUsuario)
tableroVisual[filaUsuario][columnaUsuario] = cantidad.toString()   
 muestraTablero(tableroVisual, filaUsuario, columnaUsuario)
}


