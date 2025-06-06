console.log('Practica Javascript 06 - E10')

function cuentaPalabra(texto){
    return texto.trim().split(" ").length
}

function cuentaVocales(texto){
    let contadorLetras = 0
    let vocales = 'AEIOUaeiouáéíóú'
    for( let letras of texto){
        if(vocales.includes(letras)){
            contadorLetras ++
        }
    }
    return contadorLetras
}

function cuentaEspacios(texto){
return (texto.trim().split(" ").length-1)
}

function cuentaPalabrasTexto(texto, palabra){
    let palabras = texto.toUpperCase().split(/\s+/)
    let buscaPalabra = palabra.toUpperCase()
    let contadorPalabraTexto = 0
    for( let pl of palabras ){
        if(pl === buscaPalabra){
            contadorPalabraTexto++
        }
    }
    return contadorPalabraTexto
}

let ingresoTexto = prompt('Ingresa un texto:')
let ingresoPalabra = prompt('Ingresar una palabra para buscar en el texto:')

let canidadVocales = cuentaVocales(ingresoTexto)
let cantidadPalabras  = cuentaPalabra(ingresoTexto)
let cantidadEspacio = cuentaEspacios(ingresoTexto)
let cantidadPalabraBuscada = cuentaPalabrasTexto(ingresoTexto, ingresoPalabra)

alert(`En la cadena ${ingresoTexto}\n se encontraron: \n${cantidadPalabras} palabras, ${canidadVocales} vocales 
y ${cantidadEspacio} espacios en blanco.\n Además, la palabra ${ingresoPalabra} se encontró ${cantidadPalabraBuscada} veces en el texto.`)











































/* 


// 4. Función para contar apariciones de una palabra en el texto
function contarPalabraEnTexto(texto, palabra) {
    let palabras = texto.toLowerCase().split(/\s+/);
    let palabraBuscada = palabra.toLowerCase();
    let contador = 0;
    for (let p of palabras) {
        if (p === palabraBuscada) {
            contador++;
        }
    }
    return contador;
}

// 🧾 Script principal
let texto = prompt("Ingresar un texto:");
let palabra = prompt("Ingresar una palabra a buscar:");

let totalPalabras = contarPalabras(texto);
let totalVocales = contarVocales(texto);
let totalEspacios = contarEspacios(texto);
let vecesPalabra = contarPalabraEnTexto(texto, palabra);

// 🧾 Mostrar resultado
alert(`En la cadena: "${texto}"\n\nSe encontraron:\n- ${totalPalabras}
palabras\n- ${totalVocales} vocales\n- ${totalEspacios}
espacios en blanco\n\nLa palabra "${palabra}" se encontró ${vecesPalabra} veces en el texto.`);
 */

