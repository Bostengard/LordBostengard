module.exports = {
    name: 'spam',
    description: "spamed",
    execute(message, args){


        const amount = message.content.split(" ")[1];
        if(!amount)
        {
            message.reply(`<amount>`);
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send('You have no permissions to do that');
            return;
        }
        for(let a = 0; a < amount ; a++) {
            message.channel.send("spamming cause " + message.author.tag + " said it mad?")


        }
        console.log(console.log("spammed :" + amount + "||" + message.author.id + " || " + message.author.tag + " || " + message.guild.name));
    }
}