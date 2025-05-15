console.log('Practica Javascript 03 - E147')

let ingresoTexto = prompt('Ingresar un texto con 190 caracteres')
let textoSinEspacio = ingresoTexto.split(" ").join("")
console.log(textoSinEspacio)


if(textoSinEspacio.length < 190){
    alert('Debés ingresar un texto con más caracteres')
}
else if (textoSinEspacio.length > 190){
    alert('El largo del texto supera los 190 caracteres')
}
else{
    let cuentaPalabra = 0
    for(let i = 0; i < textoSinEspacio.length -1; i++){

        /* --tengo que verificar si en la posicion de i, aparece la palabra/silaba  "pa"-- */
        if(textoSinEspacio.substring(i, i + 2) === "pa"){
            cuentaPalabra ++
        }
    }
    alert(`Las letras "pa" aparece ${cuentaPalabra} veces`)
}



/* TEXTO DE PRUEBA CON 190 CARACTERES:
aaaaaaaaaa papapapaaa wepeaspaxv gthuipasac paapetyupa bnghkepaxc mmmmmmmmmm retydfghpa jkgdrtywqn sdcvnhpaap papapapaaa wepeaspaxv gthuipasac paapetyupa bnghkepaxc mmmmmmmmmm retydfghpa jkgdrtywqn sdcvnhpaap
 */
