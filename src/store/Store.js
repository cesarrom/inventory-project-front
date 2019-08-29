import { createStore } from "redux";
export const Constants = {
  ACTIONS: {
    CREATE_CUSTOMER: Symbol.for("CREATE_CUSTOMER"),

    SET_CUSTOMER: Symbol.for("SET_CUSTOMER"),

    LIST_CUSTOMERS: Symbol.for("LIST_CUSTOMERS"),

    CREATE_SUPPLIER: Symbol.for("CREATE_SUPPLIER"),

    SET_SUPPLIER: Symbol.for("SET_SUPPLIER"),

    LIST_SUPPLIERS: Symbol.for("LIST_SUPPLIERS"),

    CREATE_REPOSITORY: Symbol.for("CREATE_REPOSITORY"),

    SET_REPOSITORY: Symbol.for("SET_REPOSITORY"),

    LIST_REPOSITORIES: Symbol.for("LIST_REPOSITORIES"),

    CREATE_PRODUCT: Symbol.for("CREATE_PRODUCT"),

    SET_PRODUCT: Symbol.for("SET_PRODUCT"),

    LIST_PRODUCTS: Symbol.for("LIST_PRODUCTS"),

    CREATE_PRODUCT_REPOSITORY: Symbol.for("CREATE_PRODUCT_REPOSITORY"),

    SET_PRODUCT_REPOSITORY: Symbol.for("SET_PRODUCT_REPOSITORY"),

    LIST_PRODUCT_REPOSITORIES: Symbol.for("LIST_PRODUCT_REPOSITORIES"),

    CREATE_MOVEMENT: Symbol.for("CREATE_MOVEMENT"),

    SET_MOVEMENT: Symbol.for("SET_MOVEMENT"),

    LIST_MOVEMENTS: Symbol.for("LIST_MOVEMENTS"),

    CREATE_MOVEMENT_TYPE: Symbol.for("CREATE_MOVEMENT_TYPE"),

    SET_MOVEMENT_TYPE: Symbol.for("SET_MOVEMENT_TYPE"),

    LIST_MOVEMENT_TYPES: Symbol.for("LIST_MOVEMENT_TYPES"),

    CREATE_MOVEMENT_DETAIL: Symbol.for("CREATE_MOVEMENT_DETAIL"),

    SET_MOVEMENT_DETAIL: Symbol.for("SET_MOVEMENT_DETAIL"),

    LIST_MOVEMENT_DETAILS: Symbol.for("LIST_MOVEMENT_DETAILS"),

    CREATE_CATEGORY: Symbol.for("CREATE_CATEGORY"),

    SET_CATEGORY: Symbol.for("SET_CATEGORY"),

    LIST_CATEGORIES: Symbol.for("LIST_CATEGORIES")
  },
  API_ENDPOINTS: {
    BASE: "",
    MOVEMENT: {
      BASE: "/movements",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    MOVEMENT_DETAIL: {
      BASE: "/movement-details",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    MOVEMENT_TYPE: {
      BASE: "/movement-types",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    REPOSITORY: {
      BASE: "/repositories",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    PRODUCT: {
      BASE: "/products",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    PRODUCT_REPOSITORY: {
      BASE: "/product-repositories",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    CUSTOMER: {
      BASE: "/customers",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    SUPPLIER: {
      BASE: "/suppliers",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    },
    CATEGORY: {
      BASE: "/categories",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      FIND: "/"
    }
  },
  SOCKET_OPS: {
    SENDER: {
      BASE: "/app",

      MOVEMENT: {
        BASE: "/movements",
        CREATE: "/generate-movement",
        UPDATE: "/rollback-movement",
        LIST: "/list-movements",
        FIND: "/find-movement"
      },
      MOVEMENT_DETAIL: {
        BASE: "/movement-details",
        CREATE: "/create-movement-detail",
        UPDATE: "/update-movement-detail",
        LIST: "/list-movement-details",
        FIND: "/find-movement-detail"
      },
      MOVEMENT_TYPE: {
        BASE: "/movement-type",
        CREATE: "/create-movement-type",
        UPDATE: "/update-movement-type",
        LIST: "/list-movement-types",
        FIND: "/find-movement-type"
      },
      REPOSITORY: {
        BASE: "/repositories",
        CREATE: "/create-repository",
        UPDATE: "/update-repository",
        LIST: "/list-repositories",
        FIND: "/find-repository"
      },
      PRODUCT: {
        BASE: "/products",
        CREATE: "/create-prouct",
        UPDATE: "/update-product",
        LIST: "/list-products",
        FIND: "/find-product"
      },
      PRODUCT_REPOSITORY: {
        BASE: "/product-repositories",
        CREATE: "/create-product-repository",
        UPDATE: "/update-product-repository",
        LIST: "/list-product-repositories",
        FIND: "/find-product-repository"
      },
      CUSTOMER: {
        BASE: "/customers",
        CREATE: "/create-customer",
        UPDATE: "/update-customer",
        LIST: "/list-customers",
        FIND: "/find-customer"
      },
      SUPPLIER: {
        BASE: "/suppliers",
        CREATE: "/create-supplier",
        UPDATE: "/update-supplier",
        LIST: "/list-suppliers",
        FIND: "/find-supplier"
      },
      CATEGORY: {
        BASE: "/categories",
        CREATE: "/create-category",
        UPDATE: "/update-category",
        LIST: "/list-categories",
        FIND: "/find-category"
      }
    },
    SUBSCRIBER: {
      QUEUE: {
        BASE: "/queue",
        MOVEMENT: {
          BASE: "/movements",
          LIST: "/movements-listed",
          FIND: "/movement-found"
        },
        MOVEMENT_DETAIL: {
          BASE: "/movement-details",
          LIST: "/movement-details-listed",
          FIND: "/movement-detail-found"
        },
        MOVEMENT_TYPE: {
          BASE: "/movement-type",
          LIST: "/movement-types-listed",
          FIND: "/movement-type-found"
        },
        REPOSITORY: {
          BASE: "/repositories",
          LIST: "/repositories-listed",
          FIND: "/repository-found"
        },
        PRODUCT: {
          BASE: "/products",
          LIST: "/products-listed",
          FIND: "/product-found"
        },
        PRODUCT_REPOSITORY: {
          BASE: "/product-repositories",
          LIST: "/product-repositories-listed",
          FIND: "/product-repository-found"
        },
        CUSTOMER: {
          BASE: "/customers",
          LIST: "/customers-listed",
          FIND: "/customer-found"
        },
        SUPPLIER: {
          BASE: "/suppliers",
          LIST: "/suppliers-listed",
          FIND: "/supplier-found"
        },
        CATEGORY: {
          BASE: "/categories",
          LIST: "/categories-listed",
          FIND: "/category-found"
        }
      },
      TOPIC: {
        BASE: "/topic",
        MOVEMENT: {
          BASE: "/movements",
          CREATE: "/movement-generated",
          UPDATE: "/movement-rolledback",
        },
        MOVEMENT_DETAIL: {
          BASE: "/movement-details",
          CREATE: "/movement-detail-created",
          UPDATE: "/movement-detail-updated",
        },
        MOVEMENT_TYPE: {
          BASE: "/movement-type",
          CREATE: "/movement-type-created",
          UPDATE: "/movement-type-updated",
        },
        REPOSITORY: {
          BASE: "/repositories",
          CREATE: "/repository-created",
          UPDATE: "/repository-updated",
        },
        PRODUCT: {
          BASE: "/products",
          CREATE: "/prouct-created",
          UPDATE: "/product-updated",
        },
        PRODUCT_REPOSITORY: {
          BASE: "/product-repositories",
          CREATE: "/product-repository-created",
          UPDATE: "/product-repository-updated",
        },
        CUSTOMER: {
          BASE: "/customers",
          CREATE: "/customer-created",
          UPDATE: "/customer-updated",
        },
        SUPPLIER: {
          BASE: "/suppliers",
          CREATE: "/supplier-created",
          UPDATE: "/supplier-updated",
        },
        CATEGORY: {
          BASE: "/categories",
          CREATE: "/category-created",
          UPDATE: "/category-updated",
        }
      }
    }
  }
};

export class CustomerAction {
  static createCustomer(payload) {
    return { type: Constants.ACTIONS.CREATE_CUSTOMER, payload };
  }

  static setCustomer(payload) {
    return { type: Constants.ACTIONS.SET_CUSTOMER, payload };
  }

  static listCustomers(payload) {
    return { type: Constants.ACTIONS.LIST_CUSTOMER, payload };
  }
}

export class SupplierAction {
  static createSupplier(payload) {
    return { type: Constants.ACTIONS.CREATE_SUPPLIER, payload };
  }

  static setSupplier(payload) {
    return { type: Constants.ACTIONS.SET_SUPPLIER, payload };
  }

  static listSuppliers(payload) {
    return { type: Constants.ACTIONS.LIST_SUPPLIER, payload };
  }
}

export class RepositoryAction {
  static createRepository(payload) {
    return { type: Constants.ACTIONS.CREATE_REPOSITORY, payload };
  }

  static setRepository(payload) {
    return { type: Constants.ACTIONS.SET_REPOSITORY, payload };
  }

  static listRepositories(payload) {
    return { type: Constants.ACTIONS.LIST_REPOSITORY, payload };
  }
}

export class ProductAction {
  static createProduct(payload) {
    return { type: Constants.ACTIONS.CREATE_PRODUCT, payload };
  }

  static setProduct(payload) {
    return { type: Constants.ACTIONS.SET_PRODUCT, payload };
  }

  static listProducts(payload) {
    return { type: Constants.ACTIONS.LIST_PRODUCT, payload };
  }
}

export class ProductRepositoryAction {
  static createProductRepository(payload) {
    return { type: Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY, payload };
  }

  static setProductRepository(payload) {
    return { type: Constants.ACTIONS.SET_PRODUCT_REPOSITORY, payload };
  }

  static listProductRepositories(payload) {
    return { type: Constants.ACTIONS.LIST_PRODUCT_REPOSITORY, payload };
  }
}

export class MovementAction {
  static createMovement(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT, payload };
  }

  static setMovement(payload) {
    return { type: Constants.ACTIONS.SET_MOVEMENT, payload };
  }

  static listMovements(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT, payload };
  }
}

export class MovementTypeAction {
  static createMovementType(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT_TYPE, payload };
  }

  static setMovementType(payload) {
    return { type: Constants.ACTIONS.SET_MOVEMENT_TYPE, payload };
  }

  static listMovementTypes(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_TYPE, payload };
  }
}

export class MovementDetailAction {
  static createMovementDetail(payload) {
    return { type: Constants.ACTIONS.CREATE_MOVEMENT_DETAIL, payload };
  }

  static setMovementDetail(payload) {
    return { type: Constants.ACTIONS.SET_MOVEMENT_DETAIL, payload };
  }

  static listMovementDetails(payload) {
    return { type: Constants.ACTIONS.LIST_MOVEMENT_DETAIL, payload };
  }
}

export class CategoryAction {
  static createCategory(payload) {
    return { type: Constants.ACTIONS.CREATE_CATEGORY, payload };
  }

  static setCategory(payload) {
    return { type: Constants.ACTIONS.SET_CATEGORY, payload };
  }

  static listCategories(payload) {
    return { type: Constants.ACTIONS.LIST_CATEGORY, payload };
  }
}
export class RootAction {
  static setSessionId(payload) {
    return { type: Constants.ACTIONS.SET_SESSION_ID, payload };
  }
}
export class RootReducer {
  static actions = [Constants.ACTIONS.SET_SESSION_ID];

  static isValidAction(action) {
    return CustomerReducer.actions.indexOf(action.type) >= 0;
  }

  static setSessionId(payload) {
    return { sessionId: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.SET_SESSION_ID:
        newState = RootReducer.setSessionId(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class CustomerReducer {
  static actions = [
    Constants.ACTIONS.CREATE_CUSTOMER,
    Constants.ACTIONS.SET_CUSTOMER,
    Constants.ACTIONS.LIST_CUSTOMERS
  ];

  static isValidAction(action) {
    return CustomerReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createCustomer(payload) {
    return { customer: payload };
  }

  static setCustomer(payload) {
    return { customer: payload };
  }

  static listCustomers(payload) {
    if (!payload || !payload.length) return {};
    return { customers: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_CUSTOMER:
        newState = CustomerReducer.createCustomer(action.payload);
        break;
      case Constants.ACTIONS.SET_CUSTOMER:
        newState = CustomerReducer.setCustomer(action.payload);
        break;
      case Constants.ACTIONS.LIST_CUSTOMER:
        newState = CustomersReducer.listCustomers(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class SupplierReducer {
  static actions = [
    Constants.ACTIONS.CREATE_SUPPLIER,
    Constants.ACTIONS.SET_SUPPLIER,
    Constants.ACTIONS.LIST_SUPPLIERS
  ];

  static isValidAction(action) {
    return SupplierReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createSupplier(payload) {
    return { supplier: payload };
  }

  static setSupplier(payload) {
    return { supplier: payload };
  }

  static listSuppliers(payload) {
    if (!payload || !payload.length) return {};
    return { suppliers: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_SUPPLIER:
        newState = SupplierReducer.createSupplier(action.payload);
        break;
      case Constants.ACTIONS.SET_SUPPLIER:
        newState = SupplierReducer.setSupplier(action.payload);
        break;
      case Constants.ACTIONS.LIST_SUPPLIER:
        newState = SuppliersReducer.listSuppliers(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class RepositoryReducer {
  static actions = [
    Constants.ACTIONS.CREATE_REPOSITORY,
    Constants.ACTIONS.SET_REPOSITORY,
    Constants.ACTIONS.LIST_REPOSITORIES
  ];

  static isValidAction(action) {
    return RepositoryReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createRepository(payload) {
    return { repository: payload };
  }

  static setRepository(payload) {
    return { repository: payload };
  }

  static listRepositories(payload) {
    if (!payload || !payload.length) return {};
    return { repositories: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_REPOSITORY:
        newState = RepositoryReducer.createRepository(action.payload);
        break;
      case Constants.ACTIONS.SET_REPOSITORY:
        newState = RepositoryReducer.setRepository(action.payload);
        break;
      case Constants.ACTIONS.LIST_REPOSITORY:
        newState = RepositoriesReducer.listRepositories(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class ProductReducer {
  static actions = [
    Constants.ACTIONS.CREATE_PRODUCT,
    Constants.ACTIONS.SET_PRODUCT,
    Constants.ACTIONS.LIST_PRODUCTS
  ];

  static isValidAction(action) {
    return ProductReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createProduct(payload) {
    return { product: payload };
  }

  static setProduct(payload) {
    return { product: payload };
  }

  static listProducts(payload) {
    if (!payload || !payload.length) return {};
    return { products: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_PRODUCT:
        newState = ProductReducer.createProduct(action.payload);
        break;
      case Constants.ACTIONS.SET_PRODUCT:
        newState = ProductReducer.setProduct(action.payload);
        break;
      case Constants.ACTIONS.LIST_PRODUCT:
        newState = ProductsReducer.listProducts(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class ProductRepositoryReducer {
  static actions = [
    Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY,
    Constants.ACTIONS.SET_PRODUCT_REPOSITORY,
    Constants.ACTIONS.LIST_PRODUCT_REPOSITORIES
  ];

  static isValidAction(action) {
    return ProductRepositoryReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createProductRepository(payload) {
    return { productRepository: payload };
  }

  static setProductRepository(payload) {
    return { productRepository: payload };
  }

  static listProductRepositories(payload) {
    if (!payload || !payload.length) return {};
    return { productRepositories: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_PRODUCT_REPOSITORY:
        newState = ProductRepositoryReducer.createProductRepository(
          action.payload
        );
        break;
      case Constants.ACTIONS.SET_PRODUCT_REPOSITORY:
        newState = ProductRepositoryReducer.setProductRepository(
          action.payload
        );
        break;
      case Constants.ACTIONS.LIST_PRODUCT_REPOSITORY:
        newState = ProductRepositoriesReducer.listProductRepositories(
          action.payload
        );
        break;
      default:
        break;
    }
    return newState;
  }
}

export class MovementReducer {
  static actions = [
    Constants.ACTIONS.CREATE_MOVEMENT,
    Constants.ACTIONS.SET_MOVEMENT,
    Constants.ACTIONS.LIST_MOVEMENTS
  ];

  static isValidAction(action) {
    return MovementReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createMovement(payload) {
    return { movement: payload };
  }

  static setMovement(payload) {
    return { movement: payload };
  }

  static listMovements(payload) {
    if (!payload || !payload.length) return {};
    return { movements: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_MOVEMENT:
        newState = MovementReducer.createMovement(action.payload);
        break;
      case Constants.ACTIONS.SET_MOVEMENT:
        newState = MovementReducer.setMovement(action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT:
        newState = MovementsReducer.listMovements(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class MovementTypeReducer {
  static actions = [
    Constants.ACTIONS.CREATE_MOVEMENT_TYPE,
    Constants.ACTIONS.SET_MOVEMENT_TYPE,
    Constants.ACTIONS.LIST_MOVEMENT_TYPES
  ];

  static isValidAction(action) {
    return MovementTypeReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createMovementType(payload) {
    return { movementType: payload };
  }

  static setMovementType(payload) {
    return { movementType: payload };
  }

  static listMovementTypes(payload) {
    if (!payload || !payload.length) return {};
    return { movementTypes: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_MOVEMENT_TYPE:
        newState = MovementTypeReducer.createMovementType(action.payload);
        break;
      case Constants.ACTIONS.SET_MOVEMENT_TYPE:
        newState = MovementTypeReducer.setMovementType(action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT_TYPE:
        newState = MovementTypesReducer.listMovementTypes(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class MovementDetailReducer {
  static actions = [
    Constants.ACTIONS.CREATE_MOVEMENT_DETAIL,
    Constants.ACTIONS.SET_MOVEMENT_DETAIL,
    Constants.ACTIONS.LIST_MOVEMENT_DETAILS
  ];

  static isValidAction(action) {
    return MovementDetailReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createMovementDetail(payload) {
    return { movementDetail: payload };
  }

  static setMovementDetail(payload) {
    return { movementDetail: payload };
  }

  static listMovementDetails(payload) {
    if (!payload || !payload.length) return {};
    return { movementDetails: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_MOVEMENT_DETAIL:
        newState = MovementDetailReducer.createMovementDetail(action.payload);
        break;
      case Constants.ACTIONS.SET_MOVEMENT_DETAIL:
        newState = MovementDetailReducer.setMovementDetail(action.payload);
        break;
      case Constants.ACTIONS.LIST_MOVEMENT_DETAIL:
        newState = MovementDetailsReducer.listMovementDetails(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

export class CategoryReducer {
  static actions = [
    Constants.ACTIONS.CREATE_CATEGORY,
    Constants.ACTIONS.SET_CATEGORY,
    Constants.ACTIONS.LIST_CATEGORIES
  ];

  static isValidAction(action) {
    return CategoryReducer.actions.indexOf(action.type) >= 0;
  }

  static getResponse(res) {
    if (res.error) {
      throw res.error;
    } else if (!(res.status >= 200 && res.status < 300)) {
      throw res;
    }
    return res.response;
  }

  static createCategory(payload) {
    return { category: payload };
  }

  static setCategory(payload) {
    return { category: payload };
  }

  static listCategories(payload) {
    if (!payload || !payload.length) return {};
    return { categories: payload };
  }

  static dispatch(action) {
    let newState = {};
    switch (action.type) {
      case Constants.ACTIONS.CREATE_CATEGORY:
        newState = CategoryReducer.createCategory(action.payload);
        break;
      case Constants.ACTIONS.SET_CATEGORY:
        newState = CategoryReducer.setCategory(action.payload);
        break;
      case Constants.ACTIONS.LIST_CATEGORY:
        newState = CategoriesReducer.listCategories(action.payload);
        break;
      default:
        break;
    }
    return newState;
  }
}

const initialState = {
  sessionId: "",
  customer: {},
  customers: [],
  supplier: {},
  suppliers: [],
  repository: {},
  repositories: [],
  product: {},
  products: [],
  productRepository: {},
  productRepositories: [],
  movement: {},
  movements: [],
  movementType: {},
  movementTypes: [],
  movementDetail: {},
  movementDetails: [],
  category: {},
  categories: []
};
let state = initialState;
export class StoreUtils {
  static getCurrentStateCopy() {
    return JSON.parse(JSON.stringify(state));
  }
}
const Store = createStore((state = Store.getState(), action) => {
  let partialState = {};
  if (CustomerReducer.isValidAction(action)) {
    partialState = CustomerReducer.dispatch(action) || {};
  } else if (SupplierReducer.isValidAction(action)) {
    partialState = SupplierReducer.dispatch(action) || {};
  } else if (RepositoryReducer.isValidAction(action)) {
    partialState = RepositoryReducer.dispatch(action) || {};
  } else if (ProductReducer.isValidAction(action)) {
    partialState = ProductReducer.dispatch(action) || {};
  } else if (ProductRepositoryReducer.isValidAction(action)) {
    partialState = ProductRepositoryReducer.dispatch(action) || {};
  } else if (MovementReducer.isValidAction(action)) {
    partialState = MovementReducer.dispatch(action) || {};
  } else if (MovementTypeReducer.isValidAction(action)) {
    partialState = MovementTypeReducer.dispatch(action) || {};
  } else if (MovementDetailReducer.isValidAction(action)) {
    partialState = MovementDetailReducer.dispatch(action) || {};
  } else if (CategoryReducer.isValidAction(action)) {
    partialState = CategoryReducer.dispatch(action) || {};
  } else if (RootReducer.isValidAction(action)) {
    partialState = RootReducer.dispatch(action) || {};
  }
  state = Object.assign({}, state, partialState);
  return state;
});
export default Store;
