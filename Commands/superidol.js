module.exports = {
    name: 'superidol',
    description: "Super Idol的笑容 都没你的甜 八月正午的阳光 都没你耀眼 热爱 105 °C的你 滴滴清纯的蒸馏水",
    execute(message, args){
        message.channel.send("Super Idol的笑容 都没你的甜 八月正午的阳光 都没你耀眼 热爱 105 °C的你 滴滴清纯的蒸馏水");
        message.channel.send({
            files: [{
                attachment: '.\\Files\\Audio\\superidol.mp3',
                name: 'superidol.mp3'
            }]
        })


    }
}