//This is the code for the 'XBlocks'

//Needs unique generator
//Needs to be able to create div element

/*Creating Div Element -
    1. Fixed Div Size - (w 200 x h 400)
    2. Need to create Elements
        - Image (200 x 200)
        - Text Section (200 x 200)
    3. Need to give unique ID (string).
        - Unique ID Generator
        - Put Unique on ID for Element
    4. Keep 'Database' for Divs.
        - Image Path
        - Text String
        - Unique ID.
*/

// Function to generate a Unique String from a selection of Upper and lower case letters and numbers.
// Requires a number to be passed in to determine the length required.
function UniqueID(length: number): string {
    let result: string = '';

    //characters defines the characters being used for the String
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //const charactersLength = characters.length;

    let counter: number = 0;

    // While the counter is less than the length
    //  Iterate through loop adding random chars to the result.
    while(counter < length){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }

    //returning the result.
    return result;
};
