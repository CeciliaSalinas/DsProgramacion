class Persona {
    
    static _conteo = 0; // métodos estaticos 

    static get conteo(){
        return Persona._conteo + ' instancias'
    }

    static mensaje(){
        /* console.log( this.nombre) */
        console.log( 'Soy un método estático')
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //crear e inicializar un objeto de una clase, asignándole valores a sus atributos y realizando cualquier configuración necesaria
    //  antes de que el objeto esté listo para ser utilizado
    
    //el constructor se va a ejecutar en el momento que se crea una nueva instancia de la class
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){
        /* console.log('Hola') */
        this.codigo = codigo
        this.nombre = nombre
        this.frase = frase

        Persona._conteo++;
    }

    quiienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

      miFrase(){
        this.quiienSoy()
        console.log(`${this.codigo}  dice ${this.frase}`)
    }
    // ejemplo: establezco un valor en la comida para que siempre esté en mayúscula
    //argumento que recibe: comida
    // solo recibe un argumento , que es el que queremos establecer
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase()
    }

    //recuperar valor
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }
}

const spiderman = new Persona('Peter Parker', 'spider', 'soy tu amigo vecino spiderman')
const ironman = new Persona('Tony stark', 'ironman', 'yo soy ironman')
/* console.log(spiderman) */

//quiero ver cuantas instancias tengo de la class
/* Persona._conteo = 2 */

console.log('Conteo estático')
console.log(Persona.conteo) 


console.log(ironman) 

spiderman.miFrase()
/* ironman.miFrase() */

spiderman.setComidaFavorita = 'El postre de creza de la tía May'
spiderman.nemesis = 'El duende verde'

/* spiderman.comida = 'El duende verde' */ //modifico el valor porque comida no es una propiedad privada
console.log(spiderman.getComidaFavorita)
console.log(spiderman)
Persona.mensaje()

Persona.propiedadExterna = 'Hola mundo'
console.log(Persona.propiedadExterna)
console.log(Persona)
 