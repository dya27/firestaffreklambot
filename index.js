const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'p+wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**ئەگەر بەخۆت نێیە ڤۆیس ئەمنیش نایێم😂**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` دانرا تۆش ڕیکلامەکە بکە https://discord.gg/ZEQBFuBc3K`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("865672005730172978").send(
`By: <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })
////////////////
//////Code jwab//////
client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "Reklam?") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "سڵاو ڕیکلام ئەگوڕنەوە") {
    msg.reply(
      "بـــنـــێــرە بــۆ مـــن گــــیـــان"
    );
  }
});
////////
client.on("message", msg => {
  if (msg.content === "ڕیکلام") {
    msg.reply(
      "بــنــێــرە بــۆ مـــن گـــیــان"
    );
  }
});
/////////
client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ڕیکلامەکە بنێرە بۆمن دایدەنێم☑️`) 
});




client.login("ODcyODQ4MDc4NTU2NzU4MDQ2.YQv1Hg.-jEpQ6NsrXzBzSmcQuopMTXKqls");//تۆکین لێرە دانێ
