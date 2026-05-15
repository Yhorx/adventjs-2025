// Santa quiere saber cuál es la primera letra no repetida en el nombre de un juguete.

// Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

// Si no hay ninguna, devuelve una cadena vacía ("").

function findUniqueToy(toy: string): string {

    const counts: Record<string, number> = {}

    for (const letter of toy.toLowerCase()) {
        counts[letter] = (counts[letter] || 0) + 1
    }

    const uniqueLetter = Object.entries(counts)
        .find(value => value[1] === 1)?.[0] || ''

    if (toy.split('').find(value => value === uniqueLetter) === uniqueLetter) {
        return uniqueLetter
    } else {
        return uniqueLetter.toUpperCase()
    }

}

findUniqueToy('Gift') // 'G'
// La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS') // ''
// Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR') // 'i'
// La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'