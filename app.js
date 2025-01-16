document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("contact-form").reset();

    document.getElementById("popup").style.display = "flex";
  });

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
