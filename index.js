function shout(string) {
    return string.toUpperCase();
 
 }
 
 function whisper(string){
     return string.toLowerCase();
 }
 function logShout(string){
     console.log(string.toUpperCase());
 }
 logShout("hello world");
 
 function logWhisper (string){
     console.log(string.toLowerCase())
 }
 
 logWhisper("PSST HELLO WORLD");
 
 function sayHiToHeadphonedRoommate(message) {
     if (message === message.toLowerCase()) {
       return "I can\'t hear you!";
     } if (message === message.toUpperCase()) {
       return "YES INDEED!";
     }
 
     if (message === "Let's have dinner together!"){
         return "I would love to!";
     }
     
   
   }
 
 
 
 
   sayHiToHeadphonedRoommate(string);