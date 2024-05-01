//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

//Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const swap = (array, pos1, pos2) => {
  let vacio = array[pos1]
  array[pos1] = array[pos2]
  array[pos2] = vacio
  return array
}
console.log(swap(fantasticFour, 2, 0))
