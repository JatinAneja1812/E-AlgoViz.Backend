export default function GetPseudoCode(title) {
  // Replace this with the actual code generation logic for each algorithm
  let code = "";

  switch (title) {
    case "A* Search":
      code = `
        Here's a simple pseudo code representation of the A* algorithm:

        Step 1: Initialize A* Algorithm
        --------------------------------
        1.1 Create an open set to store nodes to be evaluated.
        1.2 Create a closed set to store nodes that have already been evaluated.
        1.3 Initialize the gScore dictionary to store the cost from the start node to each node.
        1.4 Initialize the fScore dictionary to store the total estimated cost from the start node to each node.
        1.5 Initialize the start node with a cost of 0 and add it to the open set.
        1.6 Assign a heuristic estimate (usually the straight-line distance) from the start node to the goal node.

        Step 2: Main Loop
        ------------------
        2.1 While the open set is not empty, continue to the next step.
        2.2 Find the node in the open set with the lowest total cost (cost from the start node plus heuristic estimate).
        2.3 Remove the node from the open set and add it to the closed set.
        2.4 If this node is the goal, the path has been found; reconstruct and return the path.

        Step 3: Expansion
        ------------------
        3.1 Generate all neighboring nodes (adjacent cells in a grid) of the current node that are not in the closed set.
        3.2 For each neighbor, continue to the next step.
        3.3 Calculate the tentative cost from the start node to this neighbor through the current node.
        3.4 If this tentative cost is less than the neighbor's existing cost (or the neighbor is not in the open set), update the neighbor's cost and set its parent to the current node.
        3.5 If the neighbor is not in the open set, add it to the open set with its calculated cost.

        Step 4: Termination
        ---------------------
        4.1 If the open set becomes empty, and the goal node has not been reached, there is no path to the goal, and the search terminates.

        Step 5: Reconstruct Path (if goal is reached)
        ---------------------------------------------
        5.1 Reconstruct the path from the goal node to the start node using the parent information stored in the nodes.
        5.2 Return the reconstructed path as the result.

        Step 6: End of Algorithm
        -------------------------
        6.1 The A* algorithm has successfully found the shortest path from the start node to the goal node.
        `;
      break;
    case "Dijkstra":
      code = `
        Here's a simple pseudo code representation of the Dijkstra algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create an empty set to store unvisited nodes.
        1.2 Initialize a distance dictionary with all nodes, setting the distance to the start node to 0 and all others to infinity.
        1.3 Set the current node as the start node.

        Step 2: Main Loop
        ------------------
        2.1 While there are unvisited nodes:
        2.1.1 Select the unvisited node with the smallest known distance as the current node.
        2.1.2 If the current node is the goal node, stop.

        2.2 For each neighbor of the current node:
        2.2.1 Calculate the tentative distance from the start node to the neighbor through the current node.
        2.2.2 If the tentative distance is less than the current recorded distance for the neighbor:
            2.2.2.1 Update the distance for the neighbor with the tentative distance.
            2.2.2.2 Set the current node as the neighbor's predecessor.

        2.3 Mark the current node as visited by removing it from the unvisited set.

        Step 3: Termination
        ---------------------
        3.1 If the goal node has been visited or the smallest distance among unvisited nodes is infinity, stop.

        Step 4: Path Reconstruction (if goal is reached)
        -------------------------------------------------
        4.1 Initialize an empty path list.
        4.2 Set the current node to the goal node.
        4.3 While the current node is not the start node:
        4.3.1 Add the current node to the beginning of the path.
        4.3.2 Set the current node to its predecessor.
        4.4 Add the start node to the beginning of the path to complete it.

        Step 5: End of Algorithm
        -------------------------
        5.1 The Dijkstra's algorithm has successfully found the shortest path from the start node to the goal node.
        5.2 Return the path as the result.
        `;
      break;
    case "Greedy Best First Search":
      code = `
        Here's a simple pseudo code representation of the Greedy Breath First search algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create an open priority queue to store nodes to be evaluated, ordered by the heuristic estimate.
        1.2 Initialize the start node.
        1.3 Initialize the goal node.
        1.4 Push the start node into the open priority queue.

        Step 2: Main Loop
        ------------------
        2.1 While the open priority queue is not empty:
        2.1.1 Pop the node with the lowest heuristic estimate (closest to the goal) from the open priority queue.
        2.1.2 If the popped node is the goal node, the path has been found; reconstruct and return the path.
        2.1.3 Mark the popped node as visited.

        2.2 Generate all neighboring nodes of the current node that are not visited.
        2.3 For each unvisited neighbor:
        2.3.1 Calculate the heuristic estimate from the neighbor to the goal node.
        2.3.2 Push the neighbor into the open priority queue.
        2.3.3 Set the neighbor's parent as the current node.

        Step 3: Termination
        ---------------------
        3.1 If the open priority queue becomes empty, and the goal node has not been reached, there is no path to the goal, and the search terminates.

        Step 4: Reconstruct Path (if goal is reached)
        ---------------------------------------------
        4.1 Reconstruct the path from the goal node to the start node using the parent information stored in the nodes.
        4.2 Return the reconstructed path as the result.

        Step 5: End of Algorithm
        -------------------------
        5.1 The Greedy Best-First Search algorithm has successfully found a path to the goal node, which may not be the shortest path.

        `;
      break;
    case "Breath First Search":
      code = `
        Here's a simple pseudo code representation of the Breath First search algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create a queue to store nodes for exploration.
        1.2 Create a set to keep track of visited nodes.
        1.3 Initialize the start node.
        1.4 Initialize the goal node.
        1.5 Enqueue the start node into the queue.
        1.6 Mark the start node as visited.

        Step 2: Main Loop
        ------------------
        2.1 While the queue is not empty:
        2.1.1 Dequeue the first node from the queue (front of the queue).
        2.1.2 If the dequeued node is the goal node, the path has been found; reconstruct and return the path.
        2.1.3 Get all unvisited neighbors of the dequeued node.
        2.1.4 Mark each neighbor as visited and enqueue it into the queue.
        2.1.5 Set the parent of each neighbor as the dequeued node.

        Step 3: Termination
        ---------------------
        3.1 If the queue becomes empty and the goal node has not been reached, there is no path to the goal, and the search terminates.

        Step 4: Reconstruct Path (if goal is reached)
        ---------------------------------------------
        4.1 Reconstruct the path from the goal node to the start node using the parent information stored in the nodes.
        4.2 Return the reconstructed path as the result.

        Step 5: End of Algorithm
        -------------------------
        5.1 The Breadth-First Search algorithm has successfully found the shortest path from the start node to the goal node in an unweighted graph.

        `;
      break;
    case "Bidirectional Breath First Search":
      code = `
        Here's a simple pseudo code representation of the Bidirectional Breath First search algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create two queues: forwardQueue and backwardQueue.
        1.2 Create two sets: forwardVisited and backwardVisited.
        1.3 Initialize the source node for the forward search and the goal node for the backward search.
        1.4 Enqueue the source node into forwardQueue and the goal node into backwardQueue.
        1.5 Mark the source node as visited in forwardVisited and the goal node as visited in backwardVisited.

        Step 2: Main Loop
        ------------------
        2.1 While both forwardQueue and backwardQueue are not empty:
        2.1.1 Dequeue a node from forwardQueue (forwardCurrent).
        2.1.2 If forwardCurrent is in backwardVisited, an intersection point is found; reconstruct and return the path.
        2.1.3 Enqueue all unvisited neighbors of forwardCurrent into forwardQueue and mark them as visited in forwardVisited.
        
        2.1.4 Dequeue a node from backwardQueue (backwardCurrent).
        2.1.5 If backwardCurrent is in forwardVisited, an intersection point is found; reconstruct and return the path.
        2.1.6 Enqueue all unvisited neighbors of backwardCurrent into backwardQueue and mark them as visited in backwardVisited.

        Step 3: Termination
        ---------------------
        3.1 If an intersection point is found or both queues become empty without finding one, the search terminates.

        Step 4: Reconstruct Path (if intersection is found)
        ----------------------------------------------------
        4.1 If an intersection point is found, reconstruct the path:
        4.1.1 Start from the intersection point and trace back to the source node, storing nodes in the forward path.
        4.1.2 Start from the intersection point and trace back to the goal node, storing nodes in the backward path.
        4.1.3 Combine the forward and backward paths to create the shortest path from the source to the goal.

        Step 5: End of Algorithm
        -------------------------
        5.1 The Bidirectional BFS algorithm has successfully found the shortest path or determined that there's no path between the source and goal nodes.

        `;
      break;
    case "Depth First Search":
      code = `
        Here's a simple pseudo code representation of the Depth First search algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create a stack to store nodes for exploration (or use recursion).
        1.2 Create a set to keep track of visited nodes.
        1.3 Initialize the start node.
        1.4 Initialize the goal node (if searching for a specific target).
        1.5 Push the start node onto the stack (or start the recursive function with the start node).
        1.6 Mark the start node as visited.

        Step 2: Main Loop
        ------------------
        2.1 While the stack is not empty:
        2.1.1 Pop the top node from the stack (or use the current node in the recursive function) as the current node for exploration.
        2.1.2 If the current node is the goal node (if you're searching for a specific target), you've found the path; reconstruct and return the path.
        2.1.3 Get all unvisited neighbors of the current node.
        2.1.4 Push these neighbors onto the stack (or call the recursive function with each neighbor) and mark them as visited.

        Step 3: Termination
        ---------------------
        3.1 If the stack becomes empty and the goal node has not been reached, there is no path to the goal. The search terminates in this case.

        Step 4: Reconstruct Path (if goal is reached)
        ------------------------------------------------
        4.1 If the goal node is reached during the exploration, you can reconstruct the path:
        4.1.1 Backtrack from the goal node using the parent information stored in the nodes.
        4.1.2 Return the reconstructed path as the result.

        Step 5: End of Algorithm
        -------------------------
        5.1 The Depth-First Search algorithm has successfully found a path to the goal or determined that there's no path.
        `;
      break;
    case "Swarm":
      code = `
        Here's a simple pseudo code representation of the Swarm search algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create a priority queue for node exploration, named 'priorityQueue'.

        1.2 Add the start node to 'priorityQueue' and mark it as visited.

        1.3 Initialize an array, 'visitedNodesInOrder', to store visited nodes in order.

        Step 2: Main Loop
        ------------------
        2.1 While 'priorityQueue' is not empty:
        2.1.1 Sort 'priorityQueue' based on the sum of distance and heuristic.

        2.1.2 Dequeue the node with the minimum sum of distance and heuristic as 'currentNode'.

        2.1.3 If 'currentNode' is the goal node:
            2.1.3.1 Reconstruct and return 'visitedNodesInOrder'.

        2.1.4 Mark 'currentNode' as visited.

        2.1.5 Get unvisited neighbors of 'currentNode'.

        2.1.6 For each unvisited neighbor:
            2.1.6.1 Calculate the neighbor's distance from the start node.
            2.1.6.2 Calculate the Manhattan distance heuristic from the neighbor to the goal node.
            2.1.6.3 Calculate a weighted heuristic for the neighbor (distance * 2 + heuristic * 0.8).

            2.1.6.4 Add the neighbor to 'priorityQueue' for further exploration.

            2.1.6.5 Update the neighbor's heuristic with the weighted heuristic.

            2.1.6.6 Add both the neighbor and 'currentNode' to 'visitedNodesInOrder'.

        Step 3: Termination
        ---------------------
        3.1 If 'priorityQueue' becomes empty and the goal node has not been reached:
            Return 'visitedNodesInOrder', indicating no path to the goal was found.

        Step 4: Reconstruct Path (if goal is reached)
        ---------------------------------------------
        4.1 If the goal node was reached:
            Reconstruct the path by backtracking from the goal node to the start node using 'previousNode' information.
            Return the reconstructed path as 'visitedNodesInOrder'.
        `;
      break;
    case "Convergent Swarm":
      code = `
        Here's a simple pseudo code representation of the Convergent Swarm search algorithm:

        Step 1: Initialization
        -----------------------
        1.1 Create a priority queue for node exploration, named 'priorityQueue'.

        1.2 Set the initial distance of the start node to 0.

        1.3 Add the start node to 'priorityQueue'.

        1.4 Initialize an array, 'visitedNodesInOrder', to store visited nodes in order.

        Step 2: Main Loop
        ------------------
        2.1 While 'priorityQueue' is not empty:
        2.1.1 Sort 'priorityQueue' based on the sum of distance and heuristic.

        2.1.2 Dequeue the node with the minimum sum of distance and heuristic as 'currentNode'.

        2.1.3 If 'currentNode' is the goal node:
            2.1.3.1 Reconstruct and return 'visitedNodesInOrder'.

        2.1.4 Mark 'currentNode' as visited.

        2.1.5 Get unvisited neighbors of 'currentNode'.

        2.1.6 For each unvisited neighbor:
            2.1.6.1 Calculate the neighbor's distance from the start node.
            2.1.6.2 Calculate the Manhattan distance heuristic from the neighbor to the goal node.
            2.1.6.3 Calculate a weighted heuristic for the neighbor (distance * 2 + heuristic * 0.8).

            2.1.6.4 Add the neighbor to 'priorityQueue' for further exploration.

            2.1.6.5 Update the neighbor's heuristic with the weighted heuristic.

            2.1.6.6 Add both the neighbor and 'currentNode' to 'visitedNodesInOrder'.

        Step 3: Termination
        ---------------------
        3.1 If 'priorityQueue' becomes empty and the goal node has not been reached:
            Return 'visitedNodesInOrder', indicating no path to the goal was found.

        Step 4: Reconstruct Path (if goal is reached)
        ---------------------------------------------
        4.1 If the goal node was reached:
            Reconstruct the path by backtracking from the goal node to the start node using 'previousNode' information.
            Return the reconstructed path as 'visitedNodesInOrder'.
        `;
      break;
    case "Quick Sort":
      code = `
        Here's a simple pseudo code representation of the Quick Sort algorithm:

        Step 1: Initialize Quick Sort Algorithm
        ---------------------------------------
        1.1 Set the left boundary of the array to 0 (initially the first element).
        1.2 Set the right boundary of the array to n - 1 (initially the last element).

        Step 2: Partitioning
        ---------------------
        2.1 Select a pivot element from the array (usually the middle element).
        2.2 Initialize two pointers: leftPointer at the left boundary and rightPointer at the right boundary.

        Step 3: Partition the Array
        ------------------------------
        3.1 While leftPointer is less than or equal to rightPointer, continue to the next step.
        3.2 Move leftPointer to the right until arr[leftPointer] is greater than or equal to the pivot.
        3.3 Move rightPointer to the left until arr[rightPointer] is less than or equal to the pivot.
        3.4 If leftPointer is less than or equal to rightPointer, swap arr[leftPointer] and arr[rightPointer], 
            then increment leftPointer and decrement rightPointer.

        Step 4: Recursion
        ------------------
        4.1 If the left boundary is less than rightPointer, recursively call Quick Sort on the left subarray 
            (from the left boundary to rightPointer).
        4.2 If leftPointer is less than the right boundary, recursively call Quick Sort on the right subarray 
            (from leftPointer to the right boundary).

        Step 5: End of Algorithm
        -------------------------
        5.1 The Quick Sort algorithm has successfully sorted the array in-place.
      `;
      break;
    case "Merge Sort":
      code = `
        Here's a simple pseudo code representation of the Merge Sort algorithm:

        Step 1: Initialize Merge Sort Algorithm
        ---------------------------------------
        1.1 If the array has only one element or is empty, it is already sorted; no further action is required.
        1.2 Otherwise, proceed to the next step.
        
        Step 2: Divide the Array
        -------------------------
        2.1 Find the middle point of the array by calculating the floor of (left + right) / 2, where left is the 
            index of the first element, and right is the index of the last element.
        2.2 Recursively call Merge Sort on the left half of the array (from left to middle).
        2.3 Recursively call Merge Sort on the right half of the array (from middle + 1 to right).
        
        Step 3: Merge Subarrays
        ------------------------
        3.1 Create temporary arrays to store the left and right subarrays.
        3.2 Copy data from the original array into the left and right subarrays.
        3.3 Initialize pointers: i for the left subarray, j for the right subarray, and k for the merged array.
        3.4 Compare elements at i and j and select the smaller element to place in the merged array at position k.
        3.5 Increment the pointer (i or j) from which the element was taken and increment k.
        3.6 Repeat steps 3.4 and 3.5 until one of the subarrays is exhausted.
        3.7 Copy any remaining elements from the left and right subarrays into the merged array.
        
        Step 4: End of Algorithm
        -------------------------
        4.1 The Merge Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Heap Sort":
      code = `
        Here's a simple pseudo code representation of the Heap Sort algorithm:

        Step 1: Initialize Heap Sort Algorithm
        ---------------------------------------
        1.1 Build a max-heap from the input array. This involves arranging the elements so that the largest element is at the root.
        1.2 Initialize a variable 'heapSize' to the length of the array.
        
        Step 2: Sorting the Heap
        -------------------------
        2.1 Starting from the end of the array (index 'heapSize - 1'), and moving towards the beginning, repeat steps 2.2 to 2.4 until the entire array is sorted.
        2.2 Swap the root element (the maximum value) with the last element in the heap.
        2.3 Decrement 'heapSize' by 1 to exclude the sorted element from further consideration.
        2.4 Restore the max-heap property for the remaining elements. This may involve sifting down the new root to its proper position.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Heap Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Shell Sort":
      code = `
        Here's a simple pseudo code representation of the Shell Sort algorithm:
        
        Step 1: Initialize Shell Sort Algorithm
        ---------------------------------------
        1.1 Calculate the initial gap 'h' (often taken as half the length of the array).
        1.2 Initialize a variable 'n' to the length of the array.

        Step 2: Gap-Based Comparison and Insertion Sort
        ------------------------------------------------
        2.1 Repeat the following steps while 'h' is greater than 0:
            2.1.1 Start from the 'h'-th element and compare elements that are 'h' positions apart.
            2.1.2 For each group of elements being compared, perform an Insertion Sort to order them within the group.
            2.1.3 Reduce the gap 'h' (commonly halved) for the next iteration.

        Step 3: End of Algorithm
        -------------------------
        3.1 The Shell Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Bubble Sort":
      code = `
        Here's a simple pseudo code representation of the Bubble Sort algorithm:

        Step 1: Initialize Bubble Sort Algorithm
        ----------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        1.2 Create a boolean variable 'swapped' and set it to true initially.
        
        Step 2: Bubble Up Passes
        -------------------------
        2.1 Repeat the following steps while 'swapped' is true:
            2.1.1 Set 'swapped' to false at the beginning of each pass.
            2.1.2 Start from the first element and iterate through the array up to the 'n-1' element.
            2.1.3 For each pair of adjacent elements, compare them, and if they are in the wrong order, swap them and set 'swapped' to true.
            2.1.4 Continue to the next pair of elements.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Bubble Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Selection Sort":
      code = `
        Here's a simple pseudo code representation of the Selection Sort algorithm:

        Step 1: Initialize Selection Sort Algorithm
        -------------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        1.2 Initialize a variable 'minIndex' to store the index of the minimum element.

        Step 2: Selection Loop
        -----------------------
        2.1 Repeat the following steps for 'i' from 0 to 'n-1':
            2.1.1 Set 'minIndex' to 'i'.
            2.1.2 Start a nested loop with 'j' from 'i+1' to 'n':
                2.1.2.1 If arr[j] is less than arr[minIndex], update 'minIndex' to 'j'.
            2.1.3 Swap arr[i] with arr[minIndex] to move the smallest element to the sorted sublist.

        Step 3: End of Algorithm
        -------------------------
        3.1 The Selection Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Insertion Sort":
      code = `
        Here's a simple pseudo code representation of the Insertion Sort algorithm:

        Step 1: Initialize Insertion Sort Algorithm
        -------------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.

        Step 2: Insertion Loop
        -----------------------
        2.1 Repeat the following steps for 'i' from 1 to 'n-1':
            2.1.1 Store the value of arr[i] in a temporary variable 'key'.
            2.1.2 Initialize a variable 'j' to 'i-1' (the last element in the sorted sublist).
            2.1.3 While 'j' is greater than or equal to 0 and arr[j] is greater than 'key':
                2.1.3.1 Move arr[j] one position to the right.
                2.1.3.2 Decrement 'j'.
            2.1.4 Place 'key' into its correct position within the sorted sublist.

        Step 3: End of Algorithm
        -------------------------
        3.1 The Insertion Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Gnome Sort":
      code = `
        Here's a simple pseudo code representation of the Gnome Sort algorithm:

        Step 1: Initialize Gnome Sort Algorithm
        ---------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        1.2 Initialize a variable 'pos' to 1.
        
        Step 2: Gnome Sort Loop
        ------------------------
        2.1 Repeat the following steps while 'pos' is less than 'n':
            2.1.1 If 'pos' is equal to 0, or arr[pos] is greater than or equal to arr[pos-1], increment 'pos'.
            2.1.2 Otherwise, swap arr[pos] and arr[pos-1], and decrement 'pos' by 1.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Gnome Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Shaker Sort":
      code = `
        Here's a simple pseudo code representation of the Shaker Sort algorithm: 

        Step 1: Initialize Shaker Sort Algorithm
        -----------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        1.2 Initialize variables 'left' and 'right' to represent the boundaries of the sublist to be sorted.
        
        Step 2: Shaker Sort Loop
        -------------------------
        2.1 Repeat the following steps while 'left' is less than 'right':
            2.1.1 Perform a forward pass (from 'left' to 'right') similar to Bubble Sort:
                2.1.1.1 Start from 'left' and iterate up to 'right - 1'.
                2.1.1.2 Compare adjacent elements, and if they are in the wrong order, swap them.
            2.1.2 Increment 'left'.
        
            2.1.3 Perform a backward pass (from 'right' to 'left + 1') similar to Bubble Sort:
                2.1.3.1 Start from 'right' and iterate down to 'left + 1'.
                2.1.3.2 Compare adjacent elements, and if they are in the wrong order, swap them.
            2.1.4 Decrement 'right'.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Shaker Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Odd-Even Sort":
      code = `
        Here's a simple pseudo code representation of the Odd-Even Sort algorithm:  

        Step 1: Initialize Odd Even Sort Algorithm
        ------------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        1.2 Initialize a boolean variable 'sorted' and set it to false.
        
        Step 2: Odd Even Sort Loop
        ---------------------------
        2.1 Repeat the following steps while 'sorted' is false:
            2.1.1 Set 'sorted' to true at the beginning of each pass.
            2.1.2 Perform the odd-even comparison and swap operations:
                2.1.2.1 For each 'i' from 1 to 'n-1', incrementing by 2:
                    2.1.2.1.1 Compare arr[i] and arr[i+1], and if they are out of order, swap them and set 'sorted' to false.
            2.1.3 Perform the even-odd comparison and swap operations:
                2.1.3.1 For each 'i' from 0 to 'n-2', incrementing by 2:
                    2.1.3.1.1 Compare arr[i] and arr[i+1], and if they are out of order, swap them and set 'sorted' to false.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Odd Even Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Pancake Sort":
      code = `
        Here's a simple pseudo code representation of the Pancake Sort algorithm: 

        Step 1: Initialize Pancake Sort Algorithm
        -----------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        
        Step 2: Pancake Sort Loop
        --------------------------
        2.1 Repeat the following steps while 'n' is greater than 1:
            2.1.1 Find the index of the maximum element within the first 'n' elements.
            2.1.2 Flip the array at the index found in the previous step, moving the maximum element to the beginning.
            2.1.3 Flip the array once more, moving the maximum element to its correct sorted position at the end.
            2.1.4 Decrement 'n' by 1 to reduce the size of the unsorted sublist.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Pancake Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Radix Sort":
      code = `
        Here's a simple pseudo code representation of the Radix Sort algorithm:  

        Step 1: Initialize Radix Sort Algorithm
        ----------------------------------------
        1.1 Initialize a variable 'n' to the length of the array.
        1.2 Initialize a variable 'max' to store the maximum element in the array.
        1.3 Initialize a variable 'exp' to 1 (the current digit being considered).
        
        Step 2: Radix Sort Loop (LSD)
        -------------------------------
        2.1 Repeat the following steps while 'max / exp' is greater than 0:
            2.1.1 Initialize an array of empty buckets, one for each radix (0 to 'b-1').
            2.1.2 Iterate through the elements in the array:
                2.1.2.1 Determine the radix of the current element at 'exp' position.
                2.1.2.2 Place the element in the corresponding bucket based on its radix.
            2.1.3 Reconstruct the array by concatenating all the buckets in their radix order.
            2.1.4 Multiply 'exp' by 'b' to consider the next digit to the left.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Radix Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Cycle Sort":
      code = `
        Here's a simple pseudo code representation of the Cycle Sort algorithm:  

        Step 1: Initialize Cycle Sort Algorithm
        ---------------------------------------
        1.1 Initialize a variable 'cycleStart' to 0.
        1.2 Initialize a variable 'item' to 0.
        1.3 Initialize a variable 'writes' to 0.
        
        Step 2: Cycle Sort Loop
        ------------------------
        2.1 Repeat the following steps until 'cycleStart' reaches the last element:
            2.1.1 Set 'item' to the element at 'cycleStart'.
            2.1.2 Find the correct position 'pos' for 'item' within the array.
                2.1.2.1 Increment 'writes' for each element moved to make space for 'item'.
            2.1.3 While 'item' is not equal to the element at 'pos':
                2.1.3.1 Swap 'item' with the element at 'pos'.
                2.1.3.2 Increment 'writes'.
                2.1.3.3 Set 'item' to the element at 'pos'.
            2.1.4 Increment 'cycleStart' if 'cycleStart' is not equal to 'pos'.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Cycle Sort algorithm has successfully sorted the array in ascending order with minimal writes.
            `;
      break;
    case "Bitonic Sort":
      code = `
        Here's a simple pseudo code representation of the Bitonic Sort algorithm:  

        Step 1: Initialize Bitonic Sort Algorithm
        -----------------------------------------
        1.1 Ensure that the number of elements 'n' is a power of 2.
        1.2 Initialize a variable 'bitonic' to 'n'.
        
        Step 2: Bitonic Sort Loop
        --------------------------
        2.1 Repeat the following steps while 'bitonic' is greater than 1:
            2.1.1 Initialize a variable 'k' to 'bitonic / 2'.
            2.1.2 Repeat the following steps for 'i' from 0 to 'n-1' with a step of 'bitonic':
                2.1.2.1 Initialize a variable 'j' to 'i'.
                2.1.2.2 If 'arr[j] > arr[j+k]', swap 'arr[j]' and 'arr[j+k]'.
            2.1.3 Set 'bitonic' to 'bitonic / 2'.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Bitonic Sort algorithm has successfully sorted the array in ascending order.
            `;
      break;
    case "Tim Sort":
      code = `
        Here's a simple pseudo code representation of the Tim Sort algorithm:  

        Step 1: Initialize Tim Sort Algorithm
        --------------------------------------
        1.1 Define a function 'insertionSort' to perform an insertion sort on a subarray.
        1.2 Define a function 'merge' to merge two sorted subarrays.
        
        Step 2: Tim Sort Loop
        ----------------------
        2.1 Determine the size of the run (subarray) that will be sorted using Insertion Sort.
            2.1.1 Start with a small run size (e.g., 32 elements) and double it until the entire array is covered.
        2.2 Divide the array into runs and sort each run using 'insertionSort'.
        2.3 Merge adjacent runs using 'merge' until a single sorted array remains.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Tim Sort algorithm has successfully sorted the array in ascending order.
      `;
      break;
    case "Cube Sort":
      code = `
        Here's a simple pseudo code representation of the Cube Sort algorithm:  

        Step 1: Initialize Cube Sort Algorithm
        --------------------------------------
        1.1 Determine the number of buckets 'k' to be used.
        1.2 Create an array of 'k' buckets, each initially empty.
        1.3 Calculate the range 'r' of values in the input array and the size 'bucketSize' of each bucket.
        1.4 Initialize a variable 'minValue' to the minimum value in the input array.
        
        Step 2: Distribute Elements into Buckets
        -----------------------------------------
        2.1 For each element 'element' in the input array:
            2.1.1 Calculate the bucket index 'bucketIndex' for 'element'.
            2.1.2 Add 'element' to the bucket at index 'bucketIndex'.
        
        Step 3: Sort Individual Buckets
        -------------------------------
        3.1 For each bucket 'bucket':
            3.1.1 Sort 'bucket' using a suitable sorting algorithm (e.g., Insertion Sort).
        
        Step 4: Concatenate Sorted Buckets
        -----------------------------------
        4.1 Initialize an empty result array 'result'.
        4.2 For each bucket 'bucket' (in order of bucket indices):
            4.2.1 Append the elements of 'bucket' to 'result'.
        
        Step 5: End of Algorithm
        -------------------------
        5.1 The Cube Sort algorithm has successfully sorted the input array in ascending order.
      `;
      break;
    case "Bogo Sort":
      code = `
        Here's a simple pseudo code representation of the Bogo Sort algorithm:  

        Step 1: Initialize Bogo Sort Algorithm
        ---------------------------------------
        1.1 Initialize a variable 'sorted' and set it to false.
        
        Step 2: Bogo Sort Loop
        -----------------------
        2.1 Repeat the following steps while 'sorted' is false:
            2.1.1 Shuffle the elements within the data structure randomly.
            2.1.2 Check if the elements are sorted correctly.
            2.1.3 If the elements are sorted correctly, set 'sorted' to true.
        
        Step 3: End of Algorithm
        -------------------------
        3.1 The Bogo Sort algorithm has successfully sorted the data structure in ascending order.
      `;
      break;
    case "Binary Search Tree Preorder Traversal":
      code = `
        Here's a simple pseudo code representation of the Binary Search Tree Preorder Traversal algorithm:  

        Binary Search Tree Preorder Traversal
        --------------------------------------
        
        Step 1: Initialize Preorder Traversal
        --------------------------------------
        1.1 Start at the root node of the BST.
        
        Step 2: Preorder Traverse
        -------------------------
        2.1 Visit the current node.
        2.2 Recursively traverse the left subtree using Preorder Traversal.
        2.3 Recursively traverse the right subtree using Preorder Traversal.
        
        Step 3: End of Preorder Traversal
        -----------------------------------
        3.1 The Preorder Traversal has visited all nodes in the BST.
      `;
      break;
    case "Binary Search Tree Postorder Traversal":
      code = `
        Here's a simple pseudo code representation of the Binary Search Tree Postorder Traversal algorithm:    

        Binary Search Tree Postorder Traversal
        ---------------------------------------
        
        Step 1: Initialize Postorder Traversal
        ---------------------------------------
        1.1 Start at the root node of the BST.
        
        Step 2: Postorder Traverse
        ---------------------------
        2.1 Recursively traverse the left subtree using Postorder Traversal.
        2.2 Recursively traverse the right subtree using Postorder Traversal.
        2.3 Visit the current node.
        
        Step 3: End of Postorder Traversal
        -----------------------------------
        3.1 The Postorder Traversal has visited all nodes in the BST.

      `;
      break;
    case "Binary Search Tree Inorder Traversal":
      code = `
        Here's a simple pseudo code representation of the Binary Search Tree Inorder Traversal algorithm: 

        Step 1: Initialize Inorder Traversal
        -------------------------------------
        1.1 Start at the root node of the BST.

        Step 2: Inorder Traverse
        -------------------------
        2.1 Recursively traverse the left subtree using Inorder Traversal.
        2.2 Visit the current node.
        2.3 Recursively traverse the right subtree using Inorder Traversal.

        Step 3: End of Inorder Traversal
        ---------------------------------
        3.1 The Inorder Traversal has visited all nodes in the BST.
      `;
      break;
    case "Sieve of Eratosthenes":
      code = `
          Here's a simple pseudo code representation of the Sieve of Eratosthenes Prime Number algorithm: 
  
          Sieve of Eratosthenes Prime Number Algorithm
          --------------------------------------------
          
          Step 1: Initialize Sieve
          -------------------------
          1.1 Create a list of numbers from 2 to the desired upper limit.
          1.2 Create a list to keep track of prime numbers, initially empty.
          
          Step 2: Sieve Out Non-Primes
          -------------------------------
          2.1 Start with the first unmarked number in the list (2).
          2.2 Mark it as prime and add it to the list of prime numbers.
          2.3 Eliminate all multiples of the current prime from the list.
          
              For each unmarked number 'n' in the list:
                  If 'n' is a multiple of the current prime:
                      Mark 'n' as composite (not prime).
              
          2.4 Move to the next unmarked number in the list.
          
          Step 3: End of Sieve
          ---------------------
          3.1 The Sieve of Eratosthenes has identified all prime numbers up to the specified limit.
          3.2 The list of prime numbers contains the prime numbers within the range.
        `;
      break;
    default:
      code = "Algorithm not supported";
  }

  return code;
}
