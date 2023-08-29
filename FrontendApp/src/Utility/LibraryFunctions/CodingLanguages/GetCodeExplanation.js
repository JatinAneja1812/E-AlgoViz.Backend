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
    default:
      code = "Algorithm not supported";
  }

  return code;
}
