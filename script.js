var start_btn = document.getElementById('start');
start_btn.addEventListener('click',fun);
 
var change = document.querySelectorAll('.same');


    
function fun(){
   
    var arry = ['A','B','C','D','E'];

    var newarry = [];


    for(i = 0; i < arry.length;i++){ 

      while(newarry.length < 5){  

      var stored = parseInt(Math.random()*arry.length);
      
      if(!(newarry.includes(arry[stored]))){
      newarry[i] = arry[stored];
      
      break;
      }
      
      }
      change[i].innerHTML = newarry[i];
      console.log(newarry);
    }
    
}