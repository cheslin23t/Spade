const discord = require("discord.js")


exports.run = (client, message, args) => {
  
var embed = new discord.MessageEmbed()
  .setTitle("Commands")
  
  client.commands.forEach((values,keys)=>{
      embed.addField("`s!" + keys + "`", values.config.description + " **|** <a:check:850206294689185842>")
      
    })
  
 
  
  message.channel.send(embed)
}
exports.config = {
  aliases: ["pong", "pingpong"],
  description: "Shows a list of commands",
  how: "s!cmds"
}