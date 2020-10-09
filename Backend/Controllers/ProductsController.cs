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
    [Route("api/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }

        /// <summary>
        /// Retrieves the list of products
        /// </summary>
        /// <param name="requestDto">Product query parameters</param>
        /// <returns></returns>
        /// <response code="200">Returns the list of all products</response>
        [Produces("application/json")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpPost]
        public IActionResult GetProducts(ProductSearchRequestDto requestDto)
        {
            var products = _productService.Get(requestDto);
            return Ok(products);
        }
    }
}
