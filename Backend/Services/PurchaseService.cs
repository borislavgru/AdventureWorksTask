using AdventureWorksTask.DTO;
using AdventureWorksTask.Interfaces;
using AdventureWorksTask.Persistence.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Services
{
    public class PurchaseService : IPurchaseService
    {
        private readonly IPurchaseRepository _purchaseRepository;
        public PurchaseService(IPurchaseRepository purchaseRepository)
        {
            _purchaseRepository = purchaseRepository;
        }
        public TimeFramePurchasesResponseDto GetByTimeFrame(TimeframePurchasesRequestDto requestDto)
        {
            var result = _purchaseRepository.GetTimeFramePurchaseDetails(requestDto);
            return result;
        }
    }
}
