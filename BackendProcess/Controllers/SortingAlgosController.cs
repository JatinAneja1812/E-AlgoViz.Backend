using AlgorithmsVisualizer.Service.Interfaces.SortingAlgorithms;
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
        [Route("QuickSort")]
        public ActionResult VisualizeQuickSort([FromBody] SortingAlgoVisualizerDTO quickSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm quickSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.QUICK_SORT);

            var result = quickSortService.SortList(quickSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

    }
}
