// =====================================
// JOSIWEB - WEBSITE INTERACTIONS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

        // Close menu after selecting a navigation link

        const navigationLinks = document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";

            });

        });

    }

    // CONTACT FORM

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Collect visitor information

            const name = document.getElementById("client-name").value.trim();

            const email = document.getElementById("client-email").value.trim();

            const phone = document.getElementById("client-phone").value.trim();

            const service = document.getElementById("service-type").value;

            const message = document.getElementById("project-message").value.trim();

            // Prepare email content

            const subject = encodeURIComponent(
                "New JOSIWEB Project Enquiry - " + name
            );

            const body = encodeURIComponent(
                "NEW JOSIWEB PROJECT ENQUIRY\n\n" +
                "Client Name: " + name + "\n" +
                "Client Email: " + email + "\n" +
                "Phone Number: " + (phone || "Not provided") + "\n" +
                "Service Required: " + service + "\n\n" +
                "PROJECT DESCRIPTION:\n" +
                message
            );

            // Open the visitor's email application

            const recipient = "josiahlynton04@gmail.com";

            const emailLink =
                "mailto:" + recipient +
                "?subject=" + subject +
                "&body=" + body;

            window.location.href = emailLink;

        });

    }

    console.log("JOSIWEB website is running successfully!");

});