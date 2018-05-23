using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.Repositories
{
    public class UnitOfWork: IUnitOfWork
    {
        public void Dispose()
        {
            throw new System.NotImplementedException();
        }

        public ITaskRepository Tasks { get; }
        public int Complete()
        {
            throw new System.NotImplementedException();
        }
    }
}


