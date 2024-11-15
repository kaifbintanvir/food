// Animation for the header links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("header ul li a");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.1)";
      link.style.transition = "transform 0.2s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "scale(1)";
    });
  });
});
