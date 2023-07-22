const SortingAlgoDescriptionEnum = {

    QUICK_SORT: "A fast and efficient sorting algorithm that uses a divide-and-conquer approach to recursively partition and sort elements.",
    MERGE_SORT: "A stable and efficient sorting algorithm that divides the input into smaller subarrays, sorts them individually, and then merges them in a sorted manner.",
    HEAP_SORT: "A comparison-based sorting algorithm that creates a binary heap data structure to repeatedly extract the maximum element and rearrange the remaining elements to form a sorted array.",
    BUBBLE_SORT: "A simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order, until the entire list is sorted.",
    SELECTION_SORT: "A simple sorting algorithm that repeatedly selects the minimum element from the unsorted part of the list and swaps it with the first element, gradually building a sorted sequence.",
    INSERTION_SORT: "A simple sorting algorithm that builds the final sorted array one element at a time by repeatedly inserting the current element into its correct position within the already sorted part of the array.",
    GNOME_SORT: "A sorting algorithm that iteratively compares adjacent elements and swaps them if they are in the wrong order, but also allows elements to move backward in the list if necessary, resulting in a sort that resembles the movement of a garden gnome.",
    SHAKER_SORT: "Also known as Cocktail Sort or Bidirectional Bubble Sort, it is a variation of the Bubble Sort algorithm that sorts the array in both directions, repeatedly moving the largest and smallest elements towards their respective positions, resulting in improved efficiency compared to standard Bubble Sort.",
    ODD_EVEN_SORT: "A parallel sorting algorithm that compares and swaps adjacent elements in alternating odd and even indexed positions, repeating the process until the array is sorted, making it suitable for parallel processing architectures.",
    PANCAKE_SORT: "A sorting algorithm that repeatedly flips the order of elements in the array using a 'Pancake flip' operation, aiming to bring the largest elements to the beginning of the array, ultimately achieving a sorted arrangement.",
    BITONIC_SORT: "A parallel sorting algorithm that works by creating a bitonic sequence, which is a sequence that first increases and then decreases or vice versa. It then repeatedly compares and swaps elements in the sequence until the entire array is sorted in ascending or descending order.",
    RADIX_SORT: "A non-comparative sorting algorithm that sorts elements based on their individual digits or bits. It processes the elements by grouping them into buckets according to each digit or bit position, achieving linear time complexity and making it efficient for sorting integers or fixed-length strings.",
    SHELL_SORT: "An in-place comparison sorting algorithm that improves upon the insertion sort by sorting elements at a specific interval. It starts with a large interval and gradually reduces it, sorting subsets of elements until the entire array is sorted, resulting in better performance for larger lists compared to insertion sort.",
    TIM_SORT: "A hybrid sorting algorithm derived from Merge Sort and Insertion Sort, designed to perform efficiently on real-world data by using a combination of stable sorting, run detection, and merging strategies.",
    BOGO_SORT: "A highly inefficient and random sorting algorithm that shuffles the elements of the array randomly until the array happens to be in sorted order. It has an extremely high time complexity and is typically used for educational purposes rather than practical sorting.",
    CUBE_SORT: "A non-comparative sorting algorithm that operates by recursively partitioning the data into sub-cubes and applying a specific sorting algorithm within each sub-cube, achieving a time complexity of O(n log n) on average.",
    CYCLE_SORT: "Cycle Sort is an in-place comparison-based sorting algorithm that minimizes the number of writes to the array by cyclically rotating elements to their correct positions, resulting in a sorted array."
}

export { SortingAlgoDescriptionEnum };