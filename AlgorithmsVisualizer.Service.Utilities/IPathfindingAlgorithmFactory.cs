using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using Enums;

namespace AlgorithmsVisualizer.Service.Utilities
{
    public interface IPathfindingAlgorithmFactory
    {
        IPathfindingAlgorithm FindAlgorithm(PathfindingAlgorithmsEnum algorithmName);
    }
}
