using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Management.API.Model;
using Management.API.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Management.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: api/User
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return new ObjectResult(await _userRepository.GetAllUsers());
        }

        // GET: api/User/5
        [HttpGet("{name}", Name = "Get")]
        public async Task<ActionResult> Get(string name)
        {
            var user = await _userRepository.GetUser(name);
            if (user == null)
                return new NotFoundResult();
            return new ObjectResult(user);

        }

        // POST: api/User
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User user)
        {
            await _userRepository.Create(user);
            return new OkObjectResult(user);
        }

        // PUT: api/User/5
        [HttpPut("{name}")]
        public async Task<IActionResult> Put(string name, [FromBody] User user)
        {
            var userFromDb = await _userRepository.GetUser(name);
            if (userFromDb == null)
                return new NotFoundResult();

            user.Id = userFromDb.Id;
            await _userRepository.Update(user);
            return new OkObjectResult(user);

        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{name}")]
        public async Task<IActionResult> Delete(string name)
        {
            var userFromDb = await _userRepository.GetUser(name);
            if (userFromDb == null)
                return new NotFoundResult();

            await _userRepository.Delete(name);
            return new OkResult();
        }
    }
}
