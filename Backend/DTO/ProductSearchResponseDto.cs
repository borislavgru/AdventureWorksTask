using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.DTO
{
    public class ProductSearchResponseDto : PageableSearch
    {
        public List<ProductDto> Products { get; set; }
        public int TotalResultsCount { get; set; }
    }
}
