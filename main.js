// عد تنازلي
let countdownDate = new Date();
countdownDate.setHours(countdownDate.getHours() + 24); 

let countdown = setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) clearInterval(countdown);
}, 1000);

// التحكم في تغيير لون القلب عند الضغط
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('fas');
    heart.classList.toggle('far');
  });
});
