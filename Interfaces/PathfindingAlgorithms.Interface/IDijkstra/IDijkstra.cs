using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces.PathfindingAlgorithms.Interface.IDijkstra
{
    public interface IDijkstra
    {
        List<Node> FindShortestPath(List<List<Node>> grid, Node startNode, Node endNode);

    }
}
