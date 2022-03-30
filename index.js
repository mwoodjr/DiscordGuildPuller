const { Client, Intents } = require('discord.js');
const { token, mongoPath } = require('./config.json');
const mongoose =  require('mongoose');
const Server = require('./schemas/serverSchema')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

mongoose
	.connect(mongoPath, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	})
	.then((m) => {
		console.log('✅ | Connected to MongoDB')
	}).catch((err) => console.log(err));

async function pushData(data) {
    const push = await Server.create({
        serverId: data.id,
        joinedMemberCount: data.memberCount,
        serverName: data.name,
        serverOwner: data.ownerId,
        partnered: data.partnered,
        verified: data.verified,
        nsfwLevel: data.nsfwLevel,
        joinedAt: data.joinedAt,
        vanityURLCode: data.vanityURLCode,
        inServer: true,
    })
    return console.log('Pushed data to MongoDB')
}

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
    let serverlist = client.guilds.cache
    serverlist.forEach(value => pushData(value));
});

client.login(token)