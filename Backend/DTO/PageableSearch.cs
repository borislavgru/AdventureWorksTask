using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.DTO
{
    public abstract class PageableSearch
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
