//This is a block for display users media

//This is the code for the 'XBlocks'
//Needs unique generator
//Needs to be able to create div element

import { uniqueID } from "./GenerateID";

/**
 * Custom DOM element.
 */
export class Block extends HTMLElement {
    constructor(text, img){
        super();

        this.uid = uniqueID(16);
        this.text = text;
        this.img = img;
    }

    //Create DOM element
    //Get it to the Block-Container
}