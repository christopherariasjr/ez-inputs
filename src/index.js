const prompt = require('prompt-sync')();

module.exports = {
    /**
     * text(): 
     * Grabs user input and returns String 
     * 
     * @param {string} title title for input interface 
     */
    text: (title) => {
        var result = toString(prompt(title))
        return result
    },

    /**
     * boolean(): 
     * Grabs user input and returns String 
     * 
     * @param {string} title title for input interface 
     */
    boolean: (title) => {
    
    },

    /**
     * number(): 
     * Grabs user input and returns Number 
     * 
     * @param {string} title title for input interface 
     */
    number: (title) => {
        var answer = prompt(title);
        while (!/^[0-9]+$/.test(answer)) {
            console.error("You did not enter a number.");
            answer = prompt(title);
        }
        return Number(answer)
    }
}






