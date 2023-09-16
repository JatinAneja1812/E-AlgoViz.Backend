using DataModels;
using Enums;

namespace DTOs
{
    public class PathfindingAlgoVisualizerDTO
    {
        public List<List<Node>>? Grid { get; set; }
        public Node? StartNode { get; set; }
        public Node? EndNode { get; set; }
        public PathfindingAlgorithmsEnum pathfindingAlgorithmType { get; set; }
    }
}
