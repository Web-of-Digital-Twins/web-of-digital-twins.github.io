---
sidebar_position: 3
sidebar_label: Eclipse Ditto
---

# Eclipse Ditto adapter

**[Eclipse Ditto](https://eclipse.dev/ditto/)** is one of the most popular open-source platform for the development of DTs, mantained by the *Eclipse Foundation*.

The Eclipse Ditto platform follows the *Device-as-a-Service* paradigm where each Physical Asset is abstracted into its *Ditto Thing* (the Digital Twin) provinding a Web-based and domain-agnostic abstraction layer for IoT devices.

Ditto metamodel consists of
- *Features*: handle data and functionalities.
- *Attributes*: useful to define static properties.
- *Messages*: enable bidirectional data exchange between the DT and the PA.

A Ditto Thing model is defined via a JSON-based representation or via a [WoT Thing Model (TM)](https://www.w3.org/TR/wot-thing-description/#thing-model).

The **HWoDT Framework** offers a Java-based **middleware to make each Ditto Thing compliant with HWoDT ecosystems**. The middleware connects to the Eclipse Ditto instance exploiting the native WebSocket connection and converts the Ditto model represented with the WoT TM in a valid DTD, as well as the DT data to the DTKG representation.

The Ditto metamodel seems far from the WoDT one, but within the Ditto HWoDT adapter we adopted a simple mapping that allow us to be able to represent the whole WoDT metamodel. Properties are mapped with both *Features* and *Attributes*, relationships are mapped with custom *Attributes*, actions are mapped with *Messages* from the Consumer to the DT, and events are mapped with *Messages* from the DT to the Consumer.

In the current implementation we provide the following interfaces:
- HTTP-based API that implements the HWoDT interaction patterns and uniform interface.
- WebSocket-based DTKG observation endpoint.

In the following a Components and Connectors diagram depicting the Eclipse Ditto HWoDT Adapter modules and interfaces.

![Eclipse Ditto HWoDT Adapter components and connectors diagram](../../../static/img/ditto-adapter-cc.svg)


**The usage and configuration information are available in the README of the [GitHub repository](https://github.com/Web-of-Digital-Twins/ditto-wodt-adapter).**

### Limits
Currently one instance of the Eclipse Ditto HWoDT Adapter can handle and adapt only one Ditto Thing.

### Useful links
- **[GitHub repository](https://github.com/Web-of-Digital-Twins/azuredt-wodt-adapter)**
- **[Configuration example](https://github.com/Web-of-Digital-Twins/major-trauma-management-case-study/tree/main/ditto-dts)**