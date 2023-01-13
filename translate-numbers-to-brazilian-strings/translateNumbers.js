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

function translateNumber(n) {
    const digits = getDigits(n);
    const finalWord = getFinalWord(digits);
    return finalWord;
}

function getDigits(n) {
    return n.toString().split('');
}

function getFinalWord(digits) {
    let tens, ones, hundreds;

    switch (digits.length) {
        case 1:
            return numberMapping[n];
        case 2:
            tens = Number(digits[0] += "0");
            ones = Number(digits[1]);
            return `${numberMapping[tens]} e ${numberMapping[ones]}`;
        case 3:
            hundreds = Number(digits[0] += "00");
            tens = Number(digits[1]) === 1 ? Number(digits[1] += Number(digits[2])) : Number(digits[1] += "0");
            ones = Number(digits[2]);
            if (ones !== 0) {
                return `${numberMapping[hundreds]} e ${numberMapping[tens]} e ${numberMapping[ones]}`;
            }
            return `${numberMapping[hundreds]} e ${numberMapping[tens]}`;
        default:
            // Handle numbers greater than or equal to 1000 tbd
    }   
}

translateNumber(115)