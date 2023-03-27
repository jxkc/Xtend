//Class to contain and manage Blocks.

import {Block} from "./Block"

/**
 * Essentially a Custom Document Object Model (DOM) that acts
 * just like an Array and contains all the data for a set of Blocks.
 * It includes similar approaches to push, pop and so on.
 */
export class BlockContainer extends HTMLElement {
    constructor(element){
        this.data = new Array();
        
        if(document.getElementById(element) instanceof HTMLDivElement)
            this.container = document.getElementById(element);
        else console.error("This is not a suitable Container.")
        
        super();
    }

    /**
     * This is a method to add a Block's ID to the Container.
     * @param {*} block The ID of the Block to be added.
     */
    add(block){
        if(block !== typeof(Block))
            console.error("This is not a Block.")
        else
            this.data.push(block.getID());
    }

    /**
     * This is a method to delete a Block by ID from the Container.
     * @param {*} block_id The ID of the Block to be deleted.
     */
    del(block){
        var todel; 

        if(block !== typeof(Block))
            todel = block;
        else
            console.error("This is not a valid Block.")
        
        todel.remove();
    }

    /**
     * This will create a Block when passed a Block object.
     * @param {*} block Requires a Block to be passed else returns an erorr. 
     */
    append(block){
        if(typeof(block) !== Block)
            console.error("Invalid, Element is not a block.")
        else {
            container.appendChild(block.getInner());
        }
    }
}