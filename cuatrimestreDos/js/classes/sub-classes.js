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

    //el constructor se va a ejecutar en el momento que se crea una nueva instancia de la class
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){
        /* console.log('Hola') */
        this.codigo = codigo
        this.nombre = nombre
        this.frase = frase

        Persona._conteo++;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

      miFrase(){
        this.quienSoy()
        console.log(`${this.codigo}  dice ${this.frase}`)
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase()
    }

    //recuperar valor
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }
}


class Heroe extends Persona{
    clan = 'Sin clan'

    //tengo que llamar al constructor de la clase padre
                //recibe los parametros de persona
    constructor(nombre, codigo, frase){

        //con esta palabra reservada llamo al constructor padre
        super(nombre,codigo,frase)
         this.clan = 'Los Avenger'
    }

    quienSoy(){
       console.log(`Soy ${this.nombre}, ${this.clan}`) 
       super.quienSoy()
    }
}

//const spiderman = new Persona('Peter Parker', 'spider', 'soy tu amigo vecino spideran')

const spiderman = new Heroe(' Peter Parker ', 'Spider', 'soy tu amigo vecino spideran')

console.log(spiderman)
spiderman.quienSoy()
 
/* EN LA CLASE PADRE SE DEFINE TODO LO GENERAL 
    EN LAS CLASES HIJAS SE LE DA LLA PARTICULARIDAD DE CA  */