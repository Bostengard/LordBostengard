const {RichEmbed} = require("discord.js.old");
module.exports = {
    name: 'random',
    description: "says a random number 0-x",
    execute(message, args){
        const amount = message.content.split(" ")[1];
        const Number = Math.floor(Math.random() * amount)

        const RandomNumberEmbed = new RichEmbed()
            .setColor('#38F20A')
            .setTitle("RANDOM NUMBER")
            .addField('Your Random Number is :', Number)
            .setTimestamp()



        message.channel.send(RandomNumberEmbed);
        console.log("number: " + Number);

    }
}