const fs = require('fs');
const readLine = require('readline');

async function process() {
    const stream = fs.createReadStream('data.text');
    const reader = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    })
    const count = [];
    for await (const line of reader) {
        const splitLine = line.split('');
        splitLine.forEach((value, index) => {
            const parsedValue = parseInt(value, 10);
            if(!count[index]) {
                count[index] = { '0': 0, 1: '0'};
            }
            if (parsedValue) {
                count[index]['1']++
            } else {
                count[index]['0']++
            }
        })
    }
    const countResult = count.reduce((acc, numbers) => {
        if(numbers[1] > numbers[0]) {
            acc.gamma += '1';
            acc.epsilon += '0';
        } else {
            acc.gamma += '0';
            acc.epsilon += '1';
        }
        return acc;
    }, {gamma: '', epsilon: ''});

    console.log('total :', parseInt(countResult.gamma, 2) * parseInt(countResult.epsilon, 2));
}

process();
