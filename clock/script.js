const div = document.querySelectorAll(".time")
const needle = document.querySelector(".sec")
const needle_min = document.querySelector(".min")
const needle_sec = document.querySelector(".hour")
const date = document.querySelectorAll(".date")
document.querySelector("button").addEventListener("click",()=>{
  document.body.classList.toggle("darkmode")
})
function update(){
  time = new Date();
  hours = time.getHours() 
  let ampm = "am"
  if(hours>12){
     ampm = "pm"
     hours = hours-12
  }
  div[0].innerText = hours
  needle_sec.style.transform = `rotate(${hours*30}deg)`

  const min = time.getMinutes()
  div[1].innerText = min
  needle_min.style.transform = `rotate(${min*6}deg)`

  const sec = time.getSeconds()
  needle.style.transform = `rotate(${sec*6}deg)`
  div[2].innerText = sec
}
function currentDate(){
  const Current_date = new Date();
  day = Current_date.getDate()
  date[2].innerText = day
  Week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  day %= 7
  date[0].innerText = Week[day]+", "
  month = Current_date.getMonth()
  Months = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"]
  date[1].innerText = Months[month]


}
setInterval(update,1000)
update()
currentDate()