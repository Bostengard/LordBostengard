const {RichEmbed, channel} = require("discord.js.old")
module.exports = {
    name: 'roulette',
    description: "spin the roulette ",
    execute(message, args) {

        const bet = message.content.split(" ")[1];

        const Rnumber = Math.floor(Math.random() * 37)

        const RouletteWin = new RichEmbed()
            .setColor('#38F20A')
            .setTitle(Rnumber +"!")
            .addField('Result', "Win")
            .setImage("https://cdn.discordapp.com/attachments/722728172415877138/922972450218729513/Roulette.jpg")
            .setTimestamp()
        const RouletteLoose = new RichEmbed()
            .setColor('#ff0000')
            .setTitle(Rnumber + "!")
            .addField('Result', "lost")
            .setImage("https://cdn.discordapp.com/attachments/722728172415877138/922972450218729513/Roulette.jpg")
            .setTimestamp()


        if (bet == "red") {
            if (Rnumber == 3 || Rnumber == 3 || Rnumber == 5 || Rnumber == 7 || Rnumber == 9 || Rnumber == 12 || Rnumber == 14 || Rnumber == 16 || Rnumber == 18 || Rnumber == 19 || Rnumber == 21 || Rnumber == 23 || Rnumber == 25 || Rnumber == 27 || Rnumber == 28 || Rnumber == 30 || Rnumber == 32 || Rnumber == 34 || Rnumber == 36) {
                console.log( "RouletteWin " + Rnumber + " | " + bet)
                message.channel.send(RouletteWin)
                return;
            }  else {
                console.log( "RouletteLoose " + Rnumber + " | " + bet)
                message.channel.send(RouletteLoose)
                return;
            }

        } else if (bet =="black"){
            if (Rnumber == 2 || Rnumber == 4 || Rnumber == 6 || Rnumber == 8 || Rnumber == 10 || Rnumber == 11 || Rnumber == 13 || Rnumber == 15 || Rnumber == 17 || Rnumber == 20 || Rnumber == 22 || Rnumber == 24 || Rnumber == 26 || Rnumber == 29 || Rnumber == 31 || Rnumber == 33 || Rnumber == 35 ){
                console.log( "RouletteWin " + Rnumber + " | " + bet)
                message.channel.send(RouletteWin)
                return;
            }else {
                console.log( "RouletteLoose " + Rnumber + " | " + bet)
                message.channel.send(RouletteLoose)
                return;
            }

        } else if (bet == "odd"){
            if(Rnumber%2 !=0){
                console.log( "RouletteWin " + Rnumber + " | " + bet)
                message.channel.send(RouletteWin)
                return;
            } else {
                console.log( "RouletteLoose " + Rnumber + " | " + bet)
                message.channel.send(RouletteLoose)
                return;
            }

        }  else if (bet == "even"){
            if(Rnumber%2 == 0){
                console.log( "RouletteWin " + Rnumber + " | " + bet)
                message.channel.send(RouletteWin)
                return;
            } else {
                console.log( "RouletteLoose " + Rnumber + " | " + bet)
                message.channel.send(RouletteLoose)
                return;
            }
        } else if (bet == "high"){
            if (Rnumber > 18){
                console.log( "RouletteWin " + Rnumber + " | " + bet)
                message.channel.send(RouletteWin)
                return;
            }else {
                console.log( "RouletteLoose " + Rnumber + " | " + bet)
                message.channel.send(RouletteLoose)
                return;
            }
        } else if (bet == "low"){
            if (Rnumber <= 17){
                console.log( "RouletteWin " + Rnumber + " | " + bet)
                message.channel.send(RouletteWin)
                return;
            } else {
                console.log( "RouletteLoose " + Rnumber + " | " + bet)
                message.channel.send(RouletteLoose)
                return;
            }
        } else if (bet == Rnumber){
            console.log( "RouletteWin " + Rnumber + " | " + bet)
            message.channel.send(RouletteWin)
            return;
        } else {
            console.log( "RouletteLoose " + Rnumber + " | " + bet)
            message.channel.send(RouletteLoose)
            return;
        }


    }
}
