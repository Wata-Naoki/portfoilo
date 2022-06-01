


 const lang = document.querySelector('html').lang;


 if(lang === 'ja') {
     document.querySelector('option[value="index.html"]').selected = true;
     
 } else if(lang === 'en') {
   document.querySelector('option[value="index-en.html"]').selected = true;
   
   
}

 document.getElementById('form').select.onchange = function(){
     location.href = document.getElementById('form').select.value;
 }



if(lang === 'ja'){
    function twoDigit(num) {
        let ret;
        if( num < 10 ) 
          ret = "0" + num; 
        else 
          ret = num; 
        return ret;
       }
       
       
       
       function showClock() {
        let nowTime = new Date();
        
        let nowDays = nowTime.getDay()
        let nowofDays = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"][nowDays];
       
       
        let nowFY = nowTime.getFullYear();
       
        let nowMon = nowTime.getMonth();
        let nowofMon = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"][nowMon];
       
       
       
       
        let nowDat = nowTime.getDate();
        let nowHour = twoDigit( nowTime.getHours() );
        let nowMin  = twoDigit( nowTime.getMinutes() );
        let nowSec  = twoDigit( nowTime.getSeconds() );
       
        let msg = nowHour + ":" + nowMin + ":" + nowSec;
        document.getElementById("realtime").innerHTML = msg;
       
       
        let msg1 = nowFY  + "年 "+ nowofMon + " "+ nowDat+"日   " + nowofDays;
        document.getElementById("datestime").innerHTML = msg1;
       
       
       }
       setInterval('showClock()',1000);


}else if(lang === 'en'){

    function twoDigit(num) {
        let ret;
        if( num < 10 ) 
          ret = "0" + num; 
        else 
          ret = num; 
        return ret;
       }




    function showClock2() {
        let nowTime = new Date();
        
        let nowDays = nowTime.getDay()
        let nowofDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][nowDays];
    
    
        let nowFY = nowTime.getFullYear();
    
        let nowMon = nowTime.getMonth();
        let nowofMon = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][nowMon];
    
       
       
       
        let nowDat = nowTime.getDate();
        let nowHour = twoDigit( nowTime.getHours() );
        let nowMin  = twoDigit( nowTime.getMinutes() );
        let nowSec  = twoDigit( nowTime.getSeconds() );
       
        let msg = nowHour + ":" + nowMin + ":" + nowSec;
        document.getElementById("realtime").innerHTML = msg;
       
       
        let msg1 = nowofDays + ", "+ nowofMon + " "+ nowDat+", " + nowFY;
        document.getElementById("datestime").innerHTML = msg1;
       
       
       }
       setInterval('showClock2()',1000);


}



window.onload = function() {

  const images = ['url(./image/image1.png)', 'url(./image/image2.png)', 'url(./image/image3.png)', 'url(./image/image4.png)']




let target = document.getElementById('slide');

let right = document.getElementById('right');

let left = document.getElementById('left');

let count = 0;

function change(){
  target.style.backgroundImage = images[count];
}


function goNext(){
  if(count === 3){
    count = 0;

  }else{
    count += 1;

  }
  change();
}

function goBack(){
  if(count === 0){
    count = 3;

  }else{
    count -= 1;

  }
  change();

}


right.addEventListener('click', goNext, false);

left.addEventListener('click', goBack, false);







}


