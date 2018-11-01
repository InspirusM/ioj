exports.run = async (bot) => {
  
  var express = require(`express`);
var app = express();
var http = require(`http`);
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(3000);
setInterval(() => {
  http.get(`http://dbi.glitch.me/`);
}, 280000);


  console.log(`I am ready to help ${bot.users.size} Users And Guilds ${bot.guilds.size}`);
  function status(){
     let status = [
     `+help | RAJAT`,
    `Discord Charge`, 
      `My prefix Is: +`
     ]
  var random = Math.floor(Math.random() * status.length);

    let rstatus = Math.floor(Math.random() * status.length);
  bot.user.setActivity(status[rstatus], {type:"WATCHING"})
 } bot.setInterval(status, 30000)

}