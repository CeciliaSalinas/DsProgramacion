console.log('Practica Javascript 06 - E275')

function multiplos(M, N){
    let contador = 0
    for(let i = 1; i < N; i++){
        if( i % M === 0){
            contador++
        }
    }
    return contador
}

let M = parseInt(prompt('Ingresá un número para el múltiplo:'))
let N = parseInt(prompt('Ingresá otro número para el largo del conjunto:'))
let muestraResultado = multiplos(M, N)

if(isNaN(M) || M <= 0 || isNaN(N) || N <= 0){
    alert('Los numeros ingresados deben ser positivos')
}
else {
    /* let muestraResultado = multiplos(M, N) */
    alert(`Se encontraron ${muestraResultado} múltiplos de ${M} entre 1 y ${N}.`)
}



