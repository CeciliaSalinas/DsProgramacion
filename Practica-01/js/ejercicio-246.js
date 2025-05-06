console.log('Practica Javascript 01 - E246')


const titulo = document.createElement('h1')
titulo.textContent ='Tabla de temperatura Fahrenheit a Celsius'

const tabla = document.createElement('table')
tabla.id = 'tabla'

const encabezado = document.createElement('tr')
const tituloFar = document.createElement('th')
tituloFar.textContent = 'Fahrenheit'
const tituloCel = document.createElement('th')
tituloCel.textContent = 'Celsius'


/*---- INYECTAR DATOS EN LAS COLUMNAS--- */
encabezado.appendChild(tituloFar)
encabezado.appendChild(tituloCel)
tabla.appendChild(encabezado)



/* -----BUCLE FOR PARA RECORRER E IMPRIMIR TABLA----- */
for( let far = 1; far <= 65; far ++ ){
    const convierteCelsius = 5/9 * (far - 32) 

    const fila = document.createElement ('tr')
    const celdaFar = document.createElement('td')
    const celdaCel = document.createElement ('td')

    celdaFar.textContent = far
    celdaCel.textContent = convierteCelsius

    fila.appendChild(celdaFar)
    fila.appendChild(celdaCel)
    tabla.appendChild(fila)
}

/*---- AGREGAR ALL DOM----- */

let main = document.querySelector('main') 
main.appendChild(titulo) 
main.appendChild(tabla) 