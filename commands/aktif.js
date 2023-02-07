const  {EmbedBuilder, PermissionsBitField}= require("discord.js");
const config = require("../config.js");
const db = require("croxydb")

module.exports = {
    name: "aktif",
    description: "Sunucunu Aktif Olduğunu Geçersin!",
    type: 1,
    run: async (client, interaction) => {

        const hata = new EmbedBuilder()
        .setDescription(`Bu Komudu Kullanamazsınız!`)
        .setColor("Red")

        const geçildi = new EmbedBuilder()
        .setDescription(`Başarıyla Aktif Duyurusu Geçildi!`)
        .setColor("Green")

        if(!interaction.member.roles.cache.has(config.bot_yetki)) return interaction.reply({embeds: [hata], ephemeral: true})

        const aktif = new EmbedBuilder()
        .setAuthor({name: `Galaxy Roleplay`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTitle("Sunucu Aktif")
        .setDescription(`**Sunucumuz aktif hale gelmiştir giriş sağlayabilirsiniz!**`)
        .addFields({name:"Server", value: "F8' e connect 217.195.207.37", inline: true})
        .addFields({name:"TeamSpeak3", value: `
        TS yurt içi ip : agcommunity
        TS yurt dışı ip : agcommunityyurtdışı`, inline: false})
        .setColor("Purple")
        .setThumbnail(`${interaction.guild.iconURL({ dynamic: true})}`)
        .setFooter({text: `Galaxy Roleplay - Aktif`, iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setTimestamp()

        interaction.channel.send({embeds: [aktif], content: "@everyone"})
        interaction.reply({embeds: [geçildi], ephemeral: true})
}}