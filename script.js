// Simple placeholder JS for interactivity or future use

// Example: Alert when "More Information" is clicked
document.addEventListener("DOMContentLoaded", () => {
  const infoBtn = document.querySelector(".info-btn");
  if (infoBtn) {
    infoBtn.addEventListener("click", () => {
      alert("More information coming soon!");
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
