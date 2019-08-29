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
    define(['ApiClient', 'model/MovementDetailDto', 'model/ResponseCanonicalListMovementDetailDto', 'model/ResponseCanonicalMovementDetailDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/MovementDetailDto'), require('../model/ResponseCanonicalListMovementDetailDto'), require('../model/ResponseCanonicalMovementDetailDto'));
  } else {
    // Browser globals (root is window)
    if (!root.InventoryManagementSystem) {
      root.InventoryManagementSystem = {};
    }
    root.InventoryManagementSystem.MovementDetailControllerApi = factory(root.InventoryManagementSystem.ApiClient, root.InventoryManagementSystem.MovementDetailDto, root.InventoryManagementSystem.ResponseCanonicalListMovementDetailDto, root.InventoryManagementSystem.ResponseCanonicalMovementDetailDto);
  }
}(this, function(ApiClient, MovementDetailDto, ResponseCanonicalListMovementDetailDto, ResponseCanonicalMovementDetailDto) {
  'use strict';

  /**
   * MovementDetailController service.
   * @module api/MovementDetailControllerApi
   * @version 2.0
   */

  /**
   * Constructs a new MovementDetailControllerApi. 
   * @alias module:api/MovementDetailControllerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createMovementDetailUsingPOST operation.
     * @callback module:api/MovementDetailControllerApi~createMovementDetailUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalMovementDetailDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createMovementDetail
     * @param {module:model/MovementDetailDto} entityParam entityParam
     * @param {module:api/MovementDetailControllerApi~createMovementDetailUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalMovementDetailDto}
     */
    this.createMovementDetailUsingPOST = function(entityParam, callback) {
      var postBody = entityParam;

      // verify the required parameter 'entityParam' is set
      if (entityParam === undefined || entityParam === null) {
        throw new Error("Missing the required parameter 'entityParam' when calling createMovementDetailUsingPOST");
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
      var returnType = ResponseCanonicalMovementDetailDto;

      return this.apiClient.callApi(
        '/movement-details/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findMovementDetailUsingGET operation.
     * @callback module:api/MovementDetailControllerApi~findMovementDetailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalMovementDetailDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findMovementDetail
     * @param {Number} id id
     * @param {module:api/MovementDetailControllerApi~findMovementDetailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalMovementDetailDto}
     */
    this.findMovementDetailUsingGET = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findMovementDetailUsingGET");
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
      var returnType = ResponseCanonicalMovementDetailDto;

      return this.apiClient.callApi(
        '/movement-details/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listMovementDetailsUsingGET operation.
     * @callback module:api/MovementDetailControllerApi~listMovementDetailsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalListMovementDetailDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * listMovementDetails
     * @param {Object} opts Optional parameters
     * @param {Array.<Number>} opts.productIds 
     * @param {Number} opts.skip 
     * @param {Number} opts.limit 
     * @param {Date} opts.from 
     * @param {Date} opts.to 
     * @param {Number} opts.movementId 
     * @param {Boolean} opts.omitPositive 
     * @param {Boolean} opts.omitNegative 
     * @param {Number} opts.sourceRepositoryId 
     * @param {Number} opts.targetRepositoryId 
     * @param {module:api/MovementDetailControllerApi~listMovementDetailsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalListMovementDetailDto}
     */
    this.listMovementDetailsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skip': opts['skip'],
        'limit': opts['limit'],
        'from': opts['from'],
        'to': opts['to'],
        'movementId': opts['movementId'],
        'omitPositive': opts['omitPositive'],
        'omitNegative': opts['omitNegative'],
        'sourceRepositoryId': opts['sourceRepositoryId'],
        'targetRepositoryId': opts['targetRepositoryId'],
      };
      var collectionQueryParams = {
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
      var returnType = ResponseCanonicalListMovementDetailDto;

      return this.apiClient.callApi(
        '/movement-details/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateMovementDetailUsingPUT operation.
     * @callback module:api/MovementDetailControllerApi~updateMovementDetailUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseCanonicalMovementDetailDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateMovementDetail
     * @param {Number} id id
     * @param {module:model/MovementDetailDto} entityParam entityParam
     * @param {module:api/MovementDetailControllerApi~updateMovementDetailUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseCanonicalMovementDetailDto}
     */
    this.updateMovementDetailUsingPUT = function(id, entityParam, callback) {
      var postBody = entityParam;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateMovementDetailUsingPUT");
      }

      // verify the required parameter 'entityParam' is set
      if (entityParam === undefined || entityParam === null) {
        throw new Error("Missing the required parameter 'entityParam' when calling updateMovementDetailUsingPUT");
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
      var returnType = ResponseCanonicalMovementDetailDto;

      return this.apiClient.callApi(
        '/movement-details/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
