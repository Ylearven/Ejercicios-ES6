//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.Haz varios ejemplos y compruebalos.
//Sugerencia de función:
function findArrayIndex(array, text) {
  if (array.includes(text)) {
    return array.indexOf(text)
  } else {
    return 'no se encuentra'
  }
}

//Ej array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
console.log(findArrayIndex(mainCharacters, 'Han Solo'))
console.log(findArrayIndex(mainCharacters, 'Rey'))
console.log(findArrayIndex(mainCharacters, 'Paquito'))
