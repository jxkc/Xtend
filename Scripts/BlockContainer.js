//Class to contain and manage Blocks.

import {Block, MarketBlock} from "./Block.js"

/**
 * Essentially a Custom Document Object Model (DOM) that acts
 * just like an Array and contains all the data for a set of Blocks.
 * It includes similar approaches to push, pop and so on.
 */
export class BlockContainer {
    constructor(element){
        this.data = new Array();
        this.container = document.getElementById(element);
    }

    /**
     * This is a method to add a Block's ID to the Container.
     * @param {*} block The ID of the Block to be added.
     */
    add(block){
        // if(block !== typeof(Block))
        //     console.error("This is not a Block.")
        // else
            this.data.push(block);
    }

    /**
     * This is a method to delete a Block by ID from the Container.
     * @param {*} block_id The ID of the Block to be deleted.
     */
    del(block){
        var todel; 
        todel = document.getElementById(block.getID());
        todel.remove();
    }

    /**
     * This will create a Block when passed a Block object.
     * @param {*} block Requires a Block to be passed else returns an erorr. 
     */
    append(block){
        if(block instanceof MarketBlock){
            console.log("Market Block")
        } else if(block instanceof Block){
            console.log("Block")
        }

        let b = document.createElement('div')
        b.id = block.getID();
        b.innerHTML = block.getInner();

        this.container.appendChild(block);
    }
}