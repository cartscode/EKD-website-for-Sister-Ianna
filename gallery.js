// Lightbox functionality
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Back to Home button
document.getElementById("home-btn").addEventListener("click", () => {
  window.location.href = "index.html";
});

  // Back to homepage
  document.getElementById("home-btn").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  // Popup image logic
  const popup = document.getElementById("image-popup");
  const popupImg = document.getElementById("popup-img");
  const closePopup = document.getElementById("close-popup");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      popup.style.display = "flex";
      popupImg.src = img.src;
    });
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });

