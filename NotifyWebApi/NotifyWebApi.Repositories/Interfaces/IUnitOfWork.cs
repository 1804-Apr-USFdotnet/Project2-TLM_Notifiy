﻿using System;

namespace NotifyWebApi.Repositories.Interfaces
{
    interface IUnitOfWork : IDisposable
    {
        
            ITaskRepository Tasks { get; }
            //IBillRepository Bills { get; }
            //IUserRepository Users { get; }
            int Complete();
            //Git Commit Discord Test
    }
}