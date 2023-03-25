//This is a block for display users media

//This is the code for the 'XBlocks'
//Needs unique generator
//Needs to be able to create div element

import {uniqueID} from "./GenerateID.js";

var Blocks = new Array();
var output = true;

function GenerateBlock(blockText, imageSource){
    
    let block = document.createElement('div');
    let container;

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

function addBlock(blockid){
    Blocks.push(blockid); 

    if(output == true)
        console.log(blockid + " Has been added.")
}

function deleteBlock(blockid){
    var todel = document.getElementById(blockid);
    todel.remove();

    if(output == true)
        console.log("Removed Element: " + blockid);
}

function test(amount){
    for(var i = 0; i < amount; i++){
        GenerateBlock(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex voluptatum quo tempore sequi numquam consectetur, unde ad rerum, ipsam quae sint sed a molestiae laboriosam eos temporibus deleniti. Facilis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex voluptatum quo tempore sequi numquam consectetur, unde ad rerum, ipsam quae sint sed a molestiae laboriosam eos temporibus deleniti. Facilis.`
    , " ");
    }
}

//some tests
test(30);
deleteBlock(Blocks[0]);