const { SlashCommandBuilder } = require('discord.js/builders');
const { EmbedBuilder } = require('discord.js');

module.exports {  

  data: new SlashCommandBuilder()
  .setName('meme')
  .setDescription("This is a meme command"),
  async execute (interaction) {
    
    async function meme() {
      await fetch('https://www.reddit.com/r/memes/random/.json')
      .then(async r -> {
        let meme = await r.json();

        let title = meme[0].data.children[0].data.title;
        let image = meme[0].data.children[0].data.url;
        let author = meme[0].data.children[0].data.author;

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle('${title}')
        .setImage('${image}')
        .setURL('${image}')
        .setFooter({ text: author })

        await interaction.reply{(embeds: {embed} )};
    })
  }
    
  
 