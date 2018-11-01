const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
function checkBots(guild) {
    let botCount = 0; // This is value that we will return
    guild.members.forEach(member => { // We are executing this code for every user that is in guild
      if(member.user.bot) botCount++; // If user is a bot, add 1 to botCount value
    });
    return botCount; // Return amount of bots
  }

  function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++; // If user isn't bot, add 1 to value. 
    });
    return memberCount;
  }

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
    .setColor('#f4df42') // Will set color of embed
    .addField('Server owner', message.guild.owner, true) // Will add in-line field with server owner
    .addField('Server region', message.guild.region, true) // Will add in-line field with server region
    .addField('Channel count', message.guild.channels.size, true) // Will add in-line field with total channel count
    .addField('Total member count', message.guild.memberCount) // Will add in-line field with total member count
    // Now we will use our methods that we've created before
    .addField('Humans', checkMembers(message.guild), true)
    .addField('Bots', checkBots(message.guild), true)
    // We also can add field with verification level of guild
    .addField('Verification level', message.guild.verificationLevel, true)
    // And now, we can finally add footer and timestamp
    .setFooter('Server Created:')
    .setTimestamp(message.guild.createdAt); // Will set timestamp to date when guild was created

    // And now we can send our embed
    return message.channel.send(embed);
}
module.exports.help = {
name: "si"
}