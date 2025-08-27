class Persona {
        
    static porObjeto( {nombre, apellido, pais} ){
        return new Persona(nombre, apellido, pais)
    }
    
            //recibo argumentos
    constructor(nombre, apellido, pais){
            
        //guardo argumento
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }

    getInfo(){
        console.log( `Info: ${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'Juan'
const apellido1 = 'Perno'
const pais1 = 'Argentina'

const mar = {
    nombre: 'Marcelo',
    apellido: 'Pla',
    pais:'España'
}

//¿como hago para discernir ente el primer bloque y el segundo?


const persona1 = new Persona(nombre1, apellido1, pais1)
/* const persona2 = new Persona(mar.nombre, mar.apellido, mar.pais) */
const persona2 =  Persona.porObjeto(mar)

persona1.getInfo() 
persona2.getInfo()