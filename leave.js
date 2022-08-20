module.exports = {
    name: 'leave',
    description: 'botu durdurur ve vcden çıkartır',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("bir ses kanalında olman lazım");
        await voiceChannel.leave();
        await message.channel.send('baybay')
 
    }
}