const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : King`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : King ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`اصابعك على زناد , وعينك على هدف.`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
