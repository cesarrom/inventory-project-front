import * as InventoryApi from 'inventory-api';
console.log("Models Location")
const InventoryClient = {
  MovementDto: InventoryApi.MovementDto,
  MovementDetailDto: InventoryApi.MovementDetailDto,
  MovementTypeDto: InventoryApi.MovementTypeDto,
  ProductDto: InventoryApi.ProductDto,
  SupplierDto: InventoryApi.SupplierDto,
  CustomerDto: InventoryApi.CustomerDto,
  RepositoryDto: InventoryApi.RepositoryDto,
  ProductRepositoryDto: InventoryApi.ProductRepositoryDto,
  CategoryDto: InventoryApi.CategoryDto,

  /*MovementQuery: InventoryApi.MovementQuery,
  MovementDetailQuery: InventoryApi.MovementDetailQuery,
  MovementTypeQuery: InventoryApi.MovementTypeQuery,
  ProductQuery: InventoryApi.ProductQuery,
  SupplierQuery: InventoryApi.SupplierQuery,
  CustomerQuery: InventoryApi.CustomerQuery,
  RepositoryQuery: InventoryApi.RepositoryQuery,
  ProductRepositoryQuery: InventoryApi.ProductRepositoryQuery,
  CategoryQuery: InventoryApi.CategoryQuery*/
}


export default InventoryClient;
