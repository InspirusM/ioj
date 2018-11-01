const Discord = require("discord.js");
const fs = require("fs");
const active = new Map();
const botconfig = require("../botconfig.json");
let purple = botconfig.purple;
const db = require('quick.db');
exports.run = async (bot, message) => {

    if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let ops = { 
    active:active
    }
 var prefix = botconfig.prefix;
    let fetchedPrefix = await db.fetch(`serverPrefix_${message.guild.id}`);
    if (fetchedPrefix === null) fetchedPrefix = prefix;
    else prefix = fetchedPrefix;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  if(cmd.startsWith(prefix)){
    
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
    
  }
bot.login(process.env.token);
}