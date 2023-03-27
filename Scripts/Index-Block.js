//This is the code for the 'XBlocks'
//Needs unique generator
//Needs to be able to create div element

import {uniqueID} from "./GenerateID.js";

function generateBlock(blockText, imageSource){
    
    let block = document.createElement('div');
    const containerID = 'Block-Container';

    block.id = uniqueID(16);
    addBlock(block.id);

    if(imageSource == "" || imageSource == " ")
        imageSource = './Images/Xtend_NoImage.png'

    block.innerHTML = `
        <img src="${imageSource}">
        <p>${blockText}</p>
    `;

    container = document.getElementById('Blocks');
    container.appendChild(block);

    if(output == true)
        console.log("created new Block with ID: " + block.id);
}