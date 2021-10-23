# Canvas

### Example

```javascript
const client = // your client
const addon = require("@pgamerx/djs-addon")

const image = await addon.canvas(message, {
toggle: true
method: "wanted"
image_1: message.author.displayAvatarURL({format: "png"})
})
const attachment = new Discord.MessageAttachment(image, "wanted.png");

```

### Parameters Guide

<table><thead><tr><th>Name</th><th>Type</th><th data-type="checkbox">Required</th></tr></thead><tbody><tr><td>method</td><td>String</td><td>true</td></tr><tr><td>image_1</td><td>String</td><td>false</td></tr><tr><td>image_2</td><td>String</td><td>false</td></tr><tr><td>image_3</td><td>String</td><td>false</td></tr><tr><td>txt</td><td>String</td><td>false</td></tr><tr><td>toggle</td><td>Boolean</td><td>false</td></tr></tbody></table>

### Available Methods

#### Method(s) in which only 1 image is required: <a href="methods-in-which-only-1-image-is-required" id="methods-in-which-only-1-image-is-required"></a>

"affect", "beautiful", "wanted", "delete", "trigger", "facepalm", "blur", "hitler", "kiss", "jail", "invert", "jokeOverHead"

#### Method(s) in which 2 images are required: <a href="methods-in-which-2-images-are-required" id="methods-in-which-2-images-are-required"></a>

"bed", "fuse" , "kiss", "slap", "spank"

#### Method(s) in which 3 images are required: <a href="methods-in-which-3-images-are-required" id="methods-in-which-3-images-are-required"></a>

"distracted"

#### Method(s) in which only Text is required: <a href="methods-in-which-only-text-is-required" id="methods-in-which-only-text-is-required"></a>

"changemymind"

\
