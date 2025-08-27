console.log('Practica Javascript 02 - E334')

/* -------pido al usuario el ingreso de datos---------- */
let ingresaNumero = prompt('Ingresar un número positivo:')
let numeroIngresado = parseInt(ingresaNumero)

/* -------valido que el numero ingresado sea positivo------- */
if (isNaN(numeroIngresado) || numeroIngresado <= 0) {
  alert('El valor ingresado debe ser un numero y mayor a 0')
} 
else {
  let opcion = prompt('Ingresar "S" para calcular la sumatoria o  "F" el factorial.')
  opcion = opcion.toLowerCase()


  let resultado = 0 

  if (opcion === "s") {

    for (let i = 1; i <= numeroIngresado; i++) {
      resultado = resultado + i
    }

     alert(`La sumatoria de ${numeroIngresado} es ${resultado}`)
  } 

  else if (opcion === "f") {
   resultado = 1 
  
    for (let i = 1; i <= numeroIngresado; i++) {
      resultado = resultado * i
    }
  
    alert(`El factorial de ${numeroIngresado} es ${resultado}`)
  } 
  
  else {
    alert('Se debe elegir una opción para poder calcular.')
  }
}
