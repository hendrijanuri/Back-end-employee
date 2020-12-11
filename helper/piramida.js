
const printPiramida = (n) => {
    let result = ''
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= i; j++) {
            console.log(result);
            result += '*'
        }
        // console.log('\n');
    }
    return result
}

console.log(printPiramida(5));