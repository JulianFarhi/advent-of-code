const fs = require('fs');
const readLine = require('readline');

async function process() {
    const stream = fs.createReadStream('data.text');
    const reader = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    })
    let total = 0;
    let previousValues = [];
    for await (const line of reader) {
        const valueParsed = parseInt(line, 10);
        let currentValues;
        if (previousValues.length === 3) {
            currentValues = previousValues.slice(1);
            currentValues.push(valueParsed);
            total += sum(currentValues) > sum(previousValues) ? 1 : 0;
            previousValues = currentValues;
        } else {
            previousValues.push(valueParsed);
        }
    }
    console.log('total :', total);
}

function sum(array) {
    return array.reduce((a, v) => a += v, 0)
}

process()
