console.log('Practica Javascript 02 - E267')

/*--- pido al usuario la fecha de nacimiento---- */
let diaNacimiento = prompt('Ingresa tu día de naciemiento:')
let mesNacimiento = prompt('Ingresa tu mes de naciemiento:')
let anioNacimiento = prompt('Ingresa tu año de naciemiento:')


/* --------Obtengo la fecha actual-------------- */
let fechaActual = new Date()
let diaActual = parseInt(fechaActual.getDate())
             // enero es 0 en JS por eso se agrega +1
let mesActual = parseInt(fechaActual.getMonth() + 1 )
let anioActual = parseInt(fechaActual.getFullYear())


/*--- Valido que los valores que ingresa el usuario sean números ---*/
if (
    isNaN(diaNacimiento) || diaNacimiento < 1 || diaNacimiento > 31 ||
    isNaN(mesNacimiento) || mesNacimiento < 1 || mesNacimiento > 12 ||
    isNaN(anioNacimiento) || anioNacimiento > anioActual) {

    alert('La fecha no es válida, ingresar dia, mes y año en números')
} 
 else {
    /* ---calculo y muestro al edad del usuario----- */
    let edadEnAnios = anioActual - anioNacimiento;
    let edadEnMeses = mesActual - mesNacimiento;

    alert(`Tenés ${edadEnAnios} años y ${edadEnMeses} meses.`) 
}



