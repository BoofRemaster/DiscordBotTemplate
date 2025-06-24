import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("nuke-chat")
    .setDescription("Nukes the messages in the current channel. (Limit of 100)");
export async function execute(interaction) {
    try {
        const channel = interaction.channel;
        const messages = await channel.messages.fetch({ limit: 100 });

        if (messages.size === 0) {
            return await interaction.reply("No messages to delete.");
        }

        await channel.bulkDelete(messages, true);
        return await interaction.reply(`Successfully deleted ${messages.size} messages.`);
    } catch (error) {
        console.error("Error deleting messages:", error);
        return await interaction.reply("An error occurred while trying to delete messages.");
    }
}