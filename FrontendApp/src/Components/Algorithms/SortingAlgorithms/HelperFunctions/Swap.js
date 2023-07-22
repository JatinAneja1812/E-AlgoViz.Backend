// function to swap 2 values 
/* a is the index of the first element
   b is the index of the second element 
   list the the array of the element */
export default function swap (a, b, list) {
    let temp = list[a]
    list[a] = list[b]
    list[b] = temp
}