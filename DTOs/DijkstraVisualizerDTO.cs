using Models;

namespace DTOs
{
    public class DijkstraVisualizerDTO
    {
        public List<List<Node>>? Grid { get; set; }
        public Node? StartNode { get; set; }
        public Node? EndNode { get; set; }
    }
}
