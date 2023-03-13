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

var Blocks = new Array();
var output = false;

// Function to generate a Unique String from a selection of Upper and lower case letters and numbers.
// Requires a number to be passed in to determine the length required.
function UniqueID(length) {
    var result = '';

    //characters defines the characters being used for the String
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //const charactersLength = characters.length;
    var counter = 0;
    // While the counter is less than the length
    //  Iterate through loop adding random chars to the result.
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    //returning the result.
    return result;
};

// Function to create a 'Block' with a text and image and UniqueID
// Function passes blockText and imageSource
function GenerateBlock(blockText, imageSource){
    //Block is a div and has a unqiue ID.
    let block = document.createElement('div');
    let container;

    block.id = UniqueID(8);
    getBlock(block.id);


    //if no image source, set to a default image.
    if(imageSource == "" || imageSource == " ")
        imageSource = './Images/Xtend_NoImage.png'

    
    // Sets the HTML components we want in a block.
    // CSS is dealt with in style.css
    block.innerHTML = `
        <img src="${imageSource}">
        <p>${blockText}</p>
    `;

    // Finds the ID where we want to put all these different Blocks
    // Adds the Block.
    container = document.getElementById('Blocks');
    container.appendChild(block);

    if(output == true)
        console.log("created new Block with ID: " + block.id);
}

// This function will get all the blocks currently on the page and add them to the list of blocks.
function getBlock(blockid){
    Blocks.push(blockid);

    if(output == true) {
        console.log("Retrieved: " + blockid);
        console.log("Size of Array is now: " + Blocks.length);
    }   
}

function test(amount){
    for(var i = 0; i < amount; i++){
        GenerateBlock("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex voluptatum quo tempore sequi numquam consectetur, unde ad rerum, ipsam quae sint sed a molestiae laboriosam eos temporibus deleniti. Facilis."
    +   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex voluptatum quo tempore sequi numquam consectetur, unde ad rerum, ipsam quae sint sed a molestiae laboriosam eos temporibus deleniti. Facilis."
    , " ");
    }
}

//Just a test for creating a few blocks!
test(30);