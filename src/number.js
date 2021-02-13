const prompt = require('prompt-sync')();

/**
 * number(): 
 * Grabs user input and returns Number 
 * 
 * @param {string} title title for input interface 
 */
module.exports = function number(title) {
    var answer = prompt(title);
    while (!/^[0-9]+$/.test(answer)) {
        console.error("You did not enter a number.");
        answer = prompt(title);
    }
    return Number(answer)
} 