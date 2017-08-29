# passive-autobot
Catch all slack messages and file uploads. 

## How to set up
1. Create your own slack app (on a personal slack group you own or anywhere you see fit). 
2. Install [https://www.npmjs.com/package/localtunnel](localtunnel) globally in your machine (or something equivalent).
3. Create your tunnel url on the package.json file with the command `lt --port 3000 -s yourdomainnamehere` and name it something you'll remember.
4. You can now run `npm run yourcommandname` and the tunnel will open with your url. 
5. Run the app and open the tunnel at the same time. 
6. In the slack app api website, create event listeners with your url set to the same as the command + '/slack'; this will verify that the app is listening with the challenge param. 
7. Create the events you wish for your app (ex. all 4 message events to listen to all messages in slack app)
8. Install the app to the slack group via the slack app api website. 
9. The app logs what it catches, so you can test different events and see what they send. 
