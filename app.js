'use strict';

var MorseEncoder = MorseEncoder || function(){
    
    //Morse code converter- By Luke Watson (luke@lukewatson.f2s.com)
	//Script featured on JK (http://javascriptkit.com)
	//Visit http://javascriptkit.com for this script and more

	var charCodes=new Array(36); charCodes["a"]="._";
	charCodes["b"]="_...";
	charCodes["c"]="_._.";
	charCodes["d"]="_..";
	charCodes["e"]=".";
	charCodes["f"]=".._.";
	charCodes["g"]="__.";
	charCodes["h"]="....";
	charCodes["i"]="..";
	charCodes["j"]=".___";
	charCodes["k"]="_._";
	charCodes["l"]="._ . .";
	charCodes["m"]="__";
	charCodes["n"]="_.";
	charCodes["o"]="___";
	charCodes["p"]=".__.";
	charCodes["q"]="__._";
	charCodes["r"]="._.";
	charCodes["s"]="...";
	charCodes["t"]="_";
	charCodes["u"]=".._";
	charCodes["v"]="..._";
	charCodes["w"]=".__";
	charCodes["x"]="_.._";
	charCodes["y"]="_.__";
	charCodes["z"]="__..";
	charCodes["1"]=".____";
	charCodes["2"]="..___";
	charCodes["3"]="...__";
	charCodes["4"]="...._";
	charCodes["5"]=".....";
	charCodes["6"]="_....";
	charCodes["7"]="__...";
	charCodes["8"]="___..";
	charCodes["9"]="____.";
	charCodes["0"]="_____";	

	function encode(value) {
		var temp = '';
		var chars=value.split("");

		for (var a=0; a<chars.length; a++) {
			if (chars[a]!=" ") {
				if (charCodes[chars[a]]) {					
					temp+=charCodes[chars[a]];
				}
			}
			else {
				temp+=" ";
			}
		}
		return temp;
	}


	return{
		encode : encode
		
	};
    
}();

var LuccaTest = LuccaTest || function(){
    
    let input1 = null,
        input2 = null,
        area1 = null,
        area2 = null;
	const SPACE = 1000,
      	  PAUSE = 400,
		  POINT = 200,
		  TRAIT = 600;
        
    function morseTime(data){
        var chars=MorseEncoder.encode(data).split("");
          var tempText = "";
          var arrayVibration = [];
          for (var a=0; a<chars.length; a++) {
            if (chars[a]!=" ") {
                tempText+=" "+chars[a];              
                arrayVibration.push(chars[a] === '.' ? POINT : TRAIT);
                arrayVibration.push(PAUSE);
            }
            else {
              tempText+="   ";
              arrayVibration.push(SPACE);
            }
          }
          if (navigator.vibrate){              
            window.navigator.vibrate(arrayVibration);
          }
    }
    
    function click(event){
        if (event.target.id === 'btn1'){
            if (input1.value && input1.value.length > 0){                
                area2.value = area2.value+"\n"+input1.value;
                morseTime(input1.value);
                input1.value = "";
            }
        }else if (event.target.id === 'btn2'){
            if (input2.value && input2.value.length > 0){                
                area1.value = area1.value+"\n"+input2.value;
                morseTime(input2.value);
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

