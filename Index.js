const Discord = require('discord.js.old');
const bot = new Discord.Client();
const config = require('./Config.json');
const token = config.token;
const moment = require('moment')
var date = new Date();

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);




});


bot.on('message', message => {
    if(message.content.includes(config.prefix)){
    let args = message.content.substring(config.prefix.length).split(" ");

    switch (args[0]) {

        case "help":
            bot.commands.get('help').execute(message, args);
            console.log("Helping :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "amogus":
            bot.commands.get('amogus').execute(message, args);
            console.log("Amogus :" + message.author.id + " || "  + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "taiwan":
            bot.commands.get('taiwan').execute(message, args);
            console.log("Taiwan :" + message.author.id + " || "  + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "hahaha":
            bot.commands.get('hahaha').execute(message, args);
            console.log("hahaha :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "based":
            bot.commands.get('based').execute(message, args);
            console.log("based :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "sus":
            bot.commands.get('sus').execute(message, args);
            console.log("sus :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "impostor":
            bot.commands.get('impostor').execute(message, args);
            console.log("impostor :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "tf":
            bot.commands.get('tf').execute(message, args);
            console.log("tf :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "koala":
            bot.commands.get('koala').execute(message, args);
            console.log("koala :" + message.author.id + " || " + message.author.tag + " || " +  message.guild.name + " || " + date);
            break;

        case "yeah":
            bot.commands.get('yeah').execute(message, args);
            console.log("yeah :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "ratio":
            bot.commands.get('ratio').execute(message, args);
            console.log("ratio :" + message.author.id + " || " + message.author.tag + " || " +  message.guild.name + " || " + date);
            break;

        case "nft":
            bot.commands.get('nft').execute(message, args);
            console.log("nft :" + message.author.id + " || " + message.author.tag + " || " +  message.guild.name + " || " + date);
            break;

        case "socialcredit":
            bot.commands.get('socialcredit').execute(message, args);
            console.log("socialcredit :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "zamn":
            bot.commands.get('zamn').execute(message, args);
            console.log("zamn :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "averageyou":
            bot.commands.get('averageyou').execute(message, args);
            console.log("averageyou :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "random":
            bot.commands.get('random').execute(message, args);
            console.log("random :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "superidol":
            bot.commands.get('superidol').execute(message, args);
            console.log("superidol :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "chad":
            bot.commands.get('chad').execute(message, args);
            console.log("chad :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "thomas":
            bot.commands.get('thomas').execute(message, args);
            console.log("thomas :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "squidgame":
            bot.commands.get('squidgame').execute(message, args);
            console.log("squidgame :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "CABT":
            bot.commands.get('CABT').execute(message, args);
            console.log("CABT :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "pog":
            bot.commands.get('pog').execute(message, args);
            console.log("pog :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "Adinosaur":
            bot.commands.get('Adinosaur').execute(message, args);
            console.log("Adinosaur :" + message.author.id + " || " + message.author.tag + " || " +  message.guild.name + " || " + date);
            break;

        case "pasta":
            bot.commands.get('pasta').execute(message, args);
            console.log("pasta :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "shut":
            bot.commands.get('shut').execute(message, args);
            console.log("shut :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " +  date);
            break;

        case "binchilling":
            bot.commands.get('bingchilling').execute(message, args);
            console.log("bing chilling :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "aboutme":
            bot.commands.get('aboutme').execute(message,args);
            console.log("about me :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "delete":
            bot.commands.get('delete').execute(message, args);
            break;

        case "spam":
            bot.commands.get('spam').execute(message, args);
            break;

        case "kick":
            bot.commands.get('kick').execute(message, args);
            console.log("Kick :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "ban":
            bot.commands.get('ban').execute(message, args);
            console.log("Ban:" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case 'rouletteinfo':
            bot.commands.get("rouletteinfo").execute(message, args);
            console.log("Roulette info:" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "roulette":
            bot.commands.get("roulette").execute(message, args);
            console.log("Roulette:" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;


        case "dream":
            bot.commands.get("dream").execute(message, args);
            console.log("dream :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "softban":
            bot.commands.get("softban").execute(message,args);
            console.log("Softban :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "slowmode" :
            bot.commands.get("slowmode").execute(message, args);
            console.log("slowmode :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

        case "warn":
            bot.commands.get("warn").execute(message, args);
            console.log("warn :" + message.author.id + " || " + message.author.tag + " || " + message.guild.name + " || " + date);
            break;

    }}

});



bot.login(token);