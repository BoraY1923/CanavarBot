module.exports = {
    name: 'status',
    description: "botun durumunu gösterir",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2BC80E')
        .setTitle('Bot Aktif')
        .setURL('https://www.youtube.com/watch?v=ivd7J28Cu38');
    
        message.channel.send(newEmbed);
    }

}