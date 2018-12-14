const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "$"
var adminprefix = '$'

client.on('message', message = {
   if(message.content.split(' ')[0] == 'color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`لا يوجد لون بهذا الأسم  x `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length  0)
   
 
if    (!(message.guild.roles.find(name,`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find(name,`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`Done , تم تغير لونك . white_check_mark `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x  201; x++){
           
            message.member.removeRole(message.guild.roles.find(name,`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find(name,`${args}`));
       
           
    }
});
   
const developers = ["472413769700474901","486149211595866112"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);
