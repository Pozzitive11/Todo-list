function showTodayDate(params) {
  const today = document.querySelector(".today");

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();

  function showTodayDate() {
    let weekday = daysOfTheWeek[date.getDay()];
    const options = { month: "long" };
    let month = new Intl.DateTimeFormat("en-US", options).format(date);
    let day = date.getDate();
    today.innerHTML = `<span class="today__day">${weekday},</span>  ${month} ${day}`;
  }
  showTodayDate();
}

export default showTodayDate;
