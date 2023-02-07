const  {EmbedBuilder, PermissionsBitField}= require("discord.js");
const config = require("../config.js");
const moment = require('moment')
require('moment-duration-format')

module.exports = {
    name: "bakım",
    description: "Sunucunu Bakımda Olduğunu Geçersin!",
    type: 1,
    run: async (client, interaction) => {

        const hata = new EmbedBuilder()
        .setDescription(`Bu Komudu Kullanamazsınız!`)
        .setColor("Red")

        const geçildi = new EmbedBuilder()
        .setDescription(`Başarıyla Bakım Duyurusu Geçildi!`)
        .setColor("Green")

        if(!interaction.member.roles.cache.has(config.bot_yetki)) return interaction.reply({embeds: [hata], ephemeral: true})

        const bakım = new EmbedBuilder()
        .setAuthor({name: `Galaxy Roleplay`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTitle("Sunucu Bakım")
        .setDescription(`**Sunucumuz Bakım' a Girmiştir Aktif Atılmadan Giriş Sağlamayınız, Data kaybı yaşayabilirsiniz!**`)
        .setColor("Purple")
        .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
        .setFooter({text: `Galaxy Roleplay - Bakım!`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTimestamp()

        interaction.channel.send({embeds: [bakım], content: "@everyone"})
        interaction.reply({embeds: [geçildi], ephemeral: true})
}}