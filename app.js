/* Created by Tivotal */

let hrText = document.querySelector(".hour");
let minText = document.querySelector(".min");
let subText = document.querySelector(".sub");

let dayText = document.querySelector(".day");
let dateText = document.querySelector(".date");

let icon = document.querySelector(".icon");

setInterval(() => {
  let date = new Date();

  let hours = date.getHours();
  let mins = date.getMinutes();

   if (hours >= 6 && hours < 18) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }

  let label = hours < 12 ? "AM" : "PM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours == 0 ? 12 : hours;
  hours = hours < 10 ? "0" + hours : hours;

  mins = mins < 10 ? "0" + mins : mins;

  hrText.innerText = hours;
  minText.innerText = mins;
  subText.innerText = label;

  dayText.innerText = date.toLocaleString("en", {
    weekday: "long",
  });

  let fullDate =
    date.getDate() +
    " " +
    date.toLocaleString("en", {
      month: "long",
    }) +
    " " +
    date.getFullYear();

  dateText.innerText = fullDate;

}, 1000);
