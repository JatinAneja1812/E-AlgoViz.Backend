using AlgorithmsVisualizer.Service.Classes.PathfindingAlgorithms;
using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using Enums;
using Microsoft.Extensions.DependencyInjection;

namespace AlgorithmsVisualizer.Service.Utilities
{
    public class PathfindingAlgorithmFactory : IPathfindingAlgorithmFactory
    {
        private readonly IServiceProvider serviceProvider;

        public PathfindingAlgorithmFactory(IServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public IPathfindingAlgorithm FindAlgorithm(PathfindingAlgorithmsEnum algorithmName)
        {
            // Here I created an instance of the algorithm based on the algorithmName.
            switch (algorithmName)
            {
                case PathfindingAlgorithmsEnum.DIJKSTRA:
                    return serviceProvider.GetRequiredService<DijkstraAlgoService>();
                case PathfindingAlgorithmsEnum.ASTAR:
                    return serviceProvider.GetRequiredService<AStarAlgoService>();
                case PathfindingAlgorithmsEnum.GREEDY_BEST_FIRST_SEARCH:
                    return serviceProvider.GetRequiredService<GreedyBFSAlgoService>();
                case PathfindingAlgorithmsEnum.DEPTH_FIRST_SEARCH:
                    return serviceProvider.GetRequiredService<DepthFirstSearchAlgoService>();
                case PathfindingAlgorithmsEnum.BREADTH_FIRST_SEARCH:
                    return serviceProvider.GetRequiredService<BreadthFirstSearchAlgoService>();
                case PathfindingAlgorithmsEnum.SWARM:
                    return serviceProvider.GetRequiredService<SwarmAlgoService>();
                case PathfindingAlgorithmsEnum.CONVERGENT_SWARM:
                    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                default:
                    throw new ArgumentException("Invalid algorithm name.");
            }
        }
    }
}
