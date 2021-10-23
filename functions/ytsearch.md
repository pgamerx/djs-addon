---
description: >-
  Documentation for ytSearch function (Can be used to get a youtube video
  details from a search term)
---

# ytSearch

### Example

```javascript
const client = // your client
const addon = require("@pgamerx/djs-addon")

await addon.ytSearch(message,{
api_key: // Your youtube v3 API key
channels: ["channel_id_1"] // where bot can run this function
query: "Never gonna give you up" // query you want to search
embed_color: HexColorString, // colour of embed
embed_footer: "Developed by PGamerX" // footer of embed

})
```

### Parameters guide

<table><thead><tr><th>Name</th><th>Type</th><th data-type="checkbox">Required</th></tr></thead><tbody><tr><td>api_key</td><td>String</td><td>true</td></tr><tr><td>query</td><td>String</td><td>true</td></tr><tr><td>channels</td><td>StringArray</td><td>false</td></tr><tr><td>embed_color</td><td>HexColorSting</td><td>false</td></tr><tr><td>embed_footer</td><td>String</td><td>false</td></tr></tbody></table>

###
