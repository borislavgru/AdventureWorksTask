using AdventureWorksTask.DTO;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdventureWorksTask.Interfaces
{
    public interface IProductService
    {
        public ProductSearchResponseDto Get(ProductSearchRequestDto requestDto);
    }
}
