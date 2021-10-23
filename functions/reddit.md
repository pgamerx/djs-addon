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
