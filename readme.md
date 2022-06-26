# Feathered Bots Discord.js V13 Example Bot Using Slash Commands! 


(You May Or Maynot Have To But Go To: Terminal -> new Terminal And Type npm i To Make Sure All Packages Are Installed)


HOW TO SETUP THE .env FILE!

To Start Coding Your FIrst Discord Bot First Visit This Page: https://discord.com/developers/applications

Sign In -> Create Application -> Click Bot And Create Bot

You Will Need To Reset The Bots Token Once The Token Has Been Reset

Copy The Bots Token And Paste It In The .env.example File (ALSO RENAME THE .env.example TO JUST .env)

And Copy The Application ID And Paste Into The .env Next To CLIENTID

Now Save The File!




HOW TO MAKE COMMANDS!

To Start Editing Commands Navigate To Commands Folder And Go To Example.js File

Change The Name From example.js To <COMMAND NAME>.js

Replace The Name, Description, And Content With The Command You Want To Add

You Can Then Make A New File Under The Commands Folder And Name It <COMMAND NAME>.js

You Can Then Simply Copy The Example Code To The New Folder And Edit The Requirements Accordingly


ADDING THE BOT AND PUSHING COMMANDS!

Invite Your Bot To Your Server And Give it The Required Commands:

YOUR BOT NAME -> OAuth2 -> URL Generator -> Select Bot -> The Permissions You Wish To Grant It (OR GIVE IT ADMIN IF ITS ON YOUR TEST SERVER)


Now You Have Your Bot Is In Your Server

Open The Terminal By Going To: Terminal -> new Terminal

And First Type: node deploy-commands.js (TYPING THIS WILL PUSH THE COMMANDS TO YOUR SERVER)

Then Once The Commands Have Been Pushed Type: node index.js To Bring Your Bot Online And Test The Commands!

