# Discord-Emotes
Use it to get gif for commands like pat, slap, poke, hug and more!!!!

# Installation <img src="https://cdn.discordapp.com/emojis/316264057659326464.png?v=1" alt = "🖥" width="35px">
<b><a href = "https://www.npmjs.com/package/discord-emotes"> npm: </a><b> 
<p>
<code> npm i discord-emotes </code>
    <p><b><a href = "https://classic.yarnpkg.com/en/package/discord-emotes"> yarn: </a></p>
        <code>yarn add discord-emotes </code>

# Usage <img src="https://cdn.discordapp.com/emojis/757399420319825950.png?v=1" alt = "✏" width="35px">
See the code below for instructions
```js
const { hug } = require("discord-emotes");

hug().then(
    function(value){               
    //  Insert code here
    //  Just put value where you want the gif to be
    },                           
    function(error){console.log(error)} 
);                                     
```
You can use the code like below
```js
const { hug } = require("discord-emotes");

hug().then(
    function(value){               
    console.log(value)    //  Prints gif url
    },                           
    function(error){console.log(error)} 
);                                     
```
You can even send the gif to a discord channel if you want
```js
const { hug } = require("discord-emotes");

hug().then(
    function(value){
    bot.channels.cache.find(channel => channel.id === "543092720344760325").send(value)
    },
    function(error){console.log(error)} 
);                                     
```
# Other emotes <img src="https://cdn.discordapp.com/emojis/781428090454147092.gif?v=1" alt = "✏" width="35px">
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

# How to use other emotes? <img src="https://cdn.discordapp.com/emojis/655370229618049024.png?v=1" alt = "✏" width="35px">
Just replace "hug" from the code in # Usage and change it with the emote you want
```js
const { kiss } = require("discord-emotes");

kiss().then(
    function(value){               
    //  Insert code here
    //  Just put value where you want the gif to be
    },                           
    function(error){console.log(error)} 
);                                     
```
# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>
