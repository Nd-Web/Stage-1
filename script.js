document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const successMsg = document.getElementById("success");

  // Clear old errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  successMsg.hidden = true;

  if (!name.value.trim()) {
    document.getElementById("error-name").textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value.trim())) {
    document.getElementById("error-email").textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (!subject.value.trim()) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    isValid = false;
  }

  if (message.value
    .trim().length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    isValid = false;
  }         