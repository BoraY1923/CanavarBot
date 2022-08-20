module.exports = {
    name: 'lunpe',
    description: "lunpe tr",
    execute(message, args, Discord) {
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Lunpe')
        .setDescription("Lunpe açıklama")
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtL_wzEz8nwW8z8yx3pK_bTt7xdb_wBodVQ&usqp=CAU')
        .setColor('#d183e2')
        .addField('lunpe field')

        return message.channel.send(embed);
    }
}