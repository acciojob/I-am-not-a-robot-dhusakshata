//your code here
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
        state = 3;
      }
    }
  }

  // Helper function to handle verify button click
  function handleVerifyClick() {
    if (selectedImages.length === 2) {
      if (selectedImages[0].classList.contains(selectedImages[1].classList[1])) {
        para.innerText = "You are a human. Congratulations!";
      } else {
        para.innerText = "We can't verify you as a human. You selected the non-identical tiles.";
      }
      para.style.display = "block";
      verifyButton.style.display = "none";
      state = 4;
    }
  }

  // Attach click event listeners to images
  images.forEach((img) => {
    img.addEventListener("click", handleImageClick);
  });

  // Attach click event listener to verify button
  verifyButton.addEventListener("click", handleVerifyClick);

  // Attach click event listener to reset button
  resetButton.addEventListener("click", resetGame);

  // Initial shuffle of images
  shuffleArray(images);
  const repeatIndex = Math.floor(Math.random() * 5);
  images[5].classList = images[repeatIndex].classList;

  // Initial state
  resetGame();
});
