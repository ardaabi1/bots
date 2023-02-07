const  {EmbedBuilder, PermissionsBitField}= require("discord.js");
const config = require("../config.js");
const db = require("croxydb")

module.exports = {
    name: "ip",
    description: "Sunucu IP lerine Ulaşırsınız!",
    type: 1,
    run: async (client, interaction) => {

        const hata = new EmbedBuilder()
        .setDescription(`Bu Komudu Kullanamazsınız!`)
        .setColor("Red")



        if(!interaction.member.roles.cache.has(config.whitelist)) return interaction.reply({embeds: [hata], ephemeral: true})

        const ip = new EmbedBuilder()
        .setAuthor({name: `Galaxy Roleplay`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setDescription(`**Sunucu IP Bilgileri!**`)
        .addFields({name:"Server", value: "F8' e connect 217.195.207.37", inline: true})
        .addFields({name:"TeamSpeak3", value: `
        TS yurt içi ip : agcommunity
        TS yurt dışı ip : agcommunityyurtdışı
        Salty Chat Sürüm: 2.3.6 İndirmek için [Tıkla](https://dosya.co/bdai0dzh3mvf/GalaxyRP_Salty_Chat_2.3.6.ts3_plugin.html)`, inline: false})
        .setColor("Purple")
        .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
        .setFooter({text: `Galaxy Roleplay - Sunucu İP`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTimestamp()

        interaction.reply({embeds: [ip]})
}}