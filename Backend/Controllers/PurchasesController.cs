using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdventureWorksTask.DTO;
using AdventureWorksTask.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdventureWorksTask.Controllers
{
    [Route("api/purchases")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        private readonly IPurchaseService _purchaseService;
        public PurchasesController(IPurchaseService purchaseService)
        {
            _purchaseService = purchaseService;
        }

        /// <summary>
        /// Retrieves the list of purchase in given time frame
        /// </summary>
        /// <param name="requestDto">Time range with start and end date</param>
        /// <returns></returns>
        /// <response code="200">Returns the list of all purchase - grouped by each day of given time frame and the total time frame sum</response>
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost]
        public IActionResult GetPurchasesByTimeFrame(TimeframePurchasesRequestDto requestDto)
        {
            var result = _purchaseService.GetByTimeFrame(requestDto);
            return Ok(result);
        }
    }
}
