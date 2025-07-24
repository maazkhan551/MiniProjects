let time=0
let min = 1
div = document.querySelector(".cla")
button = document.querySelector(".pause")
button2 = document.querySelector('.refresh')
div.innerText = "0"+min+" : "+"00"
ispuased= true
interval = null
function display(){
  const minStr = min<10 ? "0"+min : min
  const secStr = time<10 ? "0"+time : time
  div.innerText = minStr + " : "+ secStr
}
function starter(){
if(interval) return;
 interval = setInterval(()=>{
  if(ispuased){
     if(min === 0 && time === 0){
      clearInterval(interval)
      interval = null
      return
     }
    if(time === 0){
      min--;
      time = 59
    }
    else{
      time--
    }
  }
  console.log(time)
  display()
  },1000)
}
function stop_timer(){
  if(!interval){
    ispuased = true
    starter()
  }
  else{
    ispuased = !ispuased
  }
}
function reset(){
   clearInterval(interval)
   interval = null
   min = 1
   time = 0
   ispuased = true
  div.innerText = "0"+min+" : "+"00"
}
button.addEventListener("click",stop_timer)
button2.addEventListener('click',reset)

