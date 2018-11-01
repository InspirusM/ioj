const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
      message.reply("Usage: !ban <user> <reason>");
      return;
    }
  message.delete();
if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission to ban members');
  let member = message.mentions.members.first(); // Member mention
  if (!member) return message.channel.send('Please mention a member to ban!'); // Returns if the member isn't mentioned
  if (!member.bannable) return message.channel.send('You cannot ban a member with role higher or equal than you'); // Returns if the member isn't bannable
  
  let reason = args.slice(1).join(' '); // Reason arguments
  if(!reason) reason = 'Unknown'
  await member.ban(reason) // Bans a mentioned member
  .catch(e => console.log(e)); // Catches error and sends in console
  let embed = new Discord.RichEmbed() // RichEmbed constructor
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setTitle('Banned!') // Embed title
  .addField('Banned A User',`${member.user.tag}`)
  .setDescription(`${member.user.tag} has been banned!\nReason: ${reason}`) // Embed's description

   let mod = message.guild.channels.find(m => m.name === "mod-log");
    if(!mod) mod = await message.guild.createChannel('mod-log','text');


    mod.send(embed);
}

module.exports.help = {
  name:"ban"
}
