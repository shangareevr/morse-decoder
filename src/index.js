const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
let str = [],
    subarr = [],
    res = '';
for (let i = 0; i < expr.length / 10; i++) {
    str[i] = expr.slice(i * 10, i * 10 + 10).replaceAll("10", ".").replaceAll('11', '-').replaceAll('0', '').replaceAll('**********', ' ');
    for (let key in MORSE_TABLE) {
        if (str[i] == key) {
            res = res + MORSE_TABLE[key];
        } else if (str[i] == ' ') {
            res = res + ' ';
            break;
        }
    }
}
return(res)
    }

module.exports = {
    decode
}




