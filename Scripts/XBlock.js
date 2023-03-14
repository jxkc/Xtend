//This is the code for the 'XBlocks'
//Needs unique generator
//Needs to be able to create div element

var Blocks = new Array();
var output = true;

// Function to generate a Unique String from a selection of Upper and lower case letters and numbers.
// Requires a number to be passed in to determine the length required.
function UniqueID(length) {
    var result = '';

    //characters defines the characters being used for the String
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var counter = 0;

    // While the counter is less than the length
    //  Iterate through loop adding random chars to the result.
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter += 1;
    }
    
    return result;
};

// Function to create a 'Block' with a text and image and UniqueID
// Function passes blockText and imageSource
function GenerateBlock(blockText, imageSource){
    //Block is a div and has a unqiue ID.
    let block = document.createElement('div');
    let container;

    block.id = UniqueID(16);
    addBlock(block.id);


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
function addBlock(blockid){
    Blocks.push(blockid); 

    if(output == true)
        console.log(blockid + " Has been added.")
}

// This function allows me to delete elements from the page based on their Block ID.
function deleteBlock(blockid){
    var todel = document.getElementById(blockid);
    todel.remove();

    if(output == true)
        console.log("Removed Element: " + blockid);
}

// This is a temporary test function until I implement the actual features that I need.
function test(amount){
    for(var i = 0; i < amount; i++){
        GenerateBlock("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex voluptatum quo tempore sequi numquam consectetur, unde ad rerum, ipsam quae sint sed a molestiae laboriosam eos temporibus deleniti. Facilis."
    +   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex voluptatum quo tempore sequi numquam consectetur, unde ad rerum, ipsam quae sint sed a molestiae laboriosam eos temporibus deleniti. Facilis."
    , " ");
    }
}

test(30);
deleteBlock(Blocks[0]);