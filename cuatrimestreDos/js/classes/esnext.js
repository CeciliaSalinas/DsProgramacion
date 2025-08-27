class Rectangulo{
    //area = 0
    #area = 0

    constructor( base = 0, altura = 0){
        this.base = base
        this.altura = altura

       /*  this.area = this.base * this.altura */
       // # SE USA PARA QUE SEA UNA PROPIEDAD PRIVADA, QUE NO SE PUEDA MODIFICAR
       this.#area = this.base * this.altura  
    }

    calcularArea(){
        console.log(this.#area * 2)
    }
}

const rectangulo = new Rectangulo( 10, 15)
//rectangulo.#area = 100
rectangulo.calcularArea()
console.log(rectangulo)

