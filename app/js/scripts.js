var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(type) {
  makeInactive();
  var tabToActivate = document.querySelector(`a[href="#${type}"]`)
  console.log('WHEW', tabToActivate);
  tabToActivate.classList.add('active');
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  for (var item of data) {
    if (item.section === type) {
      // contentPara.innerHTML = item.story
      contentPara.innerHTML = `<h2>${item.section}</h2> <p>${item.story}</p>`;
      setActiveTabAccordingToHash(type);
    }
  }
}

function initializePage() {
    // set some defaults if there is no hash
    if (!window.location.hash) {
      window.location.hash = "cuisines";
      document.querySelector('[href="#cuisines"]').classList.add("active");
    } else {
      // if there is a hash set the active tab accordingly
      document
        .querySelector(`[href="${window.location.hash}"]`)
        .classList.add("active");
    }
    setContentAccordingToHash();
}

// document.addEventListener("click", makeActive);
document.addEventListener("DOMContentLoaded", initializePage);

