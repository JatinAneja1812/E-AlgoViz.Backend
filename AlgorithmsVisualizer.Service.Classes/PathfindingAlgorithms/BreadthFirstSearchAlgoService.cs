using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using DataModels;

namespace AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms
{
    public class BreadthFirstSearchAlgoService : IPathfindingAlgorithm
    {
        public List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode)
        {
            startNode.Distance = 0;

            List<Node> visitedNodesInOrder = new List<Node>();
            Queue<Node> queue = new Queue<Node>();
            queue.Enqueue(startNode);

            while (queue.Count > 0)
            {
                Node currentNode = queue.Dequeue();

                if (currentNode.Row == endNode.Row && currentNode.Col == endNode.Col)
                {
                    visitedNodesInOrder.Add(currentNode);
                    break;
                }

                if (!currentNode.IsVisited)
                {
                    currentNode.IsVisited = true;
                    visitedNodesInOrder.Add(currentNode);
                    UpdateNeighbors(grid, currentNode, queue);
                }
            }

            // Now, endNode will have references to all previous nodes.
            return visitedNodesInOrder;
        }

        private void UpdateNeighbors(List<List<Node>> grid, Node node, Queue<Node> queue)
        {
            int numRows = grid.Count;
            int numCols = grid[0].Count;
            int[] dr = { -1, 0, 1, 0 };
            int[] dc = { 0, 1, 0, -1 };

            for (int i = 0; i < 4; i++)
            {
                int newRow = node.Row + dr[i];
                int newCol = node.Col + dc[i];

                if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols)
                {
                    Node neighbor = grid[newRow][newCol];

                    if (!neighbor.IsVisited && (!neighbor.IsWall || neighbor.IsWeight))
                    {
                        int weight = neighbor.IsWeight ? 5 : 1; // Adjust the weight as needed
                        int newDistance = node.Distance + weight;

                        if (newDistance < neighbor.Distance)
                        {
                            neighbor.Distance = newDistance;
                            neighbor.PreviousNode = node;
                            queue.Enqueue(neighbor);
                        }
                    }
                }
            }
        }
    }
}
