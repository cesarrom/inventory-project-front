console.log("Constants Location")
const Constants = {
  MODEL_NAMES: {
    CATEGORY: "CATEGORY",
    CUSTOMER: "CUSTOMER",
    MOVEMENT: "MOVEMENT",
    MOVEMENT_DETAIL: "MOVEMENT_DETAIL",
    MOVEMENT_TYPE: "MOVEMENT_TYPE",
    PRODUCT: "PRODUCT",
    PRODUCT_REPOSITORY: "PRODUCT_REPOSITORY",
    REPOSITORY: "REPOSITORY",
    SUPPLIER: "SUPPLIER"
  },
  ACTIONS: {
    SET_TITLE: Symbol.for("SET_TITLE"),
    
    SET_SESSION_ID: Symbol.for("SET_SESSION_ID"),

    CREATE_CUSTOMER: Symbol.for("CREATE_CUSTOMER"),

    UPDATE_CUSTOMER: Symbol.for("UPDATE_CUSTOMER"),

    SELECT_CUSTOMER: Symbol.for("SELECT_CUSTOMER"),

    LIST_CUSTOMERS: Symbol.for("LIST_CUSTOMERS"),

    CREATE_SUPPLIER: Symbol.for("CREATE_SUPPLIER"),

    UPDATE_SUPPLIER: Symbol.for("UPDATE_SUPPLIER"),

    SELECT_SUPPLIER: Symbol.for("SELECT_SUPPLIER"),

    LIST_SUPPLIERS: Symbol.for("LIST_SUPPLIERS"),

    CREATE_REPOSITORY: Symbol.for("CREATE_REPOSITORY"),

    UPDATE_REPOSITORY: Symbol.for("UPDATE_REPOSITORY"),

    SELECT_REPOSITORY: Symbol.for("SELECT_REPOSITORY"),

    LIST_REPOSITORIES: Symbol.for("LIST_REPOSITORIES"),

    CREATE_PRODUCT: Symbol.for("CREATE_PRODUCT"),

    UPDATE_PRODUCT: Symbol.for("UPDATE_PRODUCT"),

    SELECT_PRODUCT: Symbol.for("SELECT_PRODUCT"),

    LIST_PRODUCTS: Symbol.for("LIST_PRODUCTS"),

    CREATE_PRODUCT_REPOSITORY: Symbol.for("CREATE_PRODUCT_REPOSITORY"),

    UPDATE_PRODUCT_REPOSITORY: Symbol.for("UPDATE_PRODUCT_REPOSITORY"),

    SELECT_PRODUCT_REPOSITORY: Symbol.for("SELECT_PRODUCT_REPOSITORY"),

    LIST_PRODUCT_REPOSITORIES: Symbol.for("LIST_PRODUCT_REPOSITORIES"),

    CREATE_MOVEMENT: Symbol.for("CREATE_MOVEMENT"),

    UPDATE_MOVEMENT: Symbol.for("UPDATE_MOVEMENT"),

    SELECT_MOVEMENT: Symbol.for("SELECT_MOVEMENT"),

    LIST_MOVEMENTS: Symbol.for("LIST_MOVEMENTS"),

    CREATE_MOVEMENT_TYPE: Symbol.for("CREATE_MOVEMENT_TYPE"),

    UPDATE_MOVEMENT_TYPE: Symbol.for("UPDATE_MOVEMENT_TYPE"),

    SELECT_MOVEMENT_TYPE: Symbol.for("SELECT_MOVEMENT_TYPE"),

    LIST_MOVEMENT_TYPES: Symbol.for("LIST_MOVEMENT_TYPES"),

    CREATE_MOVEMENT_DETAIL: Symbol.for("CREATE_MOVEMENT_DETAIL"),

    UPDATE_MOVEMENT_DETAIL: Symbol.for("UPDATE_MOVEMENT_DETAIL"),

    SELECT_MOVEMENT_DETAIL: Symbol.for("SELECT_MOVEMENT_DETAIL"),

    LIST_MOVEMENT_DETAILS: Symbol.for("LIST_MOVEMENT_DETAILS"),

    CREATE_CATEGORY: Symbol.for("CREATE_CATEGORY"),

    UPDATE_CATEGORY: Symbol.for("UPDATE_CATEGORY"),

    SELECT_CATEGORY: Symbol.for("SELECT_CATEGORY"),

    LIST_CATEGORIES: Symbol.for("LIST_CATEGORIES")
  },
  API_ENDPOINTS: {
    BASE: "",
    MOVEMENT: {
      BASE: "/movements",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    MOVEMENT_DETAIL: {
      BASE: "/movement-details",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    MOVEMENT_TYPE: {
      BASE: "/movement-types",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    REPOSITORY: {
      BASE: "/repositories",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    PRODUCT: {
      BASE: "/products",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    PRODUCT_REPOSITORY: {
      BASE: "/product-repositories",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    CUSTOMER: {
      BASE: "/customers",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    SUPPLIER: {
      BASE: "/suppliers",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
    },
    CATEGORY: {
      BASE: "/categories",
      CREATE: "/",
      UPDATE: "/",
      LIST: "/",
      SELECT: "/"
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
        SELECT: "/find-movement"
      },
      MOVEMENT_DETAIL: {
        BASE: "/movement-details",
        CREATE: "/create-movement-detail",
        UPDATE: "/update-movement-detail",
        LIST: "/list-movement-details",
        SELECT: "/find-movement-detail"
      },
      MOVEMENT_TYPE: {
        BASE: "/movement-types",
        CREATE: "/create-movement-type",
        UPDATE: "/update-movement-type",
        LIST: "/list-movement-types",
        SELECT: "/find-movement-type"
      },
      REPOSITORY: {
        BASE: "/repositories",
        CREATE: "/create-repository",
        UPDATE: "/update-repository",
        LIST: "/list-repositories",
        SELECT: "/find-repository"
      },
      PRODUCT: {
        BASE: "/products",
        CREATE: "/create-product",
        UPDATE: "/update-product",
        LIST: "/list-products",
        SELECT: "/find-product"
      },
      PRODUCT_REPOSITORY: {
        BASE: "/product-repositories",
        CREATE: "/create-product-repository",
        UPDATE: "/update-product-repository",
        LIST: "/list-product-repositories",
        SELECT: "/find-product-repository"
      },
      CUSTOMER: {
        BASE: "/customers",
        CREATE: "/create-customer",
        UPDATE: "/update-customer",
        LIST: "/list-customers",
        SELECT: "/find-customer"
      },
      SUPPLIER: {
        BASE: "/suppliers",
        CREATE: "/create-supplier",
        UPDATE: "/update-supplier",
        LIST: "/list-suppliers",
        SELECT: "/find-supplier"
      },
      CATEGORY: {
        BASE: "/categories",
        CREATE: "/create-category",
        UPDATE: "/update-category",
        LIST: "/list-categories",
        SELECT: "/find-category"
      }
    },
    SUBSCRIBER: {
      QUEUE: {
        BASE: "/user/queue",
        MOVEMENT: {
          BASE: "/movements",
          LIST: "/movements-listed",
          SELECT: "/movement-found"
        },
        MOVEMENT_DETAIL: {
          BASE: "/movement-details",
          LIST: "/movement-details-listed",
          SELECT: "/movement-detail-found"
        },
        MOVEMENT_TYPE: {
          BASE: "/movement-types",
          LIST: "/movement-types-listed",
          SELECT: "/movement-type-found"
        },
        REPOSITORY: {
          BASE: "/repositories",
          LIST: "/repositories-listed",
          SELECT: "/repository-found"
        },
        PRODUCT: {
          BASE: "/products",
          LIST: "/products-listed",
          SELECT: "/product-found"
        },
        PRODUCT_REPOSITORY: {
          BASE: "/product-repositories",
          LIST: "/product-repositories-listed",
          SELECT: "/product-repository-found"
        },
        CUSTOMER: {
          BASE: "/customers",
          LIST: "/customers-listed",
          SELECT: "/customer-found"
        },
        SUPPLIER: {
          BASE: "/suppliers",
          LIST: "/suppliers-listed",
          SELECT: "/supplier-found"
        },
        CATEGORY: {
          BASE: "/categories",
          LIST: "/categories-listed",
          SELECT: "/category-found"
        }
      },
      TOPIC: {
        BASE: "/topic",
        MOVEMENT: {
          BASE: "/movements",
          CREATE: "/movement-generated",
          UPDATE: "/movement-rolledback"
        },
        MOVEMENT_DETAIL: {
          BASE: "/movement-details",
          CREATE: "/movement-detail-created",
          UPDATE: "/movement-detail-updated"
        },
        MOVEMENT_TYPE: {
          BASE: "/movement-types",
          CREATE: "/movement-type-created",
          UPDATE: "/movement-type-updated"
        },
        REPOSITORY: {
          BASE: "/repositories",
          CREATE: "/repository-created",
          UPDATE: "/repository-updated"
        },
        PRODUCT: {
          BASE: "/products",
          CREATE: "/product-created",
          UPDATE: "/product-updated"
        },
        PRODUCT_REPOSITORY: {
          BASE: "/product-repositories",
          CREATE: "/product-repository-created",
          UPDATE: "/product-repository-updated"
        },
        CUSTOMER: {
          BASE: "/customers",
          CREATE: "/customer-created",
          UPDATE: "/customer-updated"
        },
        SUPPLIER: {
          BASE: "/suppliers",
          CREATE: "/supplier-created",
          UPDATE: "/supplier-updated"
        },
        CATEGORY: {
          BASE: "/categories",
          CREATE: "/category-created",
          UPDATE: "/category-updated"
        }
      }
    }
  }
};
export default Constants;
