var express = require('express');
var bodyParser = require('body-parser');
var stringSimilarity = require('string-similarity');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');
var creds = '';
//var redis = require('redis');
var client = '';
var state = 'available';
var room;
var to_username = 'self';
var id_chat;
var home = {};
var messages = {};
// Store people in chatroom
var chatters = [];
// var chatters = {}
// Store messages in chatroom
var chat_messages = [];


// Rooms
var rooms = [];

var app_messages = [];

var ROOM = [];

const axios = require('axios');

//var answer = "hola+que+tal";
 
//var question; 
 
//axios.get('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ecf44b18-3e32-4596-8d0a-42e9272617b2?subscription-key=c96369646cc543f1b9ff7249f1802ff3&verbose=true&timezoneOffset=0&q='+answer)
//  .then(response => {
//   question  = response.data;
  
   
//  })
//  .catch(error => {
//    console.log(error);
//  });

  
  
// Express Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Render Main HTML file
app.get('/', function (req, res) {
	
	room = req.query.room;
	
	
	
    res.sendFile('views/index.html', {
        root: __dirname
    });
});


app.get('/answers', function (req, res) {
	
	section = req.query.section;
	
	type = req.query.type;
	
	
	
	console.log(section);
	
	console.log(type);
	
	res.setHeader('content-type', 'text/javascript');	

    var global_data = fs.readFileSync("run.json","utf8").toString();

	obj = JSON.parse(global_data);
	

	var similarity = stringSimilarity.compareTwoStrings('healed', 'sealed'); 
	
	
	
	//var jsonContent = JSON.parse(contents);
	
    res.json(obj[section][type]);
});

var vacancy;


app.get('/config', function (req, res) {
	
    
	
	if (typeof req.query.vacancy !== 'undefined') {
		
		vacancy = req.query.vacancy;
		
		 var global_config = fs.readFileSync("config.json","utf8").toString();

	obj = JSON.parse(global_config);
	
    for (var key in obj){
		console.log(vacancy);
		var similarity = stringSimilarity.compareTwoStrings(key,vacancy);
		if(similarity > 0.85){
			
		 vacante = obj[key];
		 break;
			
		}else{
			
		 vacante = {vacancy:"parece que no hay una asi"};	
		}
		
		
	}
	
		
	}else{
		
		console.log("None");
	vacante = {vacancy:"al parecer no hay ninguna"};	
		
		
	}
	
	res.setHeader('content-type', 'text/javascript');	
	
	

	
    res.json(vacante);
});



class hard{
	 constructor(object) {
     this.object = object;
     }
	get(key,number){
		  
		  
		 return this.object;
		
	}
	
	set(key,value){
		
		
		 
		
	}
	
}


// Read credentials from JSON
fs.readFile('file.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    creds = JSON.parse(data);
    client = new hard(creds);
    home = {};
	messages ={};  
    var door = [];				
	var chat = [];		                                          
             //home.push(client.get('room',room));				
				home[0]=door ;
				console.log('------home-------');
				console.log(home);
				console.log('------endHome------------');
				console.log('iniciando');
				messages["chat_users_0"]=chat;
});

var port = process.env.PORT || 8080;

// Start the Server
http.listen(port, function () {
    console.log('Server Started. Listening on *:' + port);
});


// API - Join Chat
app.post('/join', function (req, res) {
    var username = req.body.username;	
	var room = req.body.room;
	
	var CLT = [];
	home[room]=rooms;
	console.log('join .....');
	console.log(home);
	username = username+':'+room;
	machine = 'machine:'+room;
	
	
    if (home[room].indexOf(username) === -1) {
        home[room].push(username);
		
		home[room].push(machine);
		
		  home[room].forEach(function(client) { 
          CLIENT = client.split(":");
	
	     if(CLIENT[1]==room){
          CLT.push(client);		 	   
	     }
	
	
	});	
		
		

		 client.get('room', function (err, reply) {
			  
			  if (reply) {
			  var ROOM = JSON.parse(reply);
			  }
		 });
		
		console.log(room);
		console.log('-------ROOM----------------');
		console.log(ROOM);
		if(ROOM.includes(room)) {
		
		 console.log('ya existe');
		
		}else{
	     ROOM.push(room);		     
			
		}
		console.log('........');
		console.log(ROOM);
		console.log('------END ROOM ------------');
		
	    client.set('room', JSON.stringify(ROOM));
        client.set('chat_users_'+room, JSON.stringify(CLT));
        res.send({
            'chatters': home[room],
            'status': 'OK'
        });
    }else if(username=="machine"){
		
	}else {
        res.send({
            'status': 'FAILED'
        });
    }	
	
});



// API - Leave Chat
app.post('/leave', function (req, res) {
	console.log('leave clients');
    var username = req.body.username;
	var room = req.body.room;
	
	var CT = [];
	username = username+':'+room;
	home[room].forEach(function(client) { 	
	      console.log('client ??');
          console.log(client);	  
		  CLIENT= client.split(':');		  
		  if(CLIENT[1]==room){	  
		  CT.push(client);
	      }
	});
	

    CT.splice(CT.indexOf(username), 1);
	home[room].splice(home[room].indexOf(username), 1);
	
    client.set('chat_users_'+room, JSON.stringify(CT));
    res.send({
        'status': 'OK'
    });
});





// API - Send + Store Message
app.post('/send_message', function (req, res) {
	console.log('Send Message .....');
    var username = req.body.username;
    var message = req.body.message;
	var room = req.body.room;
	
	var is_message = [];
	//chat_messages= [];

	
	
    messages['chat_users_'+room]=chat_messages;
	
        sendMessage ={
        'sender': username,
        'message': message,
		'to': to_username,
		'room': room,
		'state':state
        };
	

	
	
	messages['chat_users_'+room].push(sendMessage);
	
	
	console.log(messages['chat_users_'+room].length);
	
	console.log('write message ');
	console.log(messages);
	
    client.set('chat_messages_'+room, JSON.stringify(messages));
    res.send({
        'status': 'OK'
    });
});

app.get('/machine_messages', function (req, res) {
	
	
});


// API - Get Messages
app.get('/get_messages', function (req, res) {
	room = req.query.room;
	
	console.log('--------get messages------');
	console.log(room);
	
	console.log(messages);
	
	is_message=[];
	
	if(messages['chat_users_'+room]){
	console.log('available'); 
	console.log(messages['chat_users_'+room]);
	messages['chat_users_'+room].forEach(function(item) { 
	
	if(item['room'] == room ){
		
        is_message.push(item);	
		
	}
	
	
	})

	
    res.send(is_message);
	
	}else{
		console.log("nothing");
	}
	
});

// API - Get Chatters
app.get('/get_chatters', function (req, res) {
	console.log('get chatters');
    room = req.query.room;
	
	if(home[room]==undefined){
	   
	 res.send("");
      
		
	}else{
		
		is_message=[];
		
		console.log(messages);
      
		messages['chat_users_'+room].forEach(function(item) { 
	

	if(item['room'] == room ){
		
        is_message.push(item);	
		
	}

	})  

    res.send(is_message);		
		
	}

	
});

// Socket Connection
// UI Stuff
io.on('connection', function (socket) {

    socket.on('room', function(room) {
        socket.join(room);
    });

    socket.on('storeClientInfo', function (data) {

            var clientInfo = new Object();
            clientInfo.customId         = data.customId;
            clientInfo.clientId     = socket.id;
            clients.push(clientInfo);
        });



    // Fire 'send' event for updating Message list in UI
    socket.on('message', function (data) {
		
		//console.log('message Data');
			
		 
		room = data['room'];
		
        io.sockets.in(room).emit('send', data);
    });

    // Fire 'count_chatters' for updating Chatter Count in UI
    socket.on('update_chatter_count', function (data) {
		

        io.sockets.in(room).emit('count_chatters', data);
    });

});
