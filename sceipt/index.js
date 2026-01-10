function showLearnBtn() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => displayLearnBtn(data.data));
}

// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

function displayLearnBtn(LearnButtons) {
  //   console.log(allLearnButton);
  const learnContainer = document.getElementById("learn-Btns");
  for (const button of LearnButtons) {
    // console.log(button);
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-blue-700 border font-semibold border-[#422AD5] text-[#422AD5] hover:text-white">${button.lessonName}</button>
    `;
    learnContainer.append(buttonDiv);
  }
}

showLearnBtn();
