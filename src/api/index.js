import * as InventoryApi from 'inventory-api';

const configuration = {};
const basePath = '';

const InventoryClient = {
  movement: InventoryApi.MovementControllerApiFactory(configuration, fetch, basePath),
  movementDetail: InventoryApi.MovementDetailControllerApiFactory(configuration, fetch, basePath),
  movementType: InventoryApi.MovementTypeControllerApiFactory(configuration, fetch, basePath),
  product: InventoryApi.ProductControllerApiFactory(configuration, fetch, basePath),
  supplier: InventoryApi.SupplierControllerApiFactory(configuration, fetch, basePath),
  customer: InventoryApi.CustomerControllerApiFactory(configuration, fetch, basePath),
  repository: InventoryApi.RepositoryControllerApiFactory(configuration, fetch, basePath),
  productRepository: InventoryApi.ProductRepositoryControllerApiFactory(configuration, fetch, basePath),
  category: InventoryApi.CategoryControllerApiFactory(configuration, fetch, basePath)
}


export default InventoryClient;
