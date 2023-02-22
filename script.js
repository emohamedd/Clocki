    setInterval(() => {
        let currentDate = new Date();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let time = document.getElementById("time");
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        time.textContent = hours + ':' + minutes + ':' + seconds;
    }, 1000);