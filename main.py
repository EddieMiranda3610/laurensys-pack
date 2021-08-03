import discord
import os

client = discord.Client()

@client.event
async def on_ready():
  print('Now logged in as {0.user}'.format(client))
  print('Lauren System Bot Version 0.1.0 Update 1')
  print('(C) 2018 - 2021 Eddie Miranda.')
  print('(C) 2007 - 2021 LaurenZSide.')
  print('No part of this program shall be copied, modified, transmitted, reused, or otherwise distributed without permission from either copyright owner.')
  print('This application is currently under development. If you would like to assist in the process: feel free to message us on Discord.')
  print('Our Discord Handles:')
  print('EddieMiranda&Keira2000#1959')
  print('LaurenzSide#1609')

  @client.event
  async def on_message(message):
    if message.author == client.user:
      return

    if message.content.startswith('lz;hello'):
      await message.channel.send('Hello there.')

client.run(os.environ['TOKEN'])    