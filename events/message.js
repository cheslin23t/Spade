const Database = require("@replit/database")
const db = new Database()





 exports.run = async(client, message) => {
  var prefix;


  await db.get("prefix-" + message.guild.id).then(value => { prefix = value
  });
  
  if (message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix)) {
  
 let messageArray = message.content.split(" "),
     cmd = messageArray[0],
     args = messageArray.slice(1),
     commandfile = client.commands.get(cmd.slice(prefix.length).toLowerCase()) || client.aliases.get(cmd.slice(prefix.length).toLowerCase());
  console.log(client.aliases.get(cmd.slice(prefix.length).toLowerCase()))
  
if(!commandfile) return;    
    commandfile.run(client,message,args);             
  }
}