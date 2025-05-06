console.log('Practica Javascript 01 - e131')

/*------- INYECTAR EN EL MAIN LOS ELEMENNTOS HTML-------*/
const titulo = document.createElement('h1')
titulo.textContent ='Calcular importe con o sin bonificación'

let main = document.querySelector('main') 

/*--------------- CREACION DEL FORMULARIO -------------*/
const etiquetaImporte = document.createElement('label')
etiquetaImporte.textContent = 'Importe bruto'

const ingresoImporte = document.createElement('input')
ingresoImporte.id = 'importe'
etiquetaImporte.appendChild(ingresoImporte)

const etiquetaTipo = document.createElement('label')
etiquetaTipo.textContent = 'Tipo de cliente'

const seleccionTipo = document.createElement('select')
seleccionTipo.id = 'tipo'

const opcionLibreria = document.createElement('option')
opcionLibreria.textContent = 'Libreria'
opcionLibreria.value = 'L'

const opcionParticular = document.createElement('option')
opcionParticular.textContent = 'Particular'
opcionParticular.value = 'P'

seleccionTipo.appendChild(opcionLibreria)
seleccionTipo.appendChild(opcionParticular)
etiquetaTipo.appendChild(seleccionTipo)

const etiquetaCantidad = document.createElement('label')
etiquetaCantidad.textContent = 'Cantidad'

const ingresoCantidad = document.createElement('input')
ingresoCantidad.id = 'cantidad'
etiquetaCantidad.appendChild(ingresoCantidad)

const btnCalcular = document.createElement('button')
btnCalcular.textContent = 'Calcular'
btnCalcular.id = 'btnCalcular'

const resultado = document.createElement('p')
resultado.id = 'resultado'

/* ----------AGREGAR AL DOM--------------------- */
main.appendChild(titulo)
main.appendChild(etiquetaImporte)
main.appendChild(etiquetaTipo)
main.appendChild(etiquetaCantidad)
main.appendChild(btnCalcular)
main.appendChild(resultado)


/* ---------CALCULAR EL IMPORTE--------------- */

btnCalcular.addEventListener('click', ()=>{
    
    let importe = ingresoImporte.value
    let tipoCliente = seleccionTipo.value
    let cantidad =  ingresoCantidad.value
    
    let bonificacion = 0

    if(tipoCliente === 'L'){
        if(cantidad <= 24){
            bonificacion = 0.20
        }
        else{
            bonificacion = 0.25
          }
      }
      else if (tipoCliente === 'P'){
        if(cantidad < 6){
            bonificacion = 0
        }
        else if (cantidad <= 18){
            bonificacion = 0.05
        }
        else{
            bonificacion = 0.10
        }
      }
      let importeFinal = importe -(importe * bonificacion)
      resultado.textContent = `El importe total es: ${importeFinal}`
})










