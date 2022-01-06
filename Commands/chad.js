module.exports = {
    name: 'chad',
    description: "be a sigma",
    execute(message, args){
        message.channel.send("sigma male grindset");
        message.channel.send({
            files: [{
                attachment: '.\\Files\\Chad.jpg',
                name: 'Chad.jpg'
            }]
        })


    }
}