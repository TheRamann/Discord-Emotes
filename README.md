# Discord-Actions
Use it to get gif for commands like pat, slap, poke, hug and more!!!!

# Installation 🖥
<b><a href = "https://www.npmjs.com/package/discord-emotes"> npm: </a><b> 
<p>
<code> npm i discord-emotes </code>

# Usage ✏
```js
const { hug } = require("discord-emotes");

var HugGif = hug().then(
    function(value){console.log(value)},  
    function(error){console.log(error)} 
);                                     
```
Now the value is stored as a variable called HugGif. Now you can use it anywhere you want.
You can print it in your terminal shell
```js
console.log(HugGif);
```
Or you can even message it in a channel in discord
```js
message.channel.send(HugGif);
```
# Other emotes 😎
There are these emotes :- <br>
📝hug <br> 
📝kiss <br>
📝pat <br>
📝poke <br>
📝slap <br>
📝tickle <br>
📝smug <br>
📝cuddle <br>
📝ngif <br>

# Like the package?
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>
