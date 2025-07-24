
 function calcuate(button){
      val = button.textContent
      document.getElementById("cal").value += val
      
 }
 document.getElementById("cal").addEventListener("keypress",final);
//  document.getElementById("cal").addEventListener("mo")
 function final(e){
  if (e.key==="="){
    num = document.getElementById("cal").value
    result = math.evaluate(num)
    document.getElementById("cal").value = result
  }
 }
 function final1(){
    num = document.getElementById("cal").value
    result = math.evaluate(num)
    document.getElementById("cal").value = result
  }
  function squareRoot(){
    num = document.getElementById("cal").value
    result = Math.sqrt(num)
    document.getElementById("cal").value = result 
  }
 