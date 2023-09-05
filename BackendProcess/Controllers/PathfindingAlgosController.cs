using AlgorithmsVisualizer.Services.Classes.PathfindingAlgorithms.Interfaces;
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
        private readonly IDijkstraAlgoService _dijkstraAlgoService;

        public PathfindingAlgosController(IDijkstraAlgoService DijkstraAlgoService)
        {
            _dijkstraAlgoService = DijkstraAlgoService;
        }

        [HttpPost]
        [Route("Dijkstra")]
        public ActionResult VisualizeDijkstra([FromBody] PathfindingAlgoVisualizerDTO dijkstraVisualizerDTO)
        {

            var result = _dijkstraAlgoService.FindShortestPath(dijkstraVisualizerDTO.Grid, dijkstraVisualizerDTO.StartNode, dijkstraVisualizerDTO.EndNode);
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }
    }
}
