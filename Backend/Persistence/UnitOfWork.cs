using AdventureWorksTask.EFCoreModels;
using AdventureWorksTask.Persistence.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly Adventureworks2012Context _dbContext;
        public UnitOfWork(Adventureworks2012Context dbContext)
        {
            _dbContext = dbContext;
        }

        public void Commit()
        {
            _dbContext.SaveChanges();
        }
    }
}
