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
      case "Greedy Breath First Search":
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
      default:
        code = "Algorithm not supported";
    }
  
    return code;
  }
  