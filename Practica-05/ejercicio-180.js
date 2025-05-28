console.log('Practica Javascript 05 - E180')

let ingresoNumeros = parseInt(prompt('Ingresar 30 numeros'))


function buscarCoincidencia(arregloNum, valorNum){
    let  largoArreglo = arregloNum.length

    for(let i = 0; i < largoArreglo; i ++ ){

    }
}


/* let numeros = []

// Cargar 30 números enteros distintos
while (numeros.length < 30) {
    let entrada = parseInt(prompt(`Ingrese número entero distinto (${numeros.length + 1}/30):`))

    if (!isNaN(entrada)) {
        if (!numeros.includes(entrada)) {
            numeros.push(entrada)
        } else {
            alert("Ese número ya fue ingresado. Intente con otro.")
        }
    } else {
        alert("Entrada inválida. Ingrese un número entero.")
    }
}

// Función para buscar coincidencias
function buscarCoincidencia(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
            return i // Devuelve la posición
        }
    }
    return -1 // Si no lo encuentra
}

// Ingreso del valor a buscar
let valorBuscado = parseInt(prompt("Ingrese el número a buscar:"))

if (!isNaN(valorBuscado)) {
    let posicion = buscarCoincidencia(numeros, valorBuscado)

    if (posicion !== -1) {
        alert(`El número ${valorBuscado} se encuentra en la posición ${posicion} del arreglo.`)
    } else {
        alert("El número no se encuentra en el arreglo.")
    }
} else {
    alert("Número inválido.")
} */
