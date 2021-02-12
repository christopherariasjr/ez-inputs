const prompt = require('prompt-sync')();

module.exports = {
    /**
     * text(): 
     * Grabs user input and returns String 
     * @param {string} title title for input interface 
     */
    text: (title) => {
        var result = prompt(title);
        return result
    },
    /**
     * boolean(): 
     * Grabs user input and returns String 
     * @param {string} title title for input interface 
     * @param {Object} [options] 
     */
    // boolean: (title, options) => {
    //     var selectOptions = {}
    //     if(!options) {
    //         selectOptions = {
    //                 "valueDisplaOptions": "[T] True | [f] False",
    //                 "values": [
    //                     {
    //                         "names": ['t', 'true', 1],
    //                         value: true,
    //                         defualt: true
    //                     },
    //                     {
    //                         "names": ['f', 'false', 0],
    //                         value: false,
    //                     },
    //                 ]
    //             }
    //     } else {
    //         try {

    //         } catch(err) {

    //         }
    //     }
    //     while(true) {
    //         var result = prompt(`${title} ${selectOptions.valueDisplaOptions}: `);
        
    //         mainLoop: for(var item of selectOptions.values) {
    //             if(result === '' && item.defualt) {
    //                 return item.value
    //             }

    //             for (var name of item.names) {
    //                 if(name == result.toLocaleLowerCase().trim()) {
    //                     return item.value
    //                 }
    //             }
    //         }
    //         console.log('Please enter the correct value.')
    //     }
    // },

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






