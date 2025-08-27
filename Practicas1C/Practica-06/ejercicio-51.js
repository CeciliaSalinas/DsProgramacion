console.log('Practica Javascript 06 - E51')

function solucionEcuacion(a, b, c){
    let discriminante = b*b - 4*a*c
    if( discriminante < 0){
        return null
    }
    if( discriminante == 0){
        let x = -b/ (2*a)
        return [x]
    }
    else{
        if(discriminante > 0){
            let x1 = (-b + Math.sqrt(discriminante  )) / (2*a)
            let x2 = (-b - Math.sqrt(discriminante)) / (2*a)
            return [x1, x2]
        }
    }
    return discriminante
}

let a = parseInt(prompt('Ingresar el coeficiente a')) 
let b = parseInt(prompt('Ingresar el coeficiente b')) 
let c = parseInt(prompt('Ingresar el coeficiente c')) 

let soluciones = solucionEcuacion(a, b, c)

if(a === 0){
    alert('El coeficiente A no puede ser 0 para una ecuación de segundo grado!')
}
else{
    /* let solucionesReales = soluciones.length */
    if(soluciones === null){
        alert(`La ecuacion no tiene soluciones reales.`)
    }
    else if(soluciones.length === 1){
        alert(`La ecuacion tiene una sola solución real: x = ${soluciones[0]} `)
    }
    else{
        alert(`La ecuación tiene dos soluciones reales: \n  x1 = ${soluciones[0]} \n x2 = ${soluciones[1]}`)
    }
}
