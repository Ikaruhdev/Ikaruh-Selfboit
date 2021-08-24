const discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./config.json");
const client = new discord.Client();
client.commands = new Enmap();
const colors = require("colors")
                                                                                                                  
client.on('ready', () => {
    client.user.setActivity("Ikaruh Selfbot", {
        type: "PLAYING",
        url: "https://www.youtube.com/channel/UC90eBa3_3nvSGpImflarNKA"
      });
    process.title = `☆`;
  console.log(`

                   █████ █████                                     █████     
                  ░░███ ░░███                                     ░░███      
                   ░███  ░███ █████  ██████   ████████  █████ ████ ░███████  
                   ░███  ░███░░███  ░░░░░███ ░░███░░███░░███ ░███  ░███░░███ 
                   ░███  ░██████░    ███████  ░███ ░░░  ░███ ░███  ░███ ░███ 
                   ░███  ░███░░███  ███░░███  ░███      ░███ ░███  ░███ ░███ 
                   █████ ████ █████░░████████ █████     ░░████████ ████ █████
                    ░░░░░ ░░░░ ░░░░░  ░░░░░░░░ ░░░░░       ░░░░░░░░ ░░░░ ░░░░░ 
                                                                                                           
                 
                
                                          ▄▀▄     ▄▀▄
                                         ▄█░░▀▀▀▀▀░░█▄
                                     ▄▄  █░░░░░░░░░░░█  ▄▄
                                    █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█   


                          `.red)              
console.log(`                               Account connected: ${client.user.tag}`.white)
 console.log('                              ────────────────────────'.green);
 console.log('                                 Prefixo: s '.white);
 console.log(`                                 ID: ${client.user.id}`.white)
 console.log(`                                 Servidores: ${client.guilds.size}`.white);
 console.log('                              ────────────────────────'.green);
 console.log('                                  ┌────────────┐'.green);
 console.log('                                    Fast Nuker  '.rainbow);
 console.log('                                  └────────────┘'.green);
console.log('');
});


fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log("  ");
    client.commands.set(commandName, props);
  });
});


client.on('message', async (message) => {

  if (message.content.indexOf(config.prefix) !== 0) return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    const cmd = client.commands.get(command)
    if (!cmd) return
    cmd.run(client, message, args)
    console.log(` [!] Comando usado: ${command}`.green)
    
});


client.login(config.token);