using AdventureWorksTask.DTO;
using AdventureWorksTask.EFCoreModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Persistence.Interfaces
{
    public interface IProductRepository
    {
        public Tuple<int, List<Product>> FindByNameSellStartDateAndDescriptionPaged(ProductSearchRequestDto request);
    }
}
