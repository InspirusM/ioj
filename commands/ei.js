const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
   const emoji = client.emojis.get(args[0]);
    //const emoji = guild.emojis.first();
const emoteurl = emoji.url

 
    const eembed = new Discord.RichEmbed()
  .setAuthor("Emote Info"," https://discordemoji.com/assets/emoji/owo.png")
  .addField("» Emote Name",emoji.name)
   .setThumbnail(emoteurl)
    .addField("» Emote Id",emoji.id)
    .addField("» Created At",emoji.createdTimestamp)
    .addField("» Emoji Animated",emoji.animated,true)
    .addField("» Emoji Deletable",emoji.deletable,true)
    .addField("» Message Reaction",emoji.identifier,true)
  //  .addField("» Emoji Owner",emoji..username)
  
if(isNaN(args[0])) return message.channel.send("Emote Name bust be NaN or an id")
  
  message.channel.send(eembed)
}

module.exports.help = {
  name: "ei"
}
