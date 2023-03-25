//File to contain and manage Blocks.

/**
 * Essentially a Custom Document Object Model (DOM) that acts
 * just like an Array and contains all the data for a set of Blocks.
 * It includes similar approaches to push, pop and so on.
 */
class BlockContainer extends HTMLElement {
    constructor(){
        this.data = new Array();
        super();
    }

    /**
     * This is a method to add a Block to the Container.
     * @param {*} block_id The ID of the Block to be added.
     */
    add(block_id){
        this.data.push(block_id);
    }

    /**
     * This is a method to delete a Block to the Container.
     * @param {*} block_id The ID of the Block to be deleted.
     */
    del(block_id){
        const blockDel = document.getElementById(block_id);
        blockDel.remove();
    }
}

customElements.define("block-container", BlockContainer); 