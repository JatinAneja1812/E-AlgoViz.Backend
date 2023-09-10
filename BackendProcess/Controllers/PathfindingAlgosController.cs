using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using AlgorithmsVisualizer.Service.Utilities;
using DTOs;
using Enums;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace BackendProcess.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PathfindingAlgosController : ControllerBase
    {
        private readonly IPathfindingAlgorithmFactory _algorithmFactory;
        private readonly JsonSerializerSettings settings;
        public PathfindingAlgosController(IPathfindingAlgorithmFactory algorithmFactory)
        {
            _algorithmFactory = algorithmFactory;

            settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
        }

        [HttpPost]
        [Route("Dijkstra")]
        public ActionResult VisualizeDijkstra([FromBody] PathfindingAlgoVisualizerDTO dijkstraVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm dijkstraService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.DIJKSTRA);

            var result = dijkstraService.FindShortestPath(dijkstraVisualizerDTO.Grid, dijkstraVisualizerDTO.StartNode, dijkstraVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("AStar")]
        public ActionResult VisualizeAStar([FromBody] PathfindingAlgoVisualizerDTO aStarVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm astarService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.ASTAR);

            var result = astarService.FindShortestPath(aStarVisualizerDTO.Grid, aStarVisualizerDTO.StartNode, aStarVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("DFS")]
        public ActionResult VisualizeDFS([FromBody] PathfindingAlgoVisualizerDTO dfsVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm dfsService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.DEPTH_FIRST_SEARCH);

            var result = dfsService.FindShortestPath(dfsVisualizerDTO.Grid, dfsVisualizerDTO.StartNode, dfsVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("GreedyBFS")]
        public ActionResult VisualizeGreedyBFS([FromBody] PathfindingAlgoVisualizerDTO greedyBFSVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm greedyBFSService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.GREEDY_BEST_FIRST_SEARCH);

            var result = greedyBFSService.FindShortestPath(greedyBFSVisualizerDTO.Grid, greedyBFSVisualizerDTO.StartNode, greedyBFSVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("BFS")]
        public ActionResult VisualizeBreadthFirstSearch([FromBody] PathfindingAlgoVisualizerDTO bfsVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm bfsService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.BREADTH_FIRST_SEARCH);

            var result = bfsService.FindShortestPath(bfsVisualizerDTO.Grid, bfsVisualizerDTO.StartNode, bfsVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("Swarm")]
        public ActionResult VisualizeSwarmSearch([FromBody] PathfindingAlgoVisualizerDTO swarmVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm swarmService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.SWARM);

            var result = swarmService.FindShortestPath(swarmVisualizerDTO.Grid, swarmVisualizerDTO.StartNode, swarmVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("ConvergentSwarm")]
        public ActionResult VisualizeConvergentSwarmSearch([FromBody] PathfindingAlgoVisualizerDTO convergentSwarmVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm convergentSwarmService = _algorithmFactory.FindAlgorithm(PathfindingAlgorithmsEnum.CONVERGENT_SWARM);

            var result = convergentSwarmService.FindShortestPath(convergentSwarmVisualizerDTO.Grid, convergentSwarmVisualizerDTO.StartNode, convergentSwarmVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }
    }
}
