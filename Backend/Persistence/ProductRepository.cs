using AdventureWorksTask.DTO;
using AdventureWorksTask.EFCoreModels;
using AdventureWorksTask.Persistence.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Persistence
{
    public class ProductRepository : IProductRepository
    {
        private readonly Adventureworks2012Context _dbContext;

        public ProductRepository(Adventureworks2012Context dbContext)
        {
            _dbContext = dbContext;
        }

        public Tuple<int, List<Product>> FindByNameSellStartDateAndDescriptionPaged(ProductSearchRequestDto request)
        {
            var name = request.Name;
            var sellStartDate = request.SellStartDate;
            var description = request.Description;
            var pageNumber = request.PageNumber;
            var pageSize = request.PageSize;
            var viewProductIds = new List<int>();

            if (string.IsNullOrEmpty(name) && string.IsNullOrEmpty(description) && sellStartDate == default)
            {
                var result = new Tuple<int, List<Product>>(0, new List<Product>());
                return result;
            }

            if (!string.IsNullOrEmpty(name) || !string.IsNullOrEmpty(description))
            {
                var resultViewQuery = _dbContext.VProductAndDescriptions.AsQueryable();
                if (!string.IsNullOrEmpty(name))
                {
                    resultViewQuery = resultViewQuery.Where(x => x.Name.ToUpper().Contains(name.ToUpper()));
                }
                if (!string.IsNullOrEmpty(description))
                {
                    resultViewQuery = resultViewQuery.Where(x => x.Description.ToUpper().Contains(description.ToUpper()));
                }

                viewProductIds = resultViewQuery.Select(x => x.ProductId).Distinct().ToList();
            }

            int resultsCount = 0;

            var resultProductQuery = _dbContext.Products.AsQueryable();

            if (!viewProductIds.Any() && sellStartDate == default)
            {
                return new Tuple<int, List<Product>>(resultsCount, new List<Product>());
            }

            if (viewProductIds.Any())
            {
                resultProductQuery = resultProductQuery.Where(p => viewProductIds.Contains(p.ProductId));
                resultsCount = resultProductQuery.Count();
            }

            if (sellStartDate != default)
            {
                resultProductQuery = resultProductQuery.Where(x => x.SellStartDate == sellStartDate);
                resultsCount = resultProductQuery.Count();
            }

            int numberOfItemsToSkip = (pageNumber - 1) * pageSize;
            var productResult = resultProductQuery
                .OrderBy(p => p.ProductId)
                .Skip(numberOfItemsToSkip)
                .Take(pageSize)
                .ToList();

           return new Tuple<int, List<Product>>(resultsCount, productResult);
        }
    }
}
