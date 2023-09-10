using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using DataModels;

namespace AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms
{
    public class DepthFirstSearchAlgoService : IPathfindingAlgorithm
    {
        public List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode)
        {
            List<Node> visitedNodesInOrder = new List<Node>();
            Stack<Node> stack = new Stack<Node>();
            stack.Push(startNode);

            while (stack.Count > 0)
            {
                Node currNode = stack.Pop();

                if (currNode.Row == endNode.Row && currNode.Col == endNode.Col)
                {
                    visitedNodesInOrder.Add(currNode);
                    return visitedNodesInOrder;
                }

                if (!currNode.IsWall && (currNode.IsStart || !currNode.IsVisited))
                {
                    currNode.IsVisited = true;
                    visitedNodesInOrder.Add(currNode);

                    int row = currNode.Row;
                    int col = currNode.Col;

                    UpdateUnvisitedNeighbors(row, col, stack, grid, currNode);
                }
            }

            return visitedNodesInOrder;
        }

        private void UpdateUnvisitedNeighbors(int row, int col, Stack<Node> stack, List<List<Node>> grid, Node currNode)
        {
            Node next;

            if (row > 0)
            {
                next = grid[row - 1][col];
                if (!next.IsVisited && (!next.IsWall || next.IsWeight))
                {
                    int weight = next.IsWeight ? 5 : 1; // Adjust the weight as needed
                    int tentativeDistance = currNode.Distance + weight;

                    if (tentativeDistance < next.Distance)
                    {
                        next.Distance = tentativeDistance;
                        next.PreviousNode = currNode;
                    }

                    stack.Push(next);
                }
            }

            if (row < grid.Count - 1)
            {
                next = grid[row + 1][col];
                if (!next.IsVisited)
                {
                    next.PreviousNode = currNode;
                    stack.Push(next);
                }
            }

            if (col < grid[0].Count - 1)
            {
                next = grid[row][col + 1];
                if (!next.IsVisited)
                {
                    next.PreviousNode = currNode;
                    stack.Push(next);
                }
            }

            if (col > 0)
            {
                next = grid[row][col - 1];
                if (!next.IsVisited)
                {
                    next.PreviousNode = currNode;
                    stack.Push(next);
                }
            }
        }
    }
}
