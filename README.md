# Discord-Emotes
Use it to get gif for commands like pat, slap, poke, hug and more!!!!

# Installation <img src="https://cdn.discordapp.com/emojis/316264057659326464.png?v=1" alt = "🖥" width="35px">
<b><a href = "https://www.npmjs.com/package/discord-emotes"> npm: </a><b> 
<p>
<code> npm i discord-emotes </code>
    <p><b><a href = "https://classic.yarnpkg.com/en/package/discord-emotes"> yarn: </a></p>
        <code>yarn add discord-emotes </code>

# Usage <img src="https://cdn.discordapp.com/emojis/757399420319825950.png?v=1" alt = "✏" width="35px">
<b>See the code below for instructions</b>
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
***
<b>You can use the code like below</b>
```js
const { hug } = require("discord-emotes");

hug().then(
    function(value){               
    console.log(value)    //  Prints gif url
    },                           
    function(error){console.log(error)} 
);                                     
```
***
<b>You can even send the gif to a discord channel if you want</b>
```js
const { hug } = require("discord-emotes");

if(command == "hug"){
    hug().then(
        function(value){
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugs ${message.mentions.users.first}`)
            .setImage(value)
        message.channel.send(embed);
        },
        function(error){console.log(error)} 
    );}
```
# Other emotes <img src="https://cdn.discordapp.com/emojis/781428090454147092.gif?v=1" alt = "✏" width="35px">
 <font size="3"> There are these emotes :- <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> hug <br> 
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> kiss <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> pat <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> poke <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> slap <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> tickle <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> smug <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> cuddle <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> dog <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> cat <br>
<img src="https://cdn.discordapp.com/emojis/563830235259338762.png?v=1" alt = "📝" width="15px"> meme <br>
</font>
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