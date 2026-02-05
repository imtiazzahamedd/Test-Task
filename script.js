// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});
function time() {
    const date = new Date();
    document.getElementById("datetime").innerHTML = date.toLocaleString();
}
time()
setInterval(time, 1000);

function send() {
    event.preventDefault();
    Swal.fire({
        title: "Message Sent Successfully!",
        icon: "success",
        draggable: true
    });
}