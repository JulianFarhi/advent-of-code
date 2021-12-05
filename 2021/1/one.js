const fs = require('fs');
const readLine = require('readline')

async function process() {
    const stream = fs.createReadStream('data.text');
    const reader = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    })
    let total = 0;
    let previousParsedLine = null;
    for await (const line of reader) {
        const currentParsedLine = parseInt(line);
        if(previousParsedLine) {
            total += currentParsedLine > previousParsedLine ? 1 : 0
        }
        previousParsedLine = currentParsedLine;
    }
    console.log('total :', total);
}

process()

