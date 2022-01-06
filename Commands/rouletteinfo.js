const {RichEmbed, channel} = require("discord.js.old")
module.exports = {
    name: 'rouletteinfo',
    description: "shows the roulette info ",
    execute(message, args) {

        const RouletteInfoEmbed = new RichEmbed()
            .setColor('#38F20A')
            .setTitle("ROULETTE INFO")
            .addField('Bets', "red | black | odd | even | high | low | single number")
            .setImage("https://cdn.discordapp.com/attachments/722728172415877138/922972450218729513/Roulette.jpg")
            .addField('Bet Placement', "to place you'r bet say '?roulette (and you're bet)")
            .setTimestamp()

        message.channel.send(RouletteInfoEmbed);
    }





}
