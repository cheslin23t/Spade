
const Database = require("@replit/database")
 
const db = new Database()
 exports.run = async(a, guild) => {
   
db.set("prefix-" + guild.id, "s!").then(() => {});
}