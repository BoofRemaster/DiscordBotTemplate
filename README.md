# DiscordBotTemplate

This is a template for a discord bot using the discord.js library and ES modules. As such, most of this code comes from the discord.js guide found here: https://discordjs.guide/#before-you-begin 

In order to configure the .env variables, you will need to create an application via the Discord developer portal found here: https://discord.com/developers/applications
For the GUILD_ID, it can be found by right clicking your Guild (server) in discord, and pressing Copy ID. From memory, a developer mode in discord will need to be turned on to make this possible.

The discord.js guide uses commonjs for modules. To stick with current trend (if it's even trendy) I have gone with ES modules. To save time, I used AI to help me convert this code over as there were some require function calls part way through code which ES modules does not like.