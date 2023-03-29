import {Block} from "./Block.js"
import { BlockContainer } from "./BlockContainer.js";

/**
 * Test function!
 */
function test(){
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

test();