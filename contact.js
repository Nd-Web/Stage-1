document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMessage = document.getElementById("successMessage");

  let isValid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (name.value.trim() === "") {
    document.getElementById("error-name").textContent = "Full name is required.";
    isValid = false;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value.trim())) {
    document.getElementById("error-email").textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (subject.value.trim() === "") {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (isValid) {
    successMessage.hidden = false;
    this.reset();
  } else {
    successMessage.hidden = true;
  }
});
