// @ts-check
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const token = process.env.token;
const fs = require('node:fs');
const path = require('node:path');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const commandPrefix = '$';

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot || !message.content.startsWith(commandPrefix)) return;

    const args = message.content.slice(commandPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName === 'ping') {
        await message.reply('pong!');
    }

    if (commandName === 'say') {
        const textToSay = args.join(' ');
        if (!textToSay) return message.reply('please provide something for me to say!');
        await message.channel.send(textToSay);
    }
});

client.once(Events.ClientReady, (readyClient) => {
    console.log(`twmtoolkit is ready (logged in as ${readyClient.user.tag}`);
});


client.login(token);