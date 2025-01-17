---
sidebar_position: 1
sidebar_label: Azure Digital Twins
---

# Azure Digital Twins adapter

[**Azure Digital Twins (ADT)**](https://learn.microsoft.com/en-us/azure/digital-twins/) represents Microsoft platform as a service (PaaS) proposal for the creation of twin graphs based on digital models of entire environments.

DTs in ADT are modeled using the *[Digital Twins Definition Language (DTDL)](https://github.com/Azure/opendigitaltwins-dtdl/blob/master/DTDL/v3/DTDL.v3.md)*, a domain-agnostic JSON-LD-based language developed by Microsoft. Each DT is an instance of a specific DTDL model.

The **HWoDT Framework** offers a Kotlin-based **middleware to make Azure Digital Twins compliant with HWoDT ecosystems**. The middleware offers the possibility to completely configure which ADT DTs to adapt and expose. \
Moreover, it has the ability to *reify internal ADT graph relationships and to [model additional relationships with external WoDT DTs](#model-relationships-with-wodt-dts-external-to-the-adt-instance)*. 

In the current implementation we provide the following interfaces:
- HTTP-based API that implements the HWoDT interaction patterns and uniform interface.
- WebSocket-based DTKG observation endpoint.

In the following a Components and Connectors diagram depicting the Azure HWoDT Adapter modules and interfaces.

![ADT HWoDT Adapter components and connectors diagram](../../../static/img/adtadapter-cc.svg)


The ADT HWoDT Adapter requires an Azure-based pipeline composed of four services:
1. [**Azure Digital Twins**](https://learn.microsoft.com/en-us/azure/digital-twins/): the ADT service instance.
2. [**Azure Event Grid**](https://learn.microsoft.com/en-us/azure/event-grid/): it routes events from Azure Digital Twins along the pipeline.
3. [**Azure Function**](https://learn.microsoft.com/en-us/azure/azure-functions/): it has the responsibility of creating a snapshot of the DT, starting from the event. The snapshot is then sent to the adapter via the *Azure SignalR* service. The Azure Function project to deploy in the Azure Function is available in the dedicated [GitHub repository](https://github.com/Web-of-Digital-Twins/azuredt-wodt-adapter-azurefunction).
4. [**Azure SignalR**](https://learn.microsoft.com/en-us/azure/azure-signalr/): it is used to export and make data observable data from the Azure-based pipeline.

The adapter internally follows the [Abstract Architecture](/docs/concepts/architecture/). In particular, the *DTD Manager* is designed to automatically retrieve the DTDL models, stored on ADT, and convert them in valid DTDs. Then, the *WoDT Shadowing Adapter* relies on the *Azure SignalR* service to extend the shadowing process by receiving the DT snapshots (made by the Azure Function) and converting them into DTKGs.

**The usage and configuration information are available in the README of the [GitHub repository](https://github.com/Web-of-Digital-Twins/azuredt-wodt-adapter).**


### Model relationships with WoDT DTs external to the ADT instance
Relationships with DTs external to the ADT instance, are not possible solely within the ADT service. \
One main issue with Azure Digital Twins is the impossibility of modeling relationships with DTs that live outside the ADT instance itself. 
The targets in ADT relationships must be valid IDs of DTs that are managed under the same instance. 
The strategy followed in the design of the adapter was allow Users create a new DT inside the instance for each target WoDT DT with which the original one has a relationship in the ecosystem. Hence, the created DT is an internal representation of the external WoDT DT that can be linked to the original one. The URI of the external WoDT DT is set as a property due to the impossibility of setting a URI as the ID of a DT inside an ADT instance. \
The provided Azure Function and the adapter logics are able to process them and include in the DTD and DTKG. \
The DTDL model to create the External DTs is available [here](https://github.com/Web-of-Digital-Twins/azuredt-wodt-adapter/blob/main/dtdl/ExternalDT.json).

### Limits
Currently the adapter does not support:
- Relationship properties
- Components
- Complex properties e.g., Objects, Maps.

### Useful links
- **[GitHub repository](https://github.com/Web-of-Digital-Twins/azuredt-wodt-adapter)**
- **[Swagger API doc](https://web-of-digital-twins.github.io/azuredt-wodt-adapter/documentation/openapi-doc/)**
- **[Code documentation](https://web-of-digital-twins.github.io/azuredt-wodt-adapter/documentation/code-doc/)**
- **[Configuration example](https://github.com/Web-of-Digital-Twins/major-trauma-management-case-study/tree/main/azure-dts)**
