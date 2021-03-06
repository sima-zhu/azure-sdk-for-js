/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/queueServicesMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a QueueServices. */
export class QueueServices {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a QueueServices.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * List all queue services for the storage account
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueServicesListResponse>
   */
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.QueueServicesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ListQueueServices>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListQueueServices>): void;
  list(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListQueueServices>, callback?: msRest.ServiceCallback<Models.ListQueueServices>): Promise<Models.QueueServicesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.QueueServicesListResponse>;
  }

  /**
   * Sets the properties of a storage account’s Queue service, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueServicesSetServicePropertiesResponse>
   */
  setServiceProperties(resourceGroupName: string, accountName: string, options?: Models.QueueServicesSetServicePropertiesOptionalParams): Promise<Models.QueueServicesSetServicePropertiesResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  setServiceProperties(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.QueueServiceProperties>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  setServiceProperties(resourceGroupName: string, accountName: string, options: Models.QueueServicesSetServicePropertiesOptionalParams, callback: msRest.ServiceCallback<Models.QueueServiceProperties>): void;
  setServiceProperties(resourceGroupName: string, accountName: string, options?: Models.QueueServicesSetServicePropertiesOptionalParams | msRest.ServiceCallback<Models.QueueServiceProperties>, callback?: msRest.ServiceCallback<Models.QueueServiceProperties>): Promise<Models.QueueServicesSetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      setServicePropertiesOperationSpec,
      callback) as Promise<Models.QueueServicesSetServicePropertiesResponse>;
  }

  /**
   * Gets the properties of a storage account’s Queue service, including properties for Storage
   * Analytics and CORS (Cross-Origin Resource Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueServicesGetServicePropertiesResponse>
   */
  getServiceProperties(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.QueueServicesGetServicePropertiesResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  getServiceProperties(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.QueueServiceProperties>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  getServiceProperties(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QueueServiceProperties>): void;
  getServiceProperties(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.QueueServiceProperties>, callback?: msRest.ServiceCallback<Models.QueueServiceProperties>): Promise<Models.QueueServicesGetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getServicePropertiesOperationSpec,
      callback) as Promise<Models.QueueServicesGetServicePropertiesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListQueueServices
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const setServicePropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/{queueServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.queueServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      cors: [
        "options",
        "cors"
      ]
    },
    mapper: {
      ...Mappers.QueueServiceProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QueueServiceProperties
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getServicePropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/{queueServiceName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.queueServiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.QueueServiceProperties
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
