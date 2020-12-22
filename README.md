# Discord-Actions
Use it to get gif for commands like pat, slap, poke, hug and more!!!!

# Installation 🖥
<b><a href = "https://www.npmjs.com/package/discord-emotes"> npm: </a><b> 
<p>
<code> npm i discord-emotes </code>
    <p><b><a href = "https://github.com/TheRamann/Discord-Emotes"> github: </a></p>
        <code>git clone https://github.com/TheRamann/Discord-Emotes </code>

# Usage ✏
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
You can even message the code to a discord channel if you want
```js
const { hug } = require("discord-emotes");

hug().then(
    function(value){
    bot.channels.cache.find(channel => channel.id === "543092720344760325").send(value)
    },
    function(error){console.log(error)} 
);                                     
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

# How to use other emotes?
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
# Like the package?
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>
