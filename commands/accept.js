module.exports = {
    name: 'accept',
    execute(message, args, client, Discord) {
        if (message.member.roles.cache.has(client.config.allowedToAcceptApplications)) {
            message.delete();

            const embedOne = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription(`\`\`❌\`\` **You must @ a user!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send(embedOne)

            const embedTwo = new Discord.MessageEmbed()
                .setAuthor(`ERROR`, message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription(`\`\`❌\`\` **You must provide a reason!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)


            const text = args.splice(1).join(' ')
            if(!text) return message.channel.send(embedTwo)

            const embedThreeSuc = new Discord.MessageEmbed()
            .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                dynamic: true 
            }))
            .setColor('GREEN')
            .setDescription(`\`\`✅\`\` **I have sent the user their acceptance message!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            message.channel.send(embedThreeSuc)

            const embedFourSuc = new Discord.MessageEmbed()
            .setAuthor(`SUCCESS`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor('GREEN')
            .setDescription(`\`\`✅\`\` **Your Application was accepted!!**`)
            .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon);
            user.user.send(embedFourSuc).catch(err => console.log(`Error. Could not send the message to that user. More information: ${err}`))
            



        } else {
            const noPermissionsEmbed = new Discord.MessageEmbed()
                .setAuthor('ERROR', message.author.displayAvatarURL({
                    dynamic: true
                }))
                .setColor('RED')
                .setDescription(`\`\`❌\`\` **You do not have the permissions to do this!**`)
                .setFooter("©️ " + client.config.serverCopyright, client.config.serverIcon)
            message.channel.send(noPermissionsEmbed)
        }
    }
}