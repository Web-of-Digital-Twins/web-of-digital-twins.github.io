---
sidebar_position: 2
sidebar_label: DTD Conceptual model and Implementation
---

# DTD Conceptual Model
The DTD can ideally be implemented with the preferred and compatible paradigm. Obviously a direct support for it must be available in the target WoDT Platforms.

For this reason, at the HWoDT Framework level we provide the **DTD Abstract Conceptual Model** that serves as the conceptual basis describing the structure for the creation and processing of Digital Twin Descriptions and their serializations, indipendently from any technology or implementation. The conceptual model must be followed by any HWoDT Adapter for the creation of the DTDs. \
**The *DTD Abstract Conceptual Model* is available in the dedicated [GitHub repository](https://github.com/Web-of-Digital-Twins/dtd-conceptual-model/blob/main/abstract-conceptual-model.md).**

## Web of Things-based DTD implementation
As part of the **HWoDT Framework** we offer a ***[Web of Things](https://www.w3.org/TR/wot-architecture/)***-based implementation of the *Digital Twin Description Abstract Conceputal Model*. \
Standardization organizations and popular research works suggest that there is value in having DT representation aligned with the ***[WoT Thing Description (TD)](https://www.w3.org/TR/wot-thing-description/)***. Such alignment has two strategic benefits:
1. The TD already complies with the HATEOAS principles and in general with REST constraints. 
2. It enables the usage of DTs as ***WoT Things***, by processing their *WoT TD-based DTD*, thereby streamlining the composition of mashups composed by DTs and *WoT Things*.  

**The mappings between the *DTD Abstract Conceptual Model* and the *WoT TD model* to implement the *DTD* with the *WoT TD* are available in the dedicated [GitHub respository](https://github.com/Web-of-Digital-Twins/dtd-conceptual-model/blob/main/implementations/wot/wot-mappings.md).** \
Moreover, an example of a DTD serialized with the *WoT TD* is available [here](https://github.com/Web-of-Digital-Twins/dtd-conceptual-model/blob/main/examples/wot/lamp.md#dtd).

*Developers can reuse the mappings to create the DTD in their own HWoDT Adapter implementations.*
