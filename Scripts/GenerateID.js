// Function to generate a Unique String from a selection of Upper and lower case letters and numbers.
// Requires a number to be passed in to determine the length required.
export function uniqueID(length) {
    var result = '';

    //characters defines the characters being used for the String
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var counter = 0;

    // While the counter is less than the length
    //  Iterate through loop adding random chars to the result.
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    
    return result;
};