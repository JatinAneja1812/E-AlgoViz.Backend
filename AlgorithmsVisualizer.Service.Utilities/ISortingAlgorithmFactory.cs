using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;
using Enums;

namespace AlgorithmsVisualizer.Service.Utilities
{
    public interface ISortingAlgorithmFactory
    {
        ISortingAlgorithm FindAlgorithm(SortingAlgorithmsEnum algorithmName);
    }
}
