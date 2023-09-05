using AlgorithmsVisualizer.Services.Classes.PathfindingAlgorithms.Interfaces;
using DataModels;

namespace AlgorithmsVisualizer.Services.Interfaces.PathfindingAlgorithms.Services
{
    public class DijkstraAlgoService : IDijkstraAlgoService
    {
        public DijkstraAlgoService() { }

        public List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode)
        {
            foreach (var row in grid)
            {
                foreach (var node in row)
                {
                    node.Distance = int.MaxValue;
                    node.IsVisited = false;
                    node.PreviousNode = null;
                }
            }

            startNode.Distance = 0;

            List<Node> visitedNodesInOrder = new List<Node>();
            Node currentNode = startNode; // Initialize currentNode

            while (currentNode != null)
            {
                currentNode.IsVisited = true;

                if (currentNode.Row == endNode.Row && currentNode.Col == endNode.Col)
                {
                    UpdateNeighbors(grid, currentNode); // Update neighbors for endNode
                    visitedNodesInOrder.Add(currentNode);
                    break;
                }

                UpdateNeighbors(grid, currentNode);

                visitedNodesInOrder.Add(currentNode); // Add the currentNode
                currentNode = GetClosestUnvisitedNode(grid); // Update currentNode
            }

            return visitedNodesInOrder;
        }

        static Node GetClosestUnvisitedNode(List<List<Node>> grid)
        {
            double minDistance = double.MaxValue;
            Node closestNode = null;

            foreach (var row in grid)
            {
                foreach (var node in row)
                {
                    if (!node.IsVisited && node.Distance < minDistance)
                    {
                        minDistance = node.Distance;
                        closestNode = node;
                    }
                }
            }

            return closestNode;
        }

        static void UpdateNeighbors(List<List<Node>> grid, Node node)
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

                    if (!neighbor.IsVisited && !neighbor.IsWall)
                    {
                        int tentativeDistance;

                        if (neighbor.IsWeight)
                        {
                            if (neighbor.Distance > node.Distance + CalculateWeight(node, neighbor))
                            {
                                // Only update the distance and previous node if it's a shorter path
                                neighbor.Distance = (int)(node.Distance + CalculateWeight(node, neighbor));
                                neighbor.PreviousNode = node;
                            }
                        }
                        else
                        {
                            tentativeDistance = node.Distance + 1; // Assuming each step has a cost of 1

                            if (tentativeDistance < neighbor.Distance)
                            {
                                neighbor.Distance = tentativeDistance;
                                neighbor.PreviousNode = node; // Update the closest node
                            }
                        }
                    }
                }
            }
        }

        static double CalculateWeight(Node nodeA, Node nodeB)
        {
            int deltaX = nodeB.Col - nodeA.Col;
            int deltaY = nodeB.Row - nodeA.Row;

            // Calculate Euclidean distance
            double distance = Math.Sqrt(deltaX * deltaX + deltaY * deltaY);

            return distance;
        }
    }
}
