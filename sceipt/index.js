function wordDetails(id) {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordDetails(data.data));
}

function hiddenClass() {
  document.getElementById("remove").classList.add("hidden");
}

function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (const btn of activeButtons) {
    btn.classList.remove("active");
  }
}

function showLearnBtn() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((response) => response.json())
    .then((data) => displayLearnBtn(data.data));
}

function buttonData() {
  fetch("https://openapi.programming-hero.com/api/level/5")
    .then((res) => res.json())
    .then((data) => {
      loadBtnData(data.data);
    });
}

function loadBtnData(id) {
  //   console.log(id);
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  removeActiveClass();
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const clickBtn = document.getElementById(`btn-${id}`);
      if (clickBtn) {
        clickBtn.classList.add("active");
      }
      displayBtnData(data.data);
    });
}

// {
//     "id": 101,
//     "level_no": 1,
//     "lessonName": "Basic Vocabulary"
// }

// {
//     "id": 4,
//     "level": 5,
//     "word": "Diligent",
//     "meaning": "পরিশ্রমী",
//     "pronunciation": "ডিলিজেন্ট"
// }

// {
//     "word": "Eager",
//     "meaning": "আগ্রহী",
//     "pronunciation": "ইগার",
//     "level": 1,
//     "sentence": "The kids were eager to open their gifts.",
//     "points": 1,
//     "partsOfSpeech": "adjective",
//     "synonyms": [
//         "enthusiastic",
//         "excited",
//         "keen"
//     ],
//     "id": 5
// }

function displayWordDetails(detailsId) {
  // console.log(detailsId);
  document.getElementById("card_details").showModal();
  const detailContainer = document.getElementById("card-container");
  detailContainer.innerHTML = `
<div class="card-body space-y-2">
   <div>
      <h2 class="card-title text-2xl font-bold">${detailsId.word}  (${detailsId.pronunciation})</h2>
   </div>
   <div>
      <h2 class="card-title ">Meaning</h2>
      <h2 class="card-title ">${detailsId.meaning}</h2>
   </div>
   <div>
      <h2 class="card-title ">Example</h2>
      <h2 class="card-title ">${detailsId.sentence}</h2>
   </div>
   <div>
      <h2 class="card-title ">সমার্থক শব্দ গুলো</h2>
      <button class="btn">${detailsId.synonyms}</button>
   </div>
</div>
`;
}

function displayBtnData(details) {
  // console.log(details);
  hiddenClass();
  const detailsCard = document.getElementById("allBtnDetail");
  detailsCard.innerHTML = "";
  if (details.length === 0) {
    document.getElementById("no-data").classList.remove("hidden");
    return;
  } else {
    document.getElementById("no-data").classList.add("hidden");
  }
  for (const detail of details) {
    // console.log(detail);
    const card = document.createElement("div");
    card.innerHTML = `
            <div class=" rounded-lg border-2 bg-white ">
                <div class="card-body items-center text-center">
                      <h2 class="card-title text-black">${detail.word}</h2>
                      <p class="text-black">Meaning /Pronounciation</p>
                      <h2 class="text-2xl text-black">${detail.meaning}</h2>

                      <div class="flex justify-between w-11/12 cursor-pointer">
                        <i id="btn-${detail.level}" onclick="wordDetails(${detail.id})" class="fa-solid fa-circle-info "></i>
                        <i class="fa-solid fa-volume-high"></i>
                      </div>
                </div>
            </div>
        `;

    detailsCard.append(card);
  }
}

function displayLearnBtn(LearnButtons) {
  //   console.log(allLearnButton);
  const learnContainer = document.getElementById("learn-Btns");
  for (const button of LearnButtons) {
    // console.log(button);
    const buttonDiv = document.createElement("div");
    buttonDiv.innerHTML = `
    <button id="btn-${button.level_no}" onclick="loadBtnData(${button.level_no})" class="btn btn-sm hover:bg-blue-700 border font-semibold border-[#422AD5] text-[#422AD5] hover:text-white">${button.lessonName}</button>
    `;
    learnContainer.append(buttonDiv);
  }
}

showLearnBtn();
// buttonData();
// wordDetails();
