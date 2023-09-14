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
                case SortingAlgorithmsEnum.MERGE_SORT:
                    return serviceProvider.GetRequiredService<MergeSortAlgoService>();
                case SortingAlgorithmsEnum.HEAP_SORT:
                    return serviceProvider.GetRequiredService<HeapSortAlgoService>();
                case SortingAlgorithmsEnum.SHELL_SORT:
                    return serviceProvider.GetRequiredService<ShellSortAlgoService>();
                case SortingAlgorithmsEnum.BUBBLE_SORT:
                    return serviceProvider.GetRequiredService<BubbleSortAlgoService>();
                case SortingAlgorithmsEnum.SELECTION_SORT:
                    return serviceProvider.GetRequiredService<SelectionSortAlgoService>();
                case SortingAlgorithmsEnum.INSERTION_SORT:
                    return serviceProvider.GetRequiredService<InsertionSortAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();
                //case SortingAlgorithmsEnum.CONVERGENT_SWARM:
                //    return serviceProvider.GetRequiredService<ConvergentSwarmAlgoService>();

                default:
                    throw new ArgumentException("Invalid algorithm name.");
            }
        }
    }
}
