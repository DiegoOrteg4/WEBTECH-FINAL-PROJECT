document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("contactForm");
      const message = document.getElementById("formMessage");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const userMessage = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (fullName === "" || email === "" || userMessage === "") {
          message.textContent = "Please complete all fields.";
          message.className = "mt-4 text-center font-bold text-red-600";
          return;
        }

        if (!emailPattern.test(email)) {
          message.textContent = "Please enter a valid email address.";
          message.className = "mt-4 text-center font-bold text-red-600";
          return;
        }

        message.textContent = "Message sent successfully!";
        message.className = "mt-4 text-center font-bold text-green-600";

        form.reset();
      });
    });