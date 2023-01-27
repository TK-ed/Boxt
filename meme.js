const {SlashCommandBuilder , EmbedBuilder} = require("discord.js");
const fetch = (...args) => import('node-fetch').then({default: fetch}) => fetch(...args);


module.exports= {
    data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("ehe")
    .addStringOption(option =>
        option.setName("platform")
            .setDescription("Meme platform (not required")
            .addChoices(
                { name: "Reddit", value: "Reddit" }
                { name: "TK", value: "tk" }
            )
    ),

    async execute(interation) {
        const {guild, options, member} = interation;

        const platform = options.getString("platform");

        async function redditMeme() {
            await fetch('https://www.reddit.com/r/memes/random/.json').then(async res => {
                let meme = await res.json();

                let title = meme[0].data.children[0].data.title;
                let url = meme[0].data.children[0].data.url;
                let author = meme[0].data.children[0].data.author;

                return InteractionCollector.reply({embeds: [embed.setTitle(title).setImage(url).setURL(url).setColor("Random").setFooter({text: author})] });
            });
        }
        await function tkMeme() {
            await fetch('')
        }
    }
}