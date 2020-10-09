using AdventureWorksTask.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.DTO
{
    public class ProductSearchRequestDto : PageableSearch
    {
        public string Name { get; set; }
        public DateTime SellStartDate { get; set; }
        public string Description { get; set; }
    }
}
