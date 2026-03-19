// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

// Image Click Zoom
function enlargeImage(img) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
