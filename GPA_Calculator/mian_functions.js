let gradeToPoints = {
  "A":"4.00","A-":"3.67","B+":"3.33","B":"3.00","B-":"2.67","C+":"2.33","C":"2.00","C-":"1.67","D+":"1.33","D":"1.00","F":"0.00"
}
let PointToGrades = {}
for(grade in gradeToPoints){
  PointToGrades[gradeToPoints[grade]] = grade;
}
function addGrade(select){
  for (let grade in gradeToPoints){
    let option = document.createElement("option")
    option.value = grade;
    option.text = grade;
    select.appendChild(option);
  }
}

function addPoints(select1){
    for (let grade in gradeToPoints){
    let option = document.createElement("option")
    option.value = gradeToPoints[grade];
    option.text = gradeToPoints[grade];
    select1.appendChild(option);
  }
}

function setupSync(selectGrade, selectPoint) {
  selectGrade.addEventListener("change", () => {
    const grade = selectGrade.value;
    if (gradeToPoints[grade]) {
      selectPoint.value = gradeToPoints[grade];
    }
  });

  selectPoint.addEventListener("change", () => {
    const point = selectPoint.value;
    if (PointToGrades[point]) {
      selectGrade.value = PointToGrades[point];
    }
  });
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
  inputs.forEach(sub => {
      if (sub.value.trim() !== "") {
      save.subject.push(sub.value.trim());
  } 
  });
   grades.forEach(sub => {
      if (sub.value.trim() !== "") {
      save.Grades.push(sub.value.trim());
  }
  });
  points.forEach(sub=> {
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
  subjs.innerText = "Subjects";
  grds.innerText = "Grades";
  pts.innerText = "Points"
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