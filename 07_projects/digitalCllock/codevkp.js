function updateClock() {
    const timeNow = new Date();
    const hour = timeNow.getHours().toString().padStart(2,0);
    const minutes = timeNow.getMinutes().toString().padStart(2,0);
    const seconds = timeNow.getSeconds().toString().padStart(2,0);
  
    document.getElementById('clock').textContent = `${hour}:${minutes}:${seconds}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock()
  
  