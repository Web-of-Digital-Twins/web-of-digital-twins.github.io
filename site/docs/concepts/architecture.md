---
sidebar_position: 3
sidebar_label: Abstract Architecture
---

# Abstract Architecture

In this page the overall **HWoDT Abstract Architecture** is presented. \
It is a purely logical architecture that can help to describe the internal responsibilities of each role (DTs and WoDT Platform). \
*Therefore it is not mandatory and instead is here to help HWoDT developers both to understand the Framework better and to design and implement new HWoDT Adapters for unsupported technologies.*

<div className="row">
<div className="text--center col">
![HWoDT Abstract Architecture](../../static/img/abstract_arch.svg)
</div>
<div className="col col--3"></div>
<div className="col col--3"></div>
</div>

## WoDT Digital Twin
**`Digital Twin / Digital Twin Builder`**: this component represents the **real technology used to implement the Digital Twin**.
Different DT devolpment frameworks or platforms can be used at this level e.g., Eclipse Ditto, Azure Digital Twins.
Depending on the technology it can host either just one or multiple DTs. The latter case implies that other components 
of the architecture must account for the all the underlying DTs (that need to be exposed as WoDT DTs).

**`WoDT Shadowing Adapter`**: this component **extends the existing shadowing process** of the DT layer below by adapting the existing DT to
the Web of Digital Twins metamodel, creating a semantic domain-oriented representation that is stored on the `DTKG Engine` to serve upper components. 
Moreover, it is supported by the `DT Event Dispatcher` and the `DT Action Queue` for the management of events and actions.

**`DTD Manager`**: this component **creates and manages the Digital Twin Description** of the DT(s) to expose as WoDT DT(s).

**`DTKG Engine`**: this component **manages the Digital Twin Knowledge Graph (DTKG)** of the WoDT DT(s). 
If the HWoDT Adapter supports memorization, then at each new update the past version is stored in the `DTKG Store`.

**`DTKG Store` [optional]**: this component **stores the past versions of the DTKG** to be exposed via the *Memento* protocol.

**`DT Event Dispatcher & DT Action Queue` [optional]**: these components support the `WoDT Shadowing Adapter` by **respectively dispatching events** to be exposed by the DT and **enqueuing action invocation requests** to be shadowed on the PA.

**`Platform Management Interface`**: this component **is in charge of handling the registration process to WoDT Platforms**.
It has several responsibilities:
1.  managing the automatic registration to the interested WoDT Platforms
2.  exposing
the registration notification endpoint 
3.  dispatching the DTD update and DT removal notifications to the WoDT
Platforms.

**`WoDT Digital Twin Interface`**: this components **exposes the WoDT DT interaction patterns**.


## WoDT Platform
**`Ecosystem Management Interface`**: this component **manages the registration, update, and deletion of the WoDT DTs inside the ecosystem**. 
To serve its responsibilities it additionally validate the DTDs and notify the externally added WoDT DTs.

**`WoDT Digital Twins Observer`**: this component **handles the DTKG observation** of the registered WoDT DTs. The received DTKGs are then incorporated into the DT ecosystem KG.

**`Ecosystem Registry`**: this componet **tracks the registered WoDT DTs** and is responsible for the **URI mapping logic**.

**`Platform Knowledge Graph Engine`**: this component **manages the DT ecosystem KG** handling the continuous merging process of the DTKGs and of the DTDs, as well as the data deletion of removed DTs. Moreover, the engine **resolves SPARQL queries and data requests**.

**`WoDT Platform Interface`**: this component **exposes the WoDT Platform interaction patterns** for ecosystem-level services.


## Interaction flows
To clarify the relationships between the different components of the Abstract Architecture, we discuss two basic flows, using *UML Sequence Diagrams*. \
The diagrams should not be considered as the actual and precise design of the flows in the current implementation. For example, the proposed WoDT Platform implementation is mostly event-driven resulting in simpler interactions.

### DT Registration process (by the DT)
![UML Sequence Diagram of DT registration](../../static/img/sequence-registration.svg)

Assuming that the DT already knows the URL of the WoDT Platform the flow starts with the `Platform Management Interface` sending the registration request, with its DTD in the request body, to the `Ecosystem Management Interface` of the Platform. \
The `Ecosystem Management Interface` validates and checks the received DTD. \
If the DTD is invalid, then it cannot proceed and returns the error to the DT `Platform Management Interface`. \
Otherwise, if the DTD is valid, it can finalize the registration process by adding it to the `Ecosystem Registry` and notifying the `WoDT Digital Twins Observer`, to start observing the new WoDT DT, and the `Platform Knowledge Graph Engine`, to merge the new DTD to the DT ecosystem KG. \
Finally, the registration is confirmed to the WoDT DT, and the `WoDT Digital Twins Observer`, as soon as it processes its DTD, starts observing the newly registered DT.

### WoDT DT observation
![UML Sequence Diagram of DT registration](../../static/img/sequence-observation.svg)

Observe a WoDT DT does not require any out-of-band information because its uniform interface is self-descriptive and contains all the information Consumers need. \
A Consumer requests the DTD to the `WoDT Digital Twin Interface`. The latter obtains the current DTD from the `DTD Manager` and returns it to the Consumer. \
Then, the Consumer processes the DTD to get the observation affordance and starts to observe the WoDT DT. 

Physical Asset updates are shadowed to the DT. The `WoDT Shadowing Adapter`, extending the DT shadowing process, handles the event and sends it to the `DTKG Engine` that updates its internal Knowledge Graph and notifies the `WoDT Digital Twin Interface`. The latter forward the event to all the observers, including the aforementioned Consumer.
