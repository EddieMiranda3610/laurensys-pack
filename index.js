const Discord = require("discord.js")
const fetch = require("node-fetch")
const Database = require("@replit/database")

const db = new Database()
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}.`)
  console.log(`Lauren System Bot Version JavaScript Mode 0.1.0 Update 2`)
  console.log(`(C) 2018 - 2021 Eddie Miranda.`)
  console.log(`(C) 2007 - 2021 LaurenZSide.`)
  console.log(`No part of this program shall be copied, modified, transmitted, reused, or otherwise distributed without permission from either copyright owner.`)
  console.log(`This application is currently under development. If you would like to assist in the process: feel free to message us on Discord.`)
  console.log(`Our Discord Handles:`)
  console.log(`EddieMiranda&Keira2000#1959`)
  console.log(`LaurenzSide#1609`) 
})

client.on("message", msg => {
  if (!((msg.member).user.bot))
  {
    member_xp = db.get(String(('xp-' + String(msg.author.id))))
    member_level = db.get(String(('level-' + String(msg.author.id))))
    if (!member_xp)
    {
      member_xp = 0;
    }
    else if (!member_level)
    {
      member_level = 0
    }
    db.set(String(('xp-' + String(msg.author.id))), (member_xp + 1))
    member_xp = member_xp + 1;
    if (member_xp > 100)
    {
      db.set(String(('level-' + String(msg.author.id))), (member_level + 1))
      msg.channel.send(String(([msg.member, 'you advanced to level ', member_level])))
    }
    if (msg.content == 'lzside;level')
    {
      msg.reply([msg.member, ': you are currently at level: ', member_level])
    }
    else if (msg.content == 'lzside;xp')
    {
      msg.reply([msg.member, ': you need ', 100 - member_xp, ' to advance to level ', member_level + 1])
    }
    else if (msg.content == 'lzside;level-xp')
    {
      msg.reply([msg.member, ': you are currently at level: ', member_level, ' and need ', 100 - member_xp, ' to advance to level ', member_level + 1])
    }
  }
  if (msg.content == 'lzside;hello')
  {
    msg.reply('Hello there.')
  }
  else if (msg.content == 'lzside;commands')
  {
    msg.channel.send(['Here are the commands: ', "lzside;commands - Prints this command list.", "lzside;hello - Makes Lauren say 'Hello there' back to the member.","lzside;level - Shows member's level", "lzside;xp - Shows how much experience (XP) the member needs to advance to the next level.", "lzside;level-xp - Shows the member's level and the amount of XP needed to advance to the next level."])
  }
})

client.login(process.env['TOKEN'])