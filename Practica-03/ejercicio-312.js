 console.log('Practica Javascript 03 - E160')

 let sumarAltura = 0

 let listadoAlturas = []  
 let iniciaLegajo = 2000

 /* ---genero numeros de legajos--- */
 for(let i = 1; i <= 304; i++){

     let numeroLegajo = iniciaLegajo ++
    
    const alturaMinima = 130
    const alturaMaxima = 190
    let alturaAleatoria = Math.floor(Math.random() * (alturaMaxima - alturaMinima + 1)) + alturaMinima;

    sumarAltura = sumarAltura + alturaAleatoria

    if(alturaAleatoria < 165){
        listadoAlturas.push(numeroLegajo)
    }
 }

 let promedio = sumarAltura / 304

 console.log(`El promedio de las alturas es ${promedio}`)

 console.log(`Los legajos de alumnos con altura menor a 165 cm son: \n${listadoAlturas.join('\n')}`)




