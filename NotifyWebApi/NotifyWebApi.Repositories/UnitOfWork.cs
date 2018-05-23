using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.Repositories
{
    public class UnitOfWork: IUnitOfWork
    {
        private readonly NotifyContext _context;

        public UnitOfWork() {
            _context = new NotifyContext();
            Tasks = new TaskItemRepository(_context);
            //Bills = new BillItemRepository(_context);//ToDo
        }


        public void Dispose()
        {
             _context.Dispose();
        }

        public ITaskRepository Tasks { get; }
        //public IBillRepository Bills { get; }//ToDo
        public int Complete()
        {
            return _context.SaveChanges();
        }
    }
}


