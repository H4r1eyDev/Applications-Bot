const _config = {
    /*

    Well. Look where you find yourself. Purchasing a clean application system, from somewhere you won't regret!
    If you have any questions regarding any products, commissions, information or further details please refer to the Discord.
    If you're wanting to obtain your license key, open a ticket via the h4r1eydev server. If you got this off a leaking website - then stfu.

    */


    // Bot Options (REQUIRED);
    botToken: 'Find your token here: https://discord.com/developers/applications/',
    botPrefix: 'YOUR BOT PREFIX',
    botPresence: 'WATCHING / PLAYING',
    botStatus: 'CUSTOM STATUS',
    botID: 'ENSURE THIS IS FILLED OUT!!', // This is the bot's ID. You can find it in Discord.

    // Custom Config
    serverCopyright: '2021 H4r1eyDev', // Copyright symbol is already on the bot :]
    serverIcon: 'https://cdn.discordapp.com/avatars/850060572069593128/5b88434eb6e7a3b50904a555557f8c6a.webp',

    // Application Options
    applicationQuestons: [
        "Where are you from?",
        "What can you bring to the team?",
        "Why should we accept you?",
        "R u good mod, yes?"
    ],
    applicationAnswersChannel: 'CHANNEL ID WHERE APPLICATIONS GO TO',
    pingRoleOnSubmit: true, // true of false.
    roleToPingOnSubmit: 'ROLE ID TO PING WHEN SUBMITTED', // This is a ROLE id. If you input a user it won't @ anyone.
    applicationStatus: 'open / closed', // OPTIONS: open // closed
    allowedToAcceptApplications: 'ROLE ID',
    allowedToDenyApplications: 'ROLE ID' 
}

module.exports = _config;