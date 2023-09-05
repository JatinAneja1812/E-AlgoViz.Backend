using DataModels;

namespace AlgorithmsVisualizer.Services.Classes.PathfindingAlgorithms.Interfaces
{
    public interface IDijkstraAlgoService
    {
        List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode);
    }
}
