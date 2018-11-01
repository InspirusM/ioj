const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const db = require('quick.db');


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
   let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) return console.log("No events");
  console.log(`[Events]  ${files.length}`);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Loaded ${eventName} !`)
    bot.on(eventName, (...args) => eventFunction.run(bot , ...args));
  });
});
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) return console.log("No commands.");
  console.log(`[Commands] - Loaded a total amount ${files.length} commands.`);
  jsfiles.forEach(f => {
    let props = require(`./commands/${ f }`);
    props.fileName = f;
    console.log(`  ${f}`)
    bot.commands.set(props.help.name, props);
  });
});
//autorole
bot.on('guildMemberAdd', async member => {
    let autoRole = await db.fetch(`autorole_${member.guild.id}`).catch(err => console.log(err));
    let autorole = member.guild.roles.find(r => r.name === autoRole);
  if(!autorole) return;
    let bot = member.guild.roles.find(r => r.name === 'Bots')
    member.addRole(autorole);
      if (member.user.bot) await member.removeRole(autorole.id).then(m => member.addRole(bot.id));
});
//welcome
bot.on('guildMemberAdd', async member => {
let Welcome = await db.fetch(`welcome_${member.guild.id}`).catch(err => console.log(err));
   let welcome = member.guild.channels.find(r => r.name === Welcome)
   if(!welcome) return;
   welcome.send(`${member.user} Has Joined The Server`);
});
bot.on('guildMemberRemove', async member => {
let Leave = await db.fetch(`leave_${member.guild.id}`).catch(err => console.log(err));
   let leave = member.guild.channels.find(r => r.name === Leave)
   if(!leave) return;
   leave.send(`${member.user.tag} Has Left The Server`);
});
bot.login(process.env.token)