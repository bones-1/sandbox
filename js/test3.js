"use strict";

fetch("http://localhost:8888/date.php")
  .then((res) => {console.info(...res.headers.values()); return res.text()})
  .then((res) => (document.getElementById("date").innerText = res))
  .catch((e) => console.error("The page failed to load: " + e.message));

  let form = document.forms.user;


form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  fetch("http://localhost:8888/save-user.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
     console.log(response.statusText)
    })
    .catch((error) => {
      // Handle any errors
      console.error("There was a problem with the fetch operation:", error);
    });
});