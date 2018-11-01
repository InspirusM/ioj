const Discord = require('discord.js')
 const moment = require("moment");

exports.run = async (bot, message, args) => {

     let user = message.mentions.users.first() || message.author;

    const member = message.guild.member(user);
    let botu;
    if(user.bot === true) {
      botu = 'This User Is A Bot'
    } else {
      botu = 'This User Isn\'t A Bot'
    }
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID", `${user.id}`, true)
		.addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : 'The User Doesn\'t Have Any Nickname'}`, true)
    .addField('Status', user.presence.status) 
		.addField("Bot",botu)
		.addField("Roles", member.roles.map(roles => `${roles.name}`).join(', '))
     message.channel.send({embed});
    }
 module.exports.help = {
 name: "userinfo"
 }