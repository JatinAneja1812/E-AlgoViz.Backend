export default function GetExplanation(title) {
  // Replace this with the actual code generation logic for each algorithm
  let code = "";

  switch (title) {
    case "A* Search":
      code = `
        Explanation:
        The A* (pronounced "A-star") pathfinding algorithm is a widely used and efficient graph traversal algorithm for finding the shortest 
        path between two points in a graph, often used in games and robotics.
        
        Here's a step-by-step explanation of the A* algorithm:

        1. Initialization:
        
        Create an open set to store nodes to be evaluated.
        Create a closed set to store nodes that have already been evaluated.
        Initialize the start node with a cost of 0 and add it to the open set.
        Assign a heuristic estimate (usually the straight-line distance) from the start node to the goal node.
        
        2. Main Loop:
        
        While the open set is not empty:
        Find the node in the open set with the lowest total cost (cost from the start node plus heuristic estimate).
        Remove the node from the open set and add it to the closed set.
        If this node is the goal, the path has been found; reconstruct and return the path.
        
        3. Expansion:

        Generate all neighboring nodes (adjacent cells in a grid) of the current node that are not in the closed set.
        For each neighbor:
        Calculate the tentative cost from the start node to this neighbor through the current node.
        If this tentative cost is less than the neighbor's existing cost (or the neighbor is not in the open set), update the neighbor's cost and set its parent to the current node.
        If the neighbor is not in the open set, add it to the open set with its calculated cost.
        
        4. Termination:

        If the open set becomes empty, and the goal node has not been reached, there is no path to the goal, and the search terminates.
        `;
      break;
    case "Dijkstra":
      code = `
        Explanation:
        Dijkstra's algorithm is a graph search algorithm that finds the shortest path between two nodes in a weighted graph. 
        It's widely used in applications like GPS navigation systems, network routing, and more. 
        The algorithm guarantees the shortest path from a start node to all other nodes in the graph.
        
        Here's a step-by-step explanation of Dijkstra's algorithm:

        1. Initialization:

        Create a set to store unvisited nodes.
        Assign a tentative distance value to every node; set it to zero for the start node and infinity for all other nodes.
        Set the current node as the start node.
        
        2. Main Loop:

        While there are unvisited nodes:
        Select the unvisited node with the smallest tentative distance as the current node.
        For the current node, calculate tentative distances to its neighbors by considering the sum of the current node's tentative distance and the weight of the edge to the neighbor.
        If the newly calculated tentative distance is less than the current assigned value, update the neighbor's tentative distance.
        After considering all neighbors, mark the current node as visited.
        
        3. Termination:

        When the goal node is marked as visited, or if the smallest tentative distance among the unvisited nodes is infinity, the algorithm terminates.
        
        4. Path Reconstruction:

        To find the shortest path from the start node to any other node, backtrack from the goal node using the minimum tentative distances and the edges taken.
        `;
      break;
    case "Greedy Breath First Search":
      code = `
        Explanation:
        The Greedy Best-First Search algorithm is a pathfinding algorithm used to find the path from a start node to a goal node in a 
        graph or grid. It prioritizes exploring nodes that are closest to the goal based on a heuristic estimate. 
        Unlike A*, Greedy Best-First Search doesn't take into account the actual cost to reach a node from the start but relies solely 
        on the heuristic to make decisions.

        Here's a step-by-step explanation of Dijkstra's algorithm:

        1. Initialization:

        Create an open set to store nodes to be evaluated initially containing only the start node.
        Create a closed set to store nodes that have already been evaluated.
        Assign a heuristic estimate to the start node representing its estimated distance to the goal node.
        
        2. Main Loop:
        
        While the open set is not empty:
        Select the node from the open set with the lowest heuristic value (closest to the goal) as the current node.
        If the current node is the goal, the path has been found; reconstruct and return the path.
        
        3. Expansion:
        
        Generate all neighboring nodes (adjacent cells in a grid) of the current node that are not in the closed set.
        For each neighbor:
        Calculate the heuristic estimate for the neighbor representing its estimated distance to the goal node.
        Add the neighbor to the open set.
        
        4. Termination:
        
        If the open set becomes empty and the goal node has not been reached, there is no path to the goal, and the search terminates.
        
        `;
      break;
    case "Breath First Search":
      code = `
        Explanation:

        Breadth-First Search is a graph traversal algorithm that systematically explores all the nodes of a graph in breadthward motion. 
        It starts at the root node (or a specified starting node) and explores all its neighbors before moving on to their neighbors. 
        BFS is often used for searching, finding the shortest path, and exploring the structure of a graph or tree.

        Here's a step-by-step breakdown of how BFS works:

        1. Initialization:

        Create a queue to store nodes for exploration.
        Create a set to keep track of visited nodes to avoid revisiting them.
        Initialize the start node as the current node.
        Initialize the goal node (if searching for a specific target).
        Enqueue the start node into the queue to begin the exploration.
        Mark the start node as visited in the visited nodes set.
        
        2. Main Loop:

        While the queue is not empty:
        Dequeue the first node from the queue. This node becomes the current node for exploration.
        If the current node is the goal node (if you're searching for a specific target), you've found the path, and you can reconstruct it.
        Get all unvisited neighbors of the current node. These are nodes connected to the current node by edges that haven't been explored yet.
        Mark each neighbor as visited and enqueue them into the queue for further exploration.
        Set the parent of each neighbor as the current node. This information helps reconstruct the path later.
        
        3. Termination:

        If the queue becomes empty and the goal node has not been reached, there is no path to the goal. The search terminates in this case.
        
        4. Reconstruct Path (if goal is reached):

        If the goal node is reached during the exploration, you can reconstruct the path from the goal node back to the start node.
        Start with the goal node and backtrack using the parent information stored in each node.
        This process creates the path from the start node to the goal node, which can be returned as the result.
        
        5. End of Algorithm:

        The Breadth-First Search algorithm completes successfully, either finding the shortest path or determining that there's no path to the goal.
        BFS is particularly useful for finding the shortest path in an unweighted graph because it systematically explores nodes level by level, ensuring that shorter paths are discovered before longer ones. 
        It's also used in many applications, such as network routing, maze solving, and finding connected components in a graph.
        `;
      break;
    case "Bidirectional Breath First Search":
      code = `
        Explanation:

        Bidirectional BFS is an extension of the traditional Breadth-First Search (BFS) algorithm. While BFS starts from the source node and 
        explores outward to find the goal, Bidirectional BFS simultaneously explores from both the source and goal nodes towards each other.
        It's particularly useful when you have information about the goal node's location and want to find the shortest path between them.

        Here's how Bidirectional BFS works:

        1. Initialization:

        Create two queues, one for the forward search (starting from the source) and one for the backward search (starting from the goal).
        Create two sets, one for visited nodes in the forward search and one for visited nodes in the backward search.
        Initialize the source node for the forward search and the goal node for the backward search.
        Enqueue the source node into the forward queue and the goal node into the backward queue.
        Mark the source node as visited in the forward set and the goal node as visited in the backward set.
        
        2. Main Loop:

        While both the forward queue and the backward queue are not empty:
        Dequeue a node from the forward queue (forward current).
        If forward current is in the backward set (i.e., it has been visited by both searches), you've found an intersection point, and the path can be reconstructed.
        Otherwise, enqueue all unvisited neighbors of forward current into the forward queue and mark them as visited in the forward set.
        Repeat the same process for the backward queue, dequeueing a node (backward current), checking for intersections, and enqueueing unvisited neighbors in the backward set.
        
        3. Termination:

        If an intersection point is found or both queues become empty without finding one, the search terminates.
        If an intersection point is found, the path can be reconstructed by tracing back from the intersection point to both the source and goal nodes.
        
        4. Reconstruct Path (if intersection is found):

        If an intersection point is found during the search, you can reconstruct the path by tracing back from the intersection point to both the source and goal nodes.
        This process creates the shortest path from the source to the goal.
        
        5. End of Algorithm:

        The Bidirectional BFS algorithm completes successfully, either finding the shortest path or determining that there's no path between the source and goal nodes.
        `;
      break;
    case "Depth First Search":
      code = `
        Explanation:

        Depth-First Search (DFS) is an uninformed search algorithm that explores as far as possible along a branch before backtracking. 
        It starts at the root node (or a specified starting node) and explores as deeply as possible along each branch before backtracking. 
        DFS is often used to explore the structure of a graph or tree and can be used for pathfinding in certain scenarios.

        Here's how DFS works:

        1. Initialization:

        Create a stack to store nodes for exploration (or use recursion).
        Create a set to keep track of visited nodes to avoid revisiting them.
        Initialize the start node.
        Initialize the goal node (if searching for a specific target).
        Push the start node onto the stack (or start the recursive function with the start node).
        Mark the start node as visited.
        
        2. Main Loop:

        While the stack is not empty:
        Pop the top node from the stack (or use the current node in the recursive function) as the current node for exploration.
        If the current node is the goal node (if you're searching for a specific target), you've found the path, and you can reconstruct it.
        Get all unvisited neighbors of the current node.
        Push these neighbors onto the stack (or call the recursive function with each neighbor) and mark them as visited.
       
        3. Termination:

        If the stack becomes empty and the goal node has not been reached, there is no path to the goal. The search terminates in this case.
        
        4. Reconstruct Path (if goal is reached):

        If the goal node is reached during the exploration, you can reconstruct the path by backtracking from the goal node using the parent information stored 
        in the nodes (if implemented).
        
        5. End of Algorithm:

        The Depth-First Search algorithm completes successfully, either finding a path to the goal or determining that there's no path.
        `;
      break;
    case "Swarm":
      code = `
        Explanation:

        The Swarm Algorithm is a pathfinding algorithm that combines aspects of A* search with some additional features. 
        It aims to find the shortest path from a start node to an end node while efficiently exploring the grid. 
        This algorithm introduces the concept of a weighted heuristic to prioritize the shortest path. It also maintains a priority queue 
        for node exploration and uses the Manhattan distance as a heuristic.
        
        Here's a breakdown of the algorithm's key components and how it works:
        
        1. Initialization:
        
        Create a priority queue for node exploration, named priorityQueue.
        Add the start node to the priorityQueue.
        Initialize an array, visitedNodesInOrder, to store visited nodes in order.
        Perform node exploration until the priorityQueue is empty.
        
        2. Main Loop:
        
        Sort the priorityQueue based on the sum of the distance from the start node and the heuristic estimate (heuristic is calculated using Manhattan distance).
        Dequeue the node with the minimum sum of distance and heuristic as currentNode.
        If currentNode is the goal node, a path has been found, and the algorithm returns visitedNodesInOrder.
        Mark currentNode as visited.
        Get the unvisited neighbors of currentNode.
        For each unvisited neighbor, calculate its distance from the start node, its heuristic, and a weighted heuristic that prioritizes the shortest path.
        Add the neighbor to the priorityQueue for further exploration.
        Update the neighbor's heuristic with the weighted heuristic.
        Add both the neighbor and the current node to visitedNodesInOrder.
        
        3. Termination:
        
        If the priorityQueue becomes empty and the goal node has not been reached, there is no path to the goal, and the search terminates.
        
        4. Reconstruct Path (if goal is reached):
        
        If the goal node is reached during exploration, the algorithm reconstructs the path by backtracking from the goal node to the start node using the previousNode information stored in each node.
        The reconstructed path is returned as visitedNodesInOrder, which contains the nodes in the order they were visited.
        `;
      break;
    case "Convergent Swarm":
      code = `
        Explanation:

        The Convergent Swarm Algorithm is another variation of the A* search algorithm, with additional features to optimize pathfinding 
        in a grid-based environment.It aims to find the shortest path from a start node to an end node while efficiently exploring the grid.
        Similar to the Swarm Algorithm, it uses a priority queue for node exploration, Manhattan distance as the heuristic, and introduces 
        the concept of a weighted heuristic for efficient path prioritization.

        Here's an explanation of how the Convergent Swarm Algorithm works:

        1. Initialization:

        Create a priority queue for node exploration, named priorityQueue.
        Set the initial distance of the start node to 0.
        Add the start node to the priorityQueue.
        Initialize an array, visitedNodesInOrder, to store visited nodes in order.
        Perform node exploration until the priorityQueue is empty.
        
        2. Main Loop:

        Sort the priorityQueue based on the sum of distance from the start node and heuristic (Manhattan distance) to the goal node.
        Dequeue the node with the minimum sum of distance and heuristic as currentNode.
        If currentNode is the goal node, a path has been found, and the algorithm returns visitedNodesInOrder.
        Mark currentNode as visited.
        Get the unvisited neighbors of currentNode.
        For each unvisited neighbor:
        Calculate the neighbor's distance from the start node as the current node's distance plus 1.
        Calculate the heuristic (Manhattan distance) from the neighbor to the goal node.
        Calculate a weighted heuristic for the neighbor (distance * 2 + heuristic * 0.8).
        Add the neighbor to the priorityQueue for further exploration.
        Update the neighbor's heuristic with the weighted heuristic.
        Add both the neighbor and the current node to visitedNodesInOrder.
        
        3. Termination:

        If the priorityQueue becomes empty and the goal node has not been reached, there is no path to the goal, and the search terminates.
        
        4. Reconstruct Path (if goal is reached):

        If the goal node is reached during exploration, the algorithm reconstructs the path by backtracking from the goal node to the start node 
        using the previousNode information stored in each node. The reconstructed path is returned as visitedNodesInOrder, which contains the nodes 
        in the order they were visited.
        `;
      break;
    case "Quick Sort":
      code = `
        Description

        Quick Sort is a sorting technique that involves breaking down the data structure into smaller partitions and iteratively 
        sorting them until the entire data structure is ordered.

        This partitioning process revolves around a pivotal element: elements larger than the pivot are placed on the right side 
        of the structure, while smaller ones are positioned to the left, thus forming two distinct partitions. 
        This procedure is then applied recursively to each of these partitions, creating a divide-and-conquer approach. 
        It's worth noting that this pivot-based partitioning technique is also employed by other sorting algorithms, such as Merge Sort.

        Complexity

        Average Complexity: O(n × log n)
        Best Case: O(n × log n)
        Worst Case: O(n^2)
        Space Complexity: O(n)
      `;
      break;
    case "Merge Sort":
      code = `
        Description

        Merge Sort is a sorting technique that employs the Divide and Conquer strategy, similar to Quick Sort. 
        It can be implemented either iteratively or recursively, utilizing the Top-Down and Bottom-Up approaches, 
        respectively. Here, we present the Top-Down recursive version.

        The algorithm recursively divides the data structure until each subsequence contains only one element. 
        At this point, the subsequences are merged and ordered sequentially. This is achieved by progressively 
        constructing the sorted sublist, adding the minimum element of the next two unsorted subsequences each time, 
        until only one sublist remains. This final sublist represents the fully sorted data structure.

        Complexity

        Average Complexity	O(n × log n)
        Best Case	O(n × log n)
        Worst Case	O(n × log n)
        Space Complexity	O(n)
      `;
      break;
    case "Heap Sort":
      code = `
        Description

        Heap Sort is an iterative in-place sorting algorithm that relies on auxiliary data structures known as heaps. 
        It is less efficient than other algorithms with similar time complexity and is not well-suited for data structures 
        with a small number of elements.
      
        A heap is a data structure that can be visualized as a binary tree, where each node has a value greater than or 
        equal to its children. Consequently, the root node will hold the maximum value.
        
        The sorting process begins by initially ordering the data structure to form a heap. It is then progressively 
        reordered using an algorithm similar to Selection Sort, starting from the largest elements.

        Complexity

        Average Complexity	O(n × log n)
        Best Case	O(n × log n)
        Worst Case	O(n × log n)
        Space Complexity	O(1)
      `;
      break;
    case "Shell Sort":
      code = `
        Description

        Shell Sort is one of the oldest sorting algorithms and is an extension of the Insertion Sort. This algorithm is 
        known for its speed and ease of implementation, although it can be challenging to precisely measure its performance.
        
        In contrast to the Insertion Sort, Shell Sort begins by comparing elements that are distant from each other by 
        a certain gap, which progressively decreases during the sorting process. By initially comparing the most 
        distant elements, Shell Sort can optimize performance as it is not limited to comparing only adjacent elements.
              
        Complexity
        
        Average Complexity	O(n1.25) , O(n × log n)
        Best Case	O(n × log n)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Bubble Sort":
      code = `
        Description

        Bubble Sort is an iterative sorting algorithm that draws inspiration from the motion of bubbles in sparkling water, 
        where each bubble represents an element in the data structure.
        
        Similar to how larger bubbles rise to the top faster than smaller ones, Bubble Sort operates by iteratively traversing 
        the data structure. During each cycle, it compares the current element with the next one and swaps them if they are 
        in the wrong order.
        
        Bubble Sort is relatively simple to implement but not very efficient. On average, sorting algorithms with the 
        same time complexity, such as Selection Sort or Insertion Sort, tend to perform better. There are also variants of Bubble Sort, 
        like Shaker Sort, Odd-Even Sort, and Comb Sort, which aim to improve its performance.

        Complexity

        Average Complexity	O(n2)
        Best Case	O(n)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Selection Sort":
      code = `
        Description

        Selection Sort is an iterative and in-place sorting algorithm that divides the data structure into two sublists: the ordered one and 
        the unordered one. The algorithm iterates over all the elements in the data structure, and during each cycle, it selects the smallest 
        element from the unordered sublist and appends it to the sorted sublist. This process gradually fills the sorted sublist.
        
        Selection Sort is a straightforward and intuitive algorithm that operates without requiring additional memory. However, it is not 
        particularly efficient for large data structures due to its quadratic time complexity.
        
        This algorithm has seen improvements and enhancements in several variants, such as Heap Sort.

        Complexity

        Average Complexity	O(n2)
        Best Case	O(n2)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Insertion Sort":
      code = `
        Description

        Insertion Sort is a straightforward sorting algorithm that constructs the final sorted array incrementally, one item at a time. 
        While it may not be as efficient as more advanced sorting algorithms, it offers advantages in terms of simplicity and can perform 
        well on small data structures, particularly those that are nearly sorted.
        
        The algorithm divides the data structure into two sublists: a sorted one and an unsorted one. Initially, the sorted sublist contains 
        only one element, and it gradually grows. During each iteration, the algorithm selects an element from the unsorted sublist and 
        inserts it into the appropriate position within the sorted sublist. Variants of Insertion Sort include Gnome Sort.
        
        Complexity

        Average Complexity	O(n2)
        Best Case	O(n)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Gnome Sort":
      code = `
        Description

        Gnome Sort is a sorting algorithm that bears a strong resemblance to Insertion Sort. It is based on the idea of dividing the 
        data structure into two sublists: a sorted sublist and an unsorted sublist. During each cycle, the algorithm selects an element 
        from the unsorted sublist and employs sequential swaps to move it to its correct position within the sorted sublist.
        
        The primary distinction between Gnome Sort and Insertion Sort lies in its implementation. Gnome Sort achieves sorting without the
        need for nested loops. Similar to Insertion Sort, Gnome Sort is more efficient when applied to small data structures that are 
        nearly sorted.
                
        Complexity
        
        Average Complexity	O(n2)
        Best Case	O(n)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Shaker Sort":
      code = `
        Description

        Shaker Sort, also known as Cocktail Shaker Sort, is an enhancement of the Bubble Sort algorithm. While Bubble Sort consistently 
        moves the larger element to the end of the unsorted sublist during each cycle, Shaker Sort takes a different approach. 
        It alternates between two actions: first,it moves the larger element of the unsorted sublist to the end of the sorted part,
        and then it moves the smaller elements of the unsorted sublist to the beginning of the sorted sublist.
        
        Shaker Sort essentially performs two passes of Bubble Sort. The first pass sorts the data structure, beginning with the largest 
        element and ordering the elements from largest to smallest. The second pass starts from the smallest element and sorts the 
        elements upwards until the largest one is reached.
        
        Although Shaker Sort may appear more efficient than Bubble Sort at first glance due to its alternating approach, the performance 
        improvement is minimal, and the overall time complexity remains the same.
                
        Complexity
        
        Average Complexity	O(n2)
        Best Case	O(n)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Odd-Even Sort":
      code = `
        Description

        Odd Even Sort, also known as Brick Sort, is an in-place comparison-based sorting algorithm. It organizes the data structure 
        into pairs, where each pair consists of elements with even indices and elements with odd indices.
        
        The algorithm conducts comparisons between adjacent pairs and swaps them if they are not in the correct order, using a process 
        similar to Bubble Sort. This procedure repeats for every pair, alternating between odd/even and even/odd pairs until the entire 
        structure is sorted.
        
        Odd Even Sort has the potential for parallel execution but is not commonly used. It can be efficient when applied to data 
        structures that are nearly sorted. However, it tends to be slow when there are small elements located near the end of the 
        data structure, as they will require many iterations to reach their correct positions.

        Complexity

        Average Complexity	O(n2)
        Best Case	O(n)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Pancake Sort":
      code = `
        Description

        Pancake Sort is a sorting algorithm that is derived from the pancake problem. In this algorithm, the primary operation is 
        the "flip," which is executed recursively until the data structure is sorted. Pancake Sort shares similarities with 
        Selection Sort but differs in that it uses flips instead of swaps to sort the structure.
        
        The data structure is divided into two parts: a sorted sublist and an unsorted sublist. During each flip operation, 
        the maximum elements from the unsorted sublist are placed at the end of the data structure by flipping the unsorted part. 
        Simultaneously, the sorted sublist is incremented by one element. This process continues until the unsorted portion contains 
        just one element, indicating that the entire structure is sorted.

        Complexity

        Average Complexity	O(n2)
        Best Case	O(n2)
        Worst Case	O(n2)
        Space Complexity	O(1)
      `;
      break;
    case "Radix Sort":
      code = `
        Description

        Radix Sort is a unique sorting algorithm that operates without using comparisons between elements. Its computational complexity 
        depends on the number of elements, as well as the values 'b' and 'd,' representing the radix of the numbers and the maximum number 
        of digits in the elements, respectively.
        
        Radix Sort functions by segregating the elements into buckets based on their radix (digit value), starting either from the least 
        significant digit (LSD) or the most significant digit (MSD) of the numbers. If a number has more than one significant digit, 
        this process is iteratively repeated to consider all the digits within the number.
        
        This sorting algorithm differs significantly from others as it doesn't rely on element comparisons but rather focuses on the 
        individual digits of the numbers. Consequently, Radix Sort is applicable primarily to whole numbers or strings.
        
        Radix Sort can outperform other logarithmic sorting algorithms on large data structures, and in specific cases, it can even achieve 
        linear time complexity. However, it is not commonly used due to its limitations.

        Complexity

        Average Complexity	O(d × (n + b))
        Best Case	O(d × (n + b))
        Worst Case	O(d × (n + b))
        Space Complexity	O(n + 2^d)
      `;
      break;
    case "Cycle Sort":
      code = `
        Description

        Cycle Sort is an in-place, unstable sorting algorithm known for its minimal memory usage and efficient performance 
        on largely sorted or nearly sorted data structures. This algorithm is unique in that it minimizes the number of writes,
        making it particularly useful for situations where write operations are expensive.
        
        Cycle Sort works by selecting an element from the array and moving it to its correct sorted position. This process is 
        repeated until all elements are in their correct positions, forming cycles. Each cycle involves moving one element at a time, 
        and the algorithm continues until it returns to the initial element, signifying the completion of one full cycle.
        
        Despite its efficiency in reducing write operations, Cycle Sort may not be as fast as some other sorting algorithms 
        for completely random data due to its multiple passes through the array.
                
        Complexity

        Average Complexity: O(n^2)
        Best Case: O(n^2)
        Worst Case: O(n^2)
        Space Complexity: O(1)
      `;
      break;
    case "Bitonic Sort":
      code = `
        Description

        Bitonic Sort is a comparison-based sorting algorithm that leverages binary sequences. However, it comes with a constraint—it can 
        only be applied to data structures whose number of elements is a power of 2.
        
        The algorithm consists of two primary parts. Initially, the data structure is transformed into a binary sequence, where elements 
        are grouped into ascending and descending subsequences, which are linked together. Subsequently, these groups are merged using 
        a process similar to Merge Sort, and this continues until the entire data structure is sorted.
        
        Bitonic Sort can be implemented in various forms, either iteratively or recursively, with different visualizations. 
        The description provided here illustrates an iterative version of the algorithm.

        Complexity
        
        Average Complexity	O(log2 n)
        Best Case	O(log2 n)
        Worst Case	O(log2 n)
        Space Complexity	O(n × log2 n)
      `;
      break;
    case "Tim Sort":
      code = `
        Description

        Tim Sort is a hybrid sorting algorithm derived from merging two well-known algorithms: Insertion Sort and Merge Sort. 
        It is designed to perform efficiently on various types of real-world data and is particularly effective for partially 
        ordered or small data sets. Tim Sort was specifically developed for the Python programming language but has since found 
        application in other languages as well.
        
        The core idea of Tim Sort is to divide the input array into small chunks (subarrays) and sort these chunks individually 
        using Insertion Sort. Afterward, the sorted chunks are merged together using a modified version of Merge Sort to produce 
        the final sorted array.
        
        Tim Sort's key strengths lie in its adaptability to different types of data, its ability to handle partially ordered 
        lists efficiently, and its combination of the strengths of both Insertion Sort and Merge Sort. These attributes make 
        it a practical choice for many sorting scenarios.

        Complexity

        Average Complexity: O(n log n)
        Best Case: O(n)
        Worst Case: O(n log n)
        Space Complexity: O(n)
      `;
      break;
    case "Cube Sort":
      code = `
        Description

        Cube Sort, also known as Bucket Sort, is a straightforward sorting algorithm that operates by distributing elements 
        into a set of "buckets" and then sorting each bucket individually. It's an ideal choice for sorting a large range of 
        positive integers with relatively small variations in their values. This algorithm's name "Cube Sort" arises from 
        its three-dimensional bucket representation.
        
        Cube Sort begins by allocating an array of buckets, where each bucket corresponds to a specific range of values. 
        Elements from the input array are distributed into these buckets based on their values. After distribution, 
        each bucket is individually sorted, typically using another sorting algorithm like Insertion Sort. 
        Finally, the sorted buckets are concatenated to form the fully sorted array.
        
        Cube Sort's efficiency hinges on the number of buckets and the distribution of values in the input array.
        When the range of values is relatively small and evenly distributed, Cube Sort can achieve excellent performance. 
        However, it may not be the best choice for sorting data with highly skewed value distributions.
              
        Complexity

        Average Complexity: O(n + m)
        Best Case: O(n + m)
        Worst Case: O(n^2)
        Space Complexity: O(n + m)
      `;
      break;
    case "Bogo Sort":
      code = `
        Description

        Bogo Sort, also known as Stupid Sort, is an extremely inefficient iterative sorting algorithm. This algorithm's 
        primary strategy is to randomly shuffle the elements within the data structure and subsequently check if they 
        are sorted correctly. If the elements are not correctly sorted, the process is repeated.
        
        Bogo Sort is a probabilistic algorithm, and its efficiency is heavily dependent on chance. The number of possible 
        permutations for a data structure with 'n' elements is 'n!,' which means that, on average, it would take 'n!' shuffles 
        to arrive at the sorted solution. Since each shuffle involves 'n' operations, the total average number of operations 
        becomes 'n × n!'.
        
        Due to its reliance on randomness and the lack of any guaranteed sorting strategy, Bogo Sort does not have a measurable
        worst-case time complexity.

        Complexity
        Average Complexity	O(n × n!)
        Best Case	O(n)
        Worst Case	∞
        Space Complexity	O(1)
      `;
      break;
    case "Binary Search Tree Preorder Traversal":
      code = `
        Description:
        
        In a Preorder Traversal, you visit the root node of the BST first, then recursively traverse the 
        left subtree, and finally traverse the right subtree.
        
        Order:  Root node, left subtree, right subtree.

        Use Cases:
        
        Preorder traversal is often used to create a copy of the tree because it preserves the structure of 
        the original tree.
        It can be useful in evaluating expressions in a parse tree.
        It can be used in certain searching and deletion operations in a BST.

        Time Complexity: O(N)

        Auxiliary Space: If we don’t consider the size of the stack for function calls then O(1) 
        otherwise O(h) where h is the height of the tree. 
      `;
      break;
    case "Binary Search Tree Postorder Traversal":
      code = `
        Description: 
        
        In a Postorder Traversal, you visit the left subtree first, then the right subtree, and finally the root node.
        
        Order: Left subtree, right subtree, root node.
        
        Use Cases:
        Postorder traversal is often used in deleting nodes from a BST because it allows you to delete child 
        nodes before their parent nodes.
        It can be useful in certain mathematical evaluations where you need to process children before parents.
        Postorder traversal can be used to calculate the height of the tree or perform other calculations on the tree.

        Time Complexity: O(N)

        Auxiliary Space: the auxiliary space complexity is O(h), where h can range from O(log n) in a balanced
        tree to O(n) in an unbalanced tree.
      `;
      break;
    case "Binary Search Tree Inorder Traversal":
      code = `
        Description: 

        In an Inorder Traversal, you visit the nodes of the BST in ascending order. You start by recursively 
        traversing the left subtree, then visit the root node, and finally traverse the right subtree.

        Order: Left subtree, root node, right subtree.

        Use Cases:
        
        Inorder traversal is commonly used to retrieve data from a BST in sorted order.
        It is essential in binary search operations because it visits nodes in sorted order.
        Inorder traversal can be used to check if a BST is a valid binary search tree.

        Time Complexity: O(N)

        Auxiliary Space: If we don’t consider the size of the stack for function calls then O(1) 
        otherwise O(h) where h is the height of the tree. 

      `;
      break;
    case "Sieve of Eratosthenes":
      code = `
      Description:

      The Sieve of Eratosthenes is an age-old and straightforward method employed to identify prime numbers within a specified limit. 
      It stands out as one of the most efficient techniques for discovering smaller prime numbers.

      When dealing with a predetermined upper threshold, this approach functions by progressively labeling the multiples of prime 
      numbers as non-prime, commencing with the number 2. After all the multiples of 2 have been designated as non-prime, the multiples 
      of the subsequent prime, which is 3, undergo the same treatment. This process continues until 𝑝 < √𝑛 where p is a prime number.
      
      Time Complexity:

      The Sieve of Eratosthenes has a time complexity of O(n log log n), where 'n' is the upper limit of the range.
      This algorithm is highly efficient for finding all primes up to a large limit, making it suitable for various applications, 
      including number theory and cryptography.

      `;
      break;
    default:
      code = "Algorithm not supported";
  }

  return code;
}
