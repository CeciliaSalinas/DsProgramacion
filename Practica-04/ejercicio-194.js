 console.log('Practica Javascript 04 - E194')

 let ingresoNumero = parseInt(prompt('Ingresar un numero entero menor a 30:'))
 let conjuntoUno = []
 let conjuntoDos = []
 let conjuntoTres = []
 
if(ingresoNumero < 30 && ingresoNumero > 0){
    
    for(let i = 0; i < ingresoNumero; i++){
        conjuntoUno.push(Math.floor(Math.random()* 100))
        conjuntoDos.push(Math.floor(Math.random()* 100))
    }

    for(let i = 0; i < ingresoNumero; i++){
        if(i %  2 == 0){
            conjuntoTres.push(conjuntoUno[i])
        }
        else{
            conjuntoTres.push(conjuntoDos[i])
        }
    }
    console.log(`El conjunto n° Uno contiene los números ${conjuntoUno}`)
    console.log(`El conjunto n° Dos contiene los números ${conjuntoDos}`)
    console.log(`El conjunto n° tres contiene los números ${conjuntoTres}`)

}
else{
    alert('Ingresar un número entero entre 1 y 29!')
}





