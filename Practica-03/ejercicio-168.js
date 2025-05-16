console.log('Practica Javascript 03 - E168')

let numeroIngresado = parseInt(prompt('Ingresar un numero'))
let cantidadMultiplo = 0
let mostrarConjunto = ' '

for(let numNatural = 1;  cantidadMultiplo < numeroIngresado; numNatural ++){
    if( numNatural % 3 === 0 &&  numNatural % 5 !== 0 ){
        mostrarConjunto += numNatural +'\n'
            cantidadMultiplo ++
    }
}

alert(`Los  ${numeroIngresado}  primeros múltiplos de 3 que no son múltiplos de 5 son:\n ${mostrarConjunto}`)

