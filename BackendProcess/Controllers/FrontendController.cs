using Microsoft.AspNetCore.Mvc;

namespace BackendProcess.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FrontendController : ControllerBase
    {
        public FrontendController()
        {

        }

        [HttpGet]
        [Route("hello")]
        public string GetText()
        {
           
            return "Hello Jatin: Connection Worked";

        }

    }
}
