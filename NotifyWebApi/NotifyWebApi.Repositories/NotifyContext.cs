using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NotifyWebApi.Models;

namespace NotifyWebApi.Repositories
{
    public class NotifyContext : DbContext
    {
        public NotifyContext()
            //:base("Server=.;Database=DisposableDB;Trusted_Connection=True")//Local testing connection
            : base("name=NotifyContext")//Will be app context.
        { }

        public virtual DbSet<TaskItem> Tasks { get; set; }
        public virtual DbSet<BillItem> Bills { get; set; }
        public virtual DbSet<EfUser> EfUsers { get; set; }
    }
}
