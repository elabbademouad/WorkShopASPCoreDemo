using Microsoft.AspNetCore.Mvc;
namespace Services.Controllers
{   
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        public IActionResult Register(){
            return Ok("");
        }

    }
}