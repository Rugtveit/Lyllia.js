const discord = require('discord.js');
const dotenv = require('dotenv').config();
const discordClient = new discord.Client();

discordClient.on('ready', () => 
{
    console.log(`Logged in as ${discordClient.user.tag}`);
})



discordClient.login(process.env.DISCORD_BOT_TOKEN);


