---
description: >-
  Documentation for the reddit function (used for sending images taken from a
  sub-reddit)
---

# Reddit

### Example

```javascript
const client = // your client
const addon = require("@pgamerx/djs-addon")

addon.reddit(message, {
channels: ["channel_1_id",...],// Channels where bot is allowed to send images. 
// (Maybe lock to NSFW only if data is taken from NSFW channels)
sub_reddit: "memes", // Sub reddit you want to get images from.
color: ,// Colour HEX Code
title: "Here is a meme" // title of the embed
footer: "Developed by PGamerX" // footer of the embed.
})
```

### Parameters guide

<table><thead><tr><th>Name</th><th>Type</th><th data-type="checkbox">Required</th></tr></thead><tbody><tr><td>sub_reddit</td><td>String</td><td>true</td></tr><tr><td>channels</td><td>StringArray</td><td>false</td></tr><tr><td>color</td><td>HexColorString</td><td>false</td></tr><tr><td>title</td><td>String</td><td>false</td></tr><tr><td>footer</td><td>String</td><td>false</td></tr></tbody></table>

