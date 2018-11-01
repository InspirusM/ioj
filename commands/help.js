const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(args[0] === 'tools') {
let tools = new Discord.RichEmbed()
.setTitle('Useful Tools')
.addField('<prefix>botinfo','Shows Bot Info')
.addField('<prefix>invites','Shows Invites Of A User')
.addField('<prefix>prefix','Changes The Prefix For A Server')
.addField('<prefix>serverinfo','Shows Info About Server')
.addField('<prefix>userinfo','Gives Info About A User')
  return message.channel.send(tools)
}
if(args[0] === "mod") {
let modhelp = new Discord.RichEmbed()
.setTitle('Moderator Commands')
.addField('<prefix>clear','Delete Specified Number Of Messages')
.addField('<prefix>kick','Kicks A User From Server')
.addField('<prefix>ban','Bans A User From The Server')
.addField('<prefix>warn','Warns A User In The Server')
.addField('<prefix>warnlevel','Checks A User Warn Level');
return message.channel.send(modhelp);
}
  if(args[0] === "fun") {
  let funhelp = new Discord.RichEmbed()
.setTitle('Fun Commands')
.addField('<prefix>memes','Show Some Funny Memes')
.addField('<prefix>say','Say Something')
.addField('<prefix>bill','Show A Random Image');
 return message.channel.send(funhelp);
}
  
let help = new Discord.RichEmbed()
.setTitle('Usage: <prefix>help category')
.setDescription('Example <prefix>help tools')
.addField('1.Tools','Some Useful Tools Command')
.addField('2.Modhelp','Moderator Commands')
.addField('3.Fun Commands','Fun Commands')
.setColor('#000000');
return message.channel.send(help);
}
module.exports.help = {
name: "help"
}