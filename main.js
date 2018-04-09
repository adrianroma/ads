
var LAST_INTENT;
var NEXT_INTENT;

var hidden_message = "Hola !!";

$(function () {

    // test
    var socket = io();
    var chatter_count;
	var room = getUrlParameter('room');
	
    $.get('/get_chatters',{ room: room }, function (response) {
		console.log('total chatters:');
		console.log(response);
        $('.chat-info').text("There are currently " + response.length + " people in the chat room");
        chatter_count = response.length; //update chatter count
    });

	
    $('#join-chat').click(function () {
		var room = getUrlParameter('room');
	    console.log(room);
        var username = $.trim($('#username').val());
        $.ajax({
            url: '/join',
            type: 'POST',
            data: {
                username: username,
				room    : room
            },
            success: function (response) {
                if (response.status == 'OK') { //username doesn't already exists
				    console.log(room)
				    socket.emit('room', room);
				    
                    socket.emit('update_chatter_count', {
                        'action': 'increase'
                    });
                    $('.chat').show();
                    $('#leave-chat').data('username', username);
                    $('#send-message').data('username', username);
                    $.get('/get_messages',{ room:room }, function (response) {
                        if (response.length > 0) {
                            var message_count = response.length;
                            var html = '';
                            for (var x = 0; x < message_count; x++) {
                                html += "<div class='msg'><div class='user'>" + response[x]['sender'] + "</div><div class='txt'>" + response[x]['message'] + "</div></div>";
                            }
                            $('.messages').html(html);
                        }
                    });
                    $('.join-chat').hide(); //hide the container for joining the chat room.
			
					            $('#send-message').trigger( "click" );
					
					            hidden_message = "";
							
								
					
					
                } else if (response.status == 'FAILED') { //username already exists
                    alert("Sorry but the username already exists, please choose another one");
                    $('#username').val('').focus();
                }
            }
        });
    });
    $('#leave-chat').click(function () {
		var room = getUrlParameter('room');
	
        var username = $(this).data('username');
        $.ajax({
            url: '/leave',
            type: 'POST',
            dataType: 'json',
            data: {
                username: username,
				room : room
            },
            success: function (response) {
                if (response.status == 'OK') {
                    socket.emit('message', {
                        'username': username,
                        'message': username + " has left the chat room..",
						'room': room
                    });
                    socket.emit('update_chatter_count', {
                        'action': 'decrease'
                    });
					
					
					
					 socket.emit('message', {
                        'username': 'machine',
                        'message': 'machine' + " has left the chat room..",
						'room': room
                    });
					
                    $('.chat').hide();
                    $('.join-chat').show();
                    $('#username').val('');
                    alert('You have successfully left the chat room');
                }
            }
        });
    });
    $('#send-message').click(function () {
		var room = getUrlParameter('room');
		
		
        var username = $(this).data('username');
		
		if(hidden_message == ""){
		
        var message = $.trim($('#message').val());
		
		}else{
			
		var message = hidden_message;	
			
		}
		
		var readText = {"username":username,"message":message,"room":room};
		

		
		
	    console.log(readText);
		
		if(hidden_message == ""){
		
        $.ajax({
            url: '/send_message',
            type: 'POST',
            dataType: 'json',
            data: {
                'username': username,
                'message': message,
				'room': room
            },
            success: function (response) {
                if (response.status == 'OK') {
                    socket.emit('message', {
                        'username': username,
                        'message': message,
						'room':room
                    });
                    $('#message').val('');
                }
            }
        });

		} 
		
		
		
		var ENTITIES = {};
		
		var QUERY;
		
		var VACANCY;
		
		var MeResponse;
		
		
		
		
	    INTENT = $.ajax({
            url: 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/ecf44b18-3e32-4596-8d0a-42e9272617b2?subscription-key=c96369646cc543f1b9ff7249f1802ff3&verbose=true&timezoneOffset=0&q='+message,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
			    console.log(response);			
                ENTITIES = response.entities;
				
				for(var key in ENTITIES) { 
                 var entity = ENTITIES[key];
                 console.log(entity);				 
                }
				
			   //console.log(response.intents);
			   //QUERY = response.query;
			   
			   
			   if (response.query==null) {
                    INTENT = "ESPERAR";
               }else{
	            INTENT = response.topScoringIntent.intent;
	
               }
	   
	            console.log("El ultimo intento!!!");
			    console.log(LAST_INTENT);
			    console.log("El intento Actual");
			    console.log(INTENT);
			   if(INTENT=="SI O NO"){
				   
				   
				  if(response.entities[0].type=="si"){
				
				    
					  
					  INTENT = LAST_INTENT;
				      TYPE ='YES';
					 

					 
					  
					  
				  }
				  
				   if(response.entities[0].type=="no"){
					   
					  INTENT = LAST_INTENT;
				      TYPE ='NOT';					   
					   
				   }
				  
				  
				  
				  
				    if(response.entities[0].type=="acuerdo"){
				
				     if (response.entities[0].entity=="si"){
					  
					  INTENT = LAST_INTENT;
				      TYPE ='YES';
					 }
					 
					 if (response.entities[0].entity=="no"){
					  
					  INTENT = LAST_INTENT;
				      TYPE ='NOT';
					 }
					 
					  
					  
				  }
			   
				   
		    $.ajax({
              url: '/answers?section='+INTENT+'&type='+TYPE,
              type: 'GET',
              dataType: 'json',
              success: function (response) {
				  console.log(' Responde me');
			
		    
			  leResponse = response["1.0"];
				
			  MeResponse = leResponse.split(":");
					
              NEXT_INTENT=MeResponse[1];
			  
			  console.log(NEXT_INTENT);
			  
		
			   	   $.ajax({
            url: '/send_message',
            type: 'POST',
            dataType: 'json',
            data: {
                'username': "machine",
                'message': MeResponse[0],
				'room': room
            },
            success: function (response) {
                if (response.status == 'OK') {
                    socket.emit('message', {
                        'username': "machine",
                        'message': MeResponse[0],
						'room':room
                    });
                    $('#message').val('');
					
					TYPE = "QUESTIONS";
					
					   $.ajax({

              url: '/answers?section='+NEXT_INTENT+'&type='+TYPE,
              type: 'GET',
              dataType: 'json',
					   success: function (response) {
						   
						   leResponse = response["1.0"];
				
			               MeResponse = leResponse.split(":");
						   
						   
						   /////////////////////////
						   
						   
			   	   $.ajax({
						url: '/send_message',
						type: 'POST',
						dataType: 'json',
						data: {
							'username': "machine",
							'message': MeResponse[0],
							'room': room
							},
						success: function (response) {
						if (response.status == 'OK') {
							socket.emit('message', {
							'username': "machine",
							'message': MeResponse[0],
							'room':room
						});
						$('#message').val('');
						   
						}
				   }
				   });		   
						   /////////////////////////
						   
					   }
					   
					   })

                  }
                }
                });
  	  
               }
            });
				   
				   
			   }elseif(INTENT=="None" || INTENT="NO SE"){
				   		   
			      LAST_INTENT = INTENT; 
				  TYPE = 'ANSWERS'; 
			   	   
			   
			   }
			   
			   
else{
				  console.log('Aqui son :'); 
				  LAST_INTENT = INTENT; 
				  TYPE = 'ANSWERS'; 
				  console.log(INTENT);
				  console.log(TYPE);
				  
				  			  $.ajax({
              url: '/answers?section='+INTENT+'&type='+TYPE,
              type: 'GET',
              dataType: 'json',
              success: function (response) {
		      console.log('OK');
			  leResponse = response["1.0"];
				
			  MeResponse = leResponse.split(":");
					
              NEXT_INTENT=MeResponse[1];
			  
			  console.log('SIGUIENTE INTENTO');
			  console.log(NEXT_INTENT);
		
			   	   $.ajax({
            url: '/send_message',
            type: 'POST',
            dataType: 'json',
            data: {
                'username': "machine",
                'message': MeResponse[0],
				'room': room
            },
            success: function (response) {
                if (response.status == 'OK') {
                    socket.emit('message', {
                        'username': "machine",
                        'message': MeResponse[0],
						'room':room
                    });
                    $('#message').val('');
                  }
                }
                });
  	  
               }
            });
				  
			   }
 
			   return response;

            }
        });

		    console.log('QUERY');
		
    });
    socket.on('send', function (data) {
		
		 console.log(socket.io.engine.id);     // old ID
   /// socket.io.engine.id = 'new ID';
    console.log(socket.io.engine.id); 
		
		var room = getUrlParameter('room');
	    
        var username = data.username;
        var message = data.message;
        var html = "<div class='msg'><div class='user'>" + username + "</div><div class='txt'>" + message + "</div></div>";
		
        $('.messages').append(html);
    });
    socket.on('count_chatters', function (data) {
		    // new ID
		var room = getUrlParameter('room');
	
        if (data.action == 'increase') {
            chatter_count++;
        } else {
            chatter_count--;
        }
        $('.chat-info').text("There are currently " + chatter_count + " people in the chat room");
    });
});


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


var AnserThis = function AnserThis(intent,type){
	  
      
	  var ResponseThis;
	  
	  $.ajax({
              url: '/answers?section='+intent+'&type='+type,
              type: 'GET',
              dataType: 'json',
              success: function (response) {
				  
		      leResponse = response["1.0"];
				
			  ResponseThis = leResponse.split(":");
  
			  }
	  });
	
	  return ResponseThis;
	 
	
}


function isset ()
{


  var a = arguments,
    l = a.length,
    i = 0,
    undef;

  if (l === 0)
  {
    throw new Error('Empty isset');
  }

  while (i !== l)
  {
    if (a[i] === undef || a[i] === null)
    {
      return false;
    }
    i++;
  }
  return true;
}


