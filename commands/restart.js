const  {EmbedBuilder, PermissionsBitField}= require("discord.js");
const config = require("../config.js");
const moment = require('moment')
require('moment-duration-format')

module.exports = {
    name: "restart",
    description: "Sunucunu Restart Atılacağını Bildirirsiniz!",
    type: 1,
    run: async (client, interaction) => {

        const hata = new EmbedBuilder()
        .setDescription(`Bu Komudu Kullanamazsınız!`)
        .setColor("Red")

        const geçildi = new EmbedBuilder()
        .setDescription(`Başarıyla Restart Duyurusu Geçildi!`)
        .setColor("Green")

        if(!interaction.member.roles.cache.has(config.bot_yetki)) return interaction.reply({embeds: [hata], ephemeral: true})

        const restart = new EmbedBuilder()
        .setAuthor({name: `Galaxy Roleplay`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTitle("Sunucu Restart")
        .setDescription(`**Sunucumuza <t:${Math.floor(Date.now() /1000 + 600 )}:R> Restart Atılacaktır Lütfen Güvenli Çıkış Sağlayalım!**`)
        .setColor("Purple")
        .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
        .setFooter({text: `Galaxy Roleplay - Restart`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTimestamp()

        interaction.channel.send({embeds: [restart], content: "@everyone"})
        interaction.reply({embeds: [geçildi], ephemeral: true})
}}