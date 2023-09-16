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
                case SortingAlgorithmsEnum.GNOME_SORT:
                    return serviceProvider.GetRequiredService<GnomeSortAlgoService>();
                case SortingAlgorithmsEnum.SHAKER_SORT:
                    return serviceProvider.GetRequiredService<ShakerSortAlgoService>();
                case SortingAlgorithmsEnum.ODD_EVEN_SORT:
                    return serviceProvider.GetRequiredService<OddEvenSortAlgoService>();
                case SortingAlgorithmsEnum.PANCAKE_SORT:
                    return serviceProvider.GetRequiredService<PancakeSortAlgoService>();
                case SortingAlgorithmsEnum.RADIX_SORT:
                    return serviceProvider.GetRequiredService<RadixSortAlgoService>();
                case SortingAlgorithmsEnum.CYCLE_SORT:
                    return serviceProvider.GetRequiredService<CycleSortAlgoService>();
                case SortingAlgorithmsEnum.BITONIC_SORT:
                    return serviceProvider.GetRequiredService<BitonicSortAlgoService>();
                case SortingAlgorithmsEnum.TIM_SORT:
                    return serviceProvider.GetRequiredService<TimSortAlgoService>();
                case SortingAlgorithmsEnum.BOGO_SORT:
                    return serviceProvider.GetRequiredService<BogoSortAlgoService>();
                case SortingAlgorithmsEnum.CUBE_SORT:
                    return serviceProvider.GetRequiredService<CubeSortAlgoService>();
                default:
                    throw new ArgumentException("Invalid algorithm name.");
            }
        }
    }
}
