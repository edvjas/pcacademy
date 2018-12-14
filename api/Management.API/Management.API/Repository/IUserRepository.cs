using Management.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Management.API.Repository
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsers();
        Task<User> GetUser(string name);
        Task Create(User user);
        Task<bool> Update(User user);
        Task<bool> Delete(string name);
    }
}
