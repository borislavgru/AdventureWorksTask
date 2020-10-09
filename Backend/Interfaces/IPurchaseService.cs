using AdventureWorksTask.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Interfaces
{
    public interface IPurchaseService
    {
        public TimeFramePurchasesResponseDto GetByTimeFrame(TimeframePurchasesRequestDto requestDto);
    }
}
