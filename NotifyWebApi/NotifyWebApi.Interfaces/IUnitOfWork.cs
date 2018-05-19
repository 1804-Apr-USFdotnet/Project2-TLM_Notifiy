using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NotifyWebApi.Interfaces
{
    interface IUnitOfWork : IDisposable
    {
        
            ITaskRepository Tasks { get; }
            IBillRepository Bills { get; }
            IUserRepository Users { get; }
            int Complete();
        
    }
}
