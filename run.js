{

 "RH":{
                   "ANSWERS":{						
					"1.0":"Por el momento tengo , Vendedor Telefonico pero siempre estamos buscando talento, Cual es el  curso o certificacion o habilidad en que sobresales ?:HABILIDADES"
				   },
                   "QUESTIONS":{
				   "1.0":" .....:NEXT"
				   
				   },
				   "NOT":{ 
				    
					"1.0":" asi no podemos continuar , muchas gracias por tu tiempo Bye :ADIOS"
				   
				   },
				    "YES":{ 
				    
					"1.0":" si , entonces cual es ? :HABILIDADES"
				   
				   },
				   "YES_OR_NOT":{
				    "1.0":" si o no ?:RH"
				   
				   }
				   
 
 },


 "NO SE":{
                   "ANSWERS":{						
					"1.0":"quiza deberias poner en orden tus ideas .. si o no ?:INTERES"
				   },
                   "QUESTIONS":{
				   "1.0":" .....:NEXT"
				   
				   },
				   
				   "YES_OR_NOT":{
				    "1.0":" si o no ?:RH"
				   
				   }
 
 }
,
 "SI O NO":{
                   "QUESTIONS":{
				   "1.0":" ponte de acuerdo he !!! :NEXT"
				   
				   }
				   ,
				   "YES_OR_NOT":{
				    "1.0":" si o no ?:RH"
				   
				   }
 
 },
 
 "ESPERAR":{
                     
                   "ANSWERS":{						
					"1.0":" mm mm que esperas!!!! :INTERES"
					},
                   "QUESTIONS":{
				   "1.0":"te espero no tardes mucho !!:NEXT"
				   
				   }
				   ,
				   "YES_OR_NOT":{
				    "1.0":" si o no ?:ESPERAR"
				   
				   }
 
 },
  "ADIOS":{
                    "QUESTIONS":{		
		            "1.0": "Te gustaria dejarnos tu correo electronico y celular para recibir ofertas de vacantes, quiza te pueda interesar? eso seria todo :ADIOS"

					},
					"ANSWERS":{						
					"1.0":"que tengas un buen dia, bye !!:FIN"
					},
				    "YES":{
					"1.0":" muy bien  seria todo bye!!:ADIOS"
					
					},
					"NOT":{
					 "1.0":" esta bien, adios  !!!:FIN"
					},
					"BUT":{
					  "1.0": "!! pero si nos das tu contacto y celular , te puedo enviar correo para nuevas oportunidades de vacante !!!:ADIOS"
					},
					"UNKNOW":{
					"1.0":"mm no te entiendo, ¿ Que te parece si me dejas tu correo y celular ?:ADIOS",
					"0.5":" mm que me quieres decir, no lo se ... adios:FIN"
					
					},
					"NONE":{
					"1.0":"No se que quieras ... bye !!:FIN"
					},
					"WAIT":{
					"1.0":" creo que esto se acabo ... !! adios:FIN"
					},
					"RUNDENESS":{
					  "1.0":" ups , que !!! adios:FIN"
					
					}
					,
				   "YES_OR_NOT":{
				    "1.0":" si o no ?:RH"
				   
				   }
					
  },
  "BIENVENIDA":{
                    "QUESTIONS":{		
		            "1.0": " hay alguien ahi ?:BIENVENIDA",
                    "0.7": " quien esta ahi !!!:BIENVENIDA",
					"0.5": "y bien sigues ahi ?:BIENVENIDA"
					},
					"ANSWERS":{						
					"1.0":"Hola !! que te trae aqui ?:INTERES",
					"0.8":"hey hola ¡¡¡ que haces aqui ?:INTERES",
					"0.7":"hola, !!! que buscas aqui ?:INTERES",
					"0.6":"si ? buscas algo ? :INTERES"
					},
					"YES":{
					"1.0":" muy bien entonces empezemos con la entrevista:INTERES",
					"0.9":" que te parece si empezamos con la entrevista:INTERES"
					},
					"NOT":{
					 "1.0":" ups, agradesco tu tiempo, muchas gracias !!!:ADIOS"
					},
					"BUT":{
					  "1.0": "!! a .. esto es una conversacion para una entrevista !!!:BIENVENIDA"
					},
					"UNKNOW":{
					  "1.0":"Quieres empezar una entrevista para alguna vacante ?:BIENVENIDA"
					
					},
					"NONE":{
					 "1.0":" No te entiendo ... hola :BIENVENIDA",
					 "0.8":" mmm hola ... hola ... :BIENVENIDA"
					},
					"WAIT":{
					 "1.0":"",
					 "0.9":"mm apenas estamos empezando la entrevista ... te espero ...:BIENVENIDA"
					},
					"RUNDENESS":{
					  "1.0":" ups , no hables de mala manera:BIENVENIDA"
					
					},
					"ABOUT":{
					    "quien_eres": "Soy Roxana del departamento de reclutamiento =):BIENVENIDA",
		                "cual_es_tu_nombre": "Roxana:BIENVENIDA",
		                "como_te_llamas": "Roxana:BIENVENIDA",
		                "donde_estas": "mi direccion es {OFERTADOR:DIRECCION}:BIENVENIDA",
		                "para_quien_trabajas": "para {OFERTADOR:NOMBRE}"
					
					},
					"ENGLISH":{
					  "1.0":"La entrevista es en español:BIENVENIDA",
                      "0.8":"please , only spanish .. ok  =P:BIENVENIDA" 					  
					}
					 ,
				   "YES_OR_NOT":{
				    "1.0":" si o no ?:BIENVENIDA"
				   
				   }
				   
                   },
  "INTERES":{
                    "QUESTIONS":{			          
	                  		
		               "1.0": "¿ que  vacante  buscas ?:INTERES",		
		               "0.9": "¿ y si que buscas, alguna vacante ?:INTERES",
					   "0.7": "si ?? que vacante ??:INTERES",
		               "0.5": "hola , ¿ que buscas ?:INTERES",	
		               "0.3": "mmm que es lo que estas buscando, seria una vacante ?:INTERES",		
		               "0.1": "hey .. ¿ que buscas ??:INTERES",		
		               "0.0": "mmm ¿ que es lo que estas buscando ?:INTERES"			  
					},
					"ANSWERS":{													  		
		             
		               "1.0": " si .. =) , todavia esta disponible , quieres hacer la pre entrevista ? :HABILIDADES",
		               "0.9": "si !! esta apunto de cerrar pero todavia estamos aceptando , quieres hacer la pre entrevista ?:HABILIDADES",
					   "0.8": "si , esta abierta:HABILIDADES",
		               "0.7": "si , aun esta disponible la vacante :HABILIDADES",
		               "0.6": "ups ,se acaba de cerrar ...:ADIOS.QUESTIONS",
					   "0.5": "ya se cerro!!:ADIOS.QUESTIONS",
					   "0.3": "ya no esta ..:ADIOS.QUESTIONS",
					   "0.2": "no esta por el moemento:ADIOS",
					   "0.1": "no la tenemos por ahora:ADIOS",
					   "0.0": "no esta en nuetros planes ... he !!!:ADIOS"

					},
					"YES":{
					"1.0":" muy bien entonces empezemos con la entrevista :HABILIDADES",
					"0.9":" que te parece si empezamos con la entrevista:HABILIDADES"
					},
					"NOT":{
					 "1.0":" ups, agradesco tu tiempo, muchas gracias, bye  !!!:FIN"
					},
					"BUT":{
					  "1.0": "pero quiza en otro momento  tengamos otra vez esta vacante, nos vuelvas a visitar,  bye  =):FIN"
					},
					"DONTKNOW":{
					  "1.0":" oye ... ¿ Quieres continuar con la entrevista ?:INTERES",
					  "0.5":" no me sueana"
					
					},
					"NONE":{
					 "1.0":" Estas buscando una vacante ??:INTERES",
					 "0.8":" mmm que haces aqui , buscas alguna vacante ??:INTERES"
					},
					"WAIT":{
					 "1.0":"mm apenas estamos empezando la entrevista ... te espero ...:INTERES"
					},
					"RUNDENESS":{
					  "1.0":" ups , no hables de mala manera:INTERES"
					
					},
					"ABOUT":{
					    "quien_eres": "Soy Roxana del departamento de reclutamiento =):INTERES",
		                "cual_es_tu_nombre": "Roxana:INTERES",
		                "como_te_llamas": "Roxana:INTERES",
		                "donde_estas": "mi direccion es {OFERTADOR:DIRECCION}:INTERES",
		                "para_quien_trabajas": "para {OFERTADOR:NOMBRE}:INTERES"
					
					}    	
   
   },
   "HABILIDADES":{
                    "TYPE":"REQUERIMENT", 
                    "QUESTIONS":{
                         "1.0":"dime si tienes un curso o certificacion o habilidad sobresaliente ?:HABILIDADES", 					
		                 "0.7": "y bien, dime algun curso y certificacion que tengas o una destreza ?:HABILIDADES"
						 
					},
					"ANSWERS":{
					     "1.0":"ahora dime que idioma dominas a parte del español  y que porcentaje? :LENGUAS",
                         "0.8":"que bien ...cuales serian ? :LENGUAS",  					
			             "0.7":" a ya veo muy bien ... :LENGUAS",
						 "0.6":"mm esta bien ..:LENGUAS",
						 "0.5":" eso esta bien:LENGUAS",
						 "0.3":" mmm  ya veo ,mejor pasemos al siguiente paso:LENGUAS"
					},
					"YES":{
				        "1.0":" a , y bien que cuales son los cursos que   tienes?:HABILIDADES"
					},
					"NOT":{
					     "1.0":" a pues mejor pasemos al siguiente paso:LENGUAS"   
					},
					"BUT":{
					    "0.9":"seguro que si tienes, piensa, es importante para esta entrevista !!!!:HABILIDADES"
					},
					"UNKNOW":{
					     "1.0":" solo dime ¿ que curso , certificacion o habilidad te caracterizan ?:HABILIDADES"
					
					},
					"NONE":{
					     "1.0":" vaya parece que no se que quieres decir ?? te gustaria responder si, sigues interesado en la entrevista ?:HABILIDADES" 
					},
					"WAIT":{
					     "1.0":" ok , te espero pero no te tardes mucho !!!:HABILIDADES" 
					},
					"RUNDENESS":{
					      "1.0":" no seas asi !!! podria poner fin a esta entrevista:HABILIDADES"
					
					},
					"ABOUT":{
					      "1.0":" hola , soy Roxana y trabajo para el area de recursos humanos:HABILIDADES"
					  
					},
					"ENGLISH":{
					  "1.0":"te recuerdo que la entrevista es en español =P:HABILIDADES"
                   				  
					}
   
   },
   "LENGUAS":{
                    "TYPE":"REQUERIMENT",
                    "QUESTIONS":{		
		                  "1.0":" bien, ahora dime que Idioma hablas a parte del español y que porcentaje dominas:LENGUAS"
					},
					"ANSWERS":{						
			             "1.0":" a muy bien,  entonces continuemos ... donde y que estudiaste !!!:EDUCACION"
					},
					"YES":{
				           "1.0":"y cual es... y que porcentaje dominas?:LENGUAS"
					},
					"NOT":{
					        "1.0":"mm quiza no sea tan importante, continuamos .... :EDUCACION"
					},
					"BUT":{
					         "1.0":" a ya , pero recuerda que es importante conocer ontros idiomas:LENGUAS"
					},
					"UNKNOW":{
					          "1.0":" oye .. hablas o estas familiarizado con otro lenguaje aparte del español . y ¿ que porcentaje dominas ?:LENGUAS"
					
					},
					"NONE":{
					         "1.0":" mmmm no es necesario que lo pienses mucho .... solo dime cual lenguaje conoces y que tanto !!!:LENGUAS"
					},
					"WAIT":{
					           "1.0":"esta bien ... pero no demores mucho !!!!:LENGUAS"
					},
					"RUNDENESS":{
					            "1.0":"ups  .... no es neceario que digas groserias:LENGUAS"
					
					},
					"ABOUT":{
					
					          "1.0":" hola mi nombre es Roxana y trabajo para el departamento de recursos humanos:LENGUAS"
					},
					"ENGLISH":{
					  "1.0":"Perfect, but this interview is in spanish , please !!!!"
                   				  
					}   
   
   },
   "EDUCACION":{
                   "TYPE":"REQUERIMENT",
           	       "QUESTIONS":{		
		                    "1.0":" a y en donde estudiaste ? solo dime el ultimo nivel:EDUCACION"
					},
					"ANSWERS":{						
			                 "1.0":" muy bien ... continuemos!!!  ahora cuentame cuanto tiempo de experiencia y en que la tienes ?:EXPERIENCIA"
					},
					"YES":{
				             "1.0":" ok muy bien .. entonces cual fue el ultimo grado de estudios y donde:EDUCACION"
					},
					"NOT":{
					         "1.0":" quiza no sea necesario para esta vacante, continuemos:EXPERIENCIA"
					},
					"BUT":{
					         "1.0":"aunque no hayas terminado ...:EDUCACION"
					},
					"UNKNOW":{
					         "1.0":"..ok ... solo dime donde fue el ultimo lugar donde estudiaste !!:EDUCACION"
					
					},
					"NONE":{
					        "1.0":".. mmm no se que tratas de decir ... solo podrias decirme cual es el ultimo grado de estudios y donde fue:EDUCACION?"
					},
					"WAIT":{
					          "1.0":" a ya, te espero !!!:EDUCACION"
					},
					"RUNDENESS":{
					        "1.0":"no seas grosero !!!:EDUCACION"
					
					},
					"ABOUT":{
					        "1.0":" a soy roxana del deparatamento de recursos humanos:EDUCACION"
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español:EDUCACION"
                   				  
					}
   },
   "EXPERIENCIA":{
                    "TYPE":"REQUERIMENT",   
               	    "QUESTIONS":{		
		                    "1.0":"ahora cuentame en que tienes mas experiencia y en que ?:EXPERIENCIA"
					},
					"ANSWERS":{						
			                  "1.0":"muy bien ....de tu trabajo anterior que puesto tenias y en que area estabas?:TRABAJO ANTERIOR"
					},
					"YES":{
				             "1.0":" y cuanto y en que ?"
					},
					"NOT":{
					          "1.0":"mm talvez no requiereas tener experiencia, pero si una buena actitud:"
					},
					"BUT":{
					        "1.0":""
					},
					"UNKNOW":{
					 
					     "1.0":"... tal vez no te entienda, pero dime en que tienes mas experiencia tienes y en cuanto tiempo ?"
					},
					"NONE":{
					        "1.0":""
					},
					"WAIT":{
					       "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					
					        "1.0":""
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español:EXPERIENCIA"
                   				  
					}
   },
   
   "TRABAJO ANTERIOR":{
                   "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":"y cual fue tu ultimo trabajo?"
					},
					"ANSWERS":{						
			               "1.0":" a ya veo. Muy bien !! cuentame cual era la mayor responsabilidad que tenias en tu ultimo trabajo? :RESPONSABILIDADES"
					},
					"YES":{
				             "1.0":""
					},
					"NOT":{
					          "1.0":""
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   },
   "RESPONSABILIDADES":{
                   "TYPE":"REQUERIMENT",  
      	           "QUESTIONS":{		
		                    "1.0":"cuentame que responsabilidades tenias ?:RESPONSABILIDADES"
					},
					"ANSWERS":{						
			                "1.0":"a ya veo, nos interesas, Aceptarias, una pre entrevista presencial :NEGOCIACION"
					},
					"YES":{
				             "1.0":""
					},
					"NOT":{
					          "1.0":""
					},
					"BUT":{
					            "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					        "1.0":""
					},
					"WAIT":{
					         "1.0":""
					},
					"RUNDENESS":{
					        "1.0":""
					
					},
					"ABOUT":{
					         "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   
   },
   "DATOS BASICOS":{
                    "TYPE":"REQUERIMENT",
          	        "QUESTIONS":{		
		                  "1.0":"cual es tu nombre y edad  ?"
					},
					"ANSWERS":{						
			              "1.0":"ya esta ... ahora, ¿ cual es la colonia , ciudad o municipio y el estado donde vives hoy ?:DIRECCION"
					},
					"YES":{
				         "1.0":""
					},
					"NOT":{
					       "1.0":""
					},
					"BUT":{
					        "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					       "1.0":""
					},
					"WAIT":{
					        "1.0":""
					},
					"RUNDENESS":{
					        "1.0":""
					
					},
					"ABOUT":{
					       "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   },
   "DIRECCION":{
            	   "QUESTIONS":{		
		                  "1.0":"Cual es la colonia , ciudad o municipio donde vives actualmente ?"
					},
					"ANSWERS":{						
			               "1.0":" "
					},
					"YES":{
				            "1.0":""
					},
					"NOT":{
					          "1.0":""
					},
					"BUT":{
					          "1.0":""
					},
					"UNKNOW":{
					 
					        "1.0":""
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					         "1.0":""
					},
					"RUNDENESS":{
					 
					          "1.0":""
					},
					"ABOUT":{
					           "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   },
   "CONTACTO":{
               	   "QUESTIONS":{		
		                       "1.0":"Pasa me tu celular y correo electronico para contactarte !!!!"
					},
					"ANSWERS":{						
			                  "1.0":""
					},
					"YES":{
				               "1.0":" ok cuales serian?"
					},
					"NOT":{
					            "1.0":" a pues es solo para contactarte para esta vacante o para futuras "
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					       "1.0":""
					
					},
					"NONE":{
					       "1.0":""
					},
					"WAIT":{
					   "1.0":""
					},
					"RUNDENESS":{
					     "1.0":""
					
					},
					"ABOUT":{
					      "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   },
   "CIERRE":{
          	        "QUESTIONS":{		
		                  "1.0":" Esto seria todo =) que tengas un buen dia !!!! bye "
					},
					"ANSWERS":{						
			                "1.0":""
					},
					"YES":{
				             "1.0":""
					},
					"NOT":{
					          "1.0":"parece haber salido mal !!!"
					},
					"BUT":{
					           "1.0":""
					},
					"UNKNOW":{
					 
					           "1.0":""
					},
					"NONE":{
					          "1.0":""
					},
					"WAIT":{
					           "1.0":""
					},
					"RUNDENESS":{
					          "1.0":""
					
					},
					"ABOUT":{
					      "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   },
    
         "None":{
                   "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":"no creo entenderte !!!"
					},
					"ANSWERS":{						
			               "1.0":" mmm pues aqui tienes una pre entrevista de trabajo"
					},
					"YES":{
				             "1.0":""
					},
					"NOT":{
					          "1.0":""
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   },
   
   "INGLES":{
   
             "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":"mmm  esta entrevista es en español ...only spanish please !!! thanks"
					},
					"ANSWERS":{						
			               "1.0":" mmm esta entrevista es en español !!!! =) "
					},
					"YES":{
				             "1.0":"muy bien continuemos "
					},
					"NOT":{
					          "1.0":"I can`t follow with interview !!! please in Spanish!!! "
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   
   },
   
         "NEGOCIACION":{
   
             "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":"te parece bien , continuemos "
					},
					"ANSWERS":{						
			               "1.0":"La vacante"
					},
					"YES":{
				             "1.0":"muy bien sigamos"
					},
					"NOT":{
					          "1.0":"bueno .. entonces terminamos bye !!! "
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   
   },
   
      "OFERTA NEGOCIACION":{
   
             "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":"te parece bien , continuemos "
					},
					"ANSWERS":{						
			               "1.0":"a muy bien !!!:OFERTA NEGOCIACION"
					},
					"YES":{
				             "1.0":"esta bien:"
					},
					"NOT":{
					          "1.0":"bueno .. entonces terminamos bye !!! "
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   
   },
   
         "PERCEPCIONES ANTERIORES":{
   
             "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":"el salario que ofrecemos es de 20000 pesos netos si te interesa ?"
					},
					"ANSWERS":{						
			               "1.0":" te sigue interesando ? "
					},
					"YES":{
				             "1.0":"muy bien sigamos, entonces si aceptarias una entrevista presencial ?:CIERRE"
					},
					"NOT":{
					          "1.0":"bueno .. entonces terminamos bye !!! "
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					}
   
   },
   "HUMOR":{
   
             "TYPE":"REQUERIMENT",
         	       "QUESTIONS":{		
		                  "1.0":" Que =) :HUMOR"
					},
					"ANSWERS":{						
			               "1.0":" Que !! :HUMOR"
					},
					"YES":{
				             "1.0":"muy bien sigamos:INTERES"
					},
					"NOT":{
					          "1.0":"bueno .. entonces terminamos bye !!!:HUMOR"
					},
					"BUT":{
					         "1.0":""
					},
					"UNKNOW":{
					        "1.0":""
					
					},
					"NONE":{
					         "1.0":""
					},
					"WAIT":{
					          "1.0":""
					},
					"RUNDENESS":{
					         "1.0":""
					
					},
					"ABOUT":{
					        "1.0":""
					
					},
					"ENGLISH":{
					  "1.0":"te comento que la entrevista es en español"
                   				  
					},
	"ACERCA DE MI":{
					    
                   "ANSWERS":{						
					"1.0":" Soy Roxana y trabajo para el departamento de Recursos Humanos !!!:INTERES"
					},
                   "QUESTIONS":{
				   "1.0":"te espero no tardes mucho !!:NEXT"
				   
				   }
					
					}
   
   }
   

}
