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
    define(['ApiClient', 'model/CategoryDto', 'model/MovementDetailDto', 'model/ProductRepositoryDto', 'model/SupplierDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CategoryDto'), require('./MovementDetailDto'), require('./ProductRepositoryDto'), require('./SupplierDto'));
  } else {
    // Browser globals (root is window)
    if (!root.InventoryManagementSystem) {
      root.InventoryManagementSystem = {};
    }
    root.InventoryManagementSystem.ProductDto = factory(root.InventoryManagementSystem.ApiClient, root.InventoryManagementSystem.CategoryDto, root.InventoryManagementSystem.MovementDetailDto, root.InventoryManagementSystem.ProductRepositoryDto, root.InventoryManagementSystem.SupplierDto);
  }
}(this, function(ApiClient, CategoryDto, MovementDetailDto, ProductRepositoryDto, SupplierDto) {
  'use strict';




  /**
   * The ProductDto model module.
   * @module model/ProductDto
   * @version 2.0
   */

  /**
   * Constructs a new <code>ProductDto</code>.
   * @alias module:model/ProductDto
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>ProductDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductDto} obj Optional instance to populate.
   * @return {module:model/ProductDto} The populated <code>ProductDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = CategoryDto.constructFromObject(data['category']);
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('movementDetails')) {
        obj['movementDetails'] = ApiClient.convertToType(data['movementDetails'], [MovementDetailDto]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('photo')) {
        obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
      }
      if (data.hasOwnProperty('productRepositories')) {
        obj['productRepositories'] = ApiClient.convertToType(data['productRepositories'], [ProductRepositoryDto]);
      }
      if (data.hasOwnProperty('supplier')) {
        obj['supplier'] = SupplierDto.constructFromObject(data['supplier']);
      }
      if (data.hasOwnProperty('unitType')) {
        obj['unitType'] = ApiClient.convertToType(data['unitType'], 'Number');
      }
      if (data.hasOwnProperty('updatedAt')) {
        obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CategoryDto} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/MovementDetailDto>} movementDetails
   */
  exports.prototype['movementDetails'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} photo
   */
  exports.prototype['photo'] = undefined;
  /**
   * @member {Array.<module:model/ProductRepositoryDto>} productRepositories
   */
  exports.prototype['productRepositories'] = undefined;
  /**
   * @member {module:model/SupplierDto} supplier
   */
  exports.prototype['supplier'] = undefined;
  /**
   * @member {Number} unitType
   */
  exports.prototype['unitType'] = undefined;
  /**
   * @member {Date} updatedAt
   */
  exports.prototype['updatedAt'] = undefined;



  return exports;
}));


