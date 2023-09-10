﻿using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using DataModels;

namespace AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms
{
    public class ConvergentSwarmAlgoService : IPathfindingAlgorithm
    {
        public List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode)
        {
            List<Node> priorityQueue = new List<Node>();
            startNode.Distance = 0;
            priorityQueue.Add(startNode);
            List<Node> visitedNodesInOrder = new List<Node>();

            while (priorityQueue.Count > 0)
            {
                priorityQueue.Sort((a, b) => (a.Distance + a.Heuristic) - (b.Distance + b.Heuristic));
                Node currentNode = priorityQueue[0];
                priorityQueue.RemoveAt(0);

                if (currentNode.Row == endNode.Row && currentNode.Col == endNode.Col)
                {
                    visitedNodesInOrder.Add(currentNode);
                    return visitedNodesInOrder;
                }

                currentNode.IsVisited = true;
                List<Node> neighbors = GetNeighbors(currentNode, grid);

                foreach (Node neighbor in neighbors)
                {
                    // Check if the neighbor is a valid, unvisited node and not a wall or weight
                    if (!neighbor.IsVisited && !neighbor.IsWall && !neighbor.IsWeight)
                    {
                        neighbor.IsVisited = true;
                        neighbor.PreviousNode = currentNode;
                        int weight = neighbor.IsWeight ? 5 : 1; // Adjust weight as needed
                        neighbor.Distance = currentNode.Distance + weight;
                        neighbor.Heuristic = CalculateHeuristic(neighbor, endNode);

                        // Add the neighbor to the priority queue for further exploration
                        priorityQueue.Add(neighbor);
                    }
                    visitedNodesInOrder.Add(neighbor);
                }
                visitedNodesInOrder.Add(currentNode);
            }

            return visitedNodesInOrder;
        }

        private List<Node> GetNeighbors(Node node, List<List<Node>> grid)
        {
            List<Node> neighbors = new List<Node>();
            int numRows = grid.Count;
            int numCols = grid[0].Count;
            int[][] offsets = new int[][]
            {
                new int[] { -1, 0 }, // Top
                new int[] { 1, 0 },  // Bottom
                new int[] { 0, -1 }, // Left
                new int[] { 0, 1 }   // Right
            };

            foreach (int[] offset in offsets)
            {
                int newRow = node.Row + offset[0];
                int newCol = node.Col + offset[1];

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

            // Increase heuristic value here as needed for Convergent Swarm
            return dx + dy + nodeA.Heuristic;
        }
    }
}
