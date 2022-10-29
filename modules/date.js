const datetime = new Date();
document.querySelector('.date-time').textContent = datetime;
function refreshTime() {
  const timeDisplay = document.querySelector('.date-time');
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(', ', ' - ');
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);