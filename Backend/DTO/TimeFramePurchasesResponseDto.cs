using System.Collections.Generic;

namespace AdventureWorksTask.DTO
{
    public class TimeFramePurchasesResponseDto : PageableSearch
    {
        public List<DailyLineTotalDto> LineTotalsByDay { get; set; }
        public List<DailyProductUnitsSoldDto> ProductUnitsSoldByDay { get; set; }
        public decimal LineTotal { get; set; }
        public int UnitsSoldTotal { get; set; }
        public int TotalResultsCount { get; set; }
    }
}