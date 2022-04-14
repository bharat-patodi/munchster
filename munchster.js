require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client( { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] } );

// Notify progress
client.on('ready', function(e) {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    console.log(msg);
    if (msg.content === "Hello munchster") {
        msg.reply("munch, munch, munch...");
    }
});

// Authenticate
client.login(process.env.DISCORD_TOKEN);