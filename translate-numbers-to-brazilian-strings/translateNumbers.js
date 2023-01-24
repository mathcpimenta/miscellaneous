const numberMapping = {
    0: "zero",
    1: "um",
    2: "dois",
    3: "três",
    4: "quatro",
    5: "cinco",
    6: "seis",
    7: "sete",
    8: "oito",
    9: "nove",
    10: "dez",
    11: "onze",
    12: "doze",
    13: "treze",
    14: "quatorze",
    15: "quinze",
    16: "dezesseis",
    17: "dezessete",
    18: "dezoito",
    19: "dezenove",
    20: "vinte",
    30: "trinta",
    40: "quarenta",
    50: "cinquenta",
    60: "sessenta",
    70: "setenta",
    80: "oitenta",
    90: "noventa",
    100: "cem",
    200: "duzentos",
    300: "trezentos",
    400: "quatrocentos",
    500: "quinhentos",
    600: "seiscentos",
    700: "setessentos",
    800: "oitocentos",
    900: "novecentos",
}

function numberToBrazilianWords(number) {
    
    if (number < 0) {
        return `menos ${numberToBrazilianWords(Math.abs(number))}`;
    }
    
    if (number < 20) {
        return numberMapping[number]
    } else if (number < 100) {
        const tens = Math.floor(number / 10) * 10;
        const units = number % 10

        if(units === 0) {
            return `${numberMapping[tens]}`
        } else {
            return `${numberMapping[tens]} e ${numberMapping[units]}`
        }

    } else if (number > 100 && number < 200) {
        const tens = number % 100
        
        return `cento e ${numberToBrazilianWords(tens)}`

    } else if (number < 1000) {
        const hundreds = Math.floor(number / 100) * 100;
        const remaining = number % 100

        if(remaining === 0) {
            return `${numberMapping[hundreds]}`
        } else {
            return `${numberMapping[hundreds]} e ${numberToBrazilianWords(remaining)}`
        }
    } else {
        return number
    }
}

console.log(numberToBrazilianWords(8))
console.log(numberToBrazilianWords(15))
console.log(numberToBrazilianWords(21))
console.log(numberToBrazilianWords(100))
console.log(numberToBrazilianWords(110))
console.log(numberToBrazilianWords(115))
console.log(numberToBrazilianWords(129))
console.log(numberToBrazilianWords(120))
console.log(numberToBrazilianWords(121))
console.log(numberToBrazilianWords(1384))
console.log(numberToBrazilianWords(984))
console.log(numberToBrazilianWords(-984))

