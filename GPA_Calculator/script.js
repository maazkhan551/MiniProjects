const button1 = document.querySelector(".btn1")
const form = document.querySelector('form')
const form_class = document.querySelector(".form")
const subjects = document.querySelectorAll(".subject")
let height = parseInt(window.getComputedStyle(form_class).height)

button1.addEventListener("click",()=>{
  height += 100
  form_class.style.height = `${height}px`
  console.log(form_class.style.height)
  let subject = document.createElement("div")
  subject.classList.add("subject")

  const options = document.createElement('div')
  options.classList.add('options')
  grade = document.createElement("div")
  grade.classList.add('grade')
  options.appendChild(grade)
  
  const selectedGrade = document.createElement('select')
  addGrade(selectedGrade)  
  grade.appendChild(selectedGrade)

  let points = document.createElement("div")
  points.classList.add("points")
  options.appendChild(points)

  const deletebtn = document.createElement("div");
  deletebtn.classList.add("delete")
  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.classList.add("ri-delete-bin-6-line")
  button.appendChild(icon)
  deletebtn.appendChild(button)
  const credit = document.createElement("div")
  credit.classList.add('credit')
  const credit_inner = document.createElement("input")
  credit_inner.type = "number"
  credit_inner.placeholder = "Credit hours"
  credit.appendChild(credit_inner)
  options.appendChild(credit)
  options.appendChild(deletebtn)

  const pointSelect = document.createElement('select')
  addPoints(pointSelect)
  points.appendChild(pointSelect)

  const input = document.createElement("input")
  input.type = "text"
  input.placeholder = "Enter your subject"
  subject.appendChild(options)
  subject.prepend(input)
  form.appendChild(subject)

  options.addEventListener("change", () => {
    const gradeValue = selectedGrade.value;
    if (gradeToPoints[gradeValue]) {
      pointSelect.value = gradeToPoints[gradeValue];
    }
  });
  button.addEventListener("click",()=>{
     let closeObj = button.closest(".subject").remove();
  })
  pointSelect.addEventListener("change",()=>{
    const pointValue = pointSelect.value;
    if(PointToGrades[pointValue]) {
      selectedGrade.value = PointToGrades[pointValue]
    }
  })
  setupSync(selectedGrade,pointSelect)
  button.addEventListener("click",function(e){
  e.preventDefault();
  })
})
document.querySelectorAll(".options").forEach(opt=>{
  const select  = document.querySelectorAll("select")
  setupSync(select[0],select[1])
})

let num = 0
let point = 0
const button2 = document.querySelector('.btn2')

button2.addEventListener("click",()=>{
  let inputs1 = document.querySelectorAll("input[type='text'][placeholder='Enter your subject']")
  let inputs2 = document.querySelectorAll("input[type='number'][placeholder='Credit hours']")
  const errorMessage = document.querySelector('.err-mess')
  ifError = false
  inputs1.forEach(input=>{
    if(input.value.trim()===""){
      ifError = true
    }
  })
  inputs2.forEach(input=>{
    num = parseFloat(input.value)
    if(input.value.trim()==="" || num<=0){
      ifError = true
    }
  })
  if(ifError){
    errorMessage.style.cssText = " visibility: visible;"
  }

  else{
  errorMessage.style.cssText = "visibility: hidden;"
  num = 0
  point = 0
  const options = document.querySelectorAll(".options")
  for (const option of options){
        const pointSelect =  option.querySelector(".grade select")
        let gradeInPoint = gradeToPoints[pointSelect.value]
        const input_box = option.querySelector(".credit input")
        value1 = parseFloat(gradeInPoint)||0;
        value2 = parseFloat(input_box.value)||0;
        point += (value1*value2)
        num += value2
  }


  let final = point/num
  let final_roundup = isNaN(final) ? 0 : Number(final.toFixed(3));
  document.querySelector(".final_gpa").innerText = final_roundup
  if(final_roundup>0){
  const circle = document.querySelector(".circular-progress");
  const value_ = document.querySelector(".progress-value");
    let start = 0, end = final_roundup, step = 20,num_ = 0;
    let progress = setInterval(() => {
      start+=0.1;
      start = parseFloat(start.toFixed(1))
      num_ = start*25;
      value_.textContent = `${start} CGPA`;
      circle.style.background = `conic-gradient(#EAE4D5 ${num_*3.6}deg, #ededed 0deg)`;
      if (start >= end) {
        clearInterval(progress);
      }
    }, step);
  } 
  previous(final_roundup); 
  }
  const crossButton = document.querySelector(".cross")
  crossButton.addEventListener("click",()=>{
    errorMessage.style.cssText = "visibility: hidden;"
  })
})
