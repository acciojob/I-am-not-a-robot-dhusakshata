document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  const verifyButton = document.getElementById("verify");
  const resetButton = document.getElementById("reset");
  const para = document.getElementById("para");
  const h = document.getElementById("h");

  let selectedImages = [];
  let state = 1;

  // Helper function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Helper function to reset the game
  function resetGame() {
    selectedImages = [];
    state = 1;
    verifyButton.style.display = "none";
    resetButton.style.display = "none";
    para.style.display = "none";
    images.forEach((img) => {
      img.classList.remove("selected");
    });
    h.innerText = "Please click on the identical tiles to verify that you are not a robot.";
  }

  // Helper function to handle image clicks
  function handleImageClick(event) {
    const clickedImage = event.target;
    if (selectedImages.length < 2 && !selectedImages.includes(clickedImage)) {
      selectedImages.push(clickedImage);
      clickedImage.classList.add("selected");
      if (selectedImages.length === 2) {
        verifyButton.style.display = "block";
        resetButton.style.display = "block";
       
