const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (bot, message, args) => {
  message.delete();
  let queue = await db.fetch(`botapply_${message.author.id}`).catch(err => console.log(err));
  let qu = queue;
  message.channel.send(qu);
  if(!queue) return message.channel.send('No Bot To Test!');

}
module.exports.help = {
name: "botq"
}