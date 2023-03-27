import {Block} from "./Block.js"
import { BlockContainer } from "./BlockContainer.js";

/**
 * Test function!
 */
function test(){
    let bC = new BlockContainer("Blocks");
    let b1 = new Block("I Love Bee", " ");

    console.log(b1)
    console.log(typeof(b1))

    bC.add(b1);

    console.log(bC.data[0]);

    bC.append(b1);
}

test();