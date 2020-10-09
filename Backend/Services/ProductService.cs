using AdventureWorksTask.DTO;
using AdventureWorksTask.EFCoreModels;
using AdventureWorksTask.Interfaces;
using AdventureWorksTask.Persistence.Interfaces;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace AdventureWorksTask.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;

        public ProductService(IProductRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public ProductSearchResponseDto Get(ProductSearchRequestDto requestDto)
        {
            var items = _repository.FindByNameSellStartDateAndDescriptionPaged(requestDto);
            var products = _mapper.Map<List<Product>, List<ProductDto>>(items.Item2);
            var result = new ProductSearchResponseDto
            {
                Products = products,
                PageNumber = requestDto.PageNumber,
                PageSize = requestDto.PageSize,
                TotalResultsCount = items.Item1
            };

            return result;
        }
    }
}
