---
sidebar_position: 1
sidebar_label: WoDT Platform
---

# The WoDT Platform

The **HWoDT Framework** includes a Kotlin-based ready-to-play implementation of the ***WoDT Platform*** that developers can use. \
It accurately follows the HWoDT interaction patterns and the modules presented for the [Abstract Architecture](/docs/concepts/architecture/)

In the current implementation we provide the following interfaces:
- HTTP-based API for the `Ecosystem Management Interface` and for the `WoDT Platform Interface`. The latter includes the required SPARQL endpoint.
- WebSocket endpoint to observe the DT ecosystem KG exposed by the `WoDT Platform Interface`.
- WebSocket support to observe DTs by the `WoDT Digital Twins Observer`.

In the following a Components and Connectors diagram depicting the platform modules and interfaces.

![Platform components and connectors](../../static/img/platform-cc.svg)

Interactions between components are mostly event-driven and based on the usage of *Kotlin coroutines and flows*.

**The usage information are available in the README of the [GitHub repository](https://github.com/Web-of-Digital-Twins/wodt-platform).**

### Useful links
- **[GitHub repository](https://github.com/Web-of-Digital-Twins/wodt-platform)**
- **[Swagger API doc](https://web-of-digital-twins.github.io/wodt-platform/documentation/openapi-doc/)**
- **[Code documentation](https://web-of-digital-twins.github.io/wodt-platform/documentation/code-doc/)**
