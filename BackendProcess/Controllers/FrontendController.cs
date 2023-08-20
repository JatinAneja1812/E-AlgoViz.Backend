using DTOs;
using Interfaces.PathfindingAlgorithms.Interface.IDijkstra;
using Microsoft.AspNetCore.Mvc;
using Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;
using System.Text.Json;

namespace BackendProcess.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FrontendController : ControllerBase
    {
        private readonly IDijkstra _dijkstra;

        public FrontendController(IDijkstra Dijkstra)
        {
            _dijkstra = Dijkstra;

        }
      


        [HttpPost]
        [Route("Dijkstra")]
        public ActionResult VisualizeDijkstra([FromBody] DijkstraVisualizerDTO dijkstraVisualizerDTO)
        {
            var gridData = dijkstraVisualizerDTO;
            //List<List<Node>> listListOfNodes = dijkstraVisualizerDTO.Grid;  /* Your List<List<Node>> */
            //int numRows = listListOfNodes.Count;
            //int numCols = listListOfNodes[0].Count;

            //Node[,] nodeArray = new Node[numRows, numCols];

            //for (int i = 0; i < numRows; i++)
            //{
            //    for (int j = 0; j < numCols; j++)
            //    {
            //        nodeArray[i, j] = listListOfNodes[i][j];
            //    }
            //}

            var result = _dijkstra.FindShortestPath(dijkstraVisualizerDTO.Grid, dijkstraVisualizerDTO.StartNode, dijkstraVisualizerDTO.EndNode);
            var settings = new JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };


            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

    }
}
