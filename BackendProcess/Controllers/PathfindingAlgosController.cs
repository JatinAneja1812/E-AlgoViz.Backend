using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
using AlgorithmsVisualizer.Service.Utilities;
using DTOs;
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
        [Route("ShortestPath")]
        public ActionResult VisualizePathfindingAlgorithm([FromBody] PathfindingAlgoVisualizerDTO shortestPathVisualizerDTO)
        {
            // Retrieving algorithm service
            IPathfindingAlgorithm pathfindingAlgoService = _algorithmFactory.FindAlgorithm(shortestPathVisualizerDTO.pathfindingAlgorithmType);

            var result = pathfindingAlgoService.FindShortestPath(shortestPathVisualizerDTO.Grid, shortestPathVisualizerDTO.StartNode, shortestPathVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }
    }
}
