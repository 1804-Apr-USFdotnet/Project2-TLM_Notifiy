using NotifyWebApi.Models;
using NotifyWebApi.Repositories;
using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.BLL
{
    public class EfUserBL
    {
        private readonly IUnitOfWork _uoWork;
        public EfUserBL()
        {
            _uoWork = new UnitOfWork();
        }

        public void Create(string email)
        {
            var efUser = new EfUser(){Email = email};
            _uoWork.Users.Add(efUser);
            _uoWork.Complete();
        }

    }
}