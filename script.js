
function showTime(){
    var date=new Date();
   // console.log(date);

   //to take a Current Hours
    var hour=date.getHours(); //return hour in 0-23 
    // console.log(hour);
   //To take Current Minutes
    var min=date.getMinutes();//0-59
    //console.log(min);

    //To take Current Seconds
    var sec=date.getSeconds();//0-59
   // console.log(sec);
//SO this will give the Current Time but we have to do show every Second then, we use the setTimeOut() method

var session="AM"; //suppose take AM 

//logic for 12 hour 
if(hour>=12){
    hour=hour-12;
    session="PM";
}
//logic for Session


//taking Condition to get format of-- 01,02,03 in Hr,min,sec
hour =hour<10?"0"+hour :hour;
min  =min<10? "0"+min  : min;
sec  =sec<10? "0"+sec  : sec;

var time=hour +" : "+min+" : "+sec +" : "+session ;

document.getElementById('myClockDisplay').textContent=time;

setTimeout(showTime,1000) 

}
showTime();