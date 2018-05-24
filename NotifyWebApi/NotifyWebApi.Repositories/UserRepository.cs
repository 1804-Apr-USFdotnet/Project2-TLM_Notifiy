using System.Data.Entity;
using NotifyWebApi.Models;
using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.Repositories
{
    public class UserRepository : Repository<EfUser>, IUserRepository
    {
        public UserRepository(DbContext context) : base(context)
        {
        }

        public NotifyContext NotifyContext => Context as NotifyContext;
    }
}