using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace NotifyWebApi.Repositories.Interfaces
{
    public interface IRepository<TEnt> where TEnt : class
    {
        TEnt Get(int id);
        IEnumerable<TEnt> GetAll();
        IEnumerable<TEnt> Find(Expression<Func<TEnt, bool>> predicate);

        TEnt SingleOrDefault(Expression<Func<TEnt, bool>> predicate);

        void Add(TEnt entity);
        void AddRange(IEnumerable<TEnt> ents);

        void Update(TEnt ent);

        void Remove(TEnt ent);
        void RemoveRange(IEnumerable<TEnt> ents);
    }
}
