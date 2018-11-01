const config = require("../botconfig.json");
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  
  if(!args[1]) return message.channel.send('Please Enter The Bot Owner Id')
  bot.fetchUser(args[0])
  .then(User => {
  
  
if(message.author.id.includes(config.owner)) return;
     let author = args[1]
  if(!args[0]) return message.channel.send('Missing Client Id Of Bot To Accept');

 let a = bot.channels.get("496314755406102529").send(`<@${author}> Your <@${User.id}> Bot Has Been Accepted`)
bot.users.get(args[1]).send(`Your ${User} Bot Has Been Accepted It Will Be Soon Invited`);
 message.channel.send('Bot Accepted :ballot_box_with_check:');
  });
}
module.exports.help = {
name: "accept"
}