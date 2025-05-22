console.log('Practica Javascript 04 - E306')

/* let ingresoRemuneracion = parseInt(prompt('Ingresar remuneración por hora de trabajo:'))
let operarios = 50
let arraySueldo = []
let arrayHoras = []

function calcularSueldo(){}
for(let i = 0; i < ingresoRemuneracion; i++){

}
 */


/* function calcularSueldos() {
    let remuneracion = parseFloat(prompt("Ingresá la remuneración por hora:"));
    let horasTexto = prompt("Ingresá las horas trabajadas de los 50 operarios, separadas por comas:");

    let horas = horasTexto.split(',').map(h => parseInt(h.trim()));
    
    if (horas.length !== 50) {
        alert(`Error: ingresaste ${horas.length} valores. Debés ingresar exactamente 50.`);
        return;
    }

    let sueldos = horas.map(h => h * remuneracion);

    for (let i = 0; i < sueldos.length; i++) {
        console.log(`Operario ${i + 1}: Sueldo = ${sueldos[i]}`);
    }
}
 */