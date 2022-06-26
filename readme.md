# Welcome to Feathered Discord Bots Example Bot

### I Just Want To Thank You For Taking The Time To Learn And Understand How To Make Your Very Own Music Bot And Thank You For Using My Example Bot To Do That! Please If You Are Going To Use This For A Video Or Advertise It Others Please All I Ask IS That You Give Me Credit For The Code I Have Supplied For You



## First Things First Before You Blast Off  🚀

#### You Will Want To Clone This Repository To Do This You Will Want To Create A Folder Then Open The Folder In Your Code Editor That Being VC Studio Code For Windows And ATOM for Apple Products , Then Open A New Terminal And Type The Command (git clone https://github.com/Quakcster/example-bot.git) This Will Clone The Current Repo To The Folder After Successfully Cloning The Repo Follow The Steps Below.

#### Then You Will Want To Create A Bot By Going To https://discord.com/developers/applications Signing And Creating An Application Then Click On The Bot Tab And Left And Click Create Bot This Will Successfully Create Your Bot, (You Will Have To Reset Bots Token) And you Will See Application Id This Is Your Bots client Id You Will Need These For A Later Step!

## Setting Up Your Environment Variables (.env)

#### Within The Folder You Will See A File Named .env.example Rename This File Just To .env And Open in The Editor You Will See, CLIENTID= & BOT_TOKEN= This Is Where You Will Paste Your Token For Your Bot And Your Bots Client ID You Can Get Both Of These From https://discord.com/developers/applications And Copy Your Bots Token And Paste It Next To BOT_TOKEN= And Then Copy Your Bots ApplicationID And Paste It Next To  CLIENTID= And Save This Is All You Need To Do For This File.

## Making Your First Command 🗒️
#### Now Open Events/Commands/example.js In Your Code Editor, And You Will See This Is The Example Code For A Slash Command, Now You Can Either Copy This Command Into A New File Made Within The Command Folder And Name It The Command You Want To Make Or You Can Just Rewrite The Code That Is In The Example.js And Rename The File To The Name Of Your Command,

#### You Will Need To The Edit The "THE COMMAND NAME HERE" To The Name Of Your Command And Set The Description To What You Want Your Description To Be Make Sure To Keep The Stuff Inside Of The `` Leave The Content Empty As This Is Not Needed, Then Fill Out The "YOUR REPLY/ACTION HERE" I Have Marked With A Comment Which Ones To Change And Which Ones To Leave Blank. If You Wish To Make More Commands Just Copy And Paste The Example.js Or The File You Just Made And Change The Information To Whichever Command You Decide To Create Next!

## Deploying The Command To Your Server  🗄️
#### Invite The Bot To Your Server By Going To Applications/YOURBOTNAME Then Clicking OAuth2 And Make Sure To Click Bot And applications.commands So The Bot Can Make Make Slash Commands In Your Server, If It Is Your Server Your Making The Bot For Then Give It Admin Permissions If Its Another Discord Give It The Required Perms As You Might Not Be Able To Invite It With Admin Perms, Once your Bot Is In Your Server Go To Your Code Editor And Open A New Terminal And Type In node Deploy-Commands.js and Let It Deploy The Commands Once The Commands Are Deployed go Ahead And Type node index.js To Start The Bot! Now If The Bot Isnt Working Or The Commands Arnt Deploying Go Ahead And Just Kick The Bot And Re-invite It To Your Discord And You Should Be Good To Go!

## My Information:

### My Developer Discord: https://discord.gg/qxFgFa5SrD
### My Discord Tag: Quakcington#1337


## Happy Creating!

