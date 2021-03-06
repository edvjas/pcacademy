﻿using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Management.API.Model
{
    public interface IUserContext
    {
        IMongoCollection<User> Users { get;}
    }
}
