function clock(clockSelector) {
  const clock = document.querySelector(clockSelector);

  function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let session = "AM";

    if (hours === 0) {
      hours = 12;
    }
    if (hours > 12) {
      hours = hours - 12;
      session = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // let time = ;
    clock.innerHTML = `${hours}:${minutes} <span class="clock__session">${session}</span>`;
    setTimeout(currentTime, 1000);
  }
  window.addEventListener("load", currentTime);
}



export default clock;
