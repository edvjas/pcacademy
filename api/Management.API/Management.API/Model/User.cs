using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Management.API.Model
{
    public class User
    {
        [BsonId]
        public ObjectId Id { get; set; }
        public string FirstName  { get; set; }
        public string LastName { get; set; }
        public string LoginName { get; set; }
        public string PhoneNumber { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public int Role { get; set; }
    }
}
