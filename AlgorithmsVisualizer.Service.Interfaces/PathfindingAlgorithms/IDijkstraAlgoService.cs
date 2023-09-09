using DataModels;

namespace AlgorithmsVisualizer.Service.Interfaces
{
    public interface IDijkstraAlgoService
    {
        List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode);
    }
}
