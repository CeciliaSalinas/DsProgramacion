console.log('Practica Javascript 04 - E173')

let ingresoA = prompt('Ingresar 10 numeros enteros:')
let arrayA = ingresoA.split('')
let largoArrayA = arrayA.length

let ingresoB = prompt('Ingresar 10 numeros enteros mas:')
let arrayB = ingresoB.split('')
let largoArrayB = arrayB.length

if(largoArrayA !== 10 ){
    alert(`Debés ingresar 10 numeros enteros. Ingresaste ${largoArrayA}.`)
}
else if(largoArrayB !== 10){
    alert(`Debés ingresar 10 numeros enteros. Ingresaste ${largoArrayB}.`)
} 
else{
    let arrayC = []
    for(let i = 0; i < 10; i++){
    arrayC[i] = arrayA[i] + arrayB[i]

    console.log(`ARREGLO A: \n${arrayA.join('\n')}\nARREGLO B: ${arrayB.join('\n')}\nARREGLO C: ${arrayC.join('\n')}`)
}  
for(let i = 0; i < 10; i++){
    arrayC[i] = arrayA[i] + arrayB[i]

    console.log(`ARREGLO A: ${arrayA}\n ARREGLO B: ${arrayB}\n ARREGLO C: ${arrayC}`)
}
}

