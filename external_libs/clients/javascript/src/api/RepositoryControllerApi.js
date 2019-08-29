/**
 * Inventory Management System
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RepositoryDto', 'model/ResponseCanonicalListRepositoryDto', 'model/ResponseCanonicalRepositoryDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RepositoryDto'), require('../model/ResponseCanonicalListRepositoryDto'), require('../model/ResponseCanonicalRepositoryDto'));
  } else {
    // Browser globals (root is window)
    if (!root.InventoryManagementSystem) {
      root.InventoryManagementSystem = {};
    }
    root.InventoryManagementSystem.RepositoryControllerApi = factory(root.InventoryManagementSystem.ApiClient, root.InventoryManagementSystem.RepositoryDto, root.InventoryManagementSystem.ResponseCanonicalListRepositoryDto, root.InventoryManagementSystem.ResponseCanonicalRepositoryDto);
  }
}(this, function(ApiClient, RepositoryDto, ResponseCanonicalListRepositoryDto, ResponseCanonicalRepositoryDto) {
  'use strict';

  /**
   * RepositoryController service.
   * @module api/RepositoryControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new RepositoryControllerApi. 
   * @alias module:api/RepositoryControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createRepositoryUsingPOST operation.
     * @callback module:api/RepositoryControllerApi~createRepositoryUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalRepositoryDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRepository
     * @param {module:model/RepositoryDto} entityParam entityParam
     * @param {module:api/RepositoryControllerApi~createRepositoryUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalRepositoryDto}
     */
    this.createRepositoryUsingPOST = function(entityParam, callback) {
      var postBody = entityParam;

      // verify the required parameter 'entityParam' is set
      if (entityParam === undefined || entityParam === null) {
        throw new Error("Missing the required parameter 'entityParam' when calling createRepositoryUsingPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseCanonicalRepositoryDto;

      return this.apiClient.callApi(
        '/repositories/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findRepositoryUsingGET operation.
     * @callback module:api/RepositoryControllerApi~findRepositoryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalRepositoryDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findRepository
     * @param {Number} id id
     * @param {module:api/RepositoryControllerApi~findRepositoryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalRepositoryDto}
     */
    this.findRepositoryUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findRepositoryUsingGET");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResponseCanonicalRepositoryDto;

      return this.apiClient.callApi(
        '/repositories/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listRepositoriesUsingGET operation.
     * @callback module:api/RepositoryControllerApi~listRepositoriesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalListRepositoryDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listRepositories
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.customerIds 
     * @param {Array.<Number>} opts.supplierIds 
     * @param {Array.<Number>} opts.categoryIds 
     * @param {Array.<Number>} opts.productIds 
     * @param {Number} opts.skip 
     * @param {Number} opts.limit 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {module:api/RepositoryControllerApi~listRepositoriesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalListRepositoryDto}
     */
    this.listRepositoriesUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'limit': opts['limit'],
        'from': opts['from'],
        'to': opts['to'],
        'name': opts['name'],
        'description': opts['description'],
      };
      var collectionQueryParams = {
        'customerIds': {
          value: opts['customerIds'],
          collectionFormat: 'multi'
        },
        'supplierIds': {
          value: opts['supplierIds'],
          collectionFormat: 'multi'
        },
        'categoryIds': {
          value: opts['categoryIds'],
          collectionFormat: 'multi'
        },
        'productIds': {
          value: opts['productIds'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = ResponseCanonicalListRepositoryDto;

      return this.apiClient.callApi(
        '/repositories/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRepositoryUsingPUT operation.
     * @callback module:api/RepositoryControllerApi~updateRepositoryUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalRepositoryDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateRepository
     * @param {Number} id id
     * @param {module:model/RepositoryDto} entityParam entityParam
     * @param {module:api/RepositoryControllerApi~updateRepositoryUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalRepositoryDto}
     */
    this.updateRepositoryUsingPUT = function(id, entityParam, callback) {
      var postBody = entityParam;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRepositoryUsingPUT");
      }

      // verify the required parameter 'entityParam' is set
      if (entityParam === undefined || entityParam === null) {
        throw new Error("Missing the required parameter 'entityParam' when calling updateRepositoryUsingPUT");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseCanonicalRepositoryDto;

      return this.apiClient.callApi(
        '/repositories/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
