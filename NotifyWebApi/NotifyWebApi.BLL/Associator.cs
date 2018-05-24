using System.Linq;
using NotifyWebApi.Repositories;
using NotifyWebApi.Repositories.Interfaces;

namespace NotifyWebApi.BLL
{
    public static class Associator
    {
        private static readonly IUnitOfWork _of = new UnitOfWork();

        public static long ConvertToId(string key)
        {
            return  _of.Users.Find(o => o.Email == key).FirstOrDefault().UserId;
        }
    }
}