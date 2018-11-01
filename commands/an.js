const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  
  let botmessage = args.join(" ");
  var announce = new Discord.RichEmbed()
  .setTitle(`:loudspeaker: Announcement`)
  .setDescription(botmessage)
  .setColor(`#fe5733`)
var a = bot.emojis.get("496564386518007849")
bot.channels.get("507447393235632139").send("@everyone",announce).then(r => r.react(a))
}

module.exports.help = {
  name: "an"
}
