const prompt = require('prompt-sync')()

/**
 * text(): 
 * Grabs user input and returns String 
 * @param {string} title title for input interface 
 */

module.exports = function text(title) {
    var result = prompt(title);
    return result
}

