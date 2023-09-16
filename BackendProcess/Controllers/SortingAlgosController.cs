using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;
using AlgorithmsVisualizer.Service.Utilities;
using DTOs;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace BackendProcess.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SortingAlgosController : ControllerBase
    {
        private readonly ISortingAlgorithmFactory _algorithmFactory;
        private readonly JsonSerializerSettings settings;
        public SortingAlgosController(ISortingAlgorithmFactory algorithmFactory)
        {
            _algorithmFactory = algorithmFactory;

            settings = new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() };
        }

        [HttpPost]
        [Route("Sort")]
        public ActionResult VisualizeSort([FromBody] SortingAlgoVisualizerDTO sortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm sortService = _algorithmFactory.FindAlgorithm(sortDTO.sortingAlgorithmType);

            var result = sortService.SortList(sortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }
    }
}
