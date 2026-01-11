function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active");
  for (const btn of activeButtons) {
    btn.classList.remove("active");
  }
}

function removeData() {
  document.getElementById("remove").classList.add("hidden");
}
function addData() {
  document.getElementById("add").classList.remove("hidden");
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
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      const clickBtn = document.getElementById(`btn-${id}`);
      clickBtn.classList.add("active");
      removeData();
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

function displayBtnData(details) {
  //   console.log(details);
  const detailsCard = document.getElementById("allBtnDetail");
  detailsCard.innerHTML = "";

  if (details == "") {
    document.getElementById("no-data").classList.remove("hidden");
    detailsCard.innerHTML = "";
    return;
  } else {
    document.getElementById("no-data").classList.add("hidden");
  }

  for (const detail of details) {
    console.log(detail);
    //

    // console.log(detail);
    const card = document.createElement("div");
    card.innerHTML = `
        <div class=" rounded-lg border-2 bg-white ">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-black">${detail.word}</h2>
                <p class="text-black">Meaning /Pronounciation</p>
                <h2 class="text-2xl text-black">${detail.meaning}</h2>
                <div class="flex justify-between w-11/12 cursor-pointer">
                    <i class="fa-solid fa-circle-info "></i>
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
buttonData();
