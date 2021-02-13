const prompt = require('prompt-sync')();

/**
 * boolean(): 
 * Grabs user input and returns String 
 * @param {string} title title for input interface 
 * @param {array} questions
 */
module.exports = function question(title, answers) {
    var result = prompt(title);
    if(!answers.length === 2) {
        throw new Error('"answers" array needs 2 objects')
    }

    while(true){
        for( var answer of answers) {
            if(result === "" && answer.default){
                return answer.value
            }
            if(answer.name.toLowerCase === result) {
                return answer.value
            }
        }
        console.log()
        console.log("Please enter an option.")
        console.log()
        result = prompt(title);
    }  
}