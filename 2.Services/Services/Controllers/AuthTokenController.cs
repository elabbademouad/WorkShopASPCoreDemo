using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Services.Model;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    public class AuthTokenController : Controller
    {
       private IConfiguration _config; 

       public AuthTokenController(IConfiguration config){
           _config=config;
       }
       [AllowAnonymous]
       [HttpPost("token")]
       public IActionResult Token([FromForm] LoginModel login)
       { 
            IActionResult response = Unauthorized();
            var user = Authenticate(login);

            if (user != null)
            {
                var tokenString = BuildToken();
                response = Ok(new { token = tokenString });
            }

            return response;
        }

        private string BuildToken()
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
            _config["Jwt:Issuer"],
            expires: DateTime.Now.AddMonths(1),
            signingCredentials: creds);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private UserModel Authenticate(LoginModel login)
        {
            UserModel user = null;

            if (login.Username == "admin" && login.Password == "1234")
            {
                user = new UserModel { Name = "Mouad Elabbade", Email = "elabbademouad@gmail.com"};
            }
            return user;
        }
        
    }
}
