const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'taglanan kişinin avatarını alır ve embedda gösterir',
    //aliases: ['av', 'a'],
    //usage: '[commandname]',
    //cooldown: 10,
    execute(client, message, args) {
        if (!message.mentions.users.size) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor('RANDOM')
                .setImage(message.author.displayAvatarURL({ format: 'png' , size: 1024 , dynamic: true}))
                .setFooter('tipini sikeyim sa');
            return message.channel.send(embed);
        }

        const mention = message.mentions.members.first();
        const Embed = new Discord.MessageEmbed()
            .setTitle(message.mentions.users.first().username)
            .setColor('RANDOM')
            .setImage(mention.user.displayAvatarURL({ format: 'png' , size: 1024 , dynamic: true}))
            .setFooter('-avatar')
        return message.channel.send(Embed);

    },
};

//başarılı, size değiştirilebilir

