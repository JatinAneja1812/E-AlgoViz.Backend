using Enums;

namespace DTOs
{
    public class SortingAlgoVisualizerDTO
    {
        public List<int> Array { get; set; }
        public SortingAlgorithmsEnum sortingAlgorithmType { get; set; }
    }
}
