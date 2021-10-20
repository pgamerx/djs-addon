---
description: This is documentation for Chatbot function.
---

# Chatbot

### Example

```javascript
const client = // your client
const addon = require("@pgamerx/djs-addon")

addon.chatbot(client, message, {
toggle: true, // A boolean, true for enabled.
api_key: "key", // get one free from api.pga
channels: ["CHANNELID1", "CH..2"], // Channel ID's where you want this to work
name: 'chatbot', // Name of the Bot. default: Your bot name
age: 8 /* or "8" */, // Age of the bot. default: 8
developer: 'PGamerX' // Developer (your) name.

})
```

### Options guide

<table><thead><tr><th>Name</th><th>Type</th><th data-type="checkbox">Required</th><th>Default</th></tr></thead><tbody><tr><td>api_key</td><td></td><td>true</td><td></td></tr><tr><td>channels</td><td></td><td>true</td><td></td></tr><tr><td>name</td><td></td><td>false</td><td></td></tr><tr><td>age</td><td></td><td>false</td><td></td></tr><tr><td>d</td><td></td><td>false</td><td></td></tr></tbody></table>

