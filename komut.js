module.exports = client => {
  console.log(`Bağnaltın koptu! ${new Date()}`);
};

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

client.on('guildCreate', guild => {
	console.log(`${guild.name} adlı sunucuya katıldım!`)
})

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**! Buraya arkadaşlarını davet edebilir ve onlarla oyun oynayabilir, yeni arkadaşlar edinip onlarla oyunlar oynayıp sohbet edebilirsin!');
};

module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member.user.username} aramızdan ayrıldı :frowning:`);
};

const ddiff = require('return-deep-diff');
module.exports = (oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
};

const ayarlar = require('../ayarlar.json');
module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};

const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Dosyalari Korunuyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Koruma Calisiyor.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Sunucu Aktif!`);
  client.user.setStatus("online");
  client.user.setGame(`${prefix}komutlar | 1.0.0 Güncelleme |vaxeturkiye.epizy.com`);
  console.log(`Hazir Sunucuyu Baslatin...`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Vaxe.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Sunucu Aktif!`);


};

module.exports = client => {
  console.log(`Yeniden başlatılıyor ${new Date()}`);
};
