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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.InventoryManagementSystem) {
      root.InventoryManagementSystem = {};
    }
    root.InventoryManagementSystem.ResponseCanonicalstring = factory(root.InventoryManagementSystem.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ResponseCanonicalstring model module.
   * @module model/ResponseCanonicalstring
   * @version 2.0
   */

  /**
   * Constructs a new <code>ResponseCanonicalstring</code>.
   * @alias module:model/ResponseCanonicalstring
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ResponseCanonicalstring</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResponseCanonicalstring} obj Optional instance to populate.
   * @return {module:model/ResponseCanonicalstring} The populated <code>ResponseCanonicalstring</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} response
   */
  exports.prototype['response'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


