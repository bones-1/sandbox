"use strict";

let form = $("#signup");
let passwds = $('#signup  input[type="password"]');

// console.log(passwds[0].val())
passwds.on("pointerover", (event) => {
    $(event.target).attr('placeholder', 'something');
});
