using System.Data.Entity;
using System.Runtime.Remoting.Contexts;
using NotifyWebApi.Models;
using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.Repositories
{
    public class TaskItemRepository : Repository<TaskItem>, ITaskRepository
    {
        public TaskItemRepository(DbContext context) : base(context)
        {
        }

        public NotifyContext RevViewsContext => Context as NotifyContext;
    }
}