
const PathfindingAlgoDescriptionEnum = {

    DIJKSTRA: "Dijkstra's algorithm is a graph traversal algorithm that finds the shortest path between a starting node and all other nodes in a weighted graph.",
    BREADTH_FIRST_SEARCH: "Breadth-First Search is a graph traversal algorithm that explores all nodes of a graph in breadth-first order, visiting neighboring nodes before moving on to deeper levels.",
    GREEDY_BEST_FIRST_SEARCH: "Greedy Breadth-First Search is a graph traversal algorithm that explores the neighboring nodes with the smallest heuristic value first, aiming to reach the goal efficiently.",
    BREADTH_FIRST_SEARCH_BIDIRECTIONAL: "Breadth-First Search Bidirectional is a graph traversal algorithm that simultaneously explores nodes from both the start and goal states, meeting in the middle to find the shortest path in an efficient manner.",
    ASTART_SEARCH: "A* search is an informed graph search algorithm that combines the benefits of both breadth-first and greedy best-first search, using heuristic estimates to efficiently find the shortest path between nodes in a weighted graph.",
    DEPTH_FIRST_SEARCH: "Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking, often used to traverse and search through a graph or tree data structure.",
    SWARM_ALGORITHM: "Swarm algorithm for shortest path is a computational approach inspired by the behavior of swarms or colonies, where multiple agents cooperate and communicate to find an optimal path in a given graph.",
    CONVERGENT_SWARM_ALGORITHM: "The Convergent Swarm Algorithm is a metaheuristic approach inspired by the behavior of swarms, designed to find the shortest path between nodes in a graph through iterative convergence and exploration.",
}

const PathfindingAlgoDescriptionExtraEnum = {

    DIJKSTRA:  PathfindingAlgoDescriptionEnum.DIJKSTRA.toString() + "It guarantees the shortest path for non-negative edge weights but is not suitable for graphs with negative weights",
    BREADTH_FIRST_SEARCH: PathfindingAlgoDescriptionEnum.BREADTH_FIRST_SEARCH.toString() + " It visits neighboring nodes before moving on to deeper levels, making it useful for finding the shortest path in unweighted graphs.",
    GREEDY_BEST_FIRST_SEARCH: "Greedy Breadth-First Search is a variation of BFS that explores neighboring nodes with the smallest heuristic value first. This approach aims to reach the goal efficiently and is commonly used in heuristic search problems.",
    BREADTH_FIRST_SEARCH_BIDIRECTIONAL: "Breadth-First Search Bidirectional is an extension of BFS that simultaneously explores nodes from both the start and goal states. It meets in the middle, significantly reducing the search space and finding the shortest path efficiently.",
    ASTART_SEARCH: "A* search is an informed graph search algorithm that combines the benefits of both breadth-first and greedy best-first search, using heuristic estimates to efficiently find the shortest path between nodes in a weighted graph.",
    DEPTH_FIRST_SEARCH: "Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking, often used to traverse and search through a graph or tree data structure.",
    SWARM_ALGORITHM: "Swarm algorithm for the shortest path is a computational approach inspired by the behavior of swarms or colonies. Multiple agents cooperate and communicate to find an optimal path in a given graph, mimicking the collective intelligence of natural systems.",
    CONVERGENT_SWARM_ALGORITHM: "The Convergent Swarm Algorithm is a metaheuristic inspired by swarm behavior. It aims to find the shortest path between nodes in a graph through iterative convergence and exploration, providing a novel approach to solving complex pathfinding problems.",
}

export { PathfindingAlgoDescriptionEnum, PathfindingAlgoDescriptionExtraEnum };