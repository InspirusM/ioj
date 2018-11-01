const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {

  //if(message.channel.id !== '487970432599719937') return;
  if(!args[0]) return message.channel.send('Missing Client Id And Prefix').then(msg => msg.delete(5000));
   
  if(!args[1]) return message.channel.send('Missing Prefix').then(msg => msg.delete(5000));

  if(args[0] === message.author.id) return message.reply("Its A User Account Not Bot").then(msg => msg.delete(5000));

  
 message.delete();
bot.fetchUser(args[0])
  .then(User => {
    let ID = args[0]
    let icon = User.displayAvatarURL
    let prefix = args[1]
    let app = `Bot: ${User} Owner: <@${message.author.id}> Prefix: ${prefix}`
    let t = new Discord.RichEmbed()
    .setTitle(`Bot Name: ${User.username}`)
    .setDescription('Your Bot Has Been Applied And In The Queue It Will Be Soon Tested')
    .addField(`Owner:`, `${message.author.username}`)
    .addField(`Bot ID:`, args[0])
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=${ID}&permissions=0&scope=bot`)
    .setThumbnail(icon)
    .addField(`Prefix:`,prefix)
    
   db.set(`botapply_${message.author.id}`, app).then(botapply => {
  message.channel.send(`Your Bot Has Been Applied **${botapply}**`);
     message.channel.send(t);
  }); 
 bot.channels.get("496314755406102529").send(`<@${message.author.id}> Added ${User} It Will Be Tested Soon`);
bot.channels.get("496592025907363841").send(`Bot To Test ID **${User.id}** Prefix: **${prefix}**`)
 message.author.send(`Your Bot ${User} Will Be Tested Soon.`);

});  


}
module.exports.help = {
name: "apply"
}