console.log('Practica Javascript 01 - E155')

/*------- ELEMENTOS HTML-------*/
const titulo = document.createElement('h1')
titulo.textContent ='Condición de alumnos'

let main = document.querySelector('main')
main.appendChild(titulo)


/* -------CREACION INPUT LEGAJO------- */
const etiquetaLegajo = document.createElement('label')
etiquetaLegajo.textContent = 'Ingresar número de legajo'

let ingresoLegajo = document.createElement('input')
etiquetaLegajo.appendChild(ingresoLegajo)
main.appendChild(etiquetaLegajo)
main.appendChild(document.createElement('br'))


/* -------CREACION INPUT NOTAS--------- */
let notas = []

    /* incremento los inputs */
for(let i =1; i <= 5; i++){
const etiquetaNota = document.createElement('label')
etiquetaNota.textContent = `Nota ${i}`

main.appendChild(document.createElement('br'))

let ingresoNota = document.createElement('input')
notas.push(ingresoNota)
etiquetaNota.appendChild(ingresoNota)

main.appendChild(etiquetaNota)
main.appendChild(document.createElement('br'))
}

/* ------EVALUAR LA CONDICION DE ALUMNO----------- */

const btnCondicion = document.createElement ('button')
btnCondicion.textContent = 'Condición final'
main.appendChild(btnCondicion)

const resultado = document.createElement('p')
main.appendChild(resultado)


btnCondicion.addEventListener('click', ()=>{

    let legajo = ingresoLegajo.value
    if(legajo === ''){
        resultado.textContent = 'Ingresar numero de legajo'
        return
    }

    /* recorro el array de notas */
    let aprobadas = 0
    for(let notaIngreso of notas){
        if(notaIngreso.value >= 6){
            aprobadas++
        }
    }

    let condicion = ''
    if (aprobadas >= 4) {
        condicion = 'Regular';
      } else if (aprobadas === 3) {
        condicion = 'A recuperar';
      } else {
        condicion = 'A recursar';
      }

resultado.textContent = `Legajo ${legajo} - Condición: ${condicion}`

})




