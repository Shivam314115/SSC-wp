
const startDate = new Date("2025-09-01"); 
const endDate = new Date("2025-12-31");

const progressFill = document.getElementById("progress-fill");
const progressContainer = document.querySelector(".progress-bar-container");

function daysBetween(date1, date2) {
  return Math.ceil((date2 - date1) / (1000 * 60 * 60 * 24));
}

const totalDays = daysBetween(startDate, endDate);
const today = new Date();
let daysPassed = daysBetween(startDate, today);

if (daysPassed < 0) daysPassed = 0;
if (daysPassed > totalDays) daysPassed = totalDays;


let progressPercent = (daysPassed / totalDays) * 100;


function updateProgress() {
  if (progressFill) {
    progressFill.style.width = progressPercent + "%";
  }


  if (progressContainer) {
    progressContainer.setAttribute("aria-valuenow", Math.round(progressPercent));
  }
}

updateProgress();
