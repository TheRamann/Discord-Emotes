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
const emotes = require("discord-emotes");

emotes.hug().then(gif => {
    //  Insert code here
    //  Just put value where you want the gif to be
});                                     
```
***
<b>You can use the code like below</b><b>
```js
const emotes = require("discord-emotes");

emotes.hug().then(gif => console.log(gif));                                     
```
***
<b>You can even send the gif to a discord channel if you want</b>
```js
const emotes = require("discord-emotes");

if(command == "hug"){
    emotes.hug().then(gif =>{
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username} hugs ${message.mentions.users.first().username}`)
            .setImage(value)
        message.channel.send(embed);
    });}
```
<b>
A tip: use visual studio code
<img src = "https://github.com/TheRamann/Discord-Emotes/blob/main/Md%20Files/Preview.png?raw=true">

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

# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>