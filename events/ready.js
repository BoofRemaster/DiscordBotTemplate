import { Events } from 'discord.js';

export const name = Events.ClientReady;
export const once = true;
export function execute(client) {
    // When the client is ready, run this code (only once).
    console.log(`Ready! Logged in as ${client.user.tag}`);
}