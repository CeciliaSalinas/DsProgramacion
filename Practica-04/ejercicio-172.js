console.log('Practica Javascript 04 - E172')


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


