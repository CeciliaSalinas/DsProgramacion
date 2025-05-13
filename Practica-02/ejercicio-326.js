console.log('Practica Javascript 02 - E334')


let ingresaValor = prompt('Ingresá un valor en números:')
let eligeUnidad = prompt('Escribir la unidad de medida a convertir (kl, hl, dal, l, dl, cl, ml):')


let valorUnidadLitro = 0

switch (eligeUnidad) {
  case 'kl':
    valorUnidadLitro = ingresaValor * 1000
    break
  case 'hl':
    valorUnidadLitro = ingresaValor * 100
    break
  case 'dal':
    valorUnidadLitro = ingresaValor * 10
    break
  case 'l':
    valorUnidadLitro = ingresaValor
    break
  case 'dl':
    valorUnidadLitro = ingresaValor * 0.1
    break
  case 'cl':
    valorUnidadLitro = ingresaValor * 0.01
    break
  case 'ml':
    valorUnidadLitro = ingresaValor * 0.001
    break

  default:
    alert("Ingresá la unidad de medida: kl, hl, dal, l, dl, cl o ml.")
}

let resultadoConversion = 
        'Equivalencias del valor ingresado:\n' +

        `${valorUnidadLitro / 1000} kilolitros\n` +
        `${valorUnidadLitro / 100} hectolitros\n` +
        `${valorUnidadLitro / 10} decalitros\n` +
        `${valorUnidadLitro} litros\n` +
        `${valorUnidadLitro * 10} decilitros\n` +
        `${valorUnidadLitro * 100} centilitros\n` +
        `${valorUnidadLitro * 1000} mililitro`

    alert(resultadoConversion)