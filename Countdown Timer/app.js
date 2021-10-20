// console.log(Date())
// const date = new Date()
// console.log('day',date.getDate())
// console.log('month',date.getMonth())
// console.log('year',date.getFullYear())
// console.log('year',date.getHours())
// console.log('month',date.getMinutes())
// console.log('month',date.getSeconds())

// Pulling in current date when page loads
// document.addEventListener("DOMContentLoaded", () => console.log(Date()));

// Pulling in the button
const button = document.querySelector("#submit");
// Pulling in date value that was picked
const datePicked = document.querySelector("#datePicker");
button.addEventListener("click", () => {
  const date1 = new Date(datePicked.value);
  const date2 = new Date(
    document.querySelector("#datePicker").attributes[3].value
  );
  console.log(date1.getMonth());
  console.log(date2.getMonth());
  if (datePicked.value === "") return;
//   clearInterval(interval);
  calculateTime(datePicked.value);
});

function calculateTime(userDate) {
  const userPick = userDate;
  const userDatePick = new Date(userPick);
  const currentDate = new Date();
  let diffMinutes = (userDatePick.getTime() - currentDate.getTime()) / 1000;
  const d = Math.floor(diffMinutes / (3600 * 24));
  const h = Math.floor((diffMinutes % (3600 * 24)) / 3600);
  const m = Math.floor((diffMinutes % 3600) / 60);
  const s = Math.floor(diffMinutes % 60);
  //   console.log(d, "days ", h, "hours ", m, "minutes ", s, "seconds");
  document.querySelector("#days").innerText = d;
  document.querySelector("#hours").innerText = h;
  document.querySelector("#minutes").innerText = m;
  document.querySelector("#seconds").innerText = s;
  startClock();
}

function startClock() {
  const interval = setInterval(() => {
    document.querySelector("#seconds").innerText =
      +document.querySelector("#seconds").innerText - 1;

    if (document.querySelector("#seconds").innerText == 0) {
      document.querySelector("#minutes").innerText =
        +document.querySelector("#minutes").innerText - 1;
      document.querySelector("#seconds").innerText = 59;
    }
    if (document.querySelector("#minutes").innerText == 0) {
      document.querySelector("#hours").innerText =
        +document.querySelector("#hours").innerText - 1;
      document.querySelector("#minutes").innerText = 59;
    }
    if (document.querySelector("#hours").innerText == 0) {
      document.querySelector("#days").innerText =
        +document.querySelector("#days").innerText - 1;
      document.querySelector("#hours").innerText = 23;
    }
  }, 1000);
}
document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  let day = today.getDate() + 1;
  let month = today.getMonth() +1 ;
  const year = today.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();
  let minDate = year + "-" + month + "-" + day;
  document.querySelector("#datePicker").setAttribute("min", minDate);
});
