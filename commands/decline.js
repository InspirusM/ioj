const config = require("../botconfig.json");
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  
  if(!args[1]) return message.channel.send('Please Enter The Bot Owner Id')
  bot.fetchUser(args[0])
  .then(User => {
  
  
if(message.author.id.includes(config.owner)) return;
   let r = args.join(" ").slice(38);
    let author = args[1]
    
 if(!args[0]) return message.channel.send('Missing Client Id Of Bot To Decline');
  if(!r) return message.channel.send('Missing Reason For Declining')
 
    let d = bot.channels.get("496314755406102529").send(`<@${author}> Your ${User} Bot Has Been Declined Reason: [${r}]`);
    bot.users.get(args[1]).send(`Your ${User} Bot Has Been Declined Reason ${r}`);
    return message.channel.send('Bot Declined :x:');
  });
}
module.exports.help = {
name: "decline"
}