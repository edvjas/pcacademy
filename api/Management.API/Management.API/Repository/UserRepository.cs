using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Management.API.Model;
using MongoDB.Driver;

namespace Management.API.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly IUserContext _context;

        public UserRepository(IUserContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _context.Users.Find(_ => true).ToListAsync();
        }

        public Task<User> GetUser(string name)
        {
            FilterDefinition<User> filter = Builders<User>.Filter.Eq(m => m.FirstName, name);
            return _context.Users.Find(filter).FirstOrDefaultAsync();
        }

        public async Task Create(User user)
        {
            await _context.Users.InsertOneAsync(user);
        }

        public async Task<bool> Delete(string name)
        {
            FilterDefinition<User> filter = Builders<User>.Filter.Eq(u => u.FirstName, name);
            DeleteResult deleteResult = await _context.Users.DeleteOneAsync(filter);
            return deleteResult.IsAcknowledged && deleteResult.DeletedCount > 0;
        }
        
        public async Task<bool> Update(User user)
        {
            ReplaceOneResult updateResult = await _context.Users.ReplaceOneAsync(filter: u => u.Id == user.Id, replacement: user);
            return updateResult.IsAcknowledged && updateResult.ModifiedCount > 0;
        }
    }
}
