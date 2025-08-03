const button1 = document.querySelector(".btn1")
const form = document.querySelector('form')
const form_class = document.querySelector(".form")
let height = 400;
const subjects = document.querySelectorAll(".subject")

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
  select1.appendChild(opt5)
  select1.appendChild(opt6)
  select1.appendChild(opt7)
  select1.appendChild(opt8)
  select1.appendChild(opt9)
  select1.appendChild(opt10)
  select1.appendChild(opt11)
}

button1.addEventListener("click",()=>{
  height += 100
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
  options[i].addEventListener("change",()=>{
  if ( choice[0].value === "A"){
       choice[1].value = "4.00"
  }
  else if ( choice[0].value === "A-"){
       choice[1].value = "3.67"
  }
  else if ( choice[0].value === "B+"){
       choice[1].value = "3.33"
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

function previous(cgpa){
  let save = {
  subject: [],
  Grades:[],
  Points:[]
}
  let grades = document.querySelectorAll(".grade select")
  let points = document.querySelectorAll(".points select")
  let inputs = document.querySelectorAll("input[type='text'][placeholder='Enter your subject']")
    inputs.forEach((sub,index) => {
      if (sub.value.trim() !== "") {
      save.subject.push(sub.value.trim());
  } 
  });
   grades.forEach((sub,index) => {
      if (sub.value.trim() !== "") {
      save.Grades.push(sub.value.trim());
  }
  });
  points.forEach((sub,index) => {
      if (sub.value.trim() !== "") {
      save.Points.push(sub.value.trim());
  }
  });
  let main_pre = document.createElement("div");
  main_pre.classList.add("mainElement")
  let visit_data = document.createElement("div");
  visit_data.classList.add("hist");
  const subjs = document.createElement("div");
  const grds = document.createElement("div");
  const pts = document.createElement("div");
  subjs.classList.add("Subjects");
  grds.classList.add("Grades")
  pts.classList.add("Points");
  save.subject.forEach((sub)=>{
      const p = document.createElement("div")
      p.textContent = sub;
      subjs.appendChild(p)
  })
  save.Grades.forEach((sub)=>{
      const p = document.createElement("div")
      p.textContent = sub;
      grds.appendChild(p)
  })
  save.Points.forEach((sub)=>{
      const p = document.createElement("div")
      p.textContent = sub;
      pts.appendChild(p)
  })
  const gpa = document.createElement("div");
  gpa.classList.add("cgpa");
  gpa.textContent = `CGPA : ${cgpa}`;
  visit_data.appendChild(subjs)
  visit_data.appendChild(grds)
  visit_data.appendChild(pts);
  grds.style.cssText = "margin-left:50px;"
  pts.style.cssText = "margin-left:50px;"
  main_pre.style.cssText = "background-color:black;margin:10px auto; width:300px;padding:10px; color:white;border-radius:10px;"
  visit_data.style.cssText = "display:flex; "
  main_pre.appendChild(visit_data)
   main_pre.appendChild(gpa)
  document.querySelector("body").appendChild(main_pre)

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
 
})
