console.log('Practica Javascript 02 - E334')

/* -------pido al usuario el ingreso de datos----------- */
let ingresaValor = prompt('Ingresá un valor en números:')
let eligeUnidad = prompt('Escribir la unidad de medida a convertir (kl, hl, dal, l, dl, cl, ml):')

// Convertimos el valor a litros primero
let valorUnidadLitro;

if (eligeUnidad === 'kl') {
    valorUnidadLitro = ingresaValor * 1000
} else if (eligeUnidad === 'hl') {
    valorUnidadLitro = ingresaValor * 100
} else if (eligeUnidad === 'dal') {
    valorUnidadLitro = ingresaValor * 10
} else if (eligeUnidad === 'l') {
    valorUnidadLitro = ingresaValor
} else if (eligeUnidad === 'dl') {
    valorUnidadLitro = ingresaValor * 0.1
} else if (eligeUnidad === 'cl') {
    valorUnidadLitro = ingresaValor * 0.01
} else if (eligeUnidad === 'ml') {
    valorUnidadLitro = ingresaValor * 0.001
}
 else {
    alert("Unidad inválida. Usá: kl, hl, dal, l, dl, cl, ml.")
}


if (unidadEnLitro) {
    let resultadoConversion = 
        "Equivalencias del valor ingresado:\n" +
        `${valorUnidadLitro / 1000} kilolitro\n` +
        `${valorUnidadLitro / 100} hectolitro\n` +
        `${valorUnidadLitro / 10} decalitro\n` +
        `${valorUnidadLitro} litro\n` +
        `${valorUnidadLitro * 10} decilitro\n` +
        `${valorUnidadLitro * 100} centilitro\n` +
        `${valorUnidadLitro * 1000} mililitro`

    alert(resultadoConversion)
}
