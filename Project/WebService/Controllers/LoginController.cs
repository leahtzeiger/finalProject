using BLL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebService.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage login(string loginName, string password)
        {
            DTOLoginResponse response = UserService.Login(loginName, password);
            return Request.CreateResponse(HttpStatusCode.Created, response);
        }
        [HttpGet]
        public string hello()
        {
            return "hello";
        }
        [HttpPost]
        public string hello1()
        {
            return "hello";
        }
    }
}
