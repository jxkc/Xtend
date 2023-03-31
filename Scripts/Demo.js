import {Block, MarketBlock} from "./Block.js"
import { BlockContainer } from "./BlockContainer.js";

/**
 * Generates blocks for home page!
 */
function home(){
    let bC = new BlockContainer("Blocks");
    let b = new Array();

    //pushes some data to 'b'
    for(var i = 0; i < 10; i++){
        b.push(new Block("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, tempora quidem. Dolore magni, sunt commodi enim ipsum quo voluptas ratione nesciunt aliquid consequatur, vitae voluptates nobis, fuga voluptatem ea quam!", " "))
    }

    //appends the data to 'b'
    for(var i = 0; i < b.length; i++){
        bC.append(b[i])  
    }
}

/**
 * Generates blocks for the market page!
 */
function market(){
    let mC = new BlockContainer("MarketBlocks");
    let m = new Array();

    //pushes some data to 'b'
    for(var i = 0; i < 10; i++){
        m.push(new MarketBlock("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, tempora quidem. Dolore magni, sunt commodi enim ipsum quo voluptas ratione nesciunt aliquid consequatur, vitae voluptates nobis, fuga voluptatem ea quam!", " "))
    }

    //appends the data to 'b'
    for(var i = 0; i < m.length; i++){
        mC.append(m[i])  
    }
}

/**
 * Generates blocks for the support page!
 */
function support(){

}

market();