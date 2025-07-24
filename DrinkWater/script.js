main_container = document.querySelector(".total")
boxes = document.querySelectorAll(".small")
result = false
for(let i=0;i<=7;i++){
    div = document.createElement("div")
    div.classList.add("per")
    main_container.append(div)
  }
  sub = main_container.querySelectorAll(".per")
  sub.forEach(el => el.style.cssText = "width:150px; height:38px; padding:0px; margin:0px; position:relative;");
boxes[0].addEventListener("click",()=>{
  result = true
  fill(7,0)
})
boxes[1].addEventListener("click",()=>{
  result = true
  fill(6,1)
})
boxes[2].addEventListener("click",()=>{
  result = true
  fill(5,2)
})
boxes[3].addEventListener("click",()=>{
  result = true
  fill(4,3)
})
boxes[4].addEventListener("click",()=>{
  result = true
  fill(3,4)
})
boxes[5].addEventListener("click",()=>{
  result = true
  fill(2,5)
})
boxes[6].addEventListener("click",()=>{
  result = true
  fill(1,6)
})
boxes[7].addEventListener("click",()=>{
  result = true
  fill(0,7)
})
function clearcont(){
     for(i=0;i<8;i++){
      sub[i].style.backgroundColor = "blue";
     } 
    sub[4].innerText = "100%"
}
function fill(index,next){
  if (result){
     for(i=0;i<8;i++){
      boxes[i].style = null
      sub[i].style.padding = "0px"
      sub[i].innerText = ""
      sub[i].style.backgroundColor = "white";
     }
}
  num = index
  total = 0;
  remain = 2
  rem = remain
  let sum = 0
  for(i=0;i<=next;i++){
    if(index===7){
       sub[index].style.cssText = "height:38px;width:150px;  border-top: none;    border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;"
    }
    boxes[i].style.backgroundColor = "blue"
    boxes[i].style.transition =  "background-color 0.5s ease"
    total+=12.5;
    remain -= 0.25
    sub[index].style.backgroundColor = "blue";
    sub[index].style.transition =  "background-color 0.5s ease"
    index++; 
    sum++;
  } 
  if (sum===8){
    clearcont();
  }
  else{
    sub[num].innerText = total + "%" 
    sub[rem].innerText = remain + "Liter"
  }
}
