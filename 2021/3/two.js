const fs = require('fs');
const readLine = require('readline');

async function process() {
    const stream = fs.createReadStream('data.text');
    const reader = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    })

    for await (const line of reader) {

    }
}

process();
