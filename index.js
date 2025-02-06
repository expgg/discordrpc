const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1297315153477636156')
    .setType('LISTENING')
    .setURL('https://www.youtube.com/@farzynova') //Must be a youtube video link 
    .setState('Stop stalking')
    .setName('exploriot"s album')
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/866999085176061952/1337088559076610108/4ed3b1552001063265b8a97ddd65b36f.gif?ex=67a62c42&is=67a4dac2&hm=24dbc70706a6dec6b2e3f97847618acd9c966d9d3b6a4e5208927492b21c2cf3&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Rank - Conqueror') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/866999085176061952/1337088802509820036/a4a874c79936fd1b5ed0e9faf2fef140.gif?ex=67a62c7c&is=67a4dafc&hm=01426bdabce6fdcb4b01f822e9f5473a69c196e68f21b5331debc16012c7ee6a&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Still stalking?') //Text when you hover the Small image
    .addButton('YouTube', 'https://www.youtube.com/@farzynova')
    .addButton('Instagram', 'https://www.instagram.com/farzana_sahr');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Playing PUBG [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
