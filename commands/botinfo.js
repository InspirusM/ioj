const Discord = require("discord.js");// richembed and version
const ms = require("ms");// botuptime

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
 
module.exports.run = async (bot, message, args) => {
    let u = convertMS(bot.uptime);
 let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds";

    
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Bot Users",`${bot.users.size.toLocaleString()}`, true)
    .addField("Bot Guilds",`${bot.guilds.size.toLocaleString()}`, true)
    .addField("Bot Shards","None")
    .addField("Bot Uptime",`${uptime}`)
    .addField("Node Version",`${process.version}`)
    .addField("Discord.ps Version",`1.0`);
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
