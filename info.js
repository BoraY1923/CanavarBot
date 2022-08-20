const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'info',
    description: "shows info",
    execute(client, message, args) {
        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed()
   
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
            .addField('Oluşturulma tarihi:', `${moment.utc(message.author.createdAt).format('DD/MM/YY')}` + "\n")
            .setColor('#f0a000')
            //.addField('katılma tarihi:', `${moment.utc(message.author.joinedAt).format('DD/MM/YY')}` + "\n" )
         
            return message.channel.send(embed);
        }
        
        
        
        const target = message.mentions.users.first();
        const newEmbed = new Discord.MessageEmbed()
        
        .setAuthor(`${target.username}`, target.displayAvatarURL({dynamic: true}))
        .setThumbnail(target.displayAvatarURL({dynamic: true}))
        .addField('Oluşturulma tarihi:', `${moment.utc(target.createdAt).format('DD/MM/YY')}` + "\n")
        .setColor('#f0a000')
        //.addField('katılma tarihi', `${moment.utc(target.joinedAt).format('DD/MM/YY')}` + "\n")

       
        return message.channel.send(newEmbed);
        
    },

    
};