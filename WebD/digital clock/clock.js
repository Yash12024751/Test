
        function updateClock() {
            let now = new Date();
            let hrs = now.getHours().toString().padStart(2, '0');
            let min = now.getMinutes().toString().padStart(2, '0');
            let sec = now.getSeconds().toString().padStart(2, '0');
            document.getElementById('clock').textContent = `${hrs}:${min}:${sec}`;
        }
        setInterval(updateClock, 1000);
        updateClock();
  