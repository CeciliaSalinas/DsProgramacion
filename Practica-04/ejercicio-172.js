console.log('Practica Javascript 04 - E172')
/* Ingresar 30 elementos de tipo carácter en un arreglo y luego mostrar sólo los elementos que sean
distintos de “*”, indicando también la posición que dicho elemento ocupa en el arreglo. */

let ingresoCaracteres = prompt('Ingresar 30 caracteres:')
/* ingresoCaracteres = ingresoCaracteres.trim() */
ingresoCaracteres = ingresoCaracteres.replace(/\s/g, '')
let largoCadena = ingresoCaracteres.length


if (largoCadena !== 30) {

    alert(`Debés ingresar exactamente 30 caracteres. Ingresaste ${largoCadena}.`)
} 
else {

    let caracteres = ingresoCaracteres.split('')
    let largoCaracteres = caracteres.length

    for (let i = 0; i < largoCaracteres; i++) {

    if (caracteres[i] !== '*') {
        console.log(`Caracter ${caracteres[i]} ubicado en la posición ${i}`)  
        }
    }
}


