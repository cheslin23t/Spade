const discord = require("discord.js")

exports.run = (client, message, args) => {
  if (args[0]) {
    var command = args[0]
    if (client.commands.has(command)){
      var embed = new discord.MessageEmbed()
      message.channel.send()
      var how = client.commands.get(command).config.how
      var desc = client.commands.get(command).config.description

      embed.setTitle(command)
      embed.addField("Description", desc)
      embed.addField("How to use", how)
      message.channel.send(embed)
    }
    else{
      message.channel.send("Command not found.")
    }
  }
  else{
    var msg = message.channel.send("Add an argument for command help, otherwise help for the bot!")
    
  }
}
exports.config = {
  aliases: ["?"],
  description: "Add an argument for command help, otherwise help for the bot!",
  how: "s!help ping | s!help"
}