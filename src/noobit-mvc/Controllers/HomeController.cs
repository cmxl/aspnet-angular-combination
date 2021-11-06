using Microsoft.AspNetCore.Mvc;

namespace noobit.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Index() => View();
    }
}