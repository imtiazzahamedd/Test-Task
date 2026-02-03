function time(){
    const date = new Date();
    document.getElementById("datetime").innerHTML = date.toLocaleString();
}
time()
setInterval(time, 1000);