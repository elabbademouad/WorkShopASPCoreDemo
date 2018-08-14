using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.DataContext;
using DataAccess.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Services.Model;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
       private IConfiguration _config; 

       public AuthenticationController(IConfiguration config){
           _config=config;
       }

        [AllowAnonymous]
        [HttpPost("register")]
        public IActionResult Register([FromForm] UserModel userModel){
            using (var db=new WorkShopDbContext())
            {
                var user=db.Users.FirstOrDefault(u=>u.UserName==userModel.UserName);
                if(user!=null)
                {
                    return BadRequest("this username is alrady exist");
                }
                else
                {
                    db.Users.Add(new UserEntity(){
                        FirstName=userModel.FirstName,
                        LastName=userModel.LastName,
                        UserName=userModel.UserName,
                        Password=userModel.Password
                    });
                    db.SaveChanges();
                    return Ok();
                }
            }
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
                response = Ok(new { token = tokenString ,firstname=user.FirstName,lastname=user.LastName,username=user.UserName });
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
            using (var db=new WorkShopDbContext())
            {
                var userEntity=db.Users.FirstOrDefault(u=>u.UserName==login.Username);
                if(userEntity!=null)
                {
                    return new UserModel(){
                        FirstName=userEntity.FirstName,
                        LastName=userEntity.LastName,
                        UserName=userEntity.UserName
                    };
                }
                
            return null;
            }
        }
        
    }
}
