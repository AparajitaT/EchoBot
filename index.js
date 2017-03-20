'use strict'
const http = require('http')
const Bot = require('messenger-bot')
const {Wit,log} = require('node-wit');
const client = new Wit({accessToken: 'F5NJVX7QXLAMLJ5IXPAOCVLPQGGOG44J'});

var bot = new Bot({
    token: 'EAASAk2hieZC0BAFHD18BoWyVzmLRhSD0YuutXqcoZCpCboHr3NFr6lxHrNs2UJuaCdQPvbZB7lgMAHkhHUZA9o75d90kyhnoRJoTusEj82mmSYXRjYKBT7MWyBS3CjV5rZBygImfFw87nEbkDYTUMQZCQJzTEGQKZCVjes0hehDbAZDZD',
    verify: 'MY_CHAT_BOT'
})

bot.on('error', (err) => {
    console.log(err.message)
})

bot.on('message', (payload, reply) => {
    var text = payload.message.text
    bot.getProfile(payload.sender.id, (err, profile) => {
        if (err) throw err
        client.message(text, {})
            .then((data) => {
                console.log('Wit.ai response: ' + JSON.stringify(data));
                if(data && data.entities && data.entities.intent && data.entities.intent.length > 0 && data.entities.intent[0].value){
                    switch(data.entities.intent[0].value){
                        case "greeting":
                            text = `Hi ${profile.first_name}`;
                            break;
                        case "end":
                            text = `Bye ${profile.first_name}`;
                            break;
                        case "appreciation":
                            text = `Thank you ${profile.first_name}`;
                            break;
                        case "criticism":
                            text = `My apologies ${profile.first_name}`;
                            break;
                        default :
                            text = `Ok ${profile.first_name}`;
                            break;
                    }
                }else{
                    text = `Sorry ${profile.first_name}, Can you please rephrase?`;
                }
                reply({
                    text
                }, (err) => {
                    if (err) throw err
                    console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
                })
            })
            .catch(console.error);
    })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')