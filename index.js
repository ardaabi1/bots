const { WebhookClient, PermissionsBitField, EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const {Routes, REST} = require('discord.js');
const config = require("./config");

const mongoose = require("mongoose") 
mongoose.set('strictQuery', false);
mongoose.connect(config.mongodb)
mongoose.connection.on("open", async() => {
  console.log("Başarıyla MongoDB' ye bağlandı!")
})

const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
const { uptime } = require("process");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const db = require("croxydb")
const ms = require("ms")
const fs = require("fs");
const internal = require("stream");
const client = new Client({
  intents: INTENTS,
  partials: PARTIALS,
  retryLimit: 3
});


global.client = client;
client.commands = (global.commands = []);
//#region KOMUTLAR LOAD
fs.readdir("./commands/", (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
    
        client.commands.push({
             name: props.name.toLowerCase(),
             description: props.description,
             options: props.options,
             type: props.type,
        })
        console.log(`👌 Slash Komut Yüklendi: ${props.name}`);
    });
});
//#endregion
//#region EVENTS LOAD
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        
        console.log(`👌 Event yüklendi: ${eventName}`);
        client.on(eventName, (...args) => {
           event(client, ...args);
        });
    });
});
//#endregion
client.login(config.token)

/**********************Oto Rol***************************/
client.on("guildMemberAdd", member => {
  const üye = config.kayıtsız_rol

member.roles.add(üye).catch(() => {})
  
})
