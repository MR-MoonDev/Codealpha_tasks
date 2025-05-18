document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_9ds6te2", "template_u942qcy", this)
        .then(function () {
          document.querySelector(".pl").style.display = "block";
          alert("Message sent successfully!");
          form.reset();
        }, function (error) {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again.");
        });
    });
  }
});
