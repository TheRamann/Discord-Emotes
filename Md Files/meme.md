# Meme

The meme function will return an object. <br>
So, to get specific item from object, just do the thing below
```js
const emotes = require("discord-emotes");

emotes.meme().then(object => {
    console.log(object.url) //prints image url
    console.log(object.title) //prints title of meme
    //Just do like this for any thing you need from meme
}); 