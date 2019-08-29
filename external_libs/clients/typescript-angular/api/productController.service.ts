/**
 * Inventory Management System
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { ProductDto } from '../model/productDto';
import { ResponseCanonicalListProductDto } from '../model/responseCanonicalListProductDto';
import { ResponseCanonicalProductDto } from '../model/responseCanonicalProductDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProductControllerService {

    protected basePath = 'https://localhost:9091';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * createProduct
     * 
     * @param entityParam entityParam
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createProductUsingPOST(entityParam: ProductDto, observe?: 'body', reportProgress?: boolean): Observable<ResponseCanonicalProductDto>;
    public createProductUsingPOST(entityParam: ProductDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseCanonicalProductDto>>;
    public createProductUsingPOST(entityParam: ProductDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseCanonicalProductDto>>;
    public createProductUsingPOST(entityParam: ProductDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (entityParam === null || entityParam === undefined) {
            throw new Error('Required parameter entityParam was null or undefined when calling createProductUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<ResponseCanonicalProductDto>(`${this.basePath}/products/`,
            entityParam,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findProduct
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findProductUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseCanonicalProductDto>;
    public findProductUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseCanonicalProductDto>>;
    public findProductUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseCanonicalProductDto>>;
    public findProductUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling findProductUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ResponseCanonicalProductDto>(`${this.basePath}/products/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listProducts
     * 
     * @param sourceSupplierIds 
     * @param customerIds 
     * @param supplierIds 
     * @param categoryIds 
     * @param skip 
     * @param limit 
     * @param from 
     * @param to 
     * @param name 
     * @param description 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listProductsUsingGET(sourceSupplierIds?: Array<number>, customerIds?: Array<number>, supplierIds?: Array<number>, categoryIds?: Array<number>, skip?: number, limit?: number, from?: Date, to?: Date, name?: string, description?: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseCanonicalListProductDto>;
    public listProductsUsingGET(sourceSupplierIds?: Array<number>, customerIds?: Array<number>, supplierIds?: Array<number>, categoryIds?: Array<number>, skip?: number, limit?: number, from?: Date, to?: Date, name?: string, description?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseCanonicalListProductDto>>;
    public listProductsUsingGET(sourceSupplierIds?: Array<number>, customerIds?: Array<number>, supplierIds?: Array<number>, categoryIds?: Array<number>, skip?: number, limit?: number, from?: Date, to?: Date, name?: string, description?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseCanonicalListProductDto>>;
    public listProductsUsingGET(sourceSupplierIds?: Array<number>, customerIds?: Array<number>, supplierIds?: Array<number>, categoryIds?: Array<number>, skip?: number, limit?: number, from?: Date, to?: Date, name?: string, description?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {











        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sourceSupplierIds) {
            sourceSupplierIds.forEach((element) => {
                queryParameters = queryParameters.append('sourceSupplierIds', <any>element);
            })
        }
        if (customerIds) {
            customerIds.forEach((element) => {
                queryParameters = queryParameters.append('customerIds', <any>element);
            })
        }
        if (supplierIds) {
            supplierIds.forEach((element) => {
                queryParameters = queryParameters.append('supplierIds', <any>element);
            })
        }
        if (categoryIds) {
            categoryIds.forEach((element) => {
                queryParameters = queryParameters.append('categoryIds', <any>element);
            })
        }
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (limit !== undefined && limit !== null) {
            queryParameters = queryParameters.set('limit', <any>limit);
        }
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from.toISOString());
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to.toISOString());
        }
        if (name !== undefined && name !== null) {
            queryParameters = queryParameters.set('name', <any>name);
        }
        if (description !== undefined && description !== null) {
            queryParameters = queryParameters.set('description', <any>description);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<ResponseCanonicalListProductDto>(`${this.basePath}/products/`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * updateProduct
     * 
     * @param id id
     * @param entityParam entityParam
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateProductUsingPUT(id: number, entityParam: ProductDto, observe?: 'body', reportProgress?: boolean): Observable<ResponseCanonicalProductDto>;
    public updateProductUsingPUT(id: number, entityParam: ProductDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseCanonicalProductDto>>;
    public updateProductUsingPUT(id: number, entityParam: ProductDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseCanonicalProductDto>>;
    public updateProductUsingPUT(id: number, entityParam: ProductDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateProductUsingPUT.');
        }

        if (entityParam === null || entityParam === undefined) {
            throw new Error('Required parameter entityParam was null or undefined when calling updateProductUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<ResponseCanonicalProductDto>(`${this.basePath}/products/${encodeURIComponent(String(id))}`,
            entityParam,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
