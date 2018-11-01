const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('You don\'t have permission!'); // Checks permission
  let member = message.mentions.members.first() || message.guild.members.get(args[0]); // Member mention
  if (!member) return message.channel.send('Please mention a member to kick!');
  if (!member.kickable) return message.channel.send('You cannot kick a member with a role higher or equal than you!');
  if(args[0] == "help"){
      message.reply("Usage: <prefix>kick <user> <reason>");
      return;
  }
  let reason = args.slice(1).join(' '); // Reason arguments
  if(!reason) reason = 'Unknown';
  await member.kick(reason) // Kicks a member.
  .catch(error => message.channel.send(`Sorry I couldn't kick, Error: ${error}`));
  
  let kickEmbed = new Discord.RichEmbed() //  RichEmbed constructor
  .setTitle('Kicked!')
  .addField('Kicked A User',`${member.user.tag}`)// Embed title
  .setDescription( `${member.user.tag} has been kicked for ${reason}`) // Embed's description

   let mod = message.guild.channels.find(m => m.name === "mod-log");
    if(!mod) mod = await message.guild.createChannel('mod-log','text');

      mod.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
