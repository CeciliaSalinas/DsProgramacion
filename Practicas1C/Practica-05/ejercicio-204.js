console.log('Practica Javascript 05 - E204')

function getDia(mes){
    if(mes === 2){
        return 28
    }
    else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
        return 30
    }
    else if ( mes >= 1 && mes <= 12){
        return 31
    }
}

let ingresoMes = parseInt(prompt('Ingresar un numero del 1 al 12:'))

if(ingresoMes >= 1 && ingresoMes <= 12){
    let dias = getDia(ingresoMes)

    alert(`El mes ${ingresoMes} tiene ${dias}`)
}
else{
    alert(`El mes ingresado no es válido!`)
}
