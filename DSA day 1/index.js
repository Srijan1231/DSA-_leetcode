'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const nums = {
        'positive':0,
        'negative':0,
        'zero':0,
    };
    arr.forEach(element => {
        if(element > 0){
            nums['positive'] += 1;
        }
        else if (element < 0) {
            nums['negative'] += 1;
        } else {
            nums['zero'] += 1;
        }
    });

    const keys = Object.keys(nums);
    keys.forEach(key => {
        const ratio = nums[key] / arr.length;
        console.log(ratio.toFixed(6));
    });

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
