﻿using AlgorithmsVisualizer.Service.Interfaces;
using AlgorithmsVisualizer.Service.Interfaces.PathfindingAlgorithms;
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
        private readonly IAStarAlgoService _aStarAlgoService;
        private readonly IDepthFirstSearchAlgoService _depthFirstSearchAlgoService;
        private readonly IGreedyBFSAlgoService _greedyBFSAlgoService;
        private readonly JsonSerializerSettings settings;
        public PathfindingAlgosController(IDijkstraAlgoService DijkstraAlgoService, IAStarAlgoService AStarAlgoService, 
            IDepthFirstSearchAlgoService depthFirstSearchAlgoService, IGreedyBFSAlgoService greedyBFSAlgoService)
        {
            _dijkstraAlgoService = DijkstraAlgoService;
            _aStarAlgoService = AStarAlgoService;
            _depthFirstSearchAlgoService = depthFirstSearchAlgoService;

            settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
            _greedyBFSAlgoService = greedyBFSAlgoService;
        }

        [HttpPost]
        [Route("Dijkstra")]
        public ActionResult VisualizeDijkstra([FromBody] PathfindingAlgoVisualizerDTO dijkstraVisualizerDTO)
        {
            var result = _dijkstraAlgoService.FindShortestPath(dijkstraVisualizerDTO.Grid, dijkstraVisualizerDTO.StartNode, dijkstraVisualizerDTO.EndNode);
   
            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("AStar")]
        public ActionResult VisualizeAStar([FromBody] PathfindingAlgoVisualizerDTO aStarVisualizerDTO)
        {
            var result = _aStarAlgoService.FindShortestPath(aStarVisualizerDTO.Grid, aStarVisualizerDTO.StartNode, aStarVisualizerDTO.EndNode);
          
            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("DFS")]
        public ActionResult VisualizeDFS([FromBody] PathfindingAlgoVisualizerDTO dfsVisualizerDTO)
        {
            var result = _depthFirstSearchAlgoService.FindShortestPath(dfsVisualizerDTO.Grid, dfsVisualizerDTO.StartNode, dfsVisualizerDTO.EndNode);
           
            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("GreedyBFS")]
        public ActionResult VisualizeGreedyBFS([FromBody] PathfindingAlgoVisualizerDTO greedyBFSVisualizerDTO)
        {
            var result = _greedyBFSAlgoService.FindShortestPath(greedyBFSVisualizerDTO.Grid, greedyBFSVisualizerDTO.StartNode, greedyBFSVisualizerDTO.EndNode);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }
    }
}
