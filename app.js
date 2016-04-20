'use strict';

var LuccaTest = LuccaTest || function(){
    
    let input1 = null,
        input2 = null,
        area1 = null,
        area2 = null;
    
    function click(event){
        if (event.srcElement.id === 'btn1'){
            if (input1.value && input1.value.length > 0){                
                area2.value = area2.value+"\n"+input1.value;
                input1.value = "";
            }
        }else if (event.srcElement.id === 'btn2'){
            if (input2.value && input2.value.length > 0){                
                area1.value = area1.value+"\n"+input2.value;
                input2.value = "";
            }
        }
        console.log(event);
    }
    
    function pageLoad(){
           document.querySelector("#btn1").addEventListener('click', click);
           document.querySelector("#btn2").addEventListener('click', click);
           
           input1 = document.getElementById('input1');
           input2 = document.getElementById('input2');
           area1 = document.getElementById('area1');
           area2 = document.getElementById('area2');
    }
    
    window.addEventListener('load', pageLoad);
    
    
    
    return {
        
    };
    
}();

