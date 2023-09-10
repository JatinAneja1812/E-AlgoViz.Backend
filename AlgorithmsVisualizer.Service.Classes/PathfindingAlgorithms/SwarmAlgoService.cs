using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using DataModels;

namespace AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms
{
    public class SwarmAlgoService : IPathfindingAlgorithm
    {
        public List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode)
        {
            List<Node> priorityQueue = new List<Node>();
            priorityQueue.Add(startNode);
            startNode.IsVisited = true;

            List<Node> visitedNodesInOrder = new List<Node>();

            while (priorityQueue.Count > 0)
            {
                priorityQueue.Sort((a, b) => (a.Distance + a.Heuristic) - (b.Distance + b.Heuristic));
                Node currentNode = priorityQueue[0];
                priorityQueue.RemoveAt(0);

                // Check if the current node is the destination
                if (currentNode.Row == endNode.Row && currentNode.Col == endNode.Col)
                {
                    visitedNodesInOrder.Add(currentNode);
                    
                    return visitedNodesInOrder;
                }

                currentNode.IsVisited = true;
                List<Node> neighbors = GetNeighbors(currentNode, grid);

                foreach (Node neighbor in neighbors)
                {
                    if (!neighbor.IsVisited && !neighbor.IsWall && !neighbor.IsWeight)
                    {
                        neighbor.IsVisited = true;
                        neighbor.PreviousNode = currentNode;
                        neighbor.Distance = currentNode.Distance + 1;
                        int neighborHeuristic = CalculateHeuristic(neighbor, endNode);
                        int weightedHeuristic = (int)(neighbor.Distance * 2 + neighborHeuristic * 0.8);
                        priorityQueue.Add(neighbor);
                        neighbor.Heuristic = weightedHeuristic;
                        visitedNodesInOrder.Add(neighbor);
                    }
                }
                visitedNodesInOrder.Add(currentNode);
            }

            // No path found
            return visitedNodesInOrder;
        }
        private List<Node> GetNeighbors(Node node, List<List<Node>> grid)
        {
            List<Node> neighbors = new List<Node>();
            int numRows = grid.Count;
            int numCols = grid[0].Count;
            int[] dr = { -1, 0, 1, 0 };
            int[] dc = { 0, 1, 0, -1 };

            for (int i = 0; i < 4; i++)
            {
                int newRow = node.Row + dr[i];
                int newCol = node.Col + dc[i];

                if (IsValidNode(newRow, newCol, numRows, numCols))
                {
                    Node neighbor = grid[newRow][newCol];
                    neighbors.Add(neighbor);
                }
            }

            return neighbors;
        }

        private bool IsValidNode(int row, int col, int numRows, int numCols)
        {
            return row >= 0 && row < numRows && col >= 0 && col < numCols;
        }

        private int CalculateHeuristic(Node nodeA, Node nodeB)
        {
            int dx = Math.Abs(nodeA.Col - nodeB.Col);
            int dy = Math.Abs(nodeA.Row - nodeB.Row);
            return dx + dy;
        }
    }
}