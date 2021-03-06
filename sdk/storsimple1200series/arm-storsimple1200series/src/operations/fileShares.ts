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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/fileSharesMappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClientContext } from "../storSimpleManagementClientContext";

/** Class representing a FileShares. */
export class FileShares {
  private readonly client: StorSimpleManagementClientContext;

  /**
   * Create a FileShares.
   * @param {StorSimpleManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimpleManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the file shares in a file server.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesListByFileServerResponse>
   */
  listByFileServer(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesListByFileServerResponse>;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByFileServer(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.FileShareList>): void;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByFileServer(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileShareList>): void;
  listByFileServer(deviceName: string, fileServerName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileShareList>, callback?: msRest.ServiceCallback<Models.FileShareList>): Promise<Models.FileSharesListByFileServerResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        resourceGroupName,
        managerName,
        options
      },
      listByFileServerOperationSpec,
      callback) as Promise<Models.FileSharesListByFileServerResponse>;
  }

  /**
   * Returns the properties of the specified file share name.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesGetResponse>
   */
  get(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesGetResponse>;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  get(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.FileShare>): void;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileShare>): void;
  get(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileShare>, callback?: msRest.ServiceCallback<Models.FileShare>): Promise<Models.FileSharesGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        shareName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FileSharesGetResponse>;
  }

  /**
   * Creates or updates the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param fileShare The file share.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesCreateOrUpdateResponse>
   */
  createOrUpdate(deviceName: string, fileServerName: string, shareName: string, fileShare: Models.FileShare, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(deviceName,fileServerName,shareName,fileShare,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.FileSharesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share Name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,fileServerName,shareName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets the file share metrics
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesListMetricsResponse>
   */
  listMetrics(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: Models.FileSharesListMetricsOptionalParams): Promise<Models.FileSharesListMetricsResponse>;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetrics(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricList>): void;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options: Models.FileSharesListMetricsOptionalParams, callback: msRest.ServiceCallback<Models.MetricList>): void;
  listMetrics(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: Models.FileSharesListMetricsOptionalParams | msRest.ServiceCallback<Models.MetricList>, callback?: msRest.ServiceCallback<Models.MetricList>): Promise<Models.FileSharesListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        shareName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.FileSharesListMetricsResponse>;
  }

  /**
   * Retrieves metric definitions of all metrics aggregated at the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesListMetricDefinitionResponse>
   */
  listMetricDefinition(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesListMetricDefinitionResponse>;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  /**
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetricDefinition(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MetricDefinitionList>): void;
  listMetricDefinition(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MetricDefinitionList>, callback?: msRest.ServiceCallback<Models.MetricDefinitionList>): Promise<Models.FileSharesListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        fileServerName,
        shareName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricDefinitionOperationSpec,
      callback) as Promise<Models.FileSharesListMetricDefinitionResponse>;
  }

  /**
   * Retrieves all the file shares in a device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.FileSharesListByDeviceResponse>
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<Models.FileSharesListByDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.FileShareList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FileShareList>): void;
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.FileShareList>, callback?: msRest.ServiceCallback<Models.FileShareList>): Promise<Models.FileSharesListByDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      listByDeviceOperationSpec,
      callback) as Promise<Models.FileSharesListByDeviceResponse>;
  }

  /**
   * Creates or updates the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share name.
   * @param fileShare The file share.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(deviceName: string, fileServerName: string, shareName: string, fileShare: Models.FileShare, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        fileServerName,
        shareName,
        fileShare,
        resourceGroupName,
        managerName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the file share.
   * @param deviceName The device name.
   * @param fileServerName The file server name.
   * @param shareName The file share Name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, fileServerName: string, shareName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        fileServerName,
        shareName,
        resourceGroupName,
        managerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByFileServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/shares",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileShareList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/shares/{shareName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.shareName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/shares/{shareName}/metrics",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.shareName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listMetricDefinitionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/shares/{shareName}/metricsDefinitions",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.shareName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/shares",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.FileShareList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/shares/{shareName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.shareName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "fileShare",
    mapper: {
      ...Mappers.FileShare,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.FileShare
    },
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/fileservers/{fileServerName}/shares/{shareName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.fileServerName,
    Parameters.shareName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
