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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.InventoryManagementSystem);
  }
}(this, function(expect, InventoryManagementSystem) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new InventoryManagementSystem.SupplierControllerApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SupplierControllerApi', function() {
    describe('createSupplierUsingPOST', function() {
      it('should call createSupplierUsingPOST successfully', function(done) {
        //uncomment below and update the code to test createSupplierUsingPOST
        //instance.createSupplierUsingPOST(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findSupplierUsingGET', function() {
      it('should call findSupplierUsingGET successfully', function(done) {
        //uncomment below and update the code to test findSupplierUsingGET
        //instance.findSupplierUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSuppliersUsingGET', function() {
      it('should call listSuppliersUsingGET successfully', function(done) {
        //uncomment below and update the code to test listSuppliersUsingGET
        //instance.listSuppliersUsingGET(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSupplierUsingPUT', function() {
      it('should call updateSupplierUsingPUT successfully', function(done) {
        //uncomment below and update the code to test updateSupplierUsingPUT
        //instance.updateSupplierUsingPUT(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
