using DataModels;

namespace AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms
{
    public interface IGreedyBFSAlgoService
    {
        List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode);
    }
}
