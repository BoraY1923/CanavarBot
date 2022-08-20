var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    description: 'resim gönderir',
    async execute(client, message, args){
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel
              .send(
                "bunu kullanamazsın",
              );
        }
        
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('resmin ismini gir');

        const image_results = await google.scrape(image_query, 40);
        message.channel.send(image_results[Math.floor(Math.random() * 30)].url);
    }
}
 
//RESİM KOMUTU