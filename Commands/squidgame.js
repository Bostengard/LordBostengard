module.exports = {
    name: 'squidgame',
    description: "jeff",
    execute(message, args){
        message.channel.send({
            files: [{
                attachment: '.\\Files\\squidgame.jpg',
                name: 'squidgame.jpg'
            }]
        })


    }
}