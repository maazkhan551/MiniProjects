const button1 = document.querySelector(".btn1")
const form = document.querySelector('form')
const form_class = document.querySelector(".form")
let height = 400;
let inputs = document.querySelectorAll("input")
let input_array = Array.from(inputs)

function addGrade(select){
  const option1 = document.createElement("option")
  option1.value = "A"
  option1.text = "A"
  const option2 = document.createElement("option")
  option2.value = "A-"
  option2.text = "A-"
  const option3 = document.createElement("option")
  option3.value = "B+"
  option3.text = "B+"
  const option4 = document.createElement("option")
  option4.value = "B"
  option4.text = "B"
  const option5 = document.createElement("option")
  option5.value = "B-"
  option5.text = "B-"
  const option6 = document.createElement("option")
  option6.value = "C+"
  option6.text = "C+"
  const option7 = document.createElement("option")
  option7.value = "C"
  option7.text = "C"
  const option8 = document.createElement("option")
  option8.value = "C-"
  option8.text = "C-"
  const option9 = document.createElement("option")
  option9.value = "D+"
  option9.text = "D+"
  const option10 = document.createElement("option")
  option10.value = "D"
  option10.text = "D"
  const option11 = document.createElement("option")
  option11.value = "F"
  option11.text = "F"
  select.appendChild(option1)
  select.appendChild(option2)
  select.appendChild(option3)
  select.appendChild(option4)
  select.appendChild(option5)
  select.appendChild(option6)
  select.appendChild(option8)
  select.appendChild(option9)
  select.appendChild(option10)
  select.appendChild(option11)
}

function addPoints(select1){
  const opt1 = document.createElement("option")
  opt1.value = "4.00"
  opt1.text = "4.00"
  const opt2 = document.createElement("option")
  opt2.value = "3.67"
  opt2.text = "3.67"
  const opt3 = document.createElement("option")
  opt3.value = "3.33"
  opt3.text = "3.33"
  const opt4 = document.createElement("option")
  opt4.value = "3.00"
  opt4.text = "3.00"
  const opt5 = document.createElement("option")
  opt5.value = "2.67"
  opt5.text = "2.67"
  const opt6 = document.createElement("option")
  opt6.value = "2.33"
  opt6.text = "2.33"
  const opt7 = document.createElement("option")
  opt7.value = "2.00"
  opt7.text = "2.00"
  const opt8 = document.createElement("option")
  opt8.value = "1.67"
  opt8.text = "1.67"
  const opt9 = document.createElement("option")
  opt9.value = "1.33"
  opt9.text = "1.33"
  const opt10 = document.createElement("option")
  opt10.value = "1.00"
  opt10.text = "1.00"
  const opt11 = document.createElement("option")
  opt11.value = "0.00"
  opt11.text = "0.00"
  select1.appendChild(opt1)
  select1.appendChild(opt2)
  select1.appendChild(opt3)
  select1.appendChild(opt4)
  select1.appendChild(opt6)
  select1.appendChild(opt7)
  select1.appendChild(opt8)
  select1.appendChild(opt9)
  select1.appendChild(opt10)
  select1.appendChild(opt11)
}

button1.addEventListener("click",()=>{
  height += 50
  form_class.style.height = `${height}px`
  subject = document.createElement("div")
  subject.classList.add("subject")

  const options = document.createElement('div')
  options.classList.add('options')
  grade = document.createElement("div")
  grade.classList.add('grade')
  options.appendChild(grade)
  
  const select = document.createElement('select')
  addGrade(select)  
  grade.appendChild(select)

  points = document.createElement("div")
  points.classList.add("points")
  options.appendChild(points)

  const credit = document.createElement("div")
  credit.classList.add('credit')
  const credit_inner = document.createElement("input")
  credit_inner.type = "text"
  credit_inner.placeholder = "Credit hours"
  credit.appendChild(credit_inner)
  options.appendChild(credit)

  const select1 = document.createElement('select')
  addPoints(select1)
  points.appendChild(select1)

  const input = document.createElement("input")
  input.type = "text"
  input.placeholder = "Enter your subject"
  subject.appendChild(options)
  subject.prepend(input)
  form.appendChild(subject)

  input_array.push(input) 

  const selects = options.querySelectorAll("select");
  options.addEventListener("change", () => {
    if (selects[0].value === "A") {
      selects[1].value = "4.00";
    } else if (selects[0].value === "A-") {
      selects[1].value = "3.67";
    } else if (selects[0].value === "B+") {
      selects[1].value = "3.33";
    } else if (selects[0].value === "B") {
      selects[1].value = "3.00";
    } else if (selects[0].value === "B-") {
      selects[1].value = "2.67";
    } else if (selects[0].value === "C+") {
      selects[1].value = "2.33";
    } else if (selects[0].value === "C") {
      selects[1].value = "2.00";
    } else if (selects[0].value === "C-") {
      selects[1].value = "1.67";
    } else if (selects[0].value === "D+") {
      selects[1].value = "1.33";
    } else if (selects[0].value === "D") {
      selects[1].value = "1.00";
    } else if (selects[0].value === "F") {
      selects[1].value = "0.00";
    } 
  });  
})

options = document.querySelectorAll('.options');
for (let i=0;i<options.length;i++){
  choice = options[i].querySelectorAll("select");
  console.log(choice)
  options[i].addEventListener("change",()=>{
  if ( choice[0].value === "A"){
       choice[1].value = "4.00"
      console.log( choice[1].value)
  }
  else if ( choice[0].value === "A-"){
       choice[1].value = "3.67"
      console.log( choice[1].value)
  }
  else if ( choice[0].value === "B+"){
       choice[1].value = "3.33"
      console.log( choice[1].value)
  }
  else if ( choice[0].value === "B") {
       choice[1].value = "3.00";
    } else if ( choice[0].value === "B-") {
       choice[1].value = "2.67";
    } else if ( choice[0].value === "C+") {
       choice[1].value = "2.33";
    } else if ( choice[0].value === "C") {
       choice[1].value = "2.00";
    } else if ( choice[0].value === "C-") {
       choice[1].value = "1.67";
    } else if ( choice[0].value === "D+") {
       choice[1].value = "1.33";
    } else if ( choice[0].value === "D") {
       choice[1].value = "1.00";
    } else if ( choice[0].value === "F") {
       choice[1].value = "0.00";
    } 
  })
}
let num = 0
let point = 0
button2 = document.querySelector('.btn2')
button2.addEventListener("click",()=>{
  num = 0
  point = 0
  const options = document.querySelectorAll(".options")
  for (option of options){
        const pointSelect =  option.querySelector(".points select")
        const input_box = option.querySelector(".credit input")
        value1 = parseFloat(pointSelect.value)||0;
        value2 = parseFloat(input_box.value)||0;
        point += (value1*value2)
        num += value2
  }
  let final = point/num
  document.querySelector(".final_gpa").innerText = final
})

