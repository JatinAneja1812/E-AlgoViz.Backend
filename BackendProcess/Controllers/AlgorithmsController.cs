using AlgorithmsVisualizer.Services.Classes;
using DataModels;
using Microsoft.AspNetCore.Mvc;

namespace BackendProcess.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlgorithmsController : ControllerBase
    {
        private readonly IAlgorithmsInfo _algorithmsInfoService;
        public AlgorithmsController(IAlgorithmsInfo AlgorithmsInfoService)
        {
            _algorithmsInfoService = AlgorithmsInfoService;
        }

        [HttpGet]
        [Route("AlgorithmsInfo")]
        public ActionResult<List<Algorithm>> GetAllAlogirthmsData()
        {
            var res = _algorithmsInfoService.GetAllAlgorithmsData();

            return Ok(res);
        }
    }
}
