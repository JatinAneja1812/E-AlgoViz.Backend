using AlgorithmsVisualizer.Service.Classes.SortingAlgorithms;
using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;
using Enums;
using Microsoft.Extensions.DependencyInjection;

namespace AlgorithmsVisualizer.Service.Utilities
{
    public class SortingAlgorithmFactory : ISortingAlgorithmFactory
    {
        private readonly IServiceProvider serviceProvider;

        public SortingAlgorithmFactory(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public ISortingAlgorithm FindAlgorithm(SortingAlgorithmsEnum algorithmName)
        {
            switch (algorithmName)
            {
                case SortingAlgorithmsEnum.QUICK_SORT:
                    return serviceProvider.GetRequiredService<QuickSortAlgoService>();

                //case SortingAlgorithmsEnum.ASTAR:
                //    return serviceProvider.GetRequiredService<AStarAlgoService>();
                //case SortingAlgorithmsEnum.GREEDY_BEST_FIRST_SEARCH:
                //    return serviceProvider.GetRequiredService<GreedyBFSAlgoService>();
                //case SortingAlgorithmsEnum.DEPTH_FIRST_SEARCH:
                //    return serviceProvider.GetRequiredService<DepthFirstSearchAlgoService>();
                //case SortingAlgorithmsEnum.BREADTH_FIRST_SEARCH:
                //    return serviceProvider.GetRequiredService<BreadthFirstSearchAlgoService>();
                //case SortingAlgorithmsEnum.SWARM:
                //    return serviceProvider.GetRequiredService<SwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                default:
                    throw new ArgumentException("Invalid algorithm name.");
            }
        }
    }
}
