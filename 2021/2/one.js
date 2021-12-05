const fs = require('fs');
const readLine = require('readline');

async function process() {
    const stream = fs.createReadStream('data.text');
    const reader = readLine.createInterface({
        input: stream,
        crlfDelay: Infinity
    })
    const location = {
        x: 0,
        y: 0
    }
    const directions = {
        up: 'up',
        down: 'down',
        forward: 'forward'
    }
    for await (const line of reader) {
        const parsedLine = line.split(' ');
        const [direction, value] = parsedLine;
        const parsedValue = parseInt(value, 10);
        switch (direction) {
            case directions.up:
                location.y -= parsedValue;
                break;
            case directions.down:
                location.y += parsedValue;
                break;
            case directions.forward:
                location.x += parsedValue;
                break;
        }
    }
    console.log('total :', location.x * location.y);
}

process();
