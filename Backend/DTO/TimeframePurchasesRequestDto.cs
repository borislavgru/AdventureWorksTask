using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.DTO
{
    public class TimeframePurchasesRequestDto : PageableSearch
    {
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}
