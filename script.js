let currentSubject = "";
let currentLink = "";

// Tampilkan popup token
function showTokenPopup(subject, link) {
    currentSubject = subject;
    currentLink = link;
    document.getElementById("popupTitle").innerText = `Token ${subject}`;
    document.getElementById("tokenInput").value = "";
    document.getElementById("errorMsg").style.display = "none";
    document.getElementById("tokenPopup").style.display = "flex";
}

// Tutup popup
function closePopup() {
    document.getElementById("tokenPopup").style.display = "none";
}

// Cek token (contoh token: "123456")
function checkToken() {
    const tokenInput = document.getElementById("tokenInput").value;
    const errorMsg = document.getElementById("errorMsg");

    // Ganti "123456" dengan token yang diinginkan
    if (tokenInput === "123456") {
        window.location.href = currentLink;
    } else {
        errorMsg.style.display = "block";
    }
}

// Tutup popup jika klik di luar area popup
window.onclick = function(event) {
    const popup = document.getElementById("tokenPopup");
    if (event.target === popup) {
        closePopup();
    }
};