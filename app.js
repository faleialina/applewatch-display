// Описание проекта:
// Сверстать статичный макет с использованием препроцессоров. 
// Добавить динамику в часы и год
// Составляющие проекта:
// querySelector; innerHTML; new Date; setInterval / setTimeout

class Time {
  constructor() {
    this.time = document.getElementById('time');
    setInterval(this.doTime, 1000);
  }
  
  doTime() {
    let date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let year = date.getFullYear().toString();

    hours.length < 2 ? hours = `0` + hours : null;
    minutes.length < 2 ? minutes = `0` + minutes : null;
    seconds.length < 2 ? seconds = `0` + seconds : null;

    let clockString = hours + `:` + minutes + `:` + seconds;
    this.time.textContent = clockString;

    document.querySelector('.date p').innerHTML = year;
  }
}
const time = new Time();






