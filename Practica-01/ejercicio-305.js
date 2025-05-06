console.log('Practica Javascript 01 - E305')

const titulo = document.createElement('h1')
titulo.textContent = 'Comparación de fechas'

let main = document.querySelector('main') 
main.appendChild(titulo) 



function crearInputFecha() {
    const etiquetaFecha = document.createElement('label')
   etiquetaFecha.textContent = 'Fechas'

    const ingresoFecha = document.createElement('input')
    ingresoFecha.type = 'date'
    etiquetaFecha.appendChild(ingresoFecha)
    main.appendChild(etiquetaFecha)
   
    return ingresoFecha
  }
  
/* -----CREAR INPUTS FECHAS---- */
  const fechaUno = crearInputFecha('Fecha 1: ')
  const fechaDos = crearInputFecha('Fecha 2: ')
  

  const btnComparar = document.createElement('button')
  btnComparar.textContent = 'Comparar fechas'
  main.appendChild(btnComparar)
  

  const resultado = document.createElement('p')
  main.appendChild(resultado)
  
  
  btnComparar.addEventListener('click', () => {
    const fUno = new Date(fechaUno.value)
    const fDos = new Date(fechaDos.value)
  
    if (!fechaUno.value || !fechaDos.value) {
      resultado.textContent = 'Debe ingresar las dos fechas.'
      return;
    }
  
    if (fUno > fDos) {
      resultado.textContent = 'La primera fecha es posterior.'
    } else if (fDos > fUno) {
      resultado.textContent = 'La segunda fecha es posterior.'
    } else {
      resultado.textContent = 'Ambas fechas son iguales.'
    }
  });
  