console.log('Practica Javascript 02 - E133')

/* ---se pide al usuario el ingreso de 6 numeros----- */
let numUno = parseInt(prompt('Ingresá el primer número:'))
let numDos = parseInt(prompt('Ingresá el segundo número:'))
let numTres = parseInt(prompt('Ingresá el tercer número:'))
let numCuatro = parseInt(prompt('Ingresá el cuarto número:'))
let numCinco = parseInt(prompt('Ingresá el quinto número:'))
let numSeis = parseInt(prompt('Ingresá el sexto número:'))

/* -----valido que esos 6 numeros sean positivos------- */
if (
    isNaN(numUno) || numUno <= 0 ||
    isNaN(numDos) || numDos <= 0 ||
    isNaN(numTres) || numTres <= 0 ||
    isNaN(numCuatro) || numCuatro <= 0 ||
    isNaN(numCinco) || numCinco <= 0 ||
    isNaN(numSeis) || numSeis <= 0
){
    alert('Todos los numeros ingresados deben ser positivos')
}
else{
    /* ----empiezo a comparar los numeros ingresados para deternimar el mayor con el primer numero que ingresado */
    let mayor = numUno;

    if (numDos > mayor){mayor = numDos} 
    if (numTres > mayor){mayor = numTres} 
    if (numCuatro > mayor) {mayor = numCuatro} 
    if (numCinco > mayor){mayor = numCinco} 
    if (numSeis > mayor) {mayor = numSeis} 

    alert(`El número mayor que ingresaste es: ${mayor}.`) 
}





