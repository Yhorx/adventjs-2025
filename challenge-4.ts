

function decodeSantaPin(code: string): string | null {
    const re = /\d[+|-]+|-+|\<|\d/g
    const numbers = code.match(re);
    if (numbers!.length < 4) return null;
    let pin = '';
    numbers!.map((chars) => {
        let operation: number = Number(chars.at(0));
        chars.split('').forEach((char) => {
            if (char === '+') {
                operation++;
            }
            if (char === '-') {
                operation--;
            }
        });
        if (chars === '<') {
            pin += pin.at(-1);
            return
        }
        if (operation % 10 === 0) {
            pin += '0';
            return
        }
        if (operation % 10 <= 0) {
            pin += '9';
            return
        }
        pin += operation.toString();
    })
    console.log(pin);
}

decodeSantaPin('[1++][2-][3+][<]')
// "3144"

decodeSantaPin('[9+][0-][4][<]')
// "0944"

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)

decodeSantaPin('[1+++++++++][2--][3----][<]')