const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();

/////// Tokens Here ~

client.login(""); 
client2.login(""); 
client3.login(""); 
client4.login(""); 
client5.login(""); 
client6.login(""); 
client7.login(""); 
client8.login(""); 
client9.login(""); 
client10.login(""); 
client11.login(""); 
client12.login(""); 
client13.login(""); 
client14.login(""); 
client15.login(""); 
client16.login(""); 
client17.login(""); 
client18.login(""); 
client19.login(""); 
client20.login(""); 

////////// 1

client.on('message', message => {
    if(message.content === "1"+'d'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === "1"+'c'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
    if(message.content === "1"+'p'){
        message.channel.send('#profile')
    }
});

client.on('message', message => {
    if(message.content === "1"+'u'){
        message.channel.send('#user')
    }
});

client.on('message', message => {
    if(message.content === "1"+'i'){
        message.channel.send('#id')
    }
});






client.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("1" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

/////// 2


client2.on('message', message => {
    if(message.content === "2"+'d'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === "2"+'c'){
        message.channel.send('#credits')
    }
});


client2.on('message', message => {
    if(message.content === "2"+'p'){
        message.channel.send('#profile')
    }
});

client2.on('message', message => {
    if(message.content === "2"+'u'){
        message.channel.send('#user')
    }
});

client2.on('message', message => {
    if(message.content === "2"+'i'){
        message.channel.send('#id')
    }
});






client2.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("2" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;


client2.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////// 3

client3.on('message', message => {
    if(message.content === "3"+'d'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === "3"+'c'){
        message.channel.send('#credits')
    }
});


client3.on('message', message => {
    if(message.content === "3"+'p'){
        message.channel.send('#profile')
    }
});

client3.on('message', message => {
    if(message.content === "3"+'u'){
        message.channel.send('#user')
    }
});

client3.on('message', message => {
    if(message.content === "3"+'i'){
        message.channel.send('#id')
    }
});






client3.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("3" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client3.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});
////// 4

client4.on('message', message => {
    if(message.content === "4"+'d'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === "4"+'c'){
        message.channel.send('#credits')
    }
});


client4.on('message', message => {
    if(message.content === "4"+'p'){
        message.channel.send('#profile')
    }
});

client4.on('message', message => {
    if(message.content === "4"+'u'){
        message.channel.send('#user')
    }
});

client4.on('message', message => {
    if(message.content === "4"+'i'){
        message.channel.send('#id')
    }
});






client4.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("4" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client4.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////// 5

client5.on('message', message => {
    if(message.content === "5"+'d'){
        message.channel.send('#daily')
    }
});

client5.on('message', message => {
    if(message.content === "5"+'c'){
        message.channel.send('#credits')
    }
});


client5.on('message', message => {
    if(message.content === "5"+'p'){
        message.channel.send('#profile')
    }
});

client5.on('message', message => {
    if(message.content === "5"+'u'){
        message.channel.send('#user')
    }
});

client5.on('message', message => {
    if(message.content === "5"+'i'){
        message.channel.send('#id')
    }
});






client5.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("5" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client5.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////// 6

client6.on('message', message => {
    if(message.content === "6"+'d'){
        message.channel.send('#daily')
    }
});

client6.on('message', message => {
    if(message.content === "6"+'c'){
        message.channel.send('#credits')
    }
});


client6.on('message', message => {
    if(message.content === "6"+'p'){
        message.channel.send('#profile')
    }
});

client6.on('message', message => {
    if(message.content === "6"+'u'){
        message.channel.send('#user')
    }
});

client6.on('message', message => {
    if(message.content === "6"+'i'){
        message.channel.send('#id')
    }
});






client6.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("6" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client6.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////// 7

client7.on('message', message => {
    if(message.content === "7"+'d'){
        message.channel.send('#daily')
    }
});

client7.on('message', message => {
    if(message.content === "7"+'c'){
        message.channel.send('#credits')
    }
});


client7.on('message', message => {
    if(message.content === "7"+'p'){
        message.channel.send('#profile')
    }
});

client7.on('message', message => {
    if(message.content === "6"+'u'){
        message.channel.send('#user')
    }
});

client7.on('message', message => {
    if(message.content === "7"+'i'){
        message.channel.send('#id')
    }
});






client7.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("7" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client7.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

///// 8

client8.on('message', message => {
    if(message.content === "8"+'d'){
        message.channel.send('#daily')
    }
});

client8.on('message', message => {
    if(message.content === "8"+'c'){
        message.channel.send('#credits')
    }
});


client8.on('message', message => {
    if(message.content === "8"+'p'){
        message.channel.send('#profile')
    }
});

client8.on('message', message => {
    if(message.content === "8"+'u'){
        message.channel.send('#user')
    }
});

client8.on('message', message => {
    if(message.content === "8"+'i'){
        message.channel.send('#id')
    }
});






client8.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("8" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client8.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////////// 9

client9.on('message', message => {
    if(message.content === "9"+'d'){
        message.channel.send('#daily')
    }
});

client9.on('message', message => {
    if(message.content === "9"+'c'){
        message.channel.send('#credits')
    }
});


client9.on('message', message => {
    if(message.content === "9"+'p'){
        message.channel.send('#profile')
    }
});

client9.on('message', message => {
    if(message.content === "9"+'u'){
        message.channel.send('#user')
    }
});

client9.on('message', message => {
    if(message.content === "9"+'i'){
        message.channel.send('#id')
    }
});






client9.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("9" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client9.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////// 10

client10.on('message', message => {
    if(message.content === "10"+'d'){
        message.channel.send('#daily')
    }
});

client10.on('message', message => {
    if(message.content === "10"+'c'){
        message.channel.send('#credits')
    }
});


client10.on('message', message => {
    if(message.content === "10"+'p'){
        message.channel.send('#profile')
    }
});

client10.on('message', message => {
    if(message.content === "10"+'u'){
        message.channel.send('#user')
    }
});

client10.on('message', message => {
    if(message.content === "10"+'i'){
        message.channel.send('#id')
    }
});






client10.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("10" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client10.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

//// 11

client11.on('message', message => {
    if(message.content === "11"+'d'){
        message.channel.send('#daily')
    }
});

client11.on('message', message => {
    if(message.content === "11"+'c'){
        message.channel.send('#credits')
    }
});


client11.on('message', message => {
    if(message.content === "11"+'p'){
        message.channel.send('#profile')
    }
});

client11.on('message', message => {
    if(message.content === "11"+'u'){
        message.channel.send('#user')
    }
});

client11.on('message', message => {
    if(message.content === "11"+'i'){
        message.channel.send('#id')
    }
});






client11.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("11" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;


client11.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

/// 12

client12.on('message', message => {
    if(message.content === "12"+'d'){
        message.channel.send('#daily')
    }
});

client12.on('message', message => {
    if(message.content === "12"+'c'){
        message.channel.send('#credits')
    }
});


client12.on('message', message => {
    if(message.content === "12"+'p'){
        message.channel.send('#profile')
    }
});

client12.on('message', message => {
    if(message.content === "12"+'u'){
        message.channel.send('#user')
    }
});

client12.on('message', message => {
    if(message.content === "12"+'i'){
        message.channel.send('#id')
    }
});






client12.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("12" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client12.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

///// 13

client13.on('message', message => {
    if(message.content === "13"+'d'){
        message.channel.send('#daily')
    }
});

client13.on('message', message => {
    if(message.content === "13"+'c'){
        message.channel.send('#credits')
    }
});


client13.on('message', message => {
    if(message.content === "13"+'p'){
        message.channel.send('#profile')
    }
});

client13.on('message', message => {
    if(message.content === "13"+'u'){
        message.channel.send('#user')
    }
});

client13.on('message', message => {
    if(message.content === "13"+'i'){
        message.channel.send('#id')
    }
});






client13.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("13" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client13.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////14
client14.on('message', message => {
    if(message.content === "14"+'d'){
        message.channel.send('#daily')
    }
});

client14.on('message', message => {
    if(message.content === "14"+'c'){
        message.channel.send('#credits')
    }
});


client14.on('message', message => {
    if(message.content === "14"+'p'){
        message.channel.send('#profile')
    }
});

client14.on('message', message => {
    if(message.content === "14"+'u'){
        message.channel.send('#user')
    }
});

client14.on('message', message => {
    if(message.content === "14"+'i'){
        message.channel.send('#id')
    }
});






client14.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("14" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client14.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////15
client15.on('message', message => {
    if(message.content === "15"+'d'){
        message.channel.send('#daily')
    }
});

client15.on('message', message => {
    if(message.content === "15"+'c'){
        message.channel.send('#credits')
    }
});


client15.on('message', message => {
    if(message.content === "15"+'p'){
        message.channel.send('#profile')
    }
});

client15.on('message', message => {
    if(message.content === "15"+'u'){
        message.channel.send('#user')
    }
});

client15.on('message', message => {
    if(message.content === "15"+'i'){
        message.channel.send('#id')
    }
});






client15.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("15" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client15.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////16
client16.on('message', message => {
    if(message.content === "16"+'d'){
        message.channel.send('#daily')
    }
});

client16.on('message', message => {
    if(message.content === "16"+'c'){
        message.channel.send('#credits')
    }
});


client16.on('message', message => {
    if(message.content === "16"+'p'){
        message.channel.send('#profile')
    }
});

client16.on('message', message => {
    if(message.content === "16"+'u'){
        message.channel.send('#user')
    }
});

client16.on('message', message => {
    if(message.content === "16"+'i'){
        message.channel.send('#id')
    }
});






client16.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("16" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client16.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////17

client17.on('message', message => {
    if(message.content === "17"+'d'){
        message.channel.send('#daily')
    }
});

client17.on('message', message => {
    if(message.content === "17"+'c'){
        message.channel.send('#credits')
    }
});


client17.on('message', message => {
    if(message.content === "17"+'p'){
        message.channel.send('#profile')
    }
});

client17.on('message', message => {
    if(message.content === "17"+'u'){
        message.channel.send('#user')
    }
});

client17.on('message', message => {
    if(message.content === "17"+'i'){
        message.channel.send('#id')
    }
});






client17.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("17" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client17.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

//// 18
client18.on('message', message => {
    if(message.content === "18"+'d'){
        message.channel.send('#daily')
    }
});

client18.on('message', message => {
    if(message.content === "18"+'c'){
        message.channel.send('#credits')
    }
});


client18.on('message', message => {
    if(message.content === "18"+'p'){
        message.channel.send('#profile')
    }
});

client18.on('message', message => {
    if(message.content === "18"+'u'){
        message.channel.send('#user')
    }
});

client18.on('message', message => {
    if(message.content === "18"+'i'){
        message.channel.send('#id')
    }
});






client18.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("18" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client18.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////19
client19.on('message', message => {
    if(message.content === "19"+'d'){
        message.channel.send('#daily')
    }
});

client19.on('message', message => {
    if(message.content === "19"+'c'){
        message.channel.send('#credits')
    }
});


client19.on('message', message => {
    if(message.content === "19"+'p'){
        message.channel.send('#profile')
    }
});

client19.on('message', message => {
    if(message.content === "19"+'u'){
        message.channel.send('#user')
    }
});

client19.on('message', message => {
    if(message.content === "19"+'i'){
        message.channel.send('#id')
    }
});






client19.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("19" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client19.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});

////20
client20.on('message', message => {
    if(message.content === "20"+'d'){
        message.channel.send('#daily')
    }
});

client20.on('message', message => {
    if(message.content === "20"+'c'){
        message.channel.send('#credits')
    }
});


client20.on('message', message => {
    if(message.content === "20"+'p'){
        message.channel.send('#profile')
    }
});

client20.on('message', message => {
    if(message.content === "20"+'u'){
        message.channel.send('#user')
    }
});

client20.on('message', message => {
    if(message.content === "20"+'i'){
        message.channel.send('#id')
    }
});






client20.on('message',function(message) {
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith("20" + "s")) {
if(!args) return;
message.channel.send(`${args}`);
}
});



var interval;
var infoid = [];
var Regaz = [];
var RegazSPAM = [];
var curr = 0;
var count = 0;
var acurr = 0;



client20.on('message', message => {
    
     
    if (message.content === '*'+ 'spam') { 
        if (RegazSPAM.indexOf(message.channel.id) < 0) {
            RegazSPAM.push(message.channel.id);
        }
        message.channel.send('**Spam Just Start !**');
        let letters = "Ahlawy.Regaz.Hero.Irhapy.DeadX.RegazTeam.".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 132000);

        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    curr++;
                }
            }, 21600000);
        }
    }
    
    if (message.content === '*' + 'stop') {
        var index = RegazSPAM.indexOf(message.channel.id);
        if (index > -1) {
          RegazSPAM.splice(index, 1);
        }
        message.channel.send('**#Spam Has Stopped**');
      
        clearInterval(interval);
        if (RegazSPAM.length > 0) {
            interval = setInterval(function() {
                if (RegazSPAM[curr] === undefined)
                    curr = 0;
                count++;
                if (count > 90 && Regaz.length > 0) {
                    if (Regaz[acurr] === undefined) {
                        acurr = 0;
                        count = 0;   
                    }
                    client.channels.get(Regaz[acurr]).send('ping');
                    acurr++;
                }
                else {
                    client.channels.get(RegazSPAM[curr]).send(spaced);
                    curr++;
                }
            }, 100);
        }
    }
    
    if (message.content === "1" + 'sc') { 
        message.channel.send('**ايدي روم الذي يعمل عليه الاسبام  : __' + RegazSPAM.join(' ') + '__**');
        message.channel.send('```في حال لم تجد الايدي هذا يدل علي ان السبام متوقف```');
    }

    
});
