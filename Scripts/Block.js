import { uniqueID } from "./GenerateID.js";

/**
 * Custom DOM element.
 */
export class Block {
    constructor(text, img){
            //UID and Text.
            this.uid = uniqueID(16);
            this.text = text;

            //Image.
            if(img == undefined || img === " ")
                this.img = './Images/Xtend_NoImage.png'
            else
                this.img = img;
    }

    /**
     * @returns The ID of the Block.
     */
    getID(){
        return this.uid;
    }

    /**
     * @returns Returns the InnerHTML of the Block.
     */
    getInner(){
        const inn = `
            <img src="${this.img}">
            <p>${this.text}</p>
        `;
        return inn;
    }
}

export class MarketBlock extends Block{
    constructor(text, img){
        super();
    }

    /**
     * @returns Retunrs the InnerHTML for the Market Block.
     */
    getInner(){
        const inn = `
            <img src="${this.img}">
            <p>${this.text}</p>
            <button>+</button>
        `;
        return inn;
    }
}