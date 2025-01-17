---
sidebar_position: 2
sidebar_label: WLDT
---

# White Label Digital Twin adapter

The [**White Label Digital Twins**](https://wldt.github.io/) is a framework that supports the design and development of Digital Twins. It intends to maximize modularity, re-usability, and flexibility to mirror any type of Physical Asset. \
WLDT metamodel is aligned with the Web of Digital Twins one, allowing the modeling of Properties, Events, Relationships, and Actions.

The modular, flexible, and extendible nature of the WLDT framework facilitates the creation of a custom *Digital Adapter* (i.e., modules that define the digital interface of a WLDT DT) to implement the HWoDT uniform interface. Therefore, the **HWoDT Framework** offers a **general *WLDT Digital Adapter* embedded in a Java Library** that can be imported by WLDT DT Developers into their WLDT project **to easily make WLDT DTs HWoDT-compliant.**

In the current implementation we provide the following interfaces:
- HTTP-based API that implements the HWoDT interaction patterns and uniform interface.
- WebSocket-based DTKG observation endpoint.

In the following a Components and Connectors diagram depicting the WLDT HWoDT Adapter modules and interfaces.

![WLDT HWoDT Adapter components and connectors diagram](../../../static/img/wldt-adapter-cc.svg)

**The usage and configuration information are available in the README of the [GitHub repository](https://github.com/Web-of-Digital-Twins/wldt-wodt-adapter).**

### Limits
The major current limit is the absence of supports for DT events.

### Useful links
- **[GitHub repository](https://github.com/Web-of-Digital-Twins/wldt-wodt-adapter)**
- **[Swagger API doc](https://web-of-digital-twins.github.io/wldt-wodt-adapter/documentation/openapi-doc/)**
- **[Code documentation](https://web-of-digital-twins.github.io/wldt-wodt-adapter/documentation/code-doc/)**
- **[Usage example](https://github.com/Web-of-Digital-Twins/major-trauma-management-case-study/tree/main/wldt-dts)**
