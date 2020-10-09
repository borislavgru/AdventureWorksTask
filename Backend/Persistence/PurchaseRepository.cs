using AdventureWorksTask.DTO;
using AdventureWorksTask.EFCoreModels;
using AdventureWorksTask.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace AdventureWorksTask.Persistence
{
    public class PurchaseRepository : IPurchaseRepository
    {
        private readonly Adventureworks2012Context _dbContext;
        public PurchaseRepository(Adventureworks2012Context dbContext)
        {
            _dbContext = dbContext;
        }

        public TimeFramePurchasesResponseDto GetTimeFramePurchaseDetails(TimeframePurchasesRequestDto requestDto)
        {
            var startTime = requestDto.StartTime;
            var endTime = requestDto.EndTime;
            var pageNumber = requestDto.PageNumber;
            var pageSize = requestDto.PageSize;

            int numberOfItemsToSkip = (pageNumber - 1) * pageSize;
            var query = _dbContext.PurchaseOrderDetails
                .Where(x =>
                    x.ModifiedDate >= startTime &&
                    x.ModifiedDate <= endTime)
                .GroupBy(p => p.ModifiedDate)
                .Select(
                    g => new
                    {
                        Date = g.Key,
                        LineTotals = g.Sum(e => e.LineTotal),
                        OrderQtySum = g.Sum(e => e.OrderQty)
                    })
                .OrderBy(x => x.Date);

            var resultsCount = query.Count();
            var lineTotal = query.Sum(x => x.LineTotals);
            var unitsSoldTotal = query.Sum(x => x.OrderQtySum);

            var queryResults = query
                .Skip(numberOfItemsToSkip)
                .Take(pageSize).ToList();

            var lineTotalsByDay = queryResults.Select(x =>
                    new DailyLineTotalDto
                    {
                        Date = x.Date,
                        LineTotal = x.LineTotals
                    })
                .ToList();

            var orderQtyByDay = queryResults.Select(x =>
                    new DailyProductUnitsSoldDto
                    {
                        Date = x.Date,
                        UnitNumber = x.OrderQtySum
                    })
                 .ToList();

            var result = new TimeFramePurchasesResponseDto
            {
                LineTotalsByDay = lineTotalsByDay,
                ProductUnitsSoldByDay = orderQtyByDay,
                LineTotal = lineTotal,
                UnitsSoldTotal = unitsSoldTotal,
                PageNumber = pageNumber,
                PageSize = pageSize,
                TotalResultsCount = resultsCount
            };

            return result;
        }
    }
}
