//INSTANCIA UNICA DE MI CLASE

class Singleton {
    static instancia
    nombre = ''

    constructor(nombre = '') {

        if(!!Singleton.instancia){
            return Singleton.instancia
        }

        Singleton.instancia = this
        this.nombre = nombre

        /* console.log(Singleton.instancia) */
        /* return this */
    }
}

const instancia1 = new Singleton('Iroman')
const instancia2 = new Singleton('Spiderman')
const instancia3 = new Singleton('Black Panter')

console.log(`Nombre de la instancia1: ${instancia1.nombre}`)
console.log(`Nombre de la instancia1: ${instancia2.nombre}`)
console.log(`Nombre de la instancia1: ${instancia3.nombre}`)
