export class AuthenticationServices{
    async Token(login){
        var response= await fetch("http://localhost:5000/api/Authentication/token",{
          method: "POST",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'    
          },
          body:`Username=${login.Username}&Password=${login.Password}`
        });
        var data= await response.json();           
        return  data;
    }
    async Register(register){
      var response= await fetch("http://localhost:5000/api/Authentication/register",{
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'    
        },
        body:`FirstName=${register.Firstname}&LastName=${register.lastname}&UserName=${register.Username}&Password=${register.Password}`
      });
      //var data= await response.json();           
      return  response;
    }
}
/*
let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MzM5MTk1MzcsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAvIn0.029BiNSIw8bDLqqr0qxXRyIJhF51kaKAJIuZ07RbZ-c";
    fetch("http://localhost:5000/api/Values/get",{
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`, 
            "Content-Type": "application/json"
          }
    }).then(respons=>respons.json()).then(result=>console.log(result))
    
*/ 