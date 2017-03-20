# Simple Chatbot

## Brain of the Chatbot

1. Wit.ai makes it easy for developers to build a Siri-like speech interface for their app or device. It's an API that turns natural language (speech or messages) into actionable data.
2. The controller logic comes from a [Wit.ai model](https://wit.ai/aparajitakunaltiwari/IntentModel)
3. Its a multi class classifier taking in a sentence and predicting its class from 4 pre defined classes i.e., greeting, critism, appreciation, end of conversation. We can train it further.

## Setup

1. Download and Install [Node.js](https://nodejs.org/dist/v6.10.0/node-v6.10.0-x64.msi).
2. Download [ngrok](https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-windows-amd64.zip) and Extract it.
3. Download the github repository [EchoBot](https://github.com/AparajitaT/EchoBot).
4. Extract and Open it in cmd.
5. Run **npm install** for getting the dependencies.
6. Run **node index.js** for starting the chatbot.
7. Run ngrok in cmd as follows **ngrok.exe http 3000**
8. Finally put the HTTPS link in the *Webhooks* section of the [Facebook App](https://developers.facebook.com/apps/1267270506675197) with verify as *MY_CHAT_BOT*
9. Then chat with the bot at [messenger](https://www.messenger.com/t/207888116360722)