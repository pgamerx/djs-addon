---
description: Documentation for the calculator function
---

# Calculator

![This is how this function will look like.](<../.gitbook/assets/Screenshot 2021-10-21 at 6.13.03 PM.png>)

### Example

```javascript
const client = // your client
const addon = require("@pgamerx/djs-addon")

addon.calculator(message/* or*/ interaction {
slash: true, // A boolean, true for yes, false for no.
embedColor: hex_code, // The Embed Color of the calculator embed, default: #075FFF
credit: true // Credit the package. (Only Boolean [true/false])
embedFooter: "Something" // Have Custom Calculator footer when credits are false
})
```

### Parameters Guide

<table><thead><tr><th>Name</th><th>Type</th><th data-type="checkbox">Required</th><th>Default</th></tr></thead><tbody><tr><td>slash</td><td>boolean</td><td>false</td><td>false</td></tr><tr><td>embedColor</td><td>HexCode</td><td>false</td><td>#075FFF</td></tr><tr><td>credit</td><td>boolean</td><td>false</td><td>true</td></tr><tr><td>embedFooter</td><td>string</td><td>false</td><td>N.A</td></tr></tbody></table>
