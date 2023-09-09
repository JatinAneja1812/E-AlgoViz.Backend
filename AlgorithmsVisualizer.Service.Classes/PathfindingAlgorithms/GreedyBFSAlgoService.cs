using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using DataModels;

namespace AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms
{
    public class GreedyBFSAlgoService : IGreedyBFSAlgoService
    {
        public List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode)
        {
            if (startNode == null || endNode == null || startNode == endNode)
            {
                return null;
            }

            foreach (var row in grid)
            {
                foreach (var node in row)
                {
                    node.Distance = int.MaxValue;
                    node.IsVisited = false;
                    node.PreviousNode = null;
                }
            }

            List<Node> visitedNodesInOrder = new List<Node>();
            List<Node> unvisitedNodes = new List<Node>();
            unvisitedNodes.Add(startNode);

            while (unvisitedNodes.Count > 0)
            {
                Node closestNode = GetClosestNode(unvisitedNodes, endNode);

                if (closestNode.Row == endNode.Row && closestNode.Col == endNode.Col)
                {
                    visitedNodesInOrder.Add(closestNode);
                    return visitedNodesInOrder;
                }

                unvisitedNodes.Remove(closestNode);
                closestNode.IsVisited = true;
                visitedNodesInOrder.Add(closestNode);

                List<Node> neighbors = GetNeighbors(grid, closestNode);
                foreach (var neighbor in neighbors)
                {
                    if (!neighbor.IsVisited)
                    {
                        int tentativeDistance = closestNode.Distance + (neighbor.IsWeight ? 5 : 1);

                        if (tentativeDistance < neighbor.Distance)
                        {
                            neighbor.Distance = tentativeDistance;
                            neighbor.PreviousNode = closestNode;
                        }

                        unvisitedNodes.Add(neighbor);
                    }
                }
            }

            return visitedNodesInOrder;
        }

        private Node GetClosestNode(List<Node> nodes, Node endNode)
        {
            Node closestNode = null;
            double minDistance = double.MaxValue;

            foreach (var node in nodes)
            {
                double distance = CalculateEuclideanDistance(node, endNode);
                if (distance < minDistance)
                {
                    minDistance = distance;
                    closestNode = node;
                }
            }

            return closestNode;
        }

        private double CalculateEuclideanDistance(Node nodeA, Node nodeB)
        {
            int deltaX = nodeB.Col - nodeA.Col;
            int deltaY = nodeB.Row - nodeA.Row;
            return Math.Sqrt(deltaX * deltaX + deltaY * deltaY);
        }

        private List<Node> GetNeighbors(List<List<Node>> grid, Node node)
        {
            List<Node> neighbors = new List<Node>();
            int numRows = grid.Count;
            int numCols = grid[0].Count;
            int row = node.Row;
            int col = node.Col;

            if (row > 0)
                neighbors.Add(grid[row - 1][col]);
            if (row < numRows - 1)
                neighbors.Add(grid[row + 1][col]);
            if (col > 0)
                neighbors.Add(grid[row][col - 1]);
            if (col < numCols - 1)
                neighbors.Add(grid[row][col + 1]);

            return neighbors.Where(neighbor => !neighbor.IsVisited && !neighbor.IsWall).ToList();
        }
    }
}
