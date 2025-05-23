console.log('Practica Javascript 04 - E306')

let ingresoRemuneracion = parseInt(prompt('Ingresar remuneración por hora de trabajo:'))
/* let operarios = 50 */


if(ingresoRemuneracion <= 0){
    alert('La remuneración por hora debe ser mayor a 0:')
}
else{
    let arraySueldo = []
    let arrayHoras = []
    for(let i = 0; i < 50; i++){
        
        let horasTrabajadas = (Math.floor(Math.random()* 100))
        arrayHoras.push(horasTrabajadas)

        let sueldo = horasTrabajadas * ingresoRemuneracion
        arraySueldo.push(sueldo)
        console.log(`El operario n° ${i + 1}: tiene ${horasTrabajadas} horas trabajadas y su sueldo es: $ ${sueldo}`)
    }
}
