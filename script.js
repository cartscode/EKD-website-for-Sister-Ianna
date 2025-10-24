const verses = [
  `"The grass withers, the flower fades, but the word of our God will stand forever." – Isaiah 40:8`,
  `"Consider how the wild flowers grow. They do not labor or spin. Yet I tell you, not even Solomon in all his splendor was dressed like one of these." – Luke 12:27`,
  `"I am the rose of Sharon, and the lily of the valleys." – Song of Solomon 2:1`,
  `"Let all that you do be done in love." – 1 Corinthians 16:14`,
  `"He has made everything beautiful in its time." – Ecclesiastes 3:11"`
];

let index = 0;
const verseElement = document.getElementById("verse");

setInterval(() => {
  verseElement.classList.add("fade");
  setTimeout(() => {
    index = (index + 1) % verses.length;
    verseElement.textContent = verses[index];
    verseElement.classList.remove("fade");
  }, 2000); // fade duration
}, 10000); // change every 10 seconds
  
document.getElementById("gallery-btn").addEventListener("click", () => {
  window.location.href = "gallery.html"; // Replace with your actual gallery page
});
