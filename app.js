let form = document.querySelector("#form");
let studentName = document.querySelector("#name");
let studentid = document.querySelector("#std_id");
let studentEmail = document.querySelector("#email");
let studentCourses = document.querySelector("#courses");

form.addEventListener("submit", async e => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;
  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    courses: std_courses,
  };

  let url = "http://localhost:4000/api/students";
  let body = await window.fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(body);
});

let fetchStudent = document.getElementById("b1");
let display = document.getElementById("list");

fetchStudent.addEventListener("click", async e => {
  e.preventDefault();
  let url = "http://localhost:4000/api/students";
  let find = await (await fetch(url)).json();
  find.payload.forEach(e => {
    console.log(e);
    display.innerHTML += `<p> ID : ${e._id}</p>
    <p> Name : ${e.name}</p>
    <p> Email : ${e.email}</p>
    <p> Courses : ${e.courses}</p>
    <form id="b2">
    <button id="btn2"> Delete </button>
    </form>`;
  });
});



// delete student
let formdelete = document.getElementById("b2");

formdelete.addEventListener("click", async e => {
  e.preventDefault();
  let delete1 = document.getElementById("delete1").value;
  let url = `http://localhost:4000/api/students/${delete1}`;
  await window.fetch(url, {
    method: "DELETE",
  });
});

//update student
let form2 = document.querySelector("#form2");
// let studentName = document.querySelector("#name");
// let studentid = document.querySelector("#std_id");
// let studentEmail = document.querySelector("#email");
// let studentCourses = document.querySelector("#courses");

form2.addEventListener("submit", async e => {
  e.preventDefault();
  let std_name = e.target[0].value;
  let std_id = e.target[1].value;
  let std_email = e.target[2].value;
  let std_courses = e.target[3].value;
  let payload = {
    name: std_name,
    std_id: std_id,
    email: std_email,
    courses: std_courses,
  };

  let url = "http://localhost:4000/api/students/62077c726cda7eade339e49e";
  let body = await window.fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  console.log(body);
});
