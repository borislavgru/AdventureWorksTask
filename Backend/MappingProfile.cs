using AdventureWorksTask.DTO;
using AdventureWorksTask.EFCoreModels;
using AutoMapper;

namespace AdventureWorksTask
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDto>();
        }
    }
}