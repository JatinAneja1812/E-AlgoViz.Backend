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

        [HttpPost]
        [Route("MergeSort")]
        public ActionResult VisualizeMergeSort([FromBody] SortingAlgoVisualizerDTO mergeSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm mergeSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.MERGE_SORT);

            var result = mergeSortService.SortList(mergeSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("HeapSort")]
        public ActionResult VisualizeHeapSort([FromBody] SortingAlgoVisualizerDTO heapSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm heapSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.HEAP_SORT);

            var result = heapSortService.SortList(heapSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("ShellSort")]
        public ActionResult VisualizeShellSort([FromBody] SortingAlgoVisualizerDTO shellSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm shellSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.SHELL_SORT);

            var result = shellSortService.SortList(shellSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("BubbleSort")]
        public ActionResult VisualizeBuubbleSort([FromBody] SortingAlgoVisualizerDTO bubbleSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm bubbleSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.BUBBLE_SORT);

            var result = bubbleSortService.SortList(bubbleSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("SelectionSort")]
        public ActionResult VisualizeSelectionSort([FromBody] SortingAlgoVisualizerDTO selectionSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm selectionSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.SELECTION_SORT);

            var result = selectionSortService.SortList(selectionSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }

        [HttpPost]
        [Route("InsertionSort")]
        public ActionResult VisualizeInsertionSort([FromBody] SortingAlgoVisualizerDTO insertionSortDTO)
        {
            // Retrieving algorithm service
            ISortingAlgorithm insertionSortService = _algorithmFactory.FindAlgorithm(SortingAlgorithmsEnum.INSERTION_SORT);

            var result = insertionSortService.SortList(insertionSortDTO.Array);

            string json = JsonConvert.SerializeObject(result, settings);

            return Ok(json);
        }
    }
}
