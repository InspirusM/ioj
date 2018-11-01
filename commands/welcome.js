const db = require('quick.db')

module.exports.run = (bot, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You do not have permission to set server autorole!');
  if (!args.join(' ')) return message.channel.send('Please provide a role name to set server autorole!');
  
  db.set(`welcome_${message.guild.id}`, args.join(' ')).then(welcome => {
    message.channel.send(`Server welcome Channel has been set to **${welcome}**`);
  });
};

module.exports.help = {
name: 'welcome'
}