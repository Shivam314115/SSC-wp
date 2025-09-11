// Launch progress calculation
const totalDays = 50;  // total days until launch
const passedDays = 25; // days already passed

const progressPercent = Math.min((passedDays / totalDays) * 100, 100);
document.getElementById("progress-fill").style.width = progressPercent + "%";
