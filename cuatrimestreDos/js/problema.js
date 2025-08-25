const mar = {
    nombre: 'Marcelo',
    edad: 59,
    /* metodo para imprimir / mostrar los valores, creo una funcion */
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 36,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}
const carla = {
    nombre: 'Carla',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}

/* mar.imprimir()
pedro.imprimir()
carla.imprimir() */  
    
//con mayuscula indica que es una funcion que me va a servir para crear instancias ( no es funcion normal)
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea')
    this.nombre = this.nombre
    this.edad = edad

    //metodo
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`)
    }
}
//creo una nueva instancia del objeto persona
const marta = new Persona('Marta', 38)
const melisa = new Persona('Melisa', 30)
console.log(marta)

marta.imprimir()
melisa.imprimir()