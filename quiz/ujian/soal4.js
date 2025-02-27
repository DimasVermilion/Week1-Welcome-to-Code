function xo(str) {
    let jumlahX = 0;
    let jumlaho = 0;

    for (let char of str) {
        if (char === 'x') jumlahX++;
        else if (char === 'o') jumlaho++;
    }
    return jumlahX === jumlaho;



}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true




