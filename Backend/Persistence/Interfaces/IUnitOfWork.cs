using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Persistence.Interfaces
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
