"use strict";

// let req = new XMLHttpRequest();
// req.open('GET', "http://localhost:8888/date.php");
// req.responseType = 'text';
// req.send();
// req.onload = () => {
//   console.log(req.getAllResponseHeaders())
//   if(req.status !== 200){
//     console.log('Failed to fetch resource.');
//     return;
//   }
//   document.getElementById("date").innerText = req.response;
// }

// req.onerror =() => {
//   console.log('Unable to find resource.');
// }

// req.onprogress = (e) => {
//   console.log(`Loaded ${e.loaded} of ${e.total}`);
// }

fetch("http://localhost:8888/date.php")
  .then((res) => res.text())
  .then((res) => (document.getElementById("date").innerText = res))
  .catch((e) => console.error("The page failed to load: " + e.message));

let form = document.forms.user;

// Preview uploaded image
previewAvatar(
  document.getElementById("avatar"),
  document.getElementById("avatar-display")
);

// Submit the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  let data = new FormData(form);

  fetch("http://localhost:8888/save-user.php", {
    method: "POST",
    body: data,
  })
    .then((response) => response.text())
    .then((res) => console.log(res))
    .catch((error) => {
      // Handle any errors
      console.error("There was a problem with the fetch operation:", error);
    });
});

// fetch("https://bible-api.com/psalms+1:1-6?translation=kjv")
//   .then((res) => res.json())
//   .then((res) => {
// res = new Blob([res.text], {endings: 'native', type: 'text/plain'});

//     let a = document.createElement("a");
//     a.download = "psalms.txt";
//     a.href = URL.createObjectURL(res);
//     a.click();
//     URL.revokeObjectURL(a.href);
//   });

function previewAvatar(imgInputElem, displayElem) {
  let input = imgInputElem;
  let display = displayElem;

  input.addEventListener("change", (e) => {
    let imageElem = document.createElement("img");
    imageElem.src = URL.createObjectURL(e.target.files[0]);
    imageElem.alt = "user avatar";

    display.append(imageElem);
  });
}
let form2 = document.forms["note"];
let note = form2["data"];
let clear = form2["clear"];

note.oninput = () => {
  localStorage.setItem("text", note.value);
  return false;
};

clear.onclick = () => {
  form2.reset();
  localStorage.removeItem('text');
  return false;
};

window.addEventListener('load', () => {
  note.value = localStorage.getItem('text');
})
