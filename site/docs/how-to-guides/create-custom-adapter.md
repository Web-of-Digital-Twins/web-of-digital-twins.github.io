---
sidebar_position: 3
sidebar_label: Create a custom HWoDT Adapter
---

# Create a custom HWoDT Adapter
As HWoDT Framework team we want to give the best development experience possible, but it can happen that a DT Builder or Framework has not yet been explored by our team and no adapter has been released :grimacing:. \
But, no worries :exclamation:  \
Here is the simple checklist that you need to cover in order to implement your HWoDT adapter:
- [ ] The internal metamodel used by the DT technology must be aligned with the WoDT one (Properties, Relationships, Actions, and Events).
- [ ] The DTD and the DTKG must be generated and exposed. To this end follow the [DTD Conceptual Model](https://github.com/Web-of-Digital-Twins/dtd-conceptual-model), especially the supported [DTD WoT implementation](https://github.com/Web-of-Digital-Twins/dtd-conceptual-model/blob/main/implementations/wot/wot-mappings.md).
- [ ] The required interaction patterns must be implemented.

The information needed and the constraints to respect to implement the aferomentioned tasks can be found in our [paper](https://doi.org/10.1145/3652620.3688263).

If you want, you can also share your adapter with us, and we will consider to include your work within our framework :sunglasses::fire:. \
Remember, if you contribute with an academic work, please remeber to cite us (see our [academia page](https://web-of-digital-twins.github.io/academia/)).
