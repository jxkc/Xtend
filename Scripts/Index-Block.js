//This is the code for the 'XBlocks'
//Needs unique generator
//Needs to be able to create div element

import {uniqueID} from "./GenerateID.js";

/**
 * Function to build a Div containing Text and an Image
 * and Place it in the "Block-Container"
 * uniqueID will be automatically added.
 * @param {*} blockText The Text
 * @param {*} imageSource The Image Path
 */
function generateBlock(blockText, imageSource){
    //Block is a div and has a unqiue ID.
    let block = document.createElement('div');
    const containerID = 'Block-Container';

    block.id = uniqueID(16);
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




test(30);
deleteBlock(Blocks[0]);