# DiscordGuildPuller
A quick project to pull all guilds a bot is in and send it to a MongoDB database. 

It was built to run completly seprately with the main bot instance, so it doesn't mess with the performance of your bot. It might take a while depending on internet connection, computation power and how many guilds your bot is in. At the time of using this for my bot (its in 1400 guilds) it took about 45 seconds, its not ideal for a large bot but it helps if you are trying to migrate/create a database to store information about the guilds your bot is in.


## Setup

### Install the dependencies
```
npm i
```
### Change the Config File
navigate to config.json and put your bot's token and your mongoDB url into the associated fields
### Start the program
The rest of it is fully automated, as soon as the bot is authenticated with Discord's API, it will start sending all the data to MongoDB.
```
npm start
```
