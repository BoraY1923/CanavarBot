module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('Commands')
        .setURL('https://www.youtube.com/watch?v=4Qpg6iVqNWs&list=WL&index=26')
        .setDescription('CanavarBot Komutları')
        .addFields(
            {name: '+help', value:'Commands yardım sayfasını açar'},
            {name: '+avatar', value:' Kullanıcının avatarını alır'},
            {name: '+duke', value:'hail to the king baby'},
            {name: '+spotify', value:'yazdığınızı spotifyde aratır'},
            {name: '+image', value:'girdiğiniz kelimenin resmini gösterir'}
        )
            
        .setImage('https://cdn.discordapp.com/attachments/992067004490064023/1008108595025555538/295810752_3245276409067227_2011598617197568651_n.webp')
        .setFooter('Destek için BoraY#4204');

        message.channel.send(newEmbed);
    }
}
//-help menüsünü açarW