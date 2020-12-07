/*
  Author: Tanish Raj (Ct tricks)
  Contact: help.cttricks@gmail.com

  Google Calendar : https://calendar.google.com/
  Google ASC-Docs : https://developers.google.com/apps-script/reference/calendar
  
  Smaple Code : App.createEvent('Have to publish yt video', new Date('December 07, 2020 21:15:00 UTC+05:30'), new Date('December 07, 2020 21:25:00 UTC+05:30'));
*/


function doPost(e) {
  var output = "";
  try{
    var App = CalendarApp.getCalendarById("help.cttricks@gmail.com");
    eval(e.parameter.code); 
    output = {"status":200,"msg":"Command executed successfully"};
  }catch(err){
    output = {"status":401,"msg":err.toString()};
  }
  
  return ContentService.createTextOutput(JSON.stringify(output));
}

function doGet(e){
  var output = {
    "status":402,
    "msg": "Unauthorized access detected. Access denied."
  }
  
  return ContentService.createTextOutput(JSON.stringify(output));
}
