import swap from "./HelperFunctions/Swap"

export default function bubbleSort(blocks) {
    
    const dupBlocks = blocks.slice();   // copy of the blocks to be manipulated 
    const order = [];                   // array that stores an array of what blocks are manipulated at each step

    for (let i = 0; i < dupBlocks.length; i++) {             // iterate through list i times, once for each item 
        for (let j = 0; j < dupBlocks.length-i-1; j++) {     // each iteration through list decrease by number of items already sorted 
            order.push([j, j+1, null, null])
            if (dupBlocks[j] > dupBlocks[j+1]) {             // swap adjacent items if first item is larger 
                swap(j, j+1, dupBlocks);
                order.push([j, j+1, dupBlocks.slice(), null]);
            }
        }
        order.push([null, null, null, dupBlocks.length-i-1]);
    }
    return order;
}
