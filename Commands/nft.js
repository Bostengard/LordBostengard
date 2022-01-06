module.exports = {
    name: 'nft',
    description: "ctr + s",
    execute(message, args){
        message.channel.send({
            files: [{
                attachment: '.\\Files\\ChadBostengardSanta.jpg',
                name: 'BostengardSantaDefault.jpg'
            }]
        })
        message.channel.send("check DMs u thief this is a serious topic we're talking about")
        message.author.send("Dude I own this NFT. Do you really think that you can get away with theft when you’re showing what you stole from me directly to my face? My lawyer will make an easy job of this case. Prepare to say goodbye to your luscious life and start preparing for the streets. I will ruin you.");
    }
}