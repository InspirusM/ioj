const Discord = require("discord.js");
const moment = require("moment");

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
    let sicon = message.guild.iconURL;
    //roles
    let roles;
    if(message.guild.roles.size === 0) {
       roles = 'This Server Doesn\'t Have Any Role';
    } else {
       roles = message.guild.roles.size;
    }
  //emoji
     let emoji;
    if(message.guild.emojis.size === 0) {
       emoji = 'This Server Doesn\'t Have Any Emoji';
    } else {
       emoji = message.guild.emojis.map(e => e).join(" ");
    }
  //server region
 let serverr; 
    if(message.guild.region === 'hongkong') {
    serverr = 'Hong Kong :flag_hk:'
    } 
    if(message.guild.region === 'brazil') 
    serverr = 'Brazil :flag_br:';
    if(message.guild.region === 'japan' ) {
    serverr = ':flag_jp:Japan'
    }
    if(message.guild.region === 'eu-central') {
    serverr = ':flag_eu:Central Europe'
    }
    if(message.guild.region === 'eu-west') {
    serverr = ':flag_eu:Western Europe';
    }
    if(message.guild.region === 'singapore') {
    serverr = ':flag_sg:Singapore'
    }
    if(message.guild.region === 'russia') {
    serverr = ':flag_ru:Russia'
    } 
    if(message.guild.region === 'sydney') {
    serverr = ':flag_au:Sydney'
    }
    if(message.guild.region === 'southafrica') {
    serverr = ':flag_za:South Africa'
    }
    if(message.guild.region === 'us-central') {
    serverr= ':flag_us:US Central'
    }
    if(message.guild.region === 'us-east') {
    serverr = ':flag_us:US East'
    }
    if(message.guild.region === 'us-south') {
    serverr = ':flag_us:US South'
    }
    if(message.guild.region === 'us-west') {
    serverr = ':flag_us:US West'
    }
    let serverembed = new Discord.RichEmbed()
   .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL)
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField('Humans',checkMembers(message.guild), true)
    .addField('Bots', checkBots(message.guild), true)
    .addField("Server Region",serverr)
    .addField("Total Members", message.guild.memberCount)
    .addField("Total Roles",roles)
   // .addField("Total Emoji",emoji)
    .setDescription(emoji)
    .setTimestamp()
    message.channel.send(serverembed);
        }

module.exports.help = {
  name:"serverinfo"
}
