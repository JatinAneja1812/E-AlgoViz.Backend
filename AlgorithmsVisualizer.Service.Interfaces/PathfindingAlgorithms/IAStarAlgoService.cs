﻿using DataModels;

namespace AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms
{
    public interface IAStarAlgoService
    {
        List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode);
    }
}
